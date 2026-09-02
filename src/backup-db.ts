import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import os from 'os'
import { execSync } from 'child_process'

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

  // 1. Target directory: /root/cms_backup or ~/cms_backup
  const homeBackupDir = path.join(os.homedir(), 'cms_backup')
  const backupDir = process.env.BACKUP_DIR || (fs.existsSync('/root') ? '/root/cms_backup' : homeBackupDir)

  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true })
  }

  // 2. Generate timestamped filename: DB_backup_YYYY-MM-DD_HH-mm_peopleforhonor.sql.gz
  const now = new Date()
  const dateStr = now.toISOString().split('T')[0] // YYYY-MM-DD
  const timeStr = `${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}`
  const sqlBackupFileName = `DB_backup_${dateStr}_${timeStr}_peopleforhonor.sql.gz`
  const sqlBackupFilePath = path.join(backupDir, sqlBackupFileName)

  try {
    console.log('🐘 Generating native PostgreSQL .sql.gz dump using pg_dump...')
    execSync(`pg_dump "${dbUri}" | gzip > "${sqlBackupFilePath}"`, { stdio: 'pipe' })

    const sqlStat = fs.statSync(sqlBackupFilePath)
    console.log(`\n======================================================`)
    console.log(`✅ SUCCESS! PostgreSQL .sql.gz Backup saved to:`)
    console.log(`   ${sqlBackupFilePath} (${(sqlStat.size / 1024).toFixed(2)} KB)`)
  } catch (pgErr) {
    console.error('❌ Error generating PostgreSQL .sql.gz backup:', pgErr)
    process.exit(1)
  }

  // 3. Prune backups older than 7 days
  try {
    const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000
    const existingBackups = fs.readdirSync(backupDir)
    let purgedCount = 0

    for (const file of existingBackups) {
      const filePath = path.join(backupDir, file)
      const stat = fs.statSync(filePath)
      if (stat.isFile() && stat.mtimeMs < sevenDaysAgo) {
        fs.unlinkSync(filePath)
        purgedCount++
      }
    }

    if (purgedCount > 0) {
      console.log(`🧹 Cleaned up ${purgedCount} backup file(s) older than 7 days.`)
    }
  } catch (cleanErr) {
    console.warn('⚠️ Warning: Failed to clean old backups:', cleanErr)
  }

  console.log(`======================================================\n`)
  process.exit(0)
}

backupDatabase()
