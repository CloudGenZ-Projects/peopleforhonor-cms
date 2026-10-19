import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscColbernEvents() {
  console.log('Seeding MtscColbernEventsPage Global into PostgreSQL with Port Colborne Brief Data...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtsc-colbern-events-page' as any,
    data: {
      // TAB 1: HERO
      hero_title: 'Community, Connection and Care',
      hero_subtitle:
        'Stories, activities and occasions that bring people together in support of the seafarers visiting Port Colborne and the Welland Canal.',
      hero_btn_label: 'Get Involved',
      hero_bg_image: null,

      // TAB 2: APPROVED EMPTY STATE / INITIAL LAUNCH STATE
      featured_badge: 'Community Notice',
      featured_title: 'Upcoming Activities',
      featured_image: null,
      featured_theme: 'Welland Canal Chaplaincy',
      featured_subtheme: 'Port Colborne Community',
      featured_date: 'Ongoing Care',
      featured_location: 'Port Colborne, Ontario',
      featured_desc_p1:
        'There are no Port Colborne events announced on this website at the moment. Please check back for updates, or contact our team if you would like to explore a community activity or partnership.',
      featured_desc_p2:
        'Our story is shaped by ship visits, relationships and thoughtful acts of support. As local photos and approved stories become available, we will share glimpses of the people and partnerships that make this work possible.',
      featured_btn_label: 'Enquire About an Activity',
      modal_title: 'Enquire About an Activity',
      highlights_list: [
        {
          iconKey: 'Users',
          title: 'Community Partnerships',
          description: 'Explore hosting an event or partnering with local maritime care.',
        },
      ],
      modal_close_label: 'Close',

      // TAB 3: GALLERY
      carousel_title: 'Stories From Our Community',
      carousel_gallery: [],

      // TAB 4: CLOSING PARTICIPATION PANEL
      cta_title: 'Help Build a Welcoming Port',
      cta_description:
        'Whether through an approved local initiative, volunteering or a community partnership, there are practical ways to take part.',
      cta_btn1_label: 'Become a Volunteer',
      cta_btn1_link: 'https://www.mtsso.org/volunteering',
      cta_btn2_label: 'Discuss a Partnership',
      cta_btn2_link: '/contact?type=partnership',
      cta_btn3_label: 'Donate',
      cta_btn3_link: 'https://www.mtsso.org/support-us',
    },
  })

  console.log('✅ MtscColbernEventsPage seeded successfully with Port Colborne Brief Data!')
  process.exit(0)
}

seedMtscColbernEvents().catch((err) => {
  console.error('❌ Failed to seed MtscColbernEventsPage:', err)
  process.exit(1)
})
