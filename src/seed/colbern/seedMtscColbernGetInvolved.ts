import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscColbernGetInvolved() {
  console.log('Seeding MtscColbernGetInvolvedPage Global into PostgreSQL with Port Colborne Brief Data...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtsc-colbern-get-involved-page' as any,
    data: {
      // TAB 1: HERO
      hero_badge_text: 'Get Involved',
      hero_title: 'Be Part of the Welcome',
      hero_subtitle:
        'A warm welcome in port begins with people who choose to care. Whether you volunteer, contribute resources or build a partnership, your support can make a difference to seafarers far from home.',
      hero_bg_image: null,

      // TAB 2: DONATION SECTION
      donate_eyebrow: 'Ways to Give',
      donate_title: 'Help Care for Seafarers',
      donate_description:
        'Support Mission to Seafarers Southern Ontario and its wider work of providing practical, emotional and spiritual care to visiting crews.',
      monthly_card_title: 'MAKE A DONATION',
      monthly_card_desc:
        'Support Mission to Seafarers Southern Ontario and its wider work of providing practical, emotional and spiritual care to visiting crews.',
      monthly_bullets: [
        { text: 'Direct your gift to support visiting crew welfare across Southern Ontario ports' },
        { text: 'Enable ship visits and compassionate pastoral support along the Welland Canal' },
        { text: 'Charitable tax receipts issued through Mission to Seafarers Southern Ontario' },
      ],
      monthly_btn_label: 'Donate via Southern Ontario',
      onetime_card_title: 'DISCUSS REGULAR GIVING',
      onetime_card_desc:
        'Interested in ongoing support? Contact the Southern Ontario team to explore regular giving or discuss a targeted gift.',
      onetime_btn_label: 'Contact Southern Ontario',
      donate_footer_note:
        'All donations are securely processed and receipted by Mission to Seafarers Southern Ontario.',
      canadahelps_iframe_url: 'https://www.mtsso.org/support-us',

      // TAB 3: PARTICIPATION PATHWAYS
      ways_eyebrow: 'Participation Pathways',
      ways_title: 'Ways You Can Take Part',
      ways_bg_image: null,
      inkind_title: 'VOLUNTEER WITH THE MISSION',
      inkind_desc:
        'Support ship visiting, hospitality or community outreach through the approved Southern Ontario volunteering pathway.',
      inkind_bullets: [
        { text: 'Apply through the official Southern Ontario volunteer application process' },
        { text: 'Participate in ship visitor training and safety orientations' },
        { text: 'Help extend warm community welcome to international seafarers' },
      ],
      amazon_wishlist_url: 'https://www.mtsso.org/volunteering',
      amazon_wishlist_label: 'Apply to Volunteer',

      // TAB 4: PARTNERSHIPS & IN-KIND
      partnership_title: 'COMMUNITY AND BUSINESS PARTNERSHIPS',
      partnership_desc:
        'Work with us through your company, church or civic group to support seafarer welfare along the Welland Canal.',
      partnership_bullets: [
        { text: 'Maritime sector companies and port operators' },
        { text: 'Local churches and faith communities' },
        { text: 'Civic organisations and service clubs' },
      ],
      partnership_note:
        'IN-KIND AND SEASONAL SUPPORT: Contribute care items, knitwear or holiday gifts for crews visiting during cold weather and special occasions.',

      // TAB 5: CLOSING CTA
      cta_title: 'Ready to Make a Difference?',
      cta_description:
        'Every act of hospitality helps a seafarer feel remembered and valued while far from home.',
      cta_donate_label: 'Support Our Mission',
      cta_volunteer_label: 'Volunteer via MTSSO',
      cta_contact_label: 'Contact Our Team',
    },
  })

  console.log('✅ MtscColbernGetInvolvedPage seeded successfully with Port Colborne Brief Data!')
  process.exit(0)
}

seedMtscColbernGetInvolved().catch((err) => {
  console.error('❌ Failed to seed MtscColbernGetInvolvedPage:', err)
  process.exit(1)
})
