import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscColbernSupport() {
  console.log('Seeding MtscColbernSupportPage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtsc-colbern-support-page' as any,
    data: {
      // TAB 1: HERO
      hero_badge_text: 'Seafarer Support',
      hero_title: 'Support While You’re at Port',
      hero_subtitle:
        'Wherever you’re from, you are welcome here.\nWe’re here to support you with practical help, connection, and care while you’re in Toronto.',
      hero_bg_image: null,

      // TAB 2: QUICK ACCESS LINKS
      quick_access_title: 'How Can We Help You Today?',
      barber_whatsapp_url: 'https://wa.me/14272588449',
      parcel_portal_url: 'https://parcelservice.mtsc.ca',
      haircut_iframe_url: 'https://fadekingzmobilebarber.square.site/',
      chaplain_whatsapp_url: 'https://wa.me/16472953219',

      // TAB 3: REASSURANCE
      reassurance_title: 'You Are Not Alone',
      reassurance_intro: 'We support seafarers from around the world with:',
      reassurance_image: null,
      reassurance_points: [
        { text: 'Free Wi-Fi access' },
        { text: 'Transportation assistance' },
        { text: 'Friendly conversation and a place to relax' },
        { text: 'Emotional and spiritual support' },
        { text: 'Help with practical needs while in port' },
      ],

      // TAB 4: HOW IT WORKS
      how_it_works_title: 'Getting Support is Easy',
      step1_title: 'Choose the service you need',
      step2_title: 'Fill out a quick request form',
      step3_title: 'Our team will contact you shortly',
      urgent_contact_note: 'If urgent, contact us directly below.',

      // TAB 5: IMMEDIATE HELP & APP
      immediate_help_title: 'Need Immediate Help?',
      phone_label: 'Phone: +1 647-295-3219',
      phone_tel: '+16472953219',
      contact_whatsapp_url: 'https://wa.me/16472953219',
      contact_email: 'glutenfreepriest@gmail.com',
      find_station_link: 'https://mtsc.ca/contact/#find-station',
      welfare_email: 'crewhelp@mtsmail.org',
      happy_sea_title: 'Happy at Sea App',
      happy_sea_desc: 'Connect instantly with a chaplain via our 24hr chat service.',
      app_store_url: 'https://apps.apple.com/us/app/happy-at-sea/id6447320913',
      play_store_url: 'https://play.google.com/store/apps/details?id=org.missiontoseafarers.app&hl=en_IN',

      // TAB 6: LOCATION & TEAM
      visit_title: 'Visit Us at the Port of Toronto',
      address_line1: 'Cruise Ship Terminal',
      address_line2: '8 Unwin Avenue, Toronto',
      opening_hours_text: 'Check with our team for daily operating hours.',
      map_embed_url:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.497161490382!2d-79.347566!3d43.63782369999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb1d39382c3d%3A0x48c47df25b0c53d3!2s8%20Unwin%20Ave%2C%20Toronto%2C%20ON%20M5A%203L1%2C%20Canada!5e0!3m2!1sen!2sin!4v1777293037926!5m2!1sen!2sin',
      team_title: 'Meet Your Support Team',
      team_subtitle: 'Our team is here to welcome you, listen, and support you during your time in port.',
      chaplain_name: 'Rev. Judith Alltree',
      chaplain_role: 'Station Chaplain',
      chaplain_image: null,
      language_title: 'We Welcome Seafarers from Around the World',
      language_subtitle: 'If English is not your first language, we will do our best to support you.',
    },
  })

  console.log('✅ MtscColbernSupportPage Global seeded successfully with 100% Support content!')
  process.exit(0)
}

seedMtscColbernSupport().catch((err) => {
  console.error('❌ Error seeding MtscColbernSupportPage:', err)
  process.exit(1)
})