import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscnlContact() {
  console.log('Seeding MtscnlContactPage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtscnl-contact-page' as any,
    data: {
      hero_badge: 'Contact Us',
      hero_title: 'We want to hear from you!',
      hero_subtitle: 'Whether it’s by email, social media, or LinkedIn — we want to hear from you!',
      
      info_title: 'Newfoundland and Labrador Station',
      info_subtitle: 'Need to contact our Newfoundland and Labrador station directly?',
      address_line1: '687 Water Street, 2nd Floor',
      address_line2: "St. John's, NL A1E 1B5",
      email: 'info@missiontoseafarersnl.ca',
      phone_label: '+1 514-501-0590',
      phone_link: '+15145010590',
      hours: 'Mon-Fri 9:00AM - 5:00PM',
      
      map_iframe_url: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2690.244206463253!2d-52.69266400000001!3d47.601941000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0ca148b3fca06f%3A0xbca2e587c54ade57!2sSt.%20John&#39;s%2C%20NL%20A1A%205N8%2C%20Canada!5e0!3m2!1sen!2sus!4v1780885325679!5m2!1sen!2sus',
      form_title: 'Contact us',
      form_description: 'Have questions about our services? Want to get involved or support our mission? We’re here to connect. We look forward to connecting with you!',
      
      global_title: 'Our ports and Seafarers Centers',
      global_description_prefix: 'For information on the ports we serve or to reach a local Seafarers’ Centre, please visit our',
      global_link_text: 'national website',
      global_link_url: 'https://mtsc.ca/',
      global_description_suffix: '.',
      global_button_label: 'Visit National Website',
    },
  })

  console.log('🎉 MtscnlContactPage Global seeded successfully!')
  process.exit(0)
}

seedMtscnlContact().catch((err) => {
  console.error('❌ Error seeding MtscnlContactPage:', err)
  process.exit(1)
})