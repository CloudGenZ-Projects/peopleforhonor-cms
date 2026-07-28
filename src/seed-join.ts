import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

const communityImages = [
  {
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0007.jpg',
    alt: 'Community hangout',
  },
  {
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0008.jpg',
    alt: 'Community gathering',
  },
  {
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0010.jpg',
    alt: 'Community event',
  },
  {
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0009.jpg',
    alt: 'Community members',
  },
  {
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0011.jpg',
    alt: 'Community activity',
  },
  {
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0005.jpg',
    alt: 'Community support',
  },
]

const onetimeImpactItems = [
  { amount: '$5 →', text: 'Support our core programs' },
  { amount: '$10 →', text: 'One résumé/LinkedIn coaching session' },
  { amount: '$15 →', text: 'Barbershop training kit and sanitation materials' },
  { amount: '$20 →', text: 'Entrepreneurship Launchpad resources and mentor office hours' },
]

const monthlyWhyItems = [
  { text: 'Predictable support helps us plan programs' },
  { text: 'Convenient automatic payments' },
  { text: 'Cancel or adjust anytime' },
]

const otherCards = [
  {
    title: 'Corporate Partnerships',
    description: 'Sponsor a cohort, match employee gifts, or support a campaign',
    btn_text: 'Partner with PFH',
    btn_url: 'https://docs.google.com/forms/d/e/1FAIpQLSfcNagXyfbUpyI6Xeo5IXjcRulJQqDJMN7w6XbqZi9ZpwWzzw/viewform',
  },
  {
    title: 'In-Kind Gifts',
    description: 'Laptops, sewing fabric/notions, barber tools, printing, space, snacks',
    btn_text: 'Offer an In-Kind Gift',
    btn_url: 'https://docs.google.com/forms/d/e/1FAIpQLSf8i0d7h0kfIn2iv4bnAHK35pUP3r3SmRO7RLWkkkEqjjy5lw/viewform',
  },
  {
    title: 'Volunteer Your Expertise',
    description: 'Become a coach or mentor (2–4 hrs/month)',
    btn_text: 'Volunteer with PFH',
    btn_url: 'https://docs.google.com/forms/d/e/1FAIpQLSfcNagXyfbUpyI6Xeo5IXjcRulJQqDJMN7w6XbqZi9ZpwWzzw/viewform',
  },
  {
    title: 'Host a Community Fundraiser',
    description: 'From classroom drives to office challenges—make it yours',
    btn_text: 'Start a Fundraiser',
    btn_url: 'https://www.zeffy.com/en-CA/peer-to-peer/raising-funds-raising-futures-for-newcomers',
  },
]

async function seed() {
  console.log('Seeding JoinUsPage Global with 100% exact text and 6 bottom images...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('./payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'join-us-page',
    data: {
      hero_title: 'Ways to Give',
      hero_subtitle:
        'Be part of a community that believes in the potential of every immigrant. Together, we can create lasting change and build a more inclusive Canada.',
      hero_button_text: 'Get Involved Today',
      hero_tagline:
        'We are a non-profit ORG Empowering you to discover your inner eagle , Coaching you to soar, and Mentoring you to stay focused. Join us to empower others or be empowered!',
      hero_whatsapp_text: 'Join us on WhatsApp',
      hero_whatsapp_url: 'https://chat.whatsapp.com/HSUmX0TTqpxDEIkJWZXRMv',

      give_heading: "Give in a Way That's Meaningful to You",
      give_description:
        'Your generosity lifts newcomers and neighbours: helping more people learn, belong, and move forward. Think big. Belong fully. Give back.',

      onetime_title: 'One-Time Donation',
      onetime_description:
        'Make a quick, secure gift online. Even a small donation makes a real difference—every dollar helps fuel workshops, coaching, mentorship, and community circles.',
      onetime_impact_heading: 'Examples of Impact:',
      onetime_impact_items: onetimeImpactItems,
      onetime_button_text: 'Make a One-Time Donation',
      onetime_button_url: 'https://www.zeffy.com/en-CA/donation-form/people-for-honor-donate',

      monthly_title: 'Monthly Giving',
      monthly_description:
        'Monthly gifts give us reliable support and give you convenience and flexibility. Consider $10/$15/$20 per month to sustain program seats, coaching matches, and community sessions all year.',
      monthly_why_heading: 'Why Monthly Giving?',
      monthly_why_items: monthlyWhyItems,
      monthly_button_text: 'Raising Futures Every Month',
      monthly_button_url: 'https://www.zeffy.com/embed/donation-form/raising-futures-every-month?modal=true',

      honour_title: 'Give in Honour or in Memory',
      honour_desc: 'Recognize a loved one, mentor, or community leader with a tribute gift.',
      honour_btn_text: 'Donate in Honour/Memory',
      honour_btn_url: 'https://www.zeffy.com/embed/donation-form/give-in-honour-or-in-memory?modal=true',

      securities_title: 'Donate Securities',
      securities_desc: 'Donate stocks, mutual funds, or ETFs. Avoid capital gains tax while maximizing impact.',
      securities_btn_text: 'Donate Securities',
      securities_btn_url:
        'https://docs.google.com/forms/d/e/1FAIpQLSeCFnInCVyyaS5FA3-BYdb5nrjO45x3A1jVhYuQ76DpjGYcTA/viewform',

      corporate_title: 'Corporate Partnerships',
      corporate_desc: 'Sponsor a cohort, match employee gifts, or support a campaign.',
      corporate_btn_text: 'Sponsor a Program',
      corporate_btn_url:
        'https://www.zeffy.com/embed/donation-form/corporate-partnerships-sponsor-a-program?modal=true',

      other_heading: 'Other Ways to Support People for Honor',
      other_cards: otherCards,

      etransfer_title: 'e-Transfer / Cheque',
      etransfer_email: 'info@peopleforhonor.com',
      etransfer_cheque: 'Pay to People for Honor, mail to: 1505 laperrieve Ave Suite 506 Ottawa, ON, K127T1',

      stay_heading: 'Stay Connected',
      stay_description: 'Be first to hear about programs, events, and impact stories.',
      stay_email: 'info@peopleforhonor.com',
      stay_phone: '613 672 7062',
      stay_address: '1505 laperrieve Ave Suite 506\nOttawa, ON, K127T1',
      stay_btn_text: 'Join Our Mailing List',

      gallery_heading: 'community Gathering',
      gallery_description: 'At People for Honor, we believe in the power of hope to transform lives.',
      community_images: communityImages,
    },
  })

  console.log('JoinUsPage Global seeded successfully with 100% exact text and 6 bottom images!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Failed to seed JoinUsPage:', err?.message || err)
  process.exit(1)
})
