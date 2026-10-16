import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscTorontoEvents() {
  console.log('Seeding MtscTorontoEventsPage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtsc-toronto-events-page' as any,
    data: {
      // TAB 1: HERO
      hero_title: 'Events & Community Gatherings',
      hero_subtitle:
        'Mission to Seafarers Toronto hosts events, conversations, awareness initiatives, and waterfront gatherings that help connect people to maritime life and the seafarers who help keep global trade moving.',
      hero_btn_label: 'View Upcoming Events',
      hero_bg_image: null,

      // TAB 2: FEATURED EVENT
      featured_badge: 'Featured Event',
      featured_title: 'Women in Maritime 2026',
      featured_image: null,
      featured_theme:
        'Theme: From Policy to Practice: Advancing Gender Equality for Maritime Excellence',
      featured_subtheme:
        'International Day for Women in Maritime & Reopening of the Mission to Seafarers Toronto Station',
      featured_date: 'Wednesday, May 20, 2026',
      featured_location: 'Port of Toronto Cruise Ship Terminal',
      featured_desc_p1:
        "This gathering brings together maritime leaders, cadets, labour voices, educators, seafarers, and community partners for a day of conversation, reflection, and collaboration focused on the realities shaping women's experiences across the maritime sector.",
      featured_desc_p2:
        'The event also marks the reopening of the Mission to Seafarers Toronto Station, helping restore a welcoming place of care and connection for seafarers arriving at the Port of Toronto.',
      featured_btn_label: 'View Event Highlights',

      // TAB 3: HIGHLIGHTS MODAL
      modal_title: 'What the Day Includes',
      highlights_list: [
        {
          iconKey: 'Lightbulb',
          title: 'Leadership Conversations',
          description:
            'Interactive discussions exploring: leadership, workplace culture, retention, mentorship, operational realities, and the future of maritime excellence in Canada.',
        },
        {
          iconKey: 'Anchor',
          title: 'Toronto Station Reopening',
          description:
            'Celebrating the reopening of a dedicated support and hospitality space for seafarers visiting Toronto.',
        },
        {
          iconKey: 'Users',
          title: 'Maritime Community Gathering',
          description:
            'An opportunity for maritime professionals, cadets, labour leaders, volunteers, and community partners to connect and collaborate.',
        },
        {
          iconKey: 'Ship',
          title: 'Waterfront & Port Atmosphere',
          description:
            'A uniquely maritime setting at the Port of Toronto connecting public awareness directly to the realities of global movement and trade.',
        },
      ],
      modal_close_label: 'Close Details',

      // TAB 4: CAROUSEL
      carousel_title: 'Stories From Our Events',
      carousel_gallery: [],

      // TAB 5: FINAL CTA
      cta_title: 'Be Part of the Conversation',
      cta_description:
        'Whether through attending an event, volunteering, donating, partnering with us, or supporting the station, every act of involvement helps strengthen care and visibility for seafarers visiting Toronto.',
      cta_btn1_label: 'Partner With Us',
      cta_btn1_link: '/contact',
      cta_btn2_label: 'Volunteer',
      cta_btn2_link: '/get-involved',
      cta_btn3_label: 'Support the Toronto Station',
      cta_btn3_link: '/support',
    },
  })

  console.log('✅ MtscTorontoEventsPage Global seeded successfully!')
  process.exit(0)
}

seedMtscTorontoEvents().catch((err) => {
  console.error('❌ Error seeding MtscTorontoEventsPage:', err)
  process.exit(1)
})