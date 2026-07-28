import dotenv from 'dotenv'

// Load .env FIRST before anything else
dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function sync() {
  console.log('Syncing PostgreSQL database tables...')
  const dbUri = process.env.DATABASE_URI || ''
  if (!dbUri) {
    console.error('Error: DATABASE_URI is missing in .env file!')
    process.exit(1)
  }

  const maskedUri = dbUri.replace(/:([^:@]+)@/, ':****@')
  console.log('Connecting to:', maskedUri)

  // Dynamic import AFTER dotenv has loaded - this is critical!
  const { getPayload } = await import('payload')
  const { default: config } = await import('./payload.config')

  const payload = await getPayload({ config })
  console.log('PostgreSQL database tables created successfully!')
  process.exit(0)
}

sync().catch((err) => {
  console.error('Failed to sync database:', err?.message || err)
  process.exit(1)
})
