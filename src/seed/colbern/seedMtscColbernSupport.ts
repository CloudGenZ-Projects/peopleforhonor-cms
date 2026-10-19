import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscColbernSupport() {
  console.log('Seeding MtscColbernSupportPage Global into PostgreSQL with Port Colborne Brief Data...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtsc-colbern-support-page' as any,
    data: {
      // TAB 1: HERO
      hero_badge_text: 'Seafarer Support',
      hero_title: 'Support While You Are in Port Colborne',
      hero_subtitle:
        'Wherever you are from and whatever your role on board, you are welcome to contact us. We offer a listening ear, local guidance and help finding appropriate support while your vessel is in the area.',
      hero_bg_image: null,

      // TAB 2: QUICK ACCESS & SERVICE LINKS
      quick_access_title: 'How Can We Help You Today?',
      barber_whatsapp_url: '',
      parcel_portal_url: '',
      haircut_iframe_url: '',
      chaplain_whatsapp_url: 'https://wa.me/19053280300',

      // TAB 3: REASSURANCE & SERVICES
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

      // TAB 4: HOW IT WORKS
      how_it_works_title: 'Getting Support Is Simple',
      step1_title: 'Choose the type of help you need.',
      step2_title: 'Call, email or complete a brief enquiry form with your vessel name if applicable.',
      step3_title: 'Our local team will respond when available or direct you to the appropriate support service.',
      urgent_contact_note:
        'If anyone is in immediate danger, follow onboard emergency procedures and contact port emergency services immediately.',

      // TAB 5: IMMEDIATE HELP / CONTACT CHANNELS
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

      // TAB 6: VISIT & LOCAL MAP
      visit_title: 'Visiting Port Colborne?',
      address_line1: 'On Lake Erie at the southern entrance to the Welland Canal',
      address_line2: 'Port Colborne, Ontario',
      opening_hours_text:
        'Please check opening hours and availability directly before travelling ashore.',
      map_embed_url:
        'https://www.mtsso.org/_files/ugd/f99248_93a1e029ae084d139d8cb5c8c1239278.pdf',

      // TAB 7: LOCAL TEAM & INCLUSION
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

  console.log('✅ MtscColbernSupportPage seeded successfully with Port Colborne Brief Data!')
  process.exit(0)
}

seedMtscColbernSupport().catch((err) => {
  console.error('❌ Failed to seed MtscColbernSupportPage:', err)
  process.exit(1)
})
