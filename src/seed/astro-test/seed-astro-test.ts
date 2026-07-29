import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seed() {
  console.log('Seeding AstroTestPage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'astro-test-page' as any,
    data: {
      test_heading: 'Astro Test',
    },
  })

  console.log('✅ Astro Test Page seeded successfully!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err?.message || err)
  process.exit(1)
})
