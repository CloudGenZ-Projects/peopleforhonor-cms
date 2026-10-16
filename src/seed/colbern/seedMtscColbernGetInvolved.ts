import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscColbernGetInvolved() {
  console.log('Seeding MtscColbernGetInvolvedPage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtsc-colbern-get-involved-page' as any,
    data: {
      // TAB 1: HERO
      hero_badge_text: 'Get Involved',
      hero_title: 'Get Involved with Mission to Seafarers Toronto',
      hero_subtitle:
        'There are many ways to support and help create a welcoming place for seafarers arriving at the Port of Toronto. Whether you choose to volunteer, donate, provide in-kind support, or partner with us, your support helps ensure that seafarers feel cared for.',
      hero_bg_image: null,

      // TAB 2: FINANCIAL DONATIONS
      donate_eyebrow: 'Donate',
      donate_title: 'Help Care for Seafarers',
      donate_description:
        'Every gift helps us provide hospitality, practical support, transportation, Wi-Fi, refreshments, haircuts, and a welcoming place for seafarers visiting Toronto.',
      monthly_card_title: 'Monthly Giving',
      monthly_card_desc:
        'Become a monthly donor and help provide ongoing care and support throughout the year. Monthly gifts help us plan ahead.',
      monthly_bullets: [
        { text: '$15/mo provides refreshments & hospitality' },
        { text: '$25/mo supports transportation & Wi-Fi' },
        { text: '$50/mo provides practical assistance & care' },
      ],
      monthly_btn_label: 'Become a Monthly Donor',
      onetime_card_title: 'One-Time Gift',
      onetime_card_desc:
        'Make a one-time donation to support Mission to Seafarers Toronto. Your gift helps create a welcoming space and care for seafarers right when they arrive.',
      onetime_btn_label: 'Make a One-Time Gift',
      donate_footer_note:
        'All donations are securely processed via CanadaHelps in support of the Toronto station and the national mission to care for seafarers across Canada.',
      canadahelps_iframe_url: 'https://www.canadahelps.org/en/dn/145961',

      // TAB 3: WAYS TO HELP
      ways_eyebrow: 'Other Ways to Help',
      ways_title: 'Choose How You Would Like to Support',
      ways_bg_image: null,

      // TAB 4: IN-KIND & PARTNERSHIPS
      inkind_title: 'In-Kind Gifts',
      inkind_desc: 'We are always grateful for donations that help us create a welcoming space. Examples include:',
      inkind_bullets: [
        { text: 'Snacks and refreshments' },
        { text: 'Gift cards' },
        { text: 'Technology and Wi-Fi support' },
        { text: 'Haircut supplies and personal care items' },
        { text: 'Furniture and lounge items for the station' },
      ],
      amazon_wishlist_url: 'https://www.amazon.ca/hz/wishlist/ls/3C9KTQNHTZ0NM?ref_=wl_fv_le.',
      amazon_wishlist_label: 'Order from our wishlist',

      partnership_title: 'Partnership Options',
      partnership_desc: 'We welcome support from local businesses, schools, and groups. You can support:',
      partnership_bullets: [
        { text: 'Local events & Volunteer activities' },
        { text: 'Hospitality and care for seafarers' },
        { text: 'Station furnishings and supplies' },
        { text: 'Haircut and wellness services' },
      ],
      partnership_note:
        'For larger corporate partnerships and national giving opportunities, please visit Mission to Seafarers Canada.',

      // TAB 5: FINAL CTA
      cta_title: 'Every Act of Kindness Makes a Difference',
      cta_description:
        'From a warm drink and a haircut to a monthly donation or a few hours of volunteering, every act of support helps remind seafarers that they are not alone.',
      cta_donate_label: 'Donate Now',
      cta_volunteer_label: 'Become a Volunteer',
      cta_contact_label: 'Contact the Station',
    },
  })

  console.log('✅ MtscColbernGetInvolvedPage Global seeded successfully with 100% Get Involved content!')
  process.exit(0)
}

seedMtscColbernGetInvolved().catch((err) => {
  console.error('❌ Error seeding MtscColbernGetInvolvedPage:', err)
  process.exit(1)
})