import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedUipPartners() {
  console.log('Seeding UipPartnersPage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'uip-partners-page' as any,
    data: {
      // TAB 1: HERO
      hero_badge: 'Trusted Network & Resources',
      hero_title_line_1: 'Connecting You to',
      hero_title_gradient: 'Safe & Affirming Support',
      hero_description:
        "We've partnered with verified organizations across Canada to ensure LGBTQ+ newcomers have access to legal, housing, healthcare, and settlement services you can trust.",
      hero_cta_primary_label: 'Meet Our Partners',
      hero_cta_primary_link: '#partners',
      hero_cta_secondary_label: 'Get Personal Support',
      hero_cta_secondary_link: '/support',

      // TAB 2: RESOURCE NAVIGATION INTRO
      intro_badge: 'Resource Navigation',
      intro_title: 'We Walk Alongside You',
      intro_description:
        "Whether you need help understanding immigration policies, finding legal assistance, or connecting with culturally safe support services, we're here to guide you every step of the way.",
      intro_image: null,
      intro_features: [
        { title: 'Legal Support', desc: 'Immigration policies, refugee claims, and rights protection' },
        { title: 'Housing & Shelter', desc: 'Safe, affirming accommodation and housing assistance' },
        { title: 'Healthcare Access', desc: 'Medical care, mental health support, and wellness services' },
        { title: 'Settlement Services', desc: 'Language learning, employment, and community integration' },
      ],
      intro_card_title: 'Ready to Connect?',
      intro_card_desc: "Give us a call or send a message—we're here for you",
      intro_card_btn_1_label: 'Contact Our Team',
      intro_card_btn_1_link: '/contact',
      intro_card_btn_2_label: 'Get Immediate Help',
      intro_card_btn_2_link: '/support',
      intro_floating_badge_title: 'Trusted Partners',
      intro_floating_badge_desc: 'Connected to 200+ LGBTQ+ affirming organizations across Canada',

      // TAB 3: PARTNERS DIRECTORY
      partners_badge: 'Verified Network',
      partners_title: 'Our Trusted Community Partners',
      partners_description:
        'Browse our network of vetted organizations dedicated to supporting LGBTQ+ newcomers in Canada.',
      partners_list: [
        {
          name: 'AIDS Committee of Ottawa (ACO)',
          summary:
            'Providing support, prevention, and education services to ensure our community receives safe and affirming care.',
          type: 'Community Partner',
          website: 'https://aco-cso.ca',
          logo: null,
        },
        {
          name: 'Empower Youth Canada',
          summary:
            'Empowering young people through inclusive programs, safe spaces, and dedicated community support.',
          type: 'Community Partner',
          website: 'https://empoweryouthcanada.ca',
          logo: null,
        },
        {
          name: 'Velor Digital',
          summary: 'Tailored digital marketing solutions to elevate your brand.',
          type: 'Community Partner',
          website: 'https://www.velordigital.ca',
          logo: null,
        },
      ],

      // TAB 4: SUPPORT FORM CTA
      support_cta_badge: 'Need Personalized Guidance?',
      support_cta_title: 'Let Us Help You Navigate',
      support_cta_description:
        "Tell us what you're looking for, and our team will connect you with the right verified partners and resources.",
    },
  })

  console.log('✅ UipPartnersPage Global seeded successfully!')
  process.exit(0)
}

seedUipPartners().catch((err) => {
  console.error('❌ Error seeding UipPartnersPage:', err)
  process.exit(1)
})
