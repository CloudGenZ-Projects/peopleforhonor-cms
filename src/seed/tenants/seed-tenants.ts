import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedTenants() {
  console.log('Seeding Tenants collection into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  // 1. Tenant: People For Honor
  const pfhExisting = await payload.find({
    collection: 'tenants' as any,
    where: { slug: { equals: 'peopleforhonor' } },
  })

  if (pfhExisting.docs.length === 0) {
    await payload.create({
      collection: 'tenants' as any,
      data: {
        name: 'People For Honor',
        slug: 'peopleforhonor',
        domain: 'pfh-cms.cloudgenz.com',
      },
    })
    console.log('✅ Created Tenant: People For Honor')
  }

  // 2. Tenant: MTSC Halifax
  const mtscExisting = await payload.find({
    collection: 'tenants' as any,
    where: { slug: { equals: 'mtsc' } },
  })

  if (mtscExisting.docs.length === 0) {
    await payload.create({
      collection: 'tenants' as any,
      data: {
        name: 'MTSC Halifax',
        slug: 'mtsc',
        domain: 'mtsc-halifax-cms.cloudgenz.com',
      },
    })
    console.log('✅ Created Tenant: MTSC Halifax')
  }

  console.log('🎉 Tenants seeded successfully!')
  process.exit(0)
}

seedTenants().catch((err) => {
  console.error('❌ Failed to seed tenants:', err?.message || err)
  process.exit(1)
})
