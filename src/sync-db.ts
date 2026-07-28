import dotenv from 'dotenv'

// Ensure .env is loaded before Payload initialization
dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

import { getPayload } from 'payload'
import config from './payload.config'

async function sync() {
  console.log('Syncing PostgreSQL database tables...')
  const dbUri = process.env.DATABASE_URI || ''
  if (!dbUri) {
    console.error('Error: DATABASE_URI is missing in .env file!')
    process.exit(1)
  }
  
  // Safe debug: print DB URI format (hiding password)
  const maskedUri = dbUri.replace(/:([^:@]+)@/, ':****@')
  console.log(`Connecting to: ${maskedUri}`)

  const payload = await getPayload({ config })
  console.log('PostgreSQL database tables created successfully!')
  process.exit(0)
}

sync().catch((err) => {
  console.error('Failed to sync database:', err?.message || err)
  process.exit(1)
})
