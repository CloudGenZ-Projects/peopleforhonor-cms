import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscColbernHome() {
  console.log('Seeding MtscColbernHomePage Global into PostgreSQL with Port Colborne Brief Data...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtsc-colbern-home-page' as any,
    data: {
      // TAB 1: HERO
      hero_eyebrow: 'Mission to Seafarers · Port Colborne',
      hero_title_lead: 'Care at the Canal.',
      hero_title_highlight: 'A Welcome for Every Seafarer.',
      hero_lead_bold:
        'At the southern entrance to the Welland Canal, ships arrive carrying cargo, passengers and the people who make their journeys possible.',
      hero_description:
        'Mission to Seafarers Port Colborne offers a friendly local connection for those working aboard visiting vessels. Whether you need someone to talk to, guidance with a practical concern or help finding appropriate support, you are welcome here.',
      hero_primary_cta_label: 'Contact the Local Chaplain',
      hero_primary_cta_link: '/contact',
      hero_donate_btn_label: 'Find Seafarer Support',
      hero_image: null,
      hero_card_tag: 'Welland Canal',
      hero_card_text: 'Connecting Lake Erie to Lake Ontario.',
      hero_badge_stat: '200+',
      hero_badge_sub: 'Global Ports Network',

      // TAB 2: TRUST STRIP
      trust_stats: [
        { n: 'PORT COLBORNE', l: 'On Lake Erie at the southern entrance to the Welland Canal' },
        { n: 'SOUTHERN ONTARIO', l: 'Serving seafarers through the Toronto, Hamilton, Oshawa and Port Colborne network' },
        { n: 'GLOBAL MISSION', l: 'Connected to care in more than 200 ports worldwide' },
      ],

      // TAB 3: HOW WE HELP
      help_eyebrow: 'How We Help',
      help_title: 'How Can We Help You Today?',
      help_description:
        'The Welland Canal connects Lake Erie and Lake Ontario, and Port Colborne is a familiar name to the crews who travel this route. Life aboard can mean long days, limited time ashore and long periods away from loved ones. Our local chaplaincy and visiting network seek to make time in port a little easier through human connection and help when needed.',
      service_cards: [
        {
          tag: 'Chaplaincy',
          title: 'Speak with a Chaplain',
          body: 'Need a conversation, spiritual care or guidance with a concern? Contact the local chaplain.',
          cta: 'Contact a Chaplain',
          to: '/contact',
          isExternal: false,
        },
        {
          tag: 'Ship Visits',
          title: 'Request a Ship Visit',
          body: 'If your vessel is coming into Port Colborne or travelling through the canal, ask whether a visit can be arranged.',
          cta: 'Request a Ship Visit',
          to: '/support',
          isExternal: false,
        },
      ],
      pillars_heading: 'Ways We Support Seafarers',
      care_pillars: [
        { title: 'Ship Visits', iconKey: 'Ship' },
        { title: 'Friendly Conversation', iconKey: 'Users' },
        { title: 'Emotional Support', iconKey: 'Heart' },
        { title: 'Spiritual Care', iconKey: 'Anchor' },
        { title: 'Welfare Guidance', iconKey: 'ShieldCheck' },
        { title: 'Local Information', iconKey: 'MapPin' },
        { title: 'Practical Assistance Enquiries', iconKey: 'LifeBuoy' },
        { title: 'Community Connection', iconKey: 'Globe2' },
      ],

      // TAB 4: LOCAL STORY & CHAPLAIN
      haircut_eyebrow: 'Local Story',
      haircut_title: 'More Than Ships Passing Through',
      haircut_description:
        'Cargo carriers and cruise vessels pass through the Great Lakes, but the people working on board can easily go unseen. Seafarers are navigators, engineers, cooks, hospitality professionals, deck crew and many others. Every one of them deserves dignity, understanding and access to support, whatever the vessel they work on.',
      haircut_subtext:
        'Deacon Annette Hoare is the published local contact for the Port Colborne and Welland Canal area. Seafarers and ship representatives can contact her to ask about support or a possible visit.',
      haircut_btn_label: 'Contact Annette',
      haircut_iframe_url: 'tel:+19053280300',

      // TAB 5: NETWORK
      network_eyebrow: 'One Mission. Local Presence. Connected Care.',
      network_title: 'Connected in Purpose Across Canada and Worldwide',
      network_subtitle:
        'Mission to Seafarers Port Colborne is part of a connected network of maritime welfare care along the Great Lakes.',
      tier1_tag: 'Global Network',
      tier1_title: 'The International Mission',
      tier1_desc:
        'A worldwide maritime welfare network offering practical, emotional and spiritual help to seafarers in over 200 ports.',
      tier2_tag: 'National Body',
      tier2_title: 'Mission to Seafarers Canada',
      tier2_desc:
        'A national connection among Canadian Mission stations and partners strengthening maritime care across the country.',
      tier3_tag: 'Regional Hub',
      tier3_title: 'Mission to Seafarers Southern Ontario',
      tier3_desc:
        'An independent regional welfare organisation serving Toronto, Hamilton, Oshawa and Port Colborne.',
      tier4_tag: 'Local Base',
      tier4_title: 'Port Colborne Local Team',
      tier4_desc:
        'A local chaplaincy point of contact for visiting seafarers along the Welland Canal, led by Deacon Annette Hoare.',
      network_closing_quote:
        'At the southern entrance to the Welland Canal, we ensure visiting crews who keep commerce moving are welcomed with dignity, kindness, and support.',

      // TAB 6: GET INVOLVED & DONATE
      footer_band_eyebrow: 'Support Locally. Care Globally.',
      footer_band_heading:
        'A warm welcome in port begins with people who choose to care. Whether you volunteer, contribute resources or build a partnership, your support makes a real difference.',
      volunteer_title: 'Ways You Can Take Part',
      volunteer_desc:
        'Support seafarers visiting Port Colborne and the Welland Canal through regional initiatives:',
      volunteer_bullet_points: [
        { text: 'Volunteer with ship visiting and outreach via Southern Ontario' },
        { text: 'Contribute care items, warm knitwear, or holiday gifts for visiting crews' },
        { text: 'Partner with us through your company, church, or community group' },
        { text: 'Help provide practical hospitality along the Welland Canal' },
      ],
      donate_title: 'Help Care for Seafarers',
      donate_desc:
        'Your gift supports Mission to Seafarers Southern Ontario and its work providing practical, emotional, and spiritual care to visiting crews:',
      donate_bullet_points: [
        { text: 'Make a one-time donation to support seafarer welfare' },
        { text: 'Become a regular monthly supporter' },
        { text: 'Direct your gift to support work along Southern Ontario ports' },
      ],
      donate_iframe_url: 'https://www.mtsso.org/support-us',
    },
  })

  console.log('✅ MtscColbernHomePage seeded successfully with Port Colborne Brief Data!')
  process.exit(0)
}

seedMtscColbernHome().catch((err) => {
  console.error('❌ Failed to seed MtscColbernHomePage:', err)
  process.exit(1)
})
