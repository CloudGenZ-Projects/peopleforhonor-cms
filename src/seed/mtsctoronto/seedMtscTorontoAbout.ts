import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscTorontoAbout() {
  console.log('Seeding MtscTorontoAboutPage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtsc-toronto-about-page' as any,
    data: {
      // TAB 1: HERO
      hero_title: 'Toronto Station History',
      hero_bg_image: null,

      // TAB 2: HISTORY
      history_eyebrow: 'Our Story',
      history_title: 'Decades of Care at the Port of Toronto',
      history_blocks: [
        {
          era: '1960s - 1970s',
          title: 'The Beginning & A Permanent Home',
          paragraphs: [
            { text: 'The Toronto Station of The Mission to Seafarers has been serving seafarers in the Port of Toronto since the early 1960s. It is believed the Mission first began around 1961 and, in its earliest years, operated in connection with the Lutheran Church in Toronto.' },
            { text: 'Before the Mission had a permanent building, there was an industrial trailer located in or near the Port. At that time, there was very little security between the harbour and Cherry Street, allowing seafarers to simply walk from their ships to the Mission.' },
            { text: 'In the early 1970s, Viceroy Homes donated an Alpine-style cottage to become the Toronto Mission’s first and only permanent building. This building served as the home of the Mission until January 2019. It included both an upstairs and downstairs, and over time a large commercial kitchen and a spacious back patio were added. The station became known as a place of hospitality, fellowship, and practical support, especially during the summer months when donated barbecues were often used to host seafarers.' }
          ],
          image: null,
        },
        {
          era: 'Decades of Service - 2019',
          title: 'A Home Away From Home & A Devastating Loss',
          paragraphs: [
            { text: 'For decades, the Toronto Station provided far more than a building. It became a “home away from home” for seafarers arriving in Toronto, many of whom were far from family, short on money, and facing long periods at sea. One memorable story recalls a crew arriving from Kyiv with nowhere to stay before joining their ship. The Mission welcomed them, provided a meal, shelter, and transportation to their vessel. During their week in Toronto, they returned each evening to use the Mission’s Wi-Fi to connect with their families across the world.' },
            { text: 'The Toronto Mission remained the last active harbour mission presence after the Lutheran and Catholic churches had left the waterfront many years earlier, with the Anglicans continuing the ministry. Until 2019, the station maintained a physical location in the port, while also focusing heavily on ship visiting and pastoral care.' },
            { text: 'In January 2019, the historic station was lost following a devastating flood, at the same time the Port was preparing to demolish the building to make way for road expansion. The loss meant that many historical items and records connected to the Mission could not be preserved.' }
          ],
          image: null,
        },
        {
          era: 'Today',
          title: 'A New Chapter',
          paragraphs: [
            { text: 'Now, after seven years, the Toronto Station is beginning a new chapter. With the support of the Toronto Port Authority, The Mission to Seafarers is reopening a new station space within the Port of Toronto. The new location is being designed to once again provide seafarers with a welcoming place to rest, connect with loved ones, receive support, and experience the care and community that has defined the Toronto Mission since the early 1960s.' },
            { text: 'Whether it is offering Wi-Fi, a haircut, transportation, a warm drink, a listening ear, or simply a place to rest, each act of support is part of something much larger: a connected network of care reaching from Toronto to ports across Canada and around the world.' }
          ],
          image: null,
        }
      ],

      // TAB 3: TEAM
      team_eyebrow: 'Leadership',
      team_title: 'Toronto & MTSSO team',
      leader_heading: 'Toronto Station Chaplin and Manager-Rev. Judith Alltree',
      leader_name: 'REV. JUDITH ALLTREE',
      leader_image: null,
      leader_paragraphs: [
        { text: 'Rev. Judith Alltree has dedicated her career to serving people across cultures, from the travel and music industries to parish ministry and maritime chaplaincy. She joined the Mission to Seafarers in 2012 as Executive Director for Toronto and later led the Mission to Seafarers Southern Ontario (MTSSO), expanding services across multiple ports.' },
        { text: 'She went on to serve as Regional Director for Mission to Seafarers Canada, supporting stations nationwide through the COVID-19 pandemic and contributing to the formation of the Canadian National Seafarers Welfare Board. She also played a key role in advancing seafarer welfare in Newfoundland and Labrador, helping to establish a Port Welfare Committee in St. John’s.' },
        { text: 'Now serving as Vice-President of the MTSSO Board, Rev. Alltree continues her lifelong commitment as a volunteer ship visitor and Port Chaplain in Toronto. In 2024, she received the North American Maritime Ministry Association Distinguished Service Award.' }
      ],
      team_members: [
        { name: 'Alicia Hamming Navarrete', role: 'Program Manager -MTSSO', image: null },
        { name: 'Pastor Dan Phannenhour', role: 'Hamilton Station Chapalin-', image: null }
      ],

      // TAB 4: BOARD OF DIRECTORS
      board_title: 'Our Board of Directors',
      board_members: [
        { name: 'Walter Stewart', role: 'Director', image: null },
        { name: 'Kelly McDonald', role: 'Board President', image: null },
        { name: 'Rev. Judith Alltree', role: 'Vice-President', image: null },
        { name: 'Jennifer Carruthers', role: 'Treasurer', image: null },
        { name: 'Allwyn Phillips', role: 'Secretary', image: null },
        { name: 'Noah Bonis Charancle', role: 'Director', image: null },
        { name: 'Kelly Noseworthy', role: 'Director', image: null },
        { name: 'Captain Jim Pound', role: 'Director', image: null },
        { name: 'Sean Reid', role: 'Director', image: null },
        { name: 'Sean Slater', role: 'Director', image: null },
        { name: 'Isabelle Therrien', role: 'Director', image: null }
      ],

      // TAB 5: STRUCTURE
      structure_eyebrow: 'How the Structure Works',
      structure_title: 'One Mission. Many Hands. Shared Care.',
      structure_cards: [
        { org_title: 'Mission to Seafarers Canada', description: 'provides the national foundation, leadership, and support.' },
        { org_title: 'Mission to Seafarers Southern Ontario', description: 'guides and supports the ministry across Southern Ontario ports.' },
        { org_title: 'Mission to Seafarers Toronto', description: 'brings that mission to life locally at the Port of Toronto.' }
      ],
      structure_bottom_quote: 'Together, ensure that every seafarer who comes through Toronto is not only seen, but cared for.',

      // TAB 6: CTA
      cta_title: 'Be part of the welcome.',
      cta_description: 'Visit, volunteer, or give. Every contribution helps a seafarer feel seen.',
      cta_btn1_label: 'Get Involved',
      cta_btn1_link: '/get-involved',
      cta_btn2_label: 'Donate Now',
      cta_btn2_link: '/get-involved#donate'
    },
  })

  console.log('✅ MtscTorontoAboutPage Global seeded successfully with 100% About content!')
  process.exit(0)
}

seedMtscTorontoAbout().catch((err) => {
  console.error('❌ Error seeding MtscTorontoAboutPage:', err)
  process.exit(1)
})