import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedAll() {
  console.log('🚀 Starting full Port Colborne CMS seed...')
  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')
  const payload = await getPayload({ config })

  // 1. HOME
  console.log('Seeding MtscColbernHomePage...')
  await payload.updateGlobal({
    slug: 'mtsc-colbern-home-page' as any,
    data: {
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
      trust_stats: [
        { n: 'PORT COLBORNE', l: 'On Lake Erie at the southern entrance to the Welland Canal' },
        { n: 'SOUTHERN ONTARIO', l: 'Serving seafarers through the Toronto, Hamilton, Oshawa and Port Colborne network' },
        { n: 'GLOBAL MISSION', l: 'Connected to care in more than 200 ports worldwide' },
      ],
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
      haircut_eyebrow: 'Local Story',
      haircut_title: 'More Than Ships Passing Through',
      haircut_description:
        'Cargo carriers and cruise vessels pass through the Great Lakes, but the people working on board can easily go unseen. Seafarers are navigators, engineers, cooks, hospitality professionals, deck crew and many others. Every one of them deserves dignity, understanding and access to support, whatever the vessel they work on.',
      haircut_subtext:
        'Deacon Annette Hoare is the published local contact for the Port Colborne and Welland Canal area. Seafarers and ship representatives can contact her to ask about support or a possible visit.',
      haircut_btn_label: 'Contact Annette',
      haircut_iframe_url: 'tel:+19053280300',
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
  console.log('✅ MtscColbernHomePage seeded.')

  // 2. ABOUT
  console.log('Seeding MtscColbernAboutPage...')
  await payload.updateGlobal({
    slug: 'mtsc-colbern-about-page' as any,
    data: {
      hero_eyebrow: 'About Port Colborne',
      hero_title: 'Our Story Along the Welland Canal',
      hero_subtitle:
        'A local expression of an international mission of care, serving people whose work brings them through the Great Lakes.',
      hero_cta_label: 'Meet Our Local Contact',
      hero_cta_link: '#chaplain',
      hero_bg_image: null,
      history_eyebrow: 'People Behind the Vessels',
      history_title: 'Our Work, Our Community, Our Commitment',
      history_blocks: [
        {
          era: 'OUR PORT',
          title: 'A Community Connected to the Great Lakes',
          paragraphs: [
            {
              text: 'Port Colborne sits where Lake Erie meets the southern entrance to the Welland Canal. This location connects the community directly to the movement of ships and the people who crew them.',
            },
          ],
          image: null,
        },
        {
          era: 'OUR PEOPLE',
          title: 'Seafarers Aboard Visiting Vessels',
          paragraphs: [
            {
              text: 'Seafarers aboard commercial ships and cruise vessels work long days far from home, with limited opportunities to rest, communicate with family, or speak privately about a concern.',
            },
          ],
          image: null,
        },
        {
          era: 'OUR PURPOSE',
          title: 'Welcoming Care Along the Canal',
          paragraphs: [
            {
              text: 'Mission to Seafarers exists to recognise the human side of maritime life. Here in Port Colborne, that purpose is expressed through local chaplaincy, ship visiting, and connections to wider seafarer welfare resources.',
            },
          ],
          image: null,
        },
      ],
      team_eyebrow: 'Local Leadership',
      team_title: 'Meet Deacon Annette Hoare',
      leader_heading: 'Local Chaplain & Ship Visitor',
      leader_name: 'DEACON ANNETTE HOARE',
      leader_image: null,
      leader_paragraphs: [
        {
          text: 'Deacon Annette Hoare is listed by Mission to Seafarers Southern Ontario as the principal contact for Port Colborne. The international Mission also lists her as a chaplain and ship visitor serving Port Colborne, Port Weller, and Hamilton.',
        },
        {
          text: 'For assistance, pastoral support, or enquiries about visiting ships along the Welland Canal, Annette can be contacted directly by phone at +1 905-328-0300 or by email at revannette@caecc.ca.',
        },
      ],
      team_members: [],
      board_title: 'Regional Leadership & Board',
      board_members: [],
      structure_eyebrow: 'One Mission. Local Presence. Connected Care.',
      structure_title: 'Connected in Purpose Across Canada and Worldwide',
      structure_cards: [
        {
          org_title: 'THE INTERNATIONAL MISSION',
          description:
            'A worldwide maritime welfare network offering practical, emotional and spiritual help to seafarers across 200+ ports.',
        },
        {
          org_title: 'MISSION TO SEAFARERS CANADA',
          description:
            'A national connection among Canadian Mission stations and partners strengthening maritime welfare across the country.',
        },
        {
          org_title: 'MISSION TO SEAFARERS SOUTHERN ONTARIO',
          description:
            'An independent regional welfare organisation serving Toronto, Hamilton, Oshawa and Port Colborne.',
        },
        {
          org_title: 'PORT COLBORNE LOCAL TEAM',
          description:
            'A local chaplaincy point of contact for visiting seafarers along the Welland Canal, led by Deacon Annette Hoare.',
        },
      ],
      structure_bottom_quote:
        'Port Colborne is supported within the wider Southern Ontario network of chaplains, volunteers, and organisational leadership.',
      cta_title: 'A Port Community That Cares',
      cta_description:
        'Help extend a warm welcome to the people who keep the Great Lakes moving.',
      cta_btn1_label: 'Get Involved',
      cta_btn1_link: '/get-involved',
      cta_btn2_label: 'Contact Us',
      cta_btn2_link: '/contact',
    },
  })
  console.log('✅ MtscColbernAboutPage seeded.')

  // 3. SUPPORT
  console.log('Seeding MtscColbernSupportPage...')
  await payload.updateGlobal({
    slug: 'mtsc-colbern-support-page' as any,
    data: {
      hero_badge_text: 'Seafarer Support',
      hero_title: 'Support While You Are in Port Colborne',
      hero_subtitle:
        'Wherever you are from and whatever your role on board, you are welcome to contact us. We offer a listening ear, local guidance and help finding appropriate support while your vessel is in the area.',
      hero_bg_image: null,
      quick_access_title: 'How Can We Help You Today?',
      barber_whatsapp_url: '',
      parcel_portal_url: '',
      haircut_iframe_url: '',
      chaplain_whatsapp_url: 'https://wa.me/19053280300',
      reassurance_title: 'You Are Not Alone',
      reassurance_intro:
        'Whether you work aboard a commercial cargo carrier or a cruise ship, our network is here for you:',
      reassurance_image: null,
      reassurance_points: [
        { text: 'Our network can provide a friendly ship visit when arranged and permitted.' },
        { text: 'We offer conversation, emotional and spiritual care without discrimination.' },
        { text: 'We can discuss welfare concerns and help identify relevant assistance.' },
        { text: 'We can respond to enquiries about practical local needs, subject to availability.' },
        { text: 'We can direct you to the global Mission’s wider support network when needed.' },
      ],
      how_it_works_title: 'Getting Support Is Simple',
      step1_title: 'Choose the type of help you need.',
      step2_title: 'Call, email or complete a brief enquiry form with your vessel name if applicable.',
      step3_title: 'Our local team will respond when available or direct you to the appropriate support service.',
      urgent_contact_note:
        'If anyone is in immediate danger, follow onboard emergency procedures and contact port emergency services immediately.',
      immediate_help_title: 'Need Help Now?',
      phone_label: '+1 905-328-0300',
      phone_tel: '+19053280300',
      contact_whatsapp_url: 'https://wa.me/19053280300',
      contact_email: 'revannette@caecc.ca',
      find_station_link: 'https://www.missiontoseafarers.org/contact-a-chaplain',
      welfare_email: 'crewhelp@mtsmail.org',
      happy_sea_title: 'Happy@Sea App',
      happy_sea_desc:
        'Connect with global maritime welfare support and information using the Mission’s digital service.',
      app_store_url: 'https://www.mtsso.org/happy-at-sea-app',
      play_store_url: 'https://www.mtsso.org/happy-at-sea-app',
      visit_title: 'Visiting Port Colborne?',
      address_line1: 'On Lake Erie at the southern entrance to the Welland Canal',
      address_line2: 'Port Colborne, Ontario',
      opening_hours_text:
        'Please check opening hours and availability directly before travelling ashore.',
      map_embed_url:
        'https://www.mtsso.org/_files/ugd/f99248_93a1e029ae084d139d8cb5c8c1239278.pdf',
      team_title: 'Your Local Chaplain',
      team_subtitle: 'Deacon Annette Hoare is the published Port Colborne contact.',
      chaplain_name: 'Deacon Annette Hoare',
      chaplain_role: 'Local Chaplain & Ship Visitor',
      chaplain_image: null,
      language_title: 'Welcome Without Discrimination',
      language_subtitle:
        'You do not need to be Christian or follow any religion to ask for help. Every seafarer is welcome here.',
    },
  })
  console.log('✅ MtscColbernSupportPage seeded.')

  // 4. GET INVOLVED
  console.log('Seeding MtscColbernGetInvolvedPage...')
  await payload.updateGlobal({
    slug: 'mtsc-colbern-get-involved-page' as any,
    data: {
      hero_badge_text: 'Get Involved',
      hero_title: 'Be Part of the Welcome',
      hero_subtitle:
        'A warm welcome in port begins with people who choose to care. Whether you volunteer, contribute resources or build a partnership, your support can make a difference to seafarers far from home.',
      hero_bg_image: null,
      donate_eyebrow: 'Ways to Give',
      donate_title: 'Help Care for Seafarers',
      donate_description:
        'Support Mission to Seafarers Southern Ontario and its wider work of providing practical, emotional and spiritual care to visiting crews.',
      monthly_card_title: 'MAKE A DONATION',
      monthly_card_desc:
        'Support Mission to Seafarers Southern Ontario and its wider work of providing practical, emotional and spiritual care to visiting crews.',
      monthly_bullets: [
        { text: 'Direct your gift to support visiting crew welfare across Southern Ontario ports' },
        { text: 'Enable ship visits and compassionate pastoral support along the Welland Canal' },
        { text: 'Charitable tax receipts issued through Mission to Seafarers Southern Ontario' },
      ],
      monthly_btn_label: 'Donate via Southern Ontario',
      onetime_card_title: 'DISCUSS REGULAR GIVING',
      onetime_card_desc:
        'Interested in ongoing support? Contact the Southern Ontario team to explore regular giving or discuss a targeted gift.',
      onetime_btn_label: 'Contact Southern Ontario',
      donate_footer_note:
        'All donations are securely processed and receipted by Mission to Seafarers Southern Ontario.',
      canadahelps_iframe_url: 'https://www.mtsso.org/support-us',
      ways_eyebrow: 'Participation Pathways',
      ways_title: 'Ways You Can Take Part',
      ways_bg_image: null,
      inkind_title: 'VOLUNTEER WITH THE MISSION',
      inkind_desc:
        'Support ship visiting, hospitality or community outreach through the approved Southern Ontario volunteering pathway.',
      inkind_bullets: [
        { text: 'Apply through the official Southern Ontario volunteer application process' },
        { text: 'Participate in ship visitor training and safety orientations' },
        { text: 'Help extend warm community welcome to international seafarers' },
      ],
      amazon_wishlist_url: 'https://www.mtsso.org/volunteering',
      amazon_wishlist_label: 'Apply to Volunteer',
      partnership_title: 'COMMUNITY AND BUSINESS PARTNERSHIPS',
      partnership_desc:
        'Work with us through your company, church or civic group to support seafarer welfare along the Welland Canal.',
      partnership_bullets: [
        { text: 'Maritime sector companies and port operators' },
        { text: 'Local churches and faith communities' },
        { text: 'Civic organisations and service clubs' },
      ],
      partnership_note:
        'IN-KIND AND SEASONAL SUPPORT: Contribute care items, knitwear or holiday gifts for crews visiting during cold weather and special occasions.',
      cta_title: 'Ready to Make a Difference?',
      cta_description:
        'Every act of hospitality helps a seafarer feel remembered and valued while far from home.',
      cta_donate_label: 'Support Our Mission',
      cta_volunteer_label: 'Volunteer via MTSSO',
      cta_contact_label: 'Contact Our Team',
    },
  })
  console.log('✅ MtscColbernGetInvolvedPage seeded.')

  // 5. CONTACT
  console.log('Seeding MtscColbernContactPage...')
  await payload.updateGlobal({
    slug: 'mtsc-colbern-contact-page' as any,
    data: {
      hero_badge_text: 'Contact',
      hero_title: 'Get in Touch',
      hero_subtitle:
        'Reach our local chaplain or send an enquiry about visiting ships, practical support, volunteering or partnerships.',
      hero_bg_image: null,
      station_title: 'Local Chaplaincy Contact',
      station_subtitle: 'Deacon Annette Hoare',
      station_location_text: 'Welland Canal & Port Colborne, Ontario',
      station_email: 'revannette@caecc.ca',
      station_phone_display: '+1 905-328-0300',
      station_phone_tel: '+19053280300',
      station_hours_text: 'Available for visiting ship coordination and seafarer enquiries.',
      info_paragraphs: [
        {
          text: 'Deacon Annette Hoare is listed by Mission to Seafarers Southern Ontario as the principal contact for Port Colborne.',
        },
        {
          text: 'If you have an urgent seafarer welfare concern, please call directly. For immediate life-safety emergencies, contact 911 or local port emergency services.',
        },
      ],
      form_title: 'General Enquiry',
      form_subtitle:
        'Complete the form below and the appropriate team will respond when available.',
      form_action_url: '/api/contact-inquiry',
      form_interests: [
        { label: 'Request a Ship Visit' },
        { label: 'General Seafarer Support' },
        { label: 'Welfare Concern' },
        { label: 'Volunteering' },
        { label: 'Partnership' },
        { label: 'Donations' },
        { label: 'Other' },
      ],
      form_submit_label: 'Submit Enquiry',
    },
  })
  console.log('✅ MtscColbernContactPage seeded.')

  // 6. EVENTS
  console.log('Seeding MtscColbernEventsPage...')
  await payload.updateGlobal({
    slug: 'mtsc-colbern-events-page' as any,
    data: {
      hero_title: 'Community, Connection and Care',
      hero_subtitle:
        'Stories, activities and occasions that bring people together in support of the seafarers visiting Port Colborne and the Welland Canal.',
      hero_btn_label: 'Get Involved',
      hero_bg_image: null,
      featured_badge: 'Community Notice',
      featured_title: 'Upcoming Activities',
      featured_image: null,
      featured_theme: 'Welland Canal Chaplaincy',
      featured_subtheme: 'Port Colborne Community',
      featured_date: 'Ongoing Care',
      featured_location: 'Port Colborne, Ontario',
      featured_desc_p1:
        'There are no Port Colborne events announced on this website at the moment. Please check back for updates, or contact our team if you would like to explore a community activity or partnership.',
      featured_desc_p2:
        'Our story is shaped by ship visits, relationships and thoughtful acts of support. As local photos and approved stories become available, we will share glimpses of the people and partnerships that make this work possible.',
      featured_btn_label: 'Enquire About an Activity',
      modal_title: 'Enquire About an Activity',
      highlights_list: [
        {
          iconKey: 'Users',
          title: 'Community Partnerships',
          description: 'Explore hosting an event or partnering with local maritime care.',
        },
      ],
      modal_close_label: 'Close',
      carousel_title: 'Stories From Our Community',
      carousel_gallery: [],
      cta_title: 'Help Build a Welcoming Port',
      cta_description:
        'Whether through an approved local initiative, volunteering or a community partnership, there are practical ways to take part.',
      cta_btn1_label: 'Become a Volunteer',
      cta_btn1_link: 'https://www.mtsso.org/volunteering',
      cta_btn2_label: 'Discuss a Partnership',
      cta_btn2_link: '/contact?type=partnership',
      cta_btn3_label: 'Donate',
      cta_btn3_link: 'https://www.mtsso.org/support-us',
    },
  })
  console.log('✅ MtscColbernEventsPage seeded.')

  // 7. HEADER
  console.log('Seeding MtscColbernHeader...')
  await payload.updateGlobal({
    slug: 'mtsc-colbern-header' as any,
    data: {
      header_logo: null,
      brand_title: 'PORT COLBORNE',
      brand_subtitle: 'Mission to Seafarers',
      nav_items: [
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
        { label: 'Seafarer Support', to: '/support' },
        { label: 'Get Involved', to: '/get-involved' },
        { label: 'Contact', to: '/contact' },
        { label: 'Events', to: '/events' },
      ],
      parcel_btn_label_full: 'Request a Ship Visit',
      parcel_btn_label_short: 'Ship Visit',
      parcel_btn_link: '/contact?type=ship-visit',
      prayer_btn_label: 'Contact a Chaplain',
      prayer_btn_link: '/contact',
      donate_btn_label: 'Donate',
      donate_dialog_title: 'Support Mission to Seafarers Port Colborne',
      donate_iframe_url: 'https://www.mtsso.org/support-us',
    },
  })
  console.log('✅ MtscColbernHeader seeded.')

  // 8. FOOTER
  console.log('Seeding MtscColbernFooter...')
  await payload.updateGlobal({
    slug: 'mtsc-colbern-footer' as any,
    data: {
      footer_logo: null,
      brand_title: 'Mission to Seafarers',
      brand_subtitle: 'PORT COLBORNE',
      about_text:
        'A local presence along the Welland Canal, connecting seafarers with welcome, practical care and a wider community of support.',
      explore_title: 'Explore',
      nav_links: [
        { label: 'About', href: '/about' },
        { label: 'Seafarer Support', href: '/support' },
        { label: 'Get Involved', href: '/get-involved' },
        { label: 'Contact', href: '/contact' },
        { label: 'Events', href: '/events' },
      ],
      station_col_title: 'Local Contact',
      location_text: 'Deacon Annette Hoare · +1 905-328-0300',
      email: 'revannette@caecc.ca',
      national_col_title: 'Connected Care',
      national_text:
        'Part of Mission to Seafarers Southern Ontario, connected with Mission to Seafarers Canada and the international Mission.',
      copyright_text:
        '© Mission to Seafarers Port Colborne · Southern Ontario. All rights reserved.',
      bottom_subtext:
        'Serving seafarers along the Welland Canal and Great Lakes waterways.',
    },
  })
  console.log('✅ MtscColbernFooter seeded.')

  console.log('🎉 ALL 8 Port Colborne globals seeded successfully into PostgreSQL!')
  process.exit(0)
}

seedAll().catch((err) => {
  console.error('❌ Failed to seed Port Colborne globals:', err)
  process.exit(1)
})
