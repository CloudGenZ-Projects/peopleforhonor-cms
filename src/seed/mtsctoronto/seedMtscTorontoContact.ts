import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscTorontoContact() {
  console.log('Seeding MtscTorontoContactPage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtsc-toronto-contact-page' as any,
    data: {
      // TAB 1: HERO
      hero_badge_text: 'Contact',
      hero_title: 'Contact Mission to Seafarers Toronto',
      hero_subtitle: 'We would love to hear from you.',
      hero_bg_image: null,

      // TAB 2: STATION INFO
      station_title: 'Toronto Station',
      station_subtitle: 'Local support at the Port of Toronto.',
      station_location_text: 'Cruise Ship Terminal, 8 Unwin Ave, Toronto, ON M5A 1A1, Canada',
      station_email: 'glutenfreepriest@gmail.com',
      station_phone_display: '+1 416-469-5391',
      station_phone_tel: '+14164695391',
      station_hours_text: 'By appointment and during ship visits',

      // TAB 3: AFFILIATION INFO
      info_paragraphs: [
        { text: 'Mission to Seafarers Toronto operates as part of Mission to Seafarers Canada.' },
        { text: 'Local volunteer opportunities, station engagement, community support, and monthly and one-time donations are coordinated through the Toronto station.' },
        { text: 'Major gifts and national corporate partnerships are managed through the National Office, Mission to Seafarers Canada.' }
      ],

      // TAB 4: FORM SETTINGS
      form_title: 'Send Us a Message',
      form_subtitle: 'Whether you are a seafarer, volunteer, supporter, or community partner, we welcome your questions and inquiries.',
      form_action_url: 'https://docs.google.com/forms/d/e/1FAIpQLSdDRLf8Fjde4Y-q1oUmoa_5JAbmAFp5TeG0RV3qjyVL3Aabhg/formResponse',
      form_interests: [
        { label: 'Seafarer support' },
        { label: 'Volunteering' },
        { label: 'Donating goods or services' },
        { label: 'Local partnership' },
        { label: 'Media inquiry' },
        { label: 'Other' }
      ],
      form_submit_label: 'Submit Inquiry',
    },
  })

  console.log('✅ MtscTorontoContactPage Global seeded successfully with 100% Contact content!')
  process.exit(0)
}

seedMtscTorontoContact().catch((err) => {
  console.error('❌ Error seeding MtscTorontoContactPage:', err)
  process.exit(1)
})