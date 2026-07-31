import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

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
  console.log('📦 Starting Full PostgreSQL Database Backup...')
  console.log('🔌 Connecting to:', maskedUri)

  try {
    const { getPayload } = await import('payload')
    const { default: config } = await import('./payload.config')

    const payload = await getPayload({ config })
    const adapter: any = payload.db

    // 1. Fetch all table names in public schema
    let tables: string[] = []
    
    if (adapter?.pool?.query) {
      const res = await adapter.pool.query(`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' 
          AND table_type = 'BASE TABLE';
      `)
      tables = res.rows.map((row: any) => row.table_name)
    } else {
      console.error('❌ Database pool connection unavailable.')
      process.exit(1)
    }

    console.log(`🔍 Found ${tables.length} tables to backup:`, tables.join(', '))

    const backupData: Record<string, any[]> = {}

    // 2. Export row data for each table
    for (const table of tables) {
      const res = await adapter.pool.query(`SELECT * FROM "${table}";`)
      backupData[table] = res.rows
    }

    // 3. Generate timestamped JSON filename matching DB_backup format
    const now = new Date()
    const day = now.getDate()
    const month = now.getMonth() + 1
    const year = String(now.getFullYear()).slice(-2)
    const backupFileName = `DB_backup_${day}-${month}-${year}_peopleforhonor_done.json`
    const backupFilePath = path.join(process.cwd(), backupFileName)

    fs.writeFileSync(backupFilePath, JSON.stringify(backupData, null, 2), 'utf-8')

    console.log(`\n======================================================`)
    console.log(`✅ SUCCESS! Full DB Backup saved to:`)
    console.log(`   ${backupFilePath}`)
    console.log(`📊 Total Tables Backed Up: ${Object.keys(backupData).length}`)
    console.log(`======================================================\n`)
    process.exit(0)
  } catch (error) {
    console.error('❌ Error creating DB backup:', error)
    process.exit(1)
  }
}

backupDatabase()
