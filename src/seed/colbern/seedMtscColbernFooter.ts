import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscColbernFooter() {
  console.log('Seeding MtscColbernFooter Global into PostgreSQL with Port Colborne Brief Data...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtsc-colbern-footer' as any,
    data: {
      footer_logo: null,
      brand_title: 'Mission to Seafarers',
      brand_subtitle: 'PORT COLBORNE',
      about_text:
        'A local presence along the Welland Canal, connecting seafarers with welcome, practical care and a wider community of support.',
      explore_title: 'Explore',
      nav_links: [
        { label: 'About', href: '/about' },
        { label: 'Seafarer Support', href: '/support' },
        { label: 'Get Involved', href: '/get-involved' },
        { label: 'Contact', href: '/contact' },
        { label: 'Events', href: '/events' },
      ],
      station_col_title: 'Local Contact',
      location_text: 'Deacon Annette Hoare · +1 905-328-0300',
      email: 'revannette@caecc.ca',
      national_col_title: 'Connected Care',
      national_text:
        'Part of Mission to Seafarers Southern Ontario, connected with Mission to Seafarers Canada and the international Mission.',
      copyright_text:
        '© Mission to Seafarers Port Colborne · Southern Ontario. All rights reserved.',
      bottom_subtext:
        'Serving seafarers along the Welland Canal and Great Lakes waterways.',
    },
  })

  console.log('✅ MtscColbernFooter seeded successfully with Port Colborne Brief Data!')
  process.exit(0)
}

seedMtscColbernFooter().catch((err) => {
  console.error('❌ Failed to seed MtscColbernFooter:', err)
  process.exit(1)
})
