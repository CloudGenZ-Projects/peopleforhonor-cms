import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscColbernHome() {
  console.log('Seeding MtscColbernHomePage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtsc-colbern-home-page' as any,
    data: {
      // TAB 1: HERO
      hero_eyebrow: 'Mission to Seafarers · Toronto',
      hero_title_lead: 'A Global Lifeline with a',
      hero_title_highlight: 'Local Heart',
      hero_lead_bold:
        'Welcoming seafarers at the Port of Toronto with hospitality, practical support, and a place to belong while they are far from home.',
      hero_description:
        'At the Port of Toronto, seafarers arrive after time at sea, sometimes for days, weeks and even months. Mission to Seafarers Toronto is here during that window. With practical support. With a place to step off the vessel. With people to speak to while they are ashore. We are a part of Mission to Seafarers Southern Ontario and Mission to Seafarers Canada, connected to a wider network that meets seafarers in ports around world.',
      hero_primary_cta_label: 'Contact the Station',
      hero_primary_cta_link: '/contact',
      hero_donate_btn_label: 'Donate',
      hero_image: null,
      hero_card_tag: 'Toronto Station',
      hero_card_text: 'Welcoming crews who keep global trade moving.',
      hero_badge_stat: '200+',
      hero_badge_sub: 'Global Ports',

      // TAB 2: TRUST STRIP
      trust_stats: [
        { n: '74,000+', l: 'Operating Ships supported globally' },
        { n: '1,890,000+', l: 'Seafarers supported worldwide' },
        { n: '160+', l: 'Years of service to seafarers' },
      ],

      // TAB 3: HOW WE HELP
      help_eyebrow: 'How We Help',
      help_title: 'How We Support the World’s Seafarers in Canada',
      help_description:
        'As part of a 160+ year legacy, we offer practical, emotional, and spiritual support at Canadian ports, ensuring no seafarer is alone.',
      service_cards: [
        {
          tag: 'At the Station',
          title: 'Community Connection',
          body: 'Refreshments and a comfortable place to sit, pause, and reconnect with loved ones in a welcoming station space.',
          cta: 'Come visit us at the station',
          to: '/contact',
          isExternal: false,
        },
        {
          tag: 'Logistics',
          title: 'Seafarers Parcel Pickup Service',
          body: 'Order essentials online and have them delivered securely to our station for pickup when you dock.',
          cta: 'Send your Parcel',
          to: 'https://parcelservice.mtsc.ca/',
          isExternal: true,
        },
      ],
      pillars_heading: 'How We Care for Seafarers',
      care_pillars: [
        { title: 'Practical Support', iconKey: 'LifeBuoy' },
        { title: 'Mental and Emotional Health', iconKey: 'Heart' },
        { title: 'Spiritual Care', iconKey: 'HeartHandshake' },
        { title: 'Advocacy & Rights', iconKey: 'ShieldCheck' },
        { title: 'Community Connection', iconKey: 'Users' },
        { title: 'Haircuts & Wellness', iconKey: 'Scissors' },
        { title: 'Seafarers Parcel Pickup Service', iconKey: 'Package' },
        { title: 'Transportation & Local Guidance', iconKey: 'MapPin' },
        { title: 'Wi-Fi & Communication Tools', iconKey: 'Wifi' },
        { title: 'Refreshments & Hospitality', iconKey: 'Coffee' },
      ],

      // TAB 4: HAIRCUTS
      haircut_eyebrow: 'A Small Service That Makes a Big Difference',
      haircut_title: 'Haircuts for Seafarers',
      haircut_description:
        'After extended periods at sea, small things can feel significant. Haircuts are available at the Toronto station by appointment. They can be arranged in advance by seafarers, ship agents, or crew representatives.',
      haircut_subtext:
        'Availability is limited and scheduled around ship movements and volunteer capacity.',
      haircut_btn_label: 'Book a Haircut Appointment',
      haircut_iframe_url: 'https://fadekingzmobilebarber.square.site/',

      // TAB 5: STRUCTURE & NETWORK
      network_eyebrow: 'Connected in purpose',
      network_title: 'Local presence. Connected in purpose.',
      network_subtitle: 'Mission to Seafarers Toronto is part of a connected network of care.',
      tier1_tag: 'Global Network',
      tier1_title: 'The Mission to Seafarers',
      tier1_desc: 'Connected globally across more than 200 ports.',
      tier2_tag: 'National Body',
      tier2_title: 'MtS Canada',
      tier2_desc:
        'Mission to Seafarers Canada provides the national leadership, fund development, partnerships, and support that strengthen stations across the country.',
      tier3_tag: 'Regional Hub',
      tier3_title: 'MtS Southern Ontario',
      tier3_desc:
        'Within Ontario, Mission to Seafarers Southern Ontario leads work across regional ports including Toronto, Hamilton, and Oshawa.',
      tier4_tag: 'Local Base',
      tier4_title: 'Toronto Station',
      tier4_desc:
        'At the Port of Toronto, that work becomes direct. Here, we offer seafarers a welcoming place where they can rest, connect with loved ones, access practical help, receive a haircut, and know that they are not alone.',
      network_closing_quote:
        'Toronto is an important gateway within Canada’s maritime network. Every year, seafarers arrive carrying the goods that keep our communities running, often with limited time ashore and few options once they disembark. We ensure that, when they arrive here, they are welcomed with dignity, kindness, and support.',

      // TAB 6: VOLUNTEER & DONATE
      footer_band_eyebrow: 'Support Locally Care Globally.',
      footer_band_heading:
        'Whether you volunteer, donate, provide a haircut, or simply help us welcome a seafarer, you are part of a connected network of care reaching from Toronto to ports around the world.',
      volunteer_title: 'Help Us Welcome Seafarers to Toronto',
      volunteer_desc:
        'There are many ways to support the Toronto station and the seafarers we serve. You can:',
      volunteer_bullet_points: [
        { text: 'Volunteer at the station or during local events' },
        { text: 'Donate snacks, refreshments, gift cards, furniture, or supplies' },
        { text: 'Support haircut and wellness services for seafarers' },
        { text: 'Help furnish and create a welcoming station space' },
        { text: 'Support a local project or event' },
        { text: 'Become a community or business partner' },
      ],
      donate_title: 'Help Care for Seafarers',
      donate_desc:
        'Every gift helps us provide hospitality, transportation, Wi-Fi, refreshments, haircuts, and a welcoming place for seafarers visiting Toronto. You can choose to:',
      donate_bullet_points: [
        { text: 'Become a monthly donor' },
        { text: 'Make a one-time gift' },
        { text: 'Support Mission to Seafarers Toronto through Mission to Seafarers Canada' },
      ],
      donate_iframe_url: 'https://www.canadahelps.org/en/dn/145961',
    },
  })

  console.log('✅ MtscColbernHomePage Global seeded successfully with 100% Index content!')
  process.exit(0)
}

seedMtscColbernHome().catch((err) => {
  console.error('❌ Error seeding MtscColbernHomePage:', err)
  process.exit(1)
})