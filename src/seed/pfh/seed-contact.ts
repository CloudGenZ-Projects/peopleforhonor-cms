import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seed() {
  console.log('Seeding ContactPage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'contact-page' as any,
    data: {
      contact_heading: 'Get in Touch',
      contact_description:
        "Have questions about our programs or want to get involved? We'd love to hear from you. Fill out the form below or reach out directly.",
      contact_phone: '613 672 7062',
      contact_email: 'info@peopleforhonor.com',
      contact_address: '1505 Laperriere Ave Suite 506, Ottawa, ON K1Z 7T1',
      contact_hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
      contact_box_title: "We're Here for You",
      contact_box_text:
        "Your success is our mission. Don't hesitate to reach out - we're committed to supporting your journey in Canada.",
      zeffy_embed_1_url:
        'https://www.zeffy.com/en-CA/embed/newsletter-form/sign-up-for-our-newsletter-1932',
      zeffy_embed_2_url:
        'https://www.zeffy.com/en-CA/embed/newsletter-form/join-our-mailing-list-18',
    },
  })

  console.log('ContactPage Global seeded successfully!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Failed to seed ContactPage:', err?.message || err)
  process.exit(1)
})
