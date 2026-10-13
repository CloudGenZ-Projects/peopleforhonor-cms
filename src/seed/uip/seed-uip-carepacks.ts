import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedUipCarePacks() {
  console.log('Seeding UipCarePacksPage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'uip-carepacks-page' as any,
    data: {
      // TAB 1: HERO
      hero_badge: 'Welcome to Canada',
      hero_title_line_1: 'Welcome',
      hero_title_gradient: 'Care Packs',
      hero_description:
        'A small gesture of care can make a big difference when starting over. Essential items delivered with love and care to support your journey. Each pack is thoughtfully curated to help you feel comfortable, connected, and supported during your first months in Canada.',
      hero_cta_label: 'Request Your Care Pack 🎁',
      hero_cta_link: '#request-form',

      // TAB 2: PACK CONTENTS
      contents_badge: 'Thoughtfully Curated',
      contents_title: "What's in Your Pack",
      contents_description:
        'Each welcome pack is prepared with love by our volunteers to provide comfort, warmth, and essential navigation.',
      contents_image: null,
      pack_categories: [
        {
          title: 'Seasonal Apparel',
          desc: 'Stay warm and comfortable as you adjust to Canadian weather.',
          emoji: '🧣',
          items_list: 'Warm knit beanie, Insulated gloves, Cozy wool-blend socks, Lightweight scarf',
        },
        {
          title: 'Hygiene Essentials',
          desc: 'Personal care items to help you feel fresh and dignified.',
          emoji: '🧼',
          items_list:
            'Travel-size soap & body wash, Toothbrush & toothpaste, Shampoo & conditioner, Deodorant, Hand sanitizer',
        },
        {
          title: 'Everyday Basics',
          desc: 'Practical items for your daily appointments and routines.',
          emoji: '📓',
          items_list: 'Notebook & pen, Reusable water bottle, Phone charger cable',
        },
        {
          title: 'Local Resource Card',
          desc: 'Customized to your province to help you navigate your new home.',
          emoji: '🗺️',
          items_list:
            'Settlement agencies, LGBTQ+ health services, Peer support contacts, Transit & grocery info',
        },
      ],

      // TAB 3: APPLICATION FORM CTA
      form_badge: 'Free for LGBTQ+ Newcomers',
      form_title: 'Apply for Your Welcome Care Pack',
      form_description:
        "No cost. Simply complete our 2‑minute form and we'll ship it to your Canadian address within 5 business days.",

      // TAB 4: FAQS
      faq_title: 'Frequently Asked Questions',
      faq_description: 'Everything you need to know about our Welcome Care Packs.',
      faqs: [
        {
          question: 'Who is eligible for a Welcome Care Pack?',
          answer:
            'Welcome Care Packs are available to LGBTQ+ newcomers, immigrants, and refugees who have arrived in Canada within the last 12 months. We operate on an honor system and trust that those who request a pack truly need one.',
        },
        {
          question: 'How long does shipping take?',
          answer:
            'Once you submit your application, our volunteers pack your box within 5 business days. Standard shipping within Canada typically takes an additional 3 to 7 business days depending on your province or territory.',
        },
        {
          question: 'Is there really no cost?',
          answer:
            'Yes, it is 100% free! Thanks to the generous support of our donors, community partners, and volunteers, we cover all costs for the items and shipping.',
        },
      ],
    },
  })

  console.log('✅ UipCarePacksPage Global seeded successfully!')
  process.exit(0)
}

seedUipCarePacks().catch((err) => {
  console.error('❌ Error seeding UipCarePacksPage:', err)
  process.exit(1)
})
