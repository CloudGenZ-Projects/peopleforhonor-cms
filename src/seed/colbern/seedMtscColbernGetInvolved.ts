import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscColbernGetInvolved() {
  console.log('Seeding MtscColbernGetInvolvedPage Global into PostgreSQL with Port Colborne Brief Data...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  const current = await payload.findGlobal({
    slug: 'mtsc-colbern-get-involved-page' as any,
  })

  await payload.updateGlobal({
    slug: 'mtsc-colbern-get-involved-page' as any,
    data: {
      // TAB 1: HERO
      hero_badge_text: 'Get Involved',
      hero_title: 'Be Part of the Welcome',
      hero_subtitle:
        'A warm welcome in port begins with people who choose to care. Whether you volunteer, contribute resources or build a partnership, your support can make a difference to seafarers far from home.',
      hero_bg_image: (current as any)?.hero_bg_image?.id || (current as any)?.hero_bg_image || null,

      // TAB 2: DONATION SECTION / TWO EQUAL CARDS
      donate_eyebrow: 'Ways to Give',
      donate_title: 'Help Care for Seafarers',
      donate_description:
        'Support Mission to Seafarers Southern Ontario and its wider work of providing practical, emotional and spiritual care to visiting crews.',
      
      // CARD 1: MAKE A DONATION
      onetime_card_title: 'MAKE A DONATION',
      onetime_card_desc:
        'Support Mission to Seafarers Southern Ontario and its wider work of providing practical, emotional and spiritual care to visiting crews.',
      onetime_btn_label: 'Make a Donation',

      // CARD 2: DISCUSS REGULAR GIVING
      monthly_card_title: 'DISCUSS REGULAR GIVING',
      monthly_card_desc:
        'Interested in ongoing support? Contact the Southern Ontario team to learn about available giving arrangements.',
      monthly_bullets: [
        { text: 'Direct your gift to support visiting crew welfare across Southern Ontario ports' },
        { text: 'Enable ship visits and compassionate pastoral support along the Welland Canal' },
        { text: 'Charitable tax receipts issued through Mission to Seafarers Southern Ontario' },
      ],
      monthly_btn_label: 'Enquire About Regular Giving',
      donate_footer_note:
        'All donations are securely processed and receipted by Mission to Seafarers Southern Ontario.',
      canadahelps_iframe_url: 'https://www.mtsso.org/support-us',

      // TAB 3: PARTICIPATION PATHWAYS (ORANGE CARDS BANNER)
      ways_eyebrow: 'Participation',
      ways_title: 'Choose How You Would Like to Help',
      ways_bg_image: (current as any)?.ways_bg_image?.id || (current as any)?.ways_bg_image || null,

      // TAB 4: TWO-COLUMN DETAILS & VOLUNTEERS
      inkind_title: 'IN-KIND GIFTS',
      inkind_desc:
        'Useful items may include personal care products, warm clothing or items for welfare initiatives, depending on current local needs. Please do not arrange an unsolicited drop-off. Contact the team first for an up-to-date list and delivery instructions.',
      inkind_bullets: [
        { text: 'Personal care products' },
        { text: 'Warm clothing' },
        { text: 'Items for welfare initiatives' },
      ],
      amazon_wishlist_url: 'https://www.mtsso.org/volunteering',
      amazon_wishlist_label: 'Apply Through Southern Ontario',

      partnership_title: 'COMMUNITY PARTNERSHIPS',
      partnership_desc:
        'Local businesses, maritime companies, churches, community groups and individuals may be able to support approved activities, goods, services or volunteer involvement. We welcome conversations about practical, sustainable partnerships.',
      partnership_bullets: [
        { text: 'Local businesses and maritime companies' },
        { text: 'Churches and faith communities' },
        { text: 'Community groups and individuals' },
      ],
      partnership_note: '',

      // TAB 5: BOTTOM ORANGE PANEL
      cta_title: 'Every Act of Care Matters',
      cta_description:
        'A listening ear, a practical gift or time spent volunteering can help remind a seafarer that they are not alone.',
      cta_volunteer_label: 'Volunteer',
      cta_contact_label: 'Contact the Team',
      cta_donate_label: 'Donate',
    },
  })

  console.log('✅ MtscColbernGetInvolvedPage seeded successfully with Port Colborne Brief Data!')
  process.exit(0)
}

seedMtscColbernGetInvolved().catch((err) => {
  console.error('❌ Failed to seed MtscColbernGetInvolvedPage:', err)
  process.exit(1)
})
