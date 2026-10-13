import { getPayload } from 'payload'
import config from '../../payload.config'

async function seed() {
  console.log('Seeding UipDonatePage Global into PostgreSQL...')
  const payload = await getPayload({ config })

  const donateData = {
    heroBadge: 'Get Involved',
    heroTitleLine1: 'Join Us in Building a',
    heroTitleGradient: 'National Movement',
    heroDescription:
      "Together, we're creating lasting change for LGBTQ+ newcomers across Canada. Your voice, your time, and your support make all the difference.",
    heroPrimaryBtnText: 'Apply to Volunteer',
    heroPrimaryBtnLink: '/volunteer#apply-form',
    heroSecondaryBtnText: 'Give Now',
    heroSecondaryBtnLink: '/donate',

    zeffyDonationUrl: 'https://www.zeffy.com/en-CA/donation-form/youre-not-alone',
    taxDeductibleNote: 'Secure Tax-Deductible Donation',
    impactHeading: 'Your Impact',
    impactQuote:
      '"Every contribution helps create a safe and welcoming space for those fleeing persecution."',
    impactTiers: [
      { amount: 25, displayAmount: '$25', desc: 'One wellness circle session for a newcomer' },
      { amount: 50, displayAmount: '$50', desc: 'Essential workshop materials and legal resources' },
      { amount: 100, displayAmount: '$100', desc: 'Community dinner and networking for 20 people' },
      { amount: 250, displayAmount: '$250', desc: 'Monthly transportation support for participants' },
    ],
  }

  await payload.updateGlobal({
    slug: 'uip-donate-page' as any,
    data: donateData as any,
  })

  console.log('✅ UipDonatePage seeded successfully!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Error seeding UipDonatePage:', err)
  process.exit(1)
})
