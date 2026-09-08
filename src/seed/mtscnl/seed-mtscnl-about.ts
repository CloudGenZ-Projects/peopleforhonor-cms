import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscnlAbout() {
  console.log('Seeding MtscnlAboutPage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtscnl-about-page' as any,
    data: {
      hero_background_image: null,
      hero_title: 'Newfoundland and Labrador Station History',
      
      history_eyebrow: 'Our Story',
      history_title: 'Decades of Care in Newfoundland and Labrador',
      history_blocks: [
        {
          image: null,
          era: 'Late 19th Century',
          title: 'Early Maritime Ministries in Newfoundland and Labrador',
          paragraph_1: 'During this period, seafarers visiting Newfoundland and Labrador received pastoral care from various religious organizations. For example, the Moravian Church established mission stations along the Labrador coast, providing spiritual guidance and support to local communities and visiting seafarers.',
        },
        {
          image: null,
          era: '1892',
          title: 'Grenfell Mission Founded',
          paragraph_1: 'British medical missionary Sir Wilfred Grenfell founded the Grenfell Mission in 1892, initially as a branch of The Royal National Mission to Deep Sea Fishermen. The mission provided medical and social services to fishermen and coastal communities in northern Newfoundland and Labrador.',
        },
        {
          image: null,
          era: 'Early to Mid-20th Century',
          title: 'Seafarers’ Welfare in St. John’s',
          paragraph_1: 'During this period, various organizations provided support to seafarers in St. John’s. The King George V Seamen’s Institute on Water Street served as a hub for seafarers, offering accommodation, recreational facilities, and spiritual services. Both Catholic and Anglican charities were active in ministering to the needs of seafarers visiting the port.',
        },
        {
          image: null,
          era: '2021–2025',
          title: 'Renewed Focus on Seafarers’ Welfare',
          paragraph_1: 'Beginning in the early 2020s, renewed efforts emerged to reestablish formal welfare services for seafarers in Newfoundland and Labrador. A pivotal moment came in September 2023, when the Fisheries and Marine Institute of Memorial University hosted a seminar that brought together stakeholders from across the province and country. This led to the formation of a Port Welfare Committee in St. John’s to coordinate and advocate for improved services.',
          paragraph_2: 'Building on this momentum, a master’s thesis completed in 2024 at Memorial University assessed the needs of seafarers in the region, confirming the urgent demand for a reliable, safe, and sustainable welfare facility. As of 2025, work is actively underway to formally establish The Mission to Seafarers Newfoundland and Labrador.',
        },
      ],

      team_eyebrow: 'Leadership',
      team_title: 'Newfoundland and Labrador Team',
      team_members: [
        {
          image: null,
          name: 'Morgane Sheppard',
          role: 'Station Manager',
          bio_p1: 'Morgane is dedicated to supporting seafarers and ensuring their time in Newfoundland and Labrador is as welcoming and comfortable as possible. As Station Manager of the Seafarers Centre, she works daily to provide visiting seafarers with access to essential services, resources, and support. She holds a Master’s degree in Maritime Studies with a focus on safety and the human element, and brings both academic knowledge and practical experience in maritime safety, health, and welfare.',
          bio_p2: 'Fluent in English and French, Morgane values building strong relationships with maritime organizations, local partners, and seafarers. Her previous experience includes internships and project work with the International Maritime Organization (IMO) and the United Nations Conference on Trade and Development (UNCTAD).',
        },
        {
          image: null,
          name: 'Captain Christopher Hearn',
          role: 'Director, Centre for Marine Simulation',
          bio_p1: 'Member of the Nautical Institute (MNI), Captain Christopher Hearn began his career after graduating from the Marine Institute’s Nautical Science Program in 1994. He quickly moved his way through the marine ranks and certification to Master Mariner and obtained command of several types of vessels in the deep sea and subsea sectors.',
          bio_p2: 'Captain Hearn returned to the Marine Institute in 2008 as the Director of the Centre for Marine Simulation. The Centre is the largest and most comprehensive marine simulation facility in North America. He has maintained an active role in the advancement of the maritime industry, assisting government agencies with development of competency strategies for on-ship operations.',
        },
        {
          image: null,
          name: 'REV. JUDITH ALLTREE',
          role: 'Board Director / Mentor',
          bio_p1: 'Rev. Judith Alltree’s life and careers have all involved working with people from different countries and cultures. After 9 years in parish ministry, Judith joined the Mission to Seafarers in 2012 as Executive Director for MtS Toronto. In 2019, she was appointed Regional Director for Mission to Seafarers Canada, serving 10 port cities and 12 MtS stations.',
          bio_p2: 'One of her biggest projects was to investigate the possibility of opening a Mission centre in the Port of St. John’s, Newfoundland and Labrador. As a result of a 2023 meeting, Rev. Alltree founded a Port Welfare Committee. Rev. Alltree continues to support the PWC as ex-officio and mentor, having recently received the North American Maritime Ministry Association Distinguished Service award.',
        },
      ],

      pwc_title: 'Port Welfare Committee of Newfoundland and Labrador',
      pwc_description: 'The Port Welfare Committee for Newfoundland and Labrador is a committed group of local champions from the maritime, labour, stakeholder and community sectors who have come together with a shared purpose: to ensure the wellbeing of seafarers visiting our province.',
      pwc_members: [
        { initials: 'EP', name: 'Rev. Eric Phinney', role: 'Regional Director', email: 'eric.phinney@mtsmail.org', phone: '1-506-643-0799' },
        { initials: 'MC', name: 'Marsha Clyne', role: 'Regional Fundraising Manager', email: 'marsha.clyne@missiontoseafarers.ca', phone: '1-647-773-4841' },
      ],

      gallery_eyebrow: 'Our Community in Action',
      gallery_title: 'Newfoundland and Labrador Seafarers\' Centre Gallery',
      gallery_subtitle: 'A glimpse into our local facilities, activities, and dedicated teams welcoming international crews to our ports.',
      gallery_images: [],

      impact_eyebrow: 'Our Impact',
      impact_title: 'Supporting Seafarers in Newfoundland and Labrador & Beyond',
      impact_subtitle: 'Did you know that 90% of the world’s goods are transported by sea?',
      impact_card_title: 'Seafarers: Newfoundland and Labrador At Mission to Seafarers Canada',
      impact_card_text: 'We take pride in being the trusted support network for seafarers arriving at ports across Canada, especially in Newfoundland and Labrador. Seafarers often face long stretches at sea, feeling isolated and far from home. Through your generosity, we provide the essential care, respond to countless spiritual, emotional, and physical needs, and provide a human connection that makes a difference in their lives.',
      milestone_title: '2024 Milestone',
      milestone_stats: [
        { number: '2,900+', label: 'ships visited across canada' },
        { number: '11,500', label: 'seafarer welcomed into our centers' },
        { number: '8,000+', label: 'essential rides to shore provided' },
      ],
      beyond_title: 'Impact Beyond Numbers',
      beyond_p1: 'Behind each number is a meaningful story: a crew member able to call home thanks to a SIM card we provided, or a seafarer who hadn’t set foot on land for weeks finally stepping ashore. Our impact goes beyond numbers; it’s about human connection and making seafarers feel seen, valued, and cared for. As the maritime industry evolves with disruptions, strikes, and shifting global tides, our mission remains constant: to stand by those who keep global trade moving. With 10 stations and growing, we are committed to providing unwavering support to seafarers across Canada.',
      beyond_p2_bold: 'But we need your continued support to ensure we can keep serving those who need us most.\nWill you join us? Your generosity ensures that when the next ship arrives, we’ll be ready, armed with warmth, resources, and a simple message: You are not alone.',
      
      programs_title: 'Programs You Can Support',
      programs_subtitle: 'Your gift will directly contribute to one or more of the following impactful programs:',
      programs_list: [
        { icon: 'HandHeart', title: 'Ship Visits', description: 'Delivering onboard care and essential services to seafarers, right where they work and live at sea.' },
        { icon: 'Users', title: 'Seafarers’ Centers Activities', description: 'Offering a safe, welcoming space on land for rest, recreation, and connection—a home away from home.' },
        { icon: 'HeartPulse', title: 'Mental Health & Crisis Support', description: 'Providing emotional and psychological support to seafarers facing stress, isolation, and emergencies.' },
        { icon: 'MapPin', title: 'Transportation Assistance', description: 'Ensuring access to local stores, services, and places of worship through safe and reliable transport options.' },
        { icon: 'Sparkles', title: 'Community & Volunteer Engagement', description: 'Mobilizing local volunteers and building partnerships to create a strong support network for visiting seafarers.' },
      ],

      cta_eyebrow: 'Funding and Support Needs',
      cta_title: 'Be Part of the Welcome.',
      cta_subtitle: 'Partner, volunteer or donate. Every contribution helps a seafarer feel seen.',
      cta_button_1_label: 'Get Involved',
      cta_button_1_link: '/get-involved',
      cta_button_2_label: 'Donate',
      cta_button_2_link: 'https://www.canadahelps.org/en/dn/73316',
    },
  })

  console.log('🎉 MtscnlAboutPage Global seeded successfully with Image Fields mapped!')
  process.exit(0)
}

seedMtscnlAbout().catch((err) => {
  console.error('❌ Error seeding MtscnlAboutPage:', err)
  process.exit(1)
})