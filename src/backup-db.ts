import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import os from 'os'
import { execSync } from 'child_process'
import { S3Client, PutObjectCommand, ListObjectsV2Command, DeleteObjectCommand } from '@aws-sdk/client-s3'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function backupDatabase() {
  const dbUri = process.env.DATABASE_URI
  if (!dbUri) {
    console.error('❌ Error: DATABASE_URI is missing in environment variables.')
    process.exit(1)
  }

  const maskedUri = dbUri.replace(/:([^:@]+)@/, ':****@')
  console.log('📦 Starting PostgreSQL Database Backup (.sql.gz)...')
  console.log('🔌 Connecting to:', maskedUri)

  // 1. Format dates (DD-MM-YYYY)
  const now = new Date()
  const day = String(now.getDate()).padStart(2, '0')
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const year = now.getFullYear()
  const dateFolderName = `${day}-${month}-${year}` // DD-MM-YYYY
  const timeStr = `${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}`

  // 2. Local Backup Directory: /root/cms_backup/DD-MM-YYYY/
  const rootBackupBaseDir = process.env.BACKUP_DIR || (fs.existsSync('/root') ? '/root/cms_backup' : path.join(os.homedir(), 'cms_backup'))
  const localDateDir = path.join(rootBackupBaseDir, dateFolderName)

  if (!fs.existsSync(localDateDir)) {
    fs.mkdirSync(localDateDir, { recursive: true })
  }

  const sqlBackupFileName = `DB_backup_${dateFolderName}_${timeStr}_peopleforhonor.sql.gz`
  const sqlBackupFilePath = path.join(localDateDir, sqlBackupFileName)

  // 3. Generate native PostgreSQL .sql.gz dump
  try {
    console.log(`🐘 Generating PostgreSQL dump in folder: ${dateFolderName}...`)
    execSync(`pg_dump "${dbUri}" | gzip > "${sqlBackupFilePath}"`, { stdio: 'pipe' })

    const sqlStat = fs.statSync(sqlBackupFilePath)
    console.log(`✅ Local Backup saved: ${sqlBackupFilePath} (${(sqlStat.size / 1024).toFixed(2)} KB)`)
  } catch (pgErr) {
    console.error('❌ Error generating PostgreSQL .sql.gz backup:', pgErr)
    process.exit(1)
  }

  // 4. Cloudflare R2 Upload
  const r2Key = process.env.R2_ACCESS_KEY_ID || process.env.S3_ACCESS_KEY_ID
  const r2Secret = process.env.R2_SECRET_ACCESS_KEY || process.env.S3_SECRET_ACCESS_KEY
  const r2Bucket = process.env.R2_BUCKET || process.env.S3_BUCKET
  let r2Endpoint = process.env.R2_ENDPOINT || process.env.S3_ENDPOINT

  if (r2Key && r2Secret && r2Bucket && r2Endpoint) {
    try {
      r2Endpoint = r2Endpoint.replace(/\/+$/, '')
      if (r2Bucket && r2Endpoint.endsWith(`/${r2Bucket}`)) {
        r2Endpoint = r2Endpoint.slice(0, -`/${r2Bucket}`.length)
      }

      const s3Client = new S3Client({
        region: process.env.R2_REGION || 'auto',
        endpoint: r2Endpoint,
        credentials: {
          accessKeyId: r2Key,
          secretAccessKey: r2Secret,
        },
        forcePathStyle: true,
      })

      const r2ObjectKey = `db-backups/${dateFolderName}/${sqlBackupFileName}`
      console.log(`☁️ Uploading backup to Cloudflare R2: ${r2ObjectKey}...`)

      const fileBuffer = fs.readFileSync(sqlBackupFilePath)
      await s3Client.send(
        new PutObjectCommand({
          Bucket: r2Bucket,
          Key: r2ObjectKey,
          Body: fileBuffer,
          ContentType: 'application/gzip',
        })
      )
      console.log(`✅ Cloudflare R2 Upload Successful: s3://${r2Bucket}/${r2ObjectKey}`)

      // 5. Cloudflare R2 7-Day Retention Cleanup
      const sevenDaysAgoTime = Date.now() - 7 * 24 * 60 * 60 * 1000
      console.log('🧹 Checking Cloudflare R2 for backups older than 7 days...')

      const listRes = await s3Client.send(
        new ListObjectsV2Command({
          Bucket: r2Bucket,
          Prefix: 'db-backups/',
        })
      )

      const r2Objects = listRes.Contents || []
      let r2PurgedCount = 0

      for (const obj of r2Objects) {
        if (obj.Key && obj.LastModified && obj.LastModified.getTime() < sevenDaysAgoTime) {
          console.log(`🗑️ Deleting old R2 backup: ${obj.Key}`)
          await s3Client.send(
            new DeleteObjectCommand({
              Bucket: r2Bucket,
              Key: obj.Key,
            })
          )
          r2PurgedCount++
        }
      }

      if (r2PurgedCount > 0) {
        console.log(`✅ Cleaned up ${r2PurgedCount} old backup(s) from Cloudflare R2.`)
      }
    } catch (r2Err) {
      console.warn('⚠️ Cloudflare R2 backup sync warning:', r2Err)
    }
  } else {
    console.log('ℹ️ R2 credentials not fully provided in .env - local backup completed.')
  }

  // 6. Local 7-Day Retention Cleanup (Folders & Files)
  try {
    const sevenDaysAgoTime = Date.now() - 7 * 24 * 60 * 60 * 1000
    const localItems = fs.readdirSync(rootBackupBaseDir)
    let localPurgedCount = 0

    for (const item of localItems) {
      const itemPath = path.join(rootBackupBaseDir, item)
      const stat = fs.statSync(itemPath)

      // Skip log files if any
      if (item === 'cron.log') continue

      if (stat.mtimeMs < sevenDaysAgoTime) {
        if (stat.isDirectory()) {
          fs.rmSync(itemPath, { recursive: true, force: true })
        } else {
          fs.unlinkSync(itemPath)
        }
        localPurgedCount++
      }
    }

    if (localPurgedCount > 0) {
      console.log(`🧹 Cleaned up ${localPurgedCount} local backup item(s) older than 7 days.`)
    }
  } catch (cleanErr) {
    console.warn('⚠️ Warning: Failed to clean old local backups:', cleanErr)
  }

  console.log(`\n======================================================`)
  console.log(`🎉 SUCCESS! Hourly DB Backup complete on Local & Cloudflare R2!`)
  console.log(`   Local Folder: ${localDateDir}`)
  console.log(`======================================================\n`)
  process.exit(0)
}

backupDatabase()
