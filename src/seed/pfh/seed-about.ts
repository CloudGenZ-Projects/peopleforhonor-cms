import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seed() {
  console.log('Seeding complete AboutPage dataset into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'about-page' as any,
    data: {
      // 1. Hero Section
      hero_title: 'About People for Honor',
      hero_subtitle:
        '"Honor" isn\'t just our name. It\'s how we show up—for ourselves, for each other, and for the country we call home.',

      // 2. Founder's Story
      founder_badge: 'Leadership & Vision',
      founder_title: 'Founder’s Story',
      founder_name: 'Mr. Francis Ukposidolo',
      founder_role: 'Founder & Community Builder',
      founder_credentials: 'Aeronautical Engineer | Certified Lead Auditor',
      founder_sec1_title: 'From Aeronautical Engineer to Community Builder',
      founder_sec1_p1:
        'Mr. Francis Ukposidolo is an established businessman, a certified third-party Lead Auditor, and a specialized quality management consultant within the aerospace, marine, and heavy machinery sectors. Grounded in a robust background in aeronautical engineering, Mr. Ukposidolo successfully transitioned his professional practice to Canada Our several years ago.',
      founder_sec1_p2:
        'Despite his technical expertise, he experienced firsthand the complex hurdles of migration—from navigating unfamiliar institutional systems to adapting to a new workplace culture. These early challenges shaped his deeply held conviction that no newcomer should have to walk this path alone.',
      founder_sec2_title: 'A Mission Rooted in Purpose and Impact',
      founder_sec2_p1:
        'Moving from personal experience to community action, Mr. Ukposidolo founded People for Honor. What began as a personal mission to help friends and neighbours has grown into a vital community hub.',
      founder_sec2_p2:
        'Under his visionary leadership, the organization goes beyond basic resettlement assistance. People for Honor focuses on holistic empowerment: helping individuals discover the best version of themselves, coaching them to uncover their true purpose, and mentoring them to fulfill that purpose.',
      founder_sec3_title: 'The Power of Giving Back',
      founder_sec3_p1:
        'For Mr. Ukposidolo, true belonging comes from being empowered with knowledge, staying grounded in cultural pride, and giving back to the community. He operates under a simple, profound guiding philosophy:',
      founder_quote: '"Life is not about duration, but donation."',
      founder_sec3_p2:
        'Through People for Honor, he ensures every individual is met with unwavering dignity. The organization proudly supports newcomers at every stage of their Canadian journey by providing practical guidance, holistic skills training, and purposeful mentorship rooted in dignity and from writing their very first résumé to celebrating their first major workplace promotion. Proudly Nigerian-Canadian, Mr. Francis measures success not just by individual outcomes but by what we build together—strong families, connected neighbourhoods, and opportunities that last. His aim is a living legacy: communities of belonging and fully empowered people who will lift the next generation, just as others once lifted him.',
      founder_legacy_quote:
        '"Together we plant a tree, others water the tree, and the next generation enjoys the shade."',

      // 3. Who We Are & Values
      who_title: 'Who We Are',
      who_p1:
        "At People for Honor, there's no judgment—only community lifting community. We serve women, men, and youth (Anglophone and Francophone) with culturally grounded workshops, coaching, and mentorship that spark confidence, protect mental well-being, and open doors to work, school, and community life in Canada.",
      who_p2:
        'Our programs are built on the idea that we can think big, belong fully, and give back.',
      values_list: [
        {
          title: 'Think Big',
          description:
            'We empower newcomers to dream boldly and pursue their goals with confidence.',
        },
        {
          title: 'Belong Fully',
          description:
            'We create spaces where cultural pride meets Canadian community, fostering true belonging.',
        },
        {
          title: 'Give Back',
          description:
            'We inspire individuals to lift the next generation, strengthening communities together.',
        },
        {
          title: 'No Judgment',
          description:
            'We listen first, remove barriers, and celebrate every milestone with dignity and respect.',
        },
      ],

      // 4. Mission & Vision
      mission_title: 'Our Mission',
      mission_text:
        'To remove systemic barriers for newcomers by providing practical guidance, holistic skills training, and purposeful mentorship rooted in dignity.',
      mission_tag: 'Empowering Lives, Restoring Hope',
      vision_title: 'Our Vision',
      vision_text:
        'To build an inclusive society where every immigrant is empowered to unlock their highest potential, celebrate their cultural pride, and confidently contribute to their new home.',
      vision_tag: 'A Community Where Everyone Belongs',

      // 5. Who We Serve & What We Do
      serve_heading: 'Who We Serve & What We Do',
      serve_title: 'Who We Serve',
      serve_text:
        'Newcomers and long-time residents seeking community, confidence, and practical pathways to opportunity.',
      help_title: 'How We Help',
      help_text:
        'Culturally responsive workshops, one-on-one coaching, and mentorship (EN/FR), plus warm referrals and navigation support for employment, education, and wellness resources.',

      // 6. Core Values List
      core_values_heading: 'Our Core Values',
      core_values_items: [
        {
          title: 'Inherent Potential',
          description:
            'Everyone has the capacity to thrive and live a fulfilled life.',
        },
        {
          title: 'Self-Worth & Respect',
          description: 'Knowing your own worth helps you value others.',
        },
        {
          title: 'Giving Back',
          description:
            'Contributing to your community strengthens both giver and community.',
        },
        {
          title: 'Interconnectedness & Legacy',
          description:
            'We are all connected; we plant seeds today so future generations may rest in the shade of tomorrow\'s trees.',
        },
      ],

      // 7. Get Involved Section
      get_involved_heading: 'Get Involved',
      get_involved_text:
        'We believe that true community is built together. Whether you are looking for support or want to give back, there is a place for you at People for Honor.',
      get_involved_cards: [
        {
          title: 'For Newcomers',
          description:
            'Access judgment-free career coaching, mentorship, and practical tools to jumpstart your journey in Canada.',
        },
        {
          title: 'For Volunteers',
          description:
            'Share your professional skills, mentor a newcomer, or help us run our vital community programs.',
        },
        {
          title: 'For Donors',
          description:
            'Fuel our mission. Your financial contributions directly support resources that empower individuals to fulfill their purpose.',
        },
      ],
      cta_btn_1_text: 'Ways to Give',
      cta_btn_1_link: '/join',
      cta_btn_2_text: 'Explore Our Programs',
      cta_btn_2_link: '/programs',
    },
  })

  console.log('Complete AboutPage dataset seeded successfully into PostgreSQL!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Failed to seed AboutPage:', err?.message || err)
  process.exit(1)
})
