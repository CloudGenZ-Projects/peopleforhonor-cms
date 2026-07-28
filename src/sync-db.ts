import { getPayload } from 'payload'
import config from './payload.config'

async function sync() {
  console.log('🚀 Syncing PostgreSQL database tables...')
  const payload = await getPayload({ config })
  console.log('✅ PostgreSQL database tables created successfully!')
  process.exit(0)
}

sync().catch((err) => {
  console.error('❌ Failed to sync database:', err)
  process.exit(1)
})
