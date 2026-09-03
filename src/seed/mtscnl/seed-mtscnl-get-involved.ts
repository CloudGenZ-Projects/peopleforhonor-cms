import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscnlGetInvolved() {
  console.log('Seeding MtscnlGetInvolvedPage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtscnl-get-involved-page' as any,
    data: {
      hero_badge: 'Get Involved',
      hero_title: 'Get Involved with Mission to Seafarers Newfoundland and Labrador',
      hero_subtitle: 'Whether you volunteer, donate, attend an event or simply help us welcome a seafarer, you become part of a connected network of care reaching from Newfoundland and Labrador to ports around the world.',
      hero_button_label: 'Get Involved',

      involved_title: 'Help Us Welcome Seafarers to Newfoundland and Labrador',
      involved_description: 'There are many ways to support our station and the seafarers we serve. You can:',
      involved_bullets: [
        { text: 'Volunteer at the station or during local events' },
        { text: 'Donate snacks, refreshments, gift cards, furniture or supplies' },
        { text: 'Support haircut and wellness services for seafarers' },
        { text: 'Help furnish and maintain a welcoming station space' },
        { text: 'Support a local project or event' },
        { text: 'Become a community or business partner' },
      ],
      involved_footer: 'Local volunteers, supporters and community partners help make Mission to Seafarers Newfoundland and Labrador possible.',
      involved_button_label: 'Contact the Newfoundland and Labrador Station',
      involved_button_link: '/contact',

      donate_title: 'Help Care for Seafarers',
      donate_description: 'Every gift helps us provide hospitality, transportation, Wi-Fi, refreshments and a welcoming place for seafarers visiting Newfoundland and Labrador.',
      donate_bullets_title: 'You can:',
      donate_bullets: [
        { text: 'Become a monthly donor' },
        { text: 'Make a one-time gift' },
        { text: 'Support Mission to Seafarers Newfoundland and Labrador through Mission to Seafarers Canada' },
      ],
      donate_footer: 'National donations and partnerships help strengthen the work of Mission to Seafarers Canada across the country. Donations are processed through Mission to Seafarers Canada in support of the Newfoundland and Labrador station and the wider Mission across Canada.',
      donate_button_label: 'Donate Now',
      donate_iframe_url: 'https://www.canadahelps.org/en/dn/145961',

      ways_eyebrow: 'Other Ways to Help',
      ways_title: 'Choose How You Would Like to Support',
      ways_cards: [
        { title: 'Donate Goods', desc: 'Wish list & in-kind gifts' },
        { title: 'Partner With Us', desc: 'Corporate & community support' },
        { title: 'Volunteer', desc: 'Share your time & skills' },
      ],

      inkind_title: 'In-Kind Gifts',
      inkind_description: 'We are always grateful for donations that help us create a welcoming space. Examples include:',
      inkind_bullets: [
        { text: 'Snacks and refreshments' },
        { text: 'Gift cards' },
        { text: 'Technology and Wi-Fi support' },
        { text: 'Haircut supplies and personal care items' },
        { text: 'Furniture and lounge items for the station' },
      ],
      inkind_button_1_label: 'Donate Goods Form',
      inkind_button_2_label: 'Order from our wishlist',
      inkind_button_2_link: 'https://www.amazon.ca/hz/wishlist/ls/3C9KTQNHTZ0NM?ref_=wl_fv_le.',

      partner_title: 'Partnership Options',
      partner_description: 'We welcome support from local businesses, schools, and groups. You can support:',
      partner_bullets: [
        { text: 'Local events & Volunteer activities' },
        { text: 'Hospitality and care for seafarers' },
        { text: 'Station furnishings and supplies' },
        { text: 'Haircut and wellness services' },
      ],
      partner_button_label: 'Partner with the Newfoundland and Labrador Station',
      partner_footer: 'For larger corporate partnerships and national giving opportunities, please visit Mission to Seafarers Canada.',

      ecard_eyebrow: 'Send a Card',
      ecard_title: 'Send a Seafarer a Card',
      ecard_description: 'Send a handwritten or digital card with words of encouragement, holiday wishes, or simple thanks. Brighten a seafarer’s day with a message of hope and encouragement! Your message will be printed and displayed at our Seafarers’ Centres for visiting crew members to read and feel supported.',
      ecard_steps: [
        { title: 'Step 1: Choose Your eCard Design', desc: 'Select from our beautiful collection of seafarer-themed eCards.' },
        { title: 'Step 2: Select a Charity', desc: 'Search and select “Mission to Seafarers Canada” as your charity of choice. (This step may be required by the donation platform to complete your submission.)' },
        { title: 'Step 3: Add Your Message and Optional Donation', desc: 'Write a thoughtful message or prayer for the seafarers. Add a donation if you’d like to support our mission—your gift helps provide meals, mental health support, and more.' },
      ],
      ecard_summary_title: 'Once submitted, we will:',
      ecard_summary_bullets: [
        { text: '📄 Print your eCard and message.' },
        { text: '📌 Display it at one of our Seafarers’ Centers.' },
        { text: '🤝 Share your support with the visiting crew who may be far from home.' },
      ],
      ecard_summary_callout: '💙 Thank you for sending kindness across the sea.\nEvery word matters.',
      ecard_button_label: 'Send Ecard',
      ecard_button_link: 'https://www.canadahelps.org/en/donate/ecard-donation/',

      cta_title: 'Every Act of Kindness Makes a Difference',
      cta_description: 'From a warm drink and a haircut to a monthly donation or a few hours of volunteering, every act of support helps remind seafarers that they are not alone.',
      cta_btn_1_label: 'Donate Now',
      cta_btn_2_label: 'Become a Volunteer',
      cta_btn_3_label: 'Contact the Station',
      cta_btn_3_link: '/contact',
      cta_btn_4_label: 'Order from our wishlist',
      cta_btn_4_link: 'https://www.amazon.ca/hz/wishlist/ls/3C9KTQNHTZ0NM?ref_=wl_fv_le.',
    },
  })

  console.log('🎉 MtscnlGetInvolvedPage Global seeded successfully!')
  process.exit(0)
}

seedMtscnlGetInvolved().catch((err) => {
  console.error('❌ Error seeding MtscnlGetInvolvedPage:', err)
  process.exit(1)
})