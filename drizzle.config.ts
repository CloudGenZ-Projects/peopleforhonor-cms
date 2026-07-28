import { defineConfig } from 'drizzle-kit'
import { config } from 'dotenv'

// Load .env or .env.production or .env.local automatically
config({ path: '.env' })
config({ path: '.env.production' })
config({ path: '.env.local' })

export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URI || '',
  },
})
