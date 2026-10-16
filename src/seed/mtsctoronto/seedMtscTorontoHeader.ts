import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscTorontoHeader() {
  console.log('Seeding MtscTorontoHeader Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtsc-toronto-header' as any,
    data: {
      // TAB 1: BRANDING
      header_logo: null,
      brand_title: 'Mission to Seafarers',
      brand_subtitle: 'Toronto',

      // TAB 2: NAV ITEMS
      nav_items: [
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
        { label: 'Seafarer Support', to: '/support' },
        { label: 'Get Involved', to: '/get-involved' },
        { label: 'Contact', to: '/contact' },
        { label: 'Events', to: '/events' },
      ],

      // TAB 3: CTA BUTTONS
      parcel_btn_label_full: 'Seafarer Parcel Pickup Service',
      parcel_btn_label_short: 'Parcel Pickup',
      parcel_btn_link: 'https://parcelservice.mtsc.ca/',

      prayer_btn_label: 'Send a Prayer',
      prayer_btn_link: 'https://mtsc.ca/for-seafarers/prayer-wall/',

      donate_btn_label: 'Donate',
      donate_dialog_title: 'Secure Donation Form',
      donate_iframe_url: 'https://www.canadahelps.org/en/dn/145961',
    },
  })

  console.log('✅ MtscTorontoHeader Global seeded successfully!')
  process.exit(0)
}

seedMtscTorontoHeader().catch((err) => {
  console.error('❌ Error seeding MtscTorontoHeader:', err)
  process.exit(1)
})