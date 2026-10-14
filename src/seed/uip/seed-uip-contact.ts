import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seed() {
  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  console.log('Seeding UipContactPage Global into PostgreSQL...')
  const payload = await getPayload({ config })

  const contactData = {
    heroBadge: 'Get in Touch',
    heroTitleLine1: "We'd Love to",
    heroTitleGradient: 'Hear From You',
    heroDescription:
      "Reach out with questions, ideas, or to learn more about joining our community. We're here to support you on your journey.",

    formTitle: 'Send Us a Message',
    formSubtitle: 'Fill out the form below and our team will get back to you.',
    connectHeading: 'Connect With Us',
    contactEmail: 'info@unitedinpride.ca',
    contactEmailSub: 'We typically respond within 24–48 hours',
    socialHandle: '@unitedinpride',
    socialSub: 'Prefer a quicker response? Reach out via social media',
    whatsappUrl: 'https://whatsapp.com/channel/0029VbC7CIMJpe8eQBfVNN3K',
    whatsappSub: 'Stay connected with our WhatsApp community',
    locationTitle: 'Ottawa, Ontario',
    locationSub: 'Programs are hosted at trusted community partner spaces across the city',
    availabilityTitle: 'Our team operates flexibly to support community needs.',
    availabilitySub:
      'Most responses are provided within 24–48 hours.\nYour information is kept confidential and used only to support you and connect you to appropriate resources.',
    followHeading: 'Follow Our Journey',
    followSub: 'Stay updated with our events, stories, and community highlights',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d8805.130692564679!2d-75.68435945241849!3d45.37935242108252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d21.547494!2d78.60014749999999!4m5!1s0x4cce0609e36febf7%3A0x840991e9373515c1!2s2451%20Riverside%20Dr.%2C%20Ottawa%2C%20ON%20K1H%207X7%2C%20Canada!3m2!1d45.382172999999995!2d-75.6833748!5e0!3m2!1sen!2sin!4v1774372991048!5m2!1sen!2sin',

    crisisBadge: 'Immediate Crisis Support',
    crisisHeading: 'Need Help Right Away?',
    crisisDescription:
      "If you're in immediate danger or having thoughts of self-harm, please reach out. You are not alone. These services are free, confidential, and available 24/7.",
    crisisItems: [
      { label: 'Emergency Services', val: '911', desc: 'Immediate Danger' },
      { label: 'Talk Suicide Canada', val: '1-833-456-4566', desc: 'Call Anytime 24/7' },
      { label: 'LGBT National Hotline', val: '1-866-585-0445', desc: 'Peer Support' },
      { label: 'Crisis Text Line', val: 'HOME to 741741', desc: 'Text Support' },
    ],
  }

  await payload.updateGlobal({
    slug: 'uip-contact-page' as any,
    data: contactData as any,
  })

  console.log('✅ UipContactPage seeded successfully with exact original content!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Error seeding UipContactPage:', err)
  process.exit(1)
})
