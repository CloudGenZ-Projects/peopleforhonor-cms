import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscWaysToGive() {
  console.log('Seeding MtscWaysToGivePage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtsc-waystogive-page' as any,
    data: {
      // TAB 1: HERO SECTION
      hero_eyebrow: '✦ Support Our Mission',
      hero_title: 'Get Involved with Mission to Seafarers Halifax',
      hero_subtitle:
        'There are many ways to support Mission to Seafarers Halifax and help create a welcoming place for seafarers arriving at the Port of Halifax. Whether you choose to volunteer, donate, provide in-kind support, or partner with us, your support helps ensure that seafarers feel cared for, connected, and welcomed while they are far from home.',

      // TAB 2: DONATION OPTIONS
      donate_eyebrow: 'DONATE',
      donate_title: 'Donate – Help Care for Seafarers',
      donate_subtitle:
        'Every gift helps us provide hospitality, practical support, transportation, Wi-Fi, refreshments, haircuts, and a welcoming place for seafarers visiting Halifax.',
      monthly_title: 'Monthly Giving',
      monthly_desc:
        'Become a monthly donor and help provide ongoing care and support for seafarers throughout the year. Monthly gifts help us plan ahead.',
      monthly_tier_1: '/month can help provide refreshments and hospitality',
      monthly_tier_2: '/month can help support transportation and communication',
      monthly_tier_3: '/month can help provide care, comfort, and practical assistance',
      monthly_btn_text: 'Become a Monthly Donor',
      onetime_title: 'One-Time Gift',
      onetime_desc:
        'Make a one-time donation to support Mission to Seafarers Halifax and the work of Mission to Seafarers Canada. Your gift can help create a welcoming station space, support local programs, and care for seafarers when they arrive in Halifax.',
      onetime_btn_text: 'Make a One-Time Gift',
      events_title: 'Purchase Event Tickets',
      events_desc:
        'Join us at our upcoming events! Select an event from the list below and purchase your tickets to show your support.',
      events_btn_text: 'Get Tickets',
      events_list: [
        {
          event_name: 'Annual Christmas Luncheon',
          event_url:
            'https://www.canadahelps.org/en/charities/missions-to-seamen-maritimes/events/annual-christmas-luncheon',
        },
        {
          event_name: 'Mission to Seafarers Halifax Car Rally',
          event_url:
            'https://www.canadahelps.org/en/charities/missions-to-seamen-maritimes/events/mission-to-seafarers-halifax-car-rally',
        },
        {
          event_name: 'MtS Golf Tournament',
          event_url:
            'https://www.canadahelps.org/en/charities/missions-to-seamen-maritimes/events/mts-golf-tournament',
        },
        {
          event_name: 'Take-Out Luncheons',
          event_url:
            'https://www.canadahelps.org/en/charities/missions-to-seamen-maritimes/events/takeout-luncheons',
        },
        {
          event_name: 'Mission to Seafarers Halifax Cruise Raffle',
          event_url:
            'https://www.canadahelps.org/en/charities/missions-to-seamen-maritimes/events/mission-to-seafarers-halifax-cruise-raffle',
        },
      ],
      donate_footer_text:
        'Every donation made through this page directly supports Mission to Seafarers Halifax, helping us provide care, practical assistance, and a welcoming community for seafarers visiting the Port of Halifax.',

      // TAB 3: WAYS TO HELP (6 CARDS)
      help_eyebrow: 'WAYS TO HELP',
      help_title: 'Choose How You Would Like to Support',
      sponsorship_title: 'Partner Through Sponsorship',
      sponsorship_items: [
        { item_text: 'Fund a Project' },
        { item_text: 'Sponsor a Program' },
        { item_text: 'Sponsor an Event' },
      ],
      sponsorship_btn_text: 'Sponsor Now →',
      workplace_title: 'Engage Your Workplace',
      workplace_desc: 'Empower your team to make a difference together.',
      workplace_items: [
        {
          item_text: 'Workplace or Payroll Giving',
          item_url: 'https://portal.healthpartners.ca/servlet/eAndar.article/30',
        },
        { item_text: 'Employer Matching Gifts' },
        { item_text: 'Volunteer Grants' },
        { item_text: 'Union or Association Partnerships' },
      ],
      workplace_btn_text: 'Get Your Team Involved →',
      awareness_title: 'Awareness Through Purpose',
      awareness_desc: 'Host an event on our behalf:',
      awareness_items: [
        { item_text: 'Birthdays' },
        { item_text: 'Bake sales' },
        { item_text: 'Knitting groups' },
        { item_text: 'Garage sales' },
      ],
      awareness_btn_text: 'Start Fundraising →',
      awareness_btn_link: 'https://fundraising.mtsc.ca/',
      volunteer_title: 'Volunteer with Us',
      volunteer_desc:
        'By sharing your time and skills, you can help ensure seafarers are welcomed with kindness.',
      volunteer_items: [
        { item_text: 'Help at the station' },
        { item_text: 'Support local events' },
        { item_text: 'Visit ships alongside our team' },
        { item_text: 'Assist with hospitality & support' },
        { item_text: 'Donate to the clothing bank' },
        { item_text: 'Share professional skills or services' },
      ],
      volunteer_btn_text: 'Become a Volunteer →',
      partnership_title: 'Explore Customized Partnerships',
      partnership_desc:
        'Connect with our team to find a fit that realizes your philanthropic goals across Halifax’s Port.',
      partnership_btn_text: 'Contact Us →',
      inkind_title: 'In-Kind Gifts',
      inkind_desc: 'We are always grateful for items that help create a comfortable space:',
      inkind_items: [
        { item_text: 'Snacks & Refreshments' },
        { item_text: 'Gift cards & Wi-Fi support' },
        { item_text: 'Office & Personal care items' },
        { item_text: 'Clothing for Seafarers' },
      ],
      inkind_wishlist_text: 'View Amazon Wishlist →',
      inkind_wishlist_link:
        'https://www.amazon.ca/hz/wishlist/ls/3C9KTQNHTZ0NM/ref=hz_ls_biz_ex',
      inkind_contact_text: 'Contact About In-Kind →',

      // TAB 4: PARTNERS & SPONSORS
      partners_title: 'Our Corporate & Maritime Partners',
      partners_subtitle:
        'Recognizing the local and international organizations that stand alongside us in supporting seafarers’ welfare in Halifax.',
      community_title: 'Community & Business Partners',
      community_desc_1:
        'We welcome support from local businesses, organizations, schools, faith communities, and community groups. Partnering with the Mission will provide your organization with extraordinary and rewarding relationship opportunities.',
      community_desc_2:
        'You can support local events, volunteer activities, hospitality, and community awareness initiatives. For customized packages, please complete the partnership inquiry form, and our team will connect with you directly.',
      btn_partner_text: 'Partner with Halifax Mission',
      btn_national_text: 'National Partnerships',
      btn_national_link: 'https://mtsc.ca/contact/',
      star_card_title: 'STAR\nProgram',
      star_card_desc:
        'Join an elite group of recurring sponsors dedicated to seafarer welfare.',
      corp_card_title: 'Corporate\nPackage',
      corp_card_desc:
        'Customized sponsorship packages designed for maximum CSR impact.',

      // TAB 5: STAR CLUB MEMBERS
      star_club_title: 'Star Club Members',
      star_club_subtitle:
        'THANK YOU to our elite sponsors without whom we could not offer our service.',
      star_club_members: [
        { member_name: 'Atlantic Towing Ltd' },
        { member_name: 'Atship Services Ltd' },
        { member_name: 'Atlantic Container Line' },
        { member_name: 'Atlantic Pilotage Authority' },
        { member_name: 'Blue Water Agencies Ltd.' },
        { member_name: 'Canadian Institute of Marine Engineering' },
        { member_name: 'Canadian Steamship Lines' },
        { member_name: 'Colley Motorships Ltd' },
        { member_name: 'CN' },
        { member_name: 'Diocese Synod of NS & PE' },
        { member_name: 'Edmonds Landscape & Construction Services Ltd.' },
        { member_name: 'F.K.Warren Ltd' },
        { member_name: 'Leeway Marine' },
        { member_name: 'NAMMA' },
        { member_name: 'AON' },
        { member_name: 'Federal Fleet Services' },
        { member_name: 'The Halifax Pilots' },
        { member_name: 'Halifax Port Authority' },
        { member_name: 'Holland America Line' },
        { member_name: 'Logistec Stevedoring' },
        { member_name: 'Metcalf & Company' },
        { member_name: 'International Sailors’ Society Canada' },
        { member_name: 'Cathedral of all Saints' },
        { member_name: 'Partner International Inc.' },
        { member_name: 'P & H Milling Group' },
        { member_name: 'Protos Shipping Ltd.' },
        { member_name: 'Svitzer Canada Ltd.' },
        { member_name: 'Wallenius Willhelmsen Logistics' },
        { member_name: 'ZIM Integrated Shipping Services Ltd.' },
      ],
      btn_sponsor_now_text: 'Become a Sponsor',

      // TAB 6: FINAL CALL TO ACTION
      cta_title: 'Every Act of Kindness Makes a Difference',
      cta_desc:
        'From a warm drink and a haircut to a monthly donation or a few hours of volunteering, every act of support helps remind seafarers that they are not alone.',
      btn_donate_text: 'Donate Now',
      btn_volunteer_text: 'Become a Volunteer',
      btn_contact_text: 'Contact Halifax Mission',
      btn_wishlist_text: 'Gift from Wishlist',
      btn_wishlist_link:
        'https://www.amazon.ca/hz/wishlist/ls/3C9KTQNHTZ0NM/ref=hz_ls_biz_ex',
    },
  })

  console.log('🎉 MtscWaysToGivePage Global seeded successfully with 100% of all section-wise content!')
  process.exit(0)
}

seedMtscWaysToGive().catch((err) => {
  console.error('❌ Error seeding MtscWaysToGivePage:', err)
  process.exit(1)
})
