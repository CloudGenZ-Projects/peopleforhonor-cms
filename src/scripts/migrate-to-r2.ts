import { S3Client, PutObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

function getMimeType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase()
  switch (ext) {
    case '.png': return 'image/png'
    case '.jpg':
    case '.jpeg': return 'image/jpeg'
    case '.webp': return 'image/webp'
    case '.gif': return 'image/gif'
    case '.svg': return 'image/svg+xml'
    case '.pdf': return 'application/pdf'
    case '.mp4': return 'video/mp4'
    case '.webm': return 'video/webm'
    default: return 'application/octet-stream'
  }
}

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

const r2Key = process.env.R2_ACCESS_KEY_ID || process.env.S3_ACCESS_KEY_ID
const r2Secret = process.env.R2_SECRET_ACCESS_KEY || process.env.S3_SECRET_ACCESS_KEY
const r2Bucket = process.env.R2_BUCKET || process.env.S3_BUCKET
let r2Endpoint = process.env.R2_ENDPOINT || process.env.S3_ENDPOINT

if (!r2Key || !r2Secret || !r2Bucket || !r2Endpoint) {
  console.error('❌ Missing R2 credentials in .env!')
  process.exit(1)
}

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

// Target strictly /root/peopleforhonor-cms/uploads (or ./uploads)
const targetUploadsDir = fs.existsSync('/root/peopleforhonor-cms/uploads')
  ? '/root/peopleforhonor-cms/uploads'
  : path.resolve(process.cwd(), 'uploads')

async function migrate() {
  if (!targetUploadsDir) {
    console.error('❌ Could not find uploads directory! Expected at: /root/peopleforhonor-cms/uploads')
    process.exit(1)
  }

  console.log(`📁 Scanning local uploads directory: ${targetUploadsDir}`)
  const files = fs.readdirSync(targetUploadsDir)
  const totalFiles = files.length

  console.log(`📊 Found ${totalFiles} total files to migrate to Cloudflare R2...`)

  let successCount = 0
  let skippedCount = 0
  let errorCount = 0

  for (let i = 0; i < files.length; i++) {
    const filename = files[i]
    const filePath = path.join(targetUploadsDir, filename)

    // Skip subdirectories if any
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) continue

    try {
      // Check if file already exists in R2
      let existsInR2 = false
      try {
        await s3Client.send(
          new HeadObjectCommand({
            Bucket: r2Bucket,
            Key: filename,
          })
        )
        existsInR2 = true
      } catch (err) {
        existsInR2 = false
      }

      if (existsInR2) {
        console.log(`⏭️ [${i + 1}/${totalFiles}] Already in R2: ${filename}`)
        skippedCount++
        continue
      }

      const fileBuffer = fs.readFileSync(filePath)
      const contentType = getMimeType(filePath)

      console.log(`📤 [${i + 1}/${totalFiles}] Uploading to R2: ${filename} (${stat.size} bytes)...`)

      await s3Client.send(
        new PutObjectCommand({
          Bucket: r2Bucket,
          Key: filename,
          Body: fileBuffer,
          ContentType: contentType,
        })
      )

      successCount++
    } catch (err) {
      console.error(`❌ Failed to upload ${filename}:`, err)
      errorCount++
    }
  }

  console.log('\n=============================================')
  console.log('🎉 Migration Completed Summary:')
  console.log(`- Total Files: ${totalFiles}`)
  console.log(`- Uploaded: ${successCount}`)
  console.log(`- Already in R2 (Skipped): ${skippedCount}`)
  console.log(`- Errors: ${errorCount}`)
  console.log('=============================================\n')
}

migrate()
