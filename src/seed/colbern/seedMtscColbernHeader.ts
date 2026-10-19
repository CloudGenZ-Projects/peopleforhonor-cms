import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscColbernHeader() {
  console.log('Seeding MtscColbernHeader Global into PostgreSQL with Port Colborne Brief Data...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtsc-colbern-header' as any,
    data: {
      header_logo: null,
      brand_title: 'PORT COLBORNE',
      brand_subtitle: 'Mission to Seafarers',
      nav_items: [
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
        { label: 'Seafarer Support', to: '/support' },
        { label: 'Get Involved', to: '/get-involved' },
        { label: 'Contact', to: '/contact' },
        { label: 'Events', to: '/events' },
      ],
      parcel_btn_label_full: 'Request a Ship Visit',
      parcel_btn_label_short: 'Ship Visit',
      parcel_btn_link: '/contact?type=ship-visit',
      prayer_btn_label: 'Contact a Chaplain',
      prayer_btn_link: '/contact',
      donate_btn_label: 'Donate',
      donate_dialog_title: 'Support Mission to Seafarers Port Colborne',
      donate_iframe_url: 'https://www.mtsso.org/support-us',
    },
  })

  console.log('✅ MtscColbernHeader seeded successfully with Port Colborne Brief Data!')
  process.exit(0)
}

seedMtscColbernHeader().catch((err) => {
  console.error('❌ Failed to seed MtscColbernHeader:', err)
  process.exit(1)
})
