import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscColbernContact() {
  console.log('Seeding MtscColbernContactPage Global into PostgreSQL with Port Colborne Brief Data...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtsc-colbern-contact-page' as any,
    data: {
      // TAB 1: HERO
      hero_badge_text: 'Contact',
      hero_title: 'Get in Touch',
      hero_subtitle:
        'Reach our local chaplain or send an enquiry about visiting ships, practical support, volunteering or partnerships.',
      hero_bg_image: null,

      // TAB 2: LOCAL CONTACT DETAILS
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

      // TAB 3: GENERAL ENQUIRY FORM
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

  console.log('✅ MtscColbernContactPage seeded successfully with Port Colborne Brief Data!')
  process.exit(0)
}

seedMtscColbernContact().catch((err) => {
  console.error('❌ Failed to seed MtscColbernContactPage:', err)
  process.exit(1)
})
