import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscnlHome() {
  console.log('Seeding MtscnlHomePage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtscnl-home-page' as any,
    data: {
      // TAB 1: HERO
      hero_eyebrow: 'Mission to Seafarers · Newfoundland and Labrador',
      hero_title_line_1: 'Here When Seafarers',
      hero_title_highlight: 'Come Ashore',
      hero_paragraph_1: 'After days, weeks, and sometimes months at sea, seafarers arrive in port with only a short window ashore.',
      hero_paragraph_2: 'Mission to Seafarers Newfoundland and Labrador is here during that window—with practical support, a welcoming place to step off the vessel, and people to speak with while they are ashore.',
      hero_paragraph_3_prefix: 'We are part of',
      hero_paragraph_3_link_text: 'Mission to Seafarers Canada',
      hero_paragraph_3_link_url: 'https://mtsc.ca/',
      hero_paragraph_3_suffix: 'and connected to a wider global network caring for seafarers in ports around the world.',
      hero_button_1_label: 'Contact the Station',
      hero_button_1_link: '/contact',
      hero_button_2_label: 'Donate',
      hero_image_badge: 'Newfoundland and Labrador Station',
      hero_image_title: 'Welcoming crews who keep global trade moving.',

      // TAB 2: TRUST STRIP
      trust_stats: [
        { stat_number: '90%', stat_label: 'Transportation of the world’s goods and fuels' },
        { stat_number: '74K', stat_label: 'Operating ships' },
        { stat_number: '1.89 M', stat_label: 'Seafarers all over the world' },
        { stat_number: '1856', stat_label: 'History dating back to' },
      ],

      // TAB 3: HOW WE HELP
      help_eyebrow: 'How We Help',
      help_title: 'How We Support the World’s Seafarers in Newfoundland and Labrador',
      help_subtitle: 'As part of a 160+ year legacy, we offer practical, emotional and spiritual support to seafarers visiting Newfoundland and Labrador, helping ensure that no seafarer feels alone.',
      featured_services_title: 'Featured Services',
      featured_services: [
        {
          icon: 'users',
          eyebrow: 'At the Station',
          title: 'Community Connection',
          description: 'Refreshments and a comfortable place to sit, pause and reconnect with loved ones in a welcoming station space.',
          button_label: 'Come Visit Us at the Station',
          button_link: '/contact',
        },
        {
          icon: 'package',
          eyebrow: 'Logistics',
          title: 'Seafarers Parcel Pickup Service',
          description: 'Order essentials online and have them delivered securely to our station for pickup when your vessel arrives in port.',
          button_label: 'Send Your Parcel',
          button_link: 'https://parcelservice.mtsc.ca/',
        },
      ],
      care_items_title: 'How We Care for Seafarers',
      care_items: [
        { icon: 'briefcase', title: 'Practical Support' },
        { icon: 'heart', title: 'Mental and Emotional Health' },
        { icon: 'sparkles', title: 'Spiritual Care' },
        { icon: 'scale', title: 'Advocacy and Rights' },
        { icon: 'users', title: 'Community Connection' },
        { icon: 'package', title: 'Seafarers Parcel Pickup Service' },
        { icon: 'map-pin', title: 'Transportation and Local Guidance' },
        { icon: 'wifi', title: 'Wi-Fi and Communication Tools' },
        { icon: 'coffee', title: 'Refreshments and Hospitality' },
      ],

      // TAB 4: CONNECTED NETWORK
      network_title: 'Local Presence. Connected in Purpose.',
      network_subtitle: 'Mission to Seafarers Newfoundland and Labrador is part of a connected network of care.',
      network_cards: [
        {
          icon: 'globe2',
          eyebrow: 'Global Network',
          title: 'The Mission to Seafarers',
          description: 'Connected globally across more than 200 ports.',
          link_text: 'Visit Website',
          link_url: 'https://www.missiontoseafarers.org/',
        },
        {
          icon: 'building2',
          eyebrow: 'National Body',
          title: 'Mission to Seafarers Canada',
          description: 'Mission to Seafarers Canada provides the national leadership, fund development, partnerships and support that strengthen stations across the country.',
          link_text: 'Visit Website',
          link_url: 'https://mtsc.ca/',
        },
      ],

      // TAB 5: SUPPORT LOCALLY
      support_title: 'Support Locally. Care Globally.',
      support_subtitle: 'Whether you volunteer, donate, attend an event or simply help us welcome a seafarer, you become part of a connected network of care reaching from Newfoundland and Labrador to ports around the world.',
      support_button_label: 'Get Involved',
      support_button_link: '/get-involved',

      // TAB 6: INVOLVE & DONATE
      involved_eyebrow: 'Get Involved',
      involved_title: 'Help Us Welcome Seafarers to Newfoundland and Labrador',
      involved_description: 'There are many ways to support our station and the seafarers we serve. You can:',
      involved_bullets: [
        { bullet: 'Volunteer at the station or during local events' },
        { bullet: 'Donate snacks, refreshments, gift cards, furniture or supplies' },
        { bullet: 'Support haircut and wellness services for seafarers' },
        { bullet: 'Help furnish and maintain a welcoming station space' },
        { bullet: 'Support a local project or event' },
        { bullet: 'Become a community or business partner' },
      ],
      involved_footer_italic: 'Local volunteers, supporters and community partners help make Mission to Seafarers Newfoundland and Labrador possible.',
      involved_button_label: 'Contact the Newfoundland and Labrador Station',
      involved_button_link: '/contact',

      donate_eyebrow: 'Donate',
      donate_title: 'Help Care for Seafarers',
      donate_description: 'Every gift helps us provide hospitality, transportation, Wi-Fi, refreshments and a welcoming place for seafarers visiting Newfoundland and Labrador.',
      donate_bullets_title: 'You can:',
      donate_bullets: [
        { bullet: 'Become a monthly donor' },
        { bullet: 'Make a one-time gift' },
        { bullet: 'Support Mission to Seafarers Newfoundland and Labrador through Mission to Seafarers Canada' },
      ],
      donate_footer_italic: 'National donations and partnerships help strengthen the work of Mission to Seafarers Canada across the country. Donations are processed through Mission to Seafarers Canada in support of the Newfoundland and Labrador station and the wider Mission across Canada.',
      donate_button_label: 'Donate Now',
      donation_iframe_url: 'https://www.canadahelps.org/en/dn/73316',
    },
  })

  console.log('🎉 MtscnlHomePage Global seeded successfully with 100% of the content!')
  process.exit(0)
}

seedMtscnlHome().catch((err) => {
  console.error('❌ Error seeding MtscnlHomePage:', err)
  process.exit(1)
})