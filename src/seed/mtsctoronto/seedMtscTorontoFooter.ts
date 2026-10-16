import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscTorontoFooter() {
  console.log('Seeding MtscTorontoFooter Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtsc-toronto-footer' as any,
    data: {
      // TAB 1: BRAND
      footer_logo: null,
      brand_title: 'Mission to Seafarers',
      brand_subtitle: 'Toronto',
      about_text:
        'A local presence at the Port of Toronto. Part of Mission to Seafarers Canada and the global network in 200+ ports.',

      // TAB 2: EXPLORE LINKS
      explore_title: 'Explore',
      nav_links: [
        { label: 'About', href: '/about' },
        { label: 'Seafarer Support', href: '/support' },
        { label: 'Get Involved', href: '/get-involved' },
        { label: 'Contact', href: '/contact' },
      ],

      // TAB 3: STATION & NATIONAL
      station_col_title: 'Toronto Station',
      location_text: 'Port of Toronto, ON',
      email: 'glutenfreepriest@gmail.com',
      national_col_title: 'National Office',
      national_text:
        'Major gifts, corporate partnerships are managed through Mission to Seafarers Canada.',

      // TAB 4: BOTTOM
      copyright_text: 'Mission to Seafarers Toronto. All rights reserved.',
      bottom_subtext:
        'Toronto station of Mission to Seafarers Southern Ontario · Part of Mission to Seafarers Canada',
    },
  })

  console.log('✅ MtscTorontoFooter Global seeded successfully!')
  process.exit(0)
}

seedMtscTorontoFooter().catch((err) => {
  console.error('❌ Error seeding MtscTorontoFooter:', err)
  process.exit(1)
})