import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscHome() {
  console.log('Seeding MtscHomePage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtsc-home-page' as any,
    data: {
      // TAB 1: HERO BANNER
      eyebrow_badge: '✦ A local presence. Part of something larger.',
      title_line_1: 'Mission to',
      title_line_2: 'Seafarers Halifax',
      hero_strong_text:
        'At the Port of Halifax, seafarers arrive after time at sea, sometimes for days, weeks and even months. Mission to Seafarers Halifax is here during that window.',
      hero_paragraph:
        'With practical support.\nWith a place to step off the vessel.\nWith people to speak to while they are ashore. As part of Mission to Seafarers Canada, this work is connected to a global network supporting seafarers in ports around the world.',
      hero_badge_number: '85+',
      hero_badge_text_1: 'Legacy',
      hero_badge_text_2: 'Years',
      hero_contact_button_text: 'Contact the Halifax Mission',
      hero_contact_button_url: '/contact',
      hero_donate_button_text: 'Donate',

      // TAB 2: HOW WE HELP (INTRO)
      intro_eyebrow: 'How We Help',
      intro_title: 'How We Support the World’s Seafarers in Canada',
      intro_subtitle:
        'As part of a 160+ year legacy, we provide practical, emotional, and community-based support for seafarers while they are in port ensuring no one feels alone.',
      intro_paragraphs:
        'Mission to Seafarers Canada provides the national leadership, fund development, partnerships, and support that strengthen stations across the country.\n\nAt the Port of Halifax, that work becomes direct.\n\nHere, we offer seafarers a welcoming place where they can rest, connect with loved ones, access practical help, receive a haircut, and know that they are not alone.',

      // TAB 3: SERVICE CARDS
      service_1_eyebrow: 'At the Station',
      service_1_title: 'Community Connection',
      service_1_description:
        'Refreshments and a comfortable place to sit, pause, and reconnect with loved ones in a welcoming station space.',
      service_1_link_text: 'Come Visit Us at the Station',
      service_1_link_url: '/contact',
      service_2_eyebrow: 'Logistics',
      service_2_title: 'Seafarers Parcel Pickup Service',
      service_2_description:
        'Order essentials online and have them delivered securely to our station for pickup when you dock.',
      service_2_link_text: 'Send Your Parcel',
      service_2_link_url: 'https://parcelservice.mtsc.ca/',

      // TAB 4: STATS SECTION
      stats_percentage: '90%',
      stats_percentage_label:
        'of world trade is carried by sea. The clothes we wear, the cars we drive, the food on our tables',
      stats_items: [
        {
          stat_number: '2,312',
          stat_label: 'Seafarers Supported',
          stat_description: 'Individual seafarers welcomed at our station or supported through ship visits.',
          stat_prefix: '+',
          stat_suffix: '',
        },
        {
          stat_number: '1,420',
          stat_label: 'Ship Visits Conducted',
          stat_description: 'Direct visits aboard vessels to offer care, SIM cards, and essentials.',
          stat_prefix: '+',
          stat_suffix: '',
        },
        {
          stat_number: '850',
          stat_label: 'Transportation Rides Provided',
          stat_description: 'Safe rides for seafarers between their vessel and city essentials.',
          stat_prefix: '+',
          stat_suffix: '',
        },
        {
          stat_number: '100',
          stat_label: 'Volunteers & Supporters',
          stat_description: 'Dedicated community members bringing hospitality to life in Halifax.',
          stat_prefix: '+',
          stat_suffix: '%',
        },
      ],

      // TAB 5: OUR NETWORK
      network_eyebrow: 'Our Network',
      network_title: 'Local In Presence.\nConnected In Purpose.',
      network_subtitle:
        'Practical support for those in port and a community effort that ensures no seafarer is alone.',
      network_paragraphs:
        'Mission to Seafarers Canada provides national leadership, partnerships, fundraising support, and shared resources that help strengthen stations across the country. In Halifax, Mission to Seafarers Halifax serves as a welcoming place of care and connection for seafarers arriving at one of Canada’s busiest ports.\n\nAt the Port of Halifax, that mission becomes personal.\n\nHere, seafarers can find a warm and welcoming space to rest, connect with loved ones, access practical support, receive transportation assistance, enjoy refreshments, participate in community activities, and know they are not alone while far from home.',

      // TAB 6: STATION SERVICES
      station_eyebrow: 'Station Services',
      station_title: 'Supporting Seafarers in Halifax',
      station_subtitle: 'As part of a 160+ year legacy, Seafarers visiting the Port of Halifax can access',
      station_box_title: 'How We Care for Seafarers',
      station_services_list: [
        { service_name: 'Friendly ship visits and hospitality' },
        { service_name: 'Transportation and local guidance' },
        { service_name: 'Access to a welcoming station space' },
        { service_name: 'Wi-Fi & Communication Tools' },
        { service_name: 'Refreshments and a comfortable place to sit, pause, and reconnect with loved ones' },
        { service_name: 'Emotional and spiritual support, if requested' },
        { service_name: 'Help during times of stress, isolation, or uncertainty' },
        { service_name: 'Access to local services' },
        { service_name: 'Clothing bank' },
      ],
      station_footer_text:
        'As the Halifax Mission develops, it continues to take shape around what seafarers need during their time ashore. As the Halifax Mission grows, we are creating a space',
      station_button_1_text: 'Learn More About Seafarer Support',
      station_button_1_url: '/whoweare',
      station_button_2_text: 'Seafarers send a parcel to our address for pickup',
      station_button_2_url: 'https://parcelservice.mtsc.ca/',

      // TAB 7: CLOTHING BANK
      clothing_eyebrow: 'A Small Service That Makes a Big Difference',
      clothing_title: 'Clothing Bank',
      clothing_paragraphs:
        'After extended periods at sea, small things can feel significant.\n\nAt Mission to Seafarers Halifax, we maintain a small clothing bank where seafarers can access warm clothing and essential items, including jackets, gloves, hats, and other seasonal necessities while visiting the Port of Halifax.',
      clothing_disclaimer:
        'Clothing support can be arranged in advance by seafarers, ship agents, or crew representatives. Availability is based on current inventory, volunteer capacity, and ship schedules.',
      clothing_button_1_text: 'Access Our Clothing Bank',
      clothing_button_1_url: '/contact',
      clothing_button_2_text: 'Contact the Halifax Mission',
      clothing_button_2_url: '/contact',

      // TAB 8: WHY HALIFAX MATTERS
      impact_eyebrow: 'Our Impact',
      impact_title: 'Why Halifax Matters',
      impact_subtitle: 'Welcoming Seafarers at the Port of Halifax',
      impact_paragraphs:
        'Halifax is one of Canada’s most important and historic ports, welcoming seafarers from around the world who help keep global trade and our communities moving every day. Many arrive with limited time ashore and few opportunities to rest, reconnect, or access support while in port.\n\nMission to Seafarers Halifax ensures that, when they arrive here, they are met with dignity, compassion, and a welcoming place of care and connection.\n\nMission to Seafarers Halifax operates locally, supported nationally, and connected globally through a network serving seafarers in more than 200 ports worldwide.',

      // TAB 9: GET INVOLVED
      involved_eyebrow: 'Support Us',
      involved_title: 'Get Involved',
      involved_subtitle: 'Help Us Welcome Seafarers to Halifax',
      involved_description: 'There are many ways to support the Halifax Mission and the seafarers we serve.',
      involvement_list: [
        { list_item_text: 'Volunteer at the station or during local events' },
        { list_item_text: 'Donate snacks, refreshments, gift cards, or supplies' },
        { list_item_text: 'Support haircut and wellness services for seafarers' },
        { list_item_text: 'Help furnish and create a welcoming station space' },
        { list_item_text: 'Support a local project or event' },
        { list_item_text: 'Become a community or business partner' },
      ],
      involved_footer_text:
        'For major donations, national sponsorships, monthly giving, and larger corporate partnerships, please connect with Mission to Seafarers Canada.',
      involved_button_1_text: 'Volunteer Locally',
      involved_button_1_url: '/contact',
      involved_button_2_text: 'Support the Halifax Mission',
      involved_button_3_text: 'Explore National Partnerships',
      involved_button_3_url: 'https://mtsc.ca/',

      // TAB 10: DONATE SECTION
      donate_eyebrow: 'Help Care for Seafarers',
      donate_title: 'Donate',
      donate_subtitle:
        'Every gift helps us provide hospitality, transportation, Wi-Fi, refreshments, haircuts, and a welcoming place for seafarers visiting Halifax.',
      donate_card_1_eyebrow: 'Recurring Giving',
      donate_card_1_title: 'Become a monthly donor',
      donate_card_1_description: 'Support Mission to Seafarers Halifax through Mission to Seafarers Canada',
      donate_card_1_button: 'Become a Monthly Donor',
      donate_card_2_eyebrow: 'One-Time Gift',
      donate_card_2_title: 'Make a one-time gift',
      donate_card_2_description: 'Support Mission to Seafarers Halifax through Mission to Seafarers Canada',
      donate_card_2_button: 'Make a One-Time Gift',
      donate_disclaimer:
        'Every donation made through this page directly supports Mission to Seafarers Halifax, helping us provide care, practical assistance, and a welcoming community for seafarers visiting the Port of Halifax.',
    },
  })

  console.log('🎉 MtscHomePage Global seeded successfully with 100% of all section-wise content!')
  process.exit(0)
}

seedMtscHome().catch((err) => {
  console.error('❌ Failed to seed MtscHomePage:', err?.message || err)
  process.exit(1)
})
