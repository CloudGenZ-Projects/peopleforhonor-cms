import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// Ensure .env is loaded before Payload initialization
dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

import { getPayload } from 'payload'
import config from './payload.config'

async function sync() {
  console.log('🚀 Syncing PostgreSQL database tables...')
  if (!process.env.DATABASE_URI) {
    console.error('❌ Error: DATABASE_URI is missing in .env file!')
    process.exit(1)
  }
  const payload = await getPayload({ config })
  console.log('✅ PostgreSQL database tables created successfully!')
  process.exit(0)
}

sync().catch((err) => {
  console.error('❌ Failed to sync database:', err)
  process.exit(1)
})
