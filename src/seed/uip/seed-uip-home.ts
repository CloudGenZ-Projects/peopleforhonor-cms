import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedUipHome() {
  console.log('Seeding UipHomePage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'uip-home-page' as any,
    data: {
      // TAB 1: HERO
      hero_badge: "Ottawa's LGBTQ+ Community Centre",
      hero_title_line_1: 'Find community. Build belonging.',
      hero_title_gradient: 'Start your journey with people who understand you.',
      hero_description:
        'We support LGBTQ+ newcomers, immigrants, and refugees through community programs, peer support, and culturally affirming spaces.',
      hero_youtube_id: 'RHaZ3dy1rc0',
      hero_fallback_image: null,
      hero_cta_primary_label: 'Get Support',
      hero_cta_primary_link: '/contact',
      hero_cta_secondary_label: 'Join Our Programs',
      hero_cta_secondary_link: '/programs',
      hero_cta_tertiary_label: 'Get Involved',
      hero_cta_tertiary_link: '/Waystogive',

      // TAB 2: STATS
      stats: [
        { number: '100+', label: 'Participants', description: 'Through United in Pride events' },
        { number: '300+', label: 'Participants Reached', description: 'Through community partner events' },
        { number: '150+', label: 'Community Members', description: 'Engaged in our community' },
        { number: '10+', label: 'Community Events', description: 'Workshops, socials, and more' },
        { number: '$500+', label: 'Funds Raised', description: 'Toward our fundraising goal' },
        { number: '🏳️‍🌈', label: 'A Safe Space', description: 'Always welcoming, always open' },
      ],

      // TAB 3: TICKER
      ticker_items: [
        { text: '🎬 Queer Movie Night — Every Last Saturday of the Month, Starting April 25' },
        { text: '🏕️ Upcoming Camp — July 17' },
      ],

      // TAB 4: WHAT WE DO (SERVICES)
      what_we_do_badge: 'Our Services',
      what_we_do_title: 'What We Do',
      services: [
        {
          icon: '🤝',
          title: 'Community Programs',
          description: 'Engaging activities and inclusive spaces designed for connection.',
        },
        {
          icon: '💬',
          title: 'Peer Support',
          description: 'Safe, guided environments to share experiences and find solidarity.',
        },
        {
          icon: '🧭',
          title: 'Resource Navigation',
          description: 'Help with accessing local healthcare, legal, and community services.',
        },
        {
          icon: '🌍',
          title: 'Cultural Connection',
          description: 'Honoring diverse backgrounds and intersectional LGBTQ+ identities.',
        },
      ],

      // TAB 5: WHO WE ARE (ABOUT)
      about_badge: 'Our Story',
      about_title: 'Who We Are',
      about_description:
        'United in Pride is a vibrant LGBTQ+ community centre located on the unceded territory of the Algonquin Anishinaabe Nation in Ottawa.',
      about_image: null,
      about_features: [
        { icon: '🌈', title: 'Inclusive Community', description: 'Open to all identities' },
        { icon: '🛡️', title: 'Safe Space', description: 'Affirming environment for everyone' },
        { icon: '🌱', title: 'Growth & Healing', description: 'Programs for wellness' },
      ],
      about_cta_label: 'Learn More',
      about_cta_link: '/about',
      about_gallery_images: [],

      // TAB 6: COMMUNITY VOICES
      community_vid_title: 'Community Voices',
      community_vid_subtitle: 'Inspiring journeys of resilience and growth',
      community_videos: [
        { youtube_id: 'fadY9BXl79o', title: 'Community Voice 1' },
        { youtube_id: 'd58Gft_Ioa0', title: 'Community Voice 2' },
        { youtube_id: 'RSvC4Ps-u1Y', title: 'Community Voice 3' },
      ],

      // TAB 7: PARTNERS
      partners_title: 'Our Community Partners',
      partners_description: 'We work closely with trusted partners to support our community.',
      partners: [
        { name: 'AIDS Committee of Ottawa (ACO)', url: 'https://aco-cso.ca/', logo: null },
        { name: 'Empower Youth Canada', url: 'https://empoweryouthcanada.ca/', logo: null },
        { name: 'Velor Digital', url: 'https://www.velordigital.ca', logo: null },
      ],

      // TAB 8: DONATE
      donate_badge: 'Make a Difference',
      donate_title: 'Support Our Community',
      donate_description:
        'Your donation directly funds programs and safe spaces for LGBTQ+ individuals in Ottawa.',
      donate_impact_items: [
        { amount: '$25', description: 'Art supplies' },
        { amount: '$50', description: 'Youth workshop' },
        { amount: '$100', description: 'Support group' },
      ],
      donate_cta_label: 'Donate Now',
      donate_cta_link: '/donate',
    },
  })

  console.log('✅ UipHomePage Global seeded successfully with 100% of the content!')
  process.exit(0)
}

seedUipHome().catch((err) => {
  console.error('❌ Error seeding UipHomePage:', err)
  process.exit(1)
})
