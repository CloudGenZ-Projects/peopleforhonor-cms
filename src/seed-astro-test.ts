import payload from 'payload'
import config from './payload.config'

const seed = async () => {
  await payload.init({ config })

  await payload.updateGlobal({
    slug: 'astro-test-page',
    data: {
      test_heading: 'Astro Test',
    },
  })

  console.log('✅ Astro Test Page seeded successfully!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err)
  process.exit(1)
})
