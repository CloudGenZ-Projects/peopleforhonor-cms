import { getPayload } from 'payload'
import config from '../../payload.config'

async function seed() {
  console.log('Seeding UipInvolvedPage Global into PostgreSQL...')
  const payload = await getPayload({ config })

  const involvedData = {
    heroBadge: 'Systemic Change',
    heroTitleLine1: 'Partnership',
    heroTitleGradient: 'Opportunities',
    heroDescription:
      'Join us in creating systemic change and building more inclusive communities. Together, we can expand our reach and impact for LGBTQ+ newcomers across Canada.',
    heroPrimaryBtnText: 'Work With Us',
    heroPrimaryBtnLink: '/Partnership',
    heroSecondaryBtnText: 'View Programs',
    heroSecondaryBtnLink: '/programs',

    volunteerHeading: 'Volunteer With Us',
    volunteerSubtitle: 'Every contribution helps create safer spaces and stronger communities.',
    volunteerRoles: [
      {
        title: 'Program Facilitators',
        desc: 'Lead wellness circles, workshops, and support groups.',
        iconType: 'users',
      },
      {
        title: 'Event Coordinators',
        desc: 'Help organize community dinners and social events.',
        iconType: 'calendar',
      },
      {
        title: 'Peer Mentors',
        desc: 'Provide one-on-one support and guidance.',
        iconType: 'heart',
      },
      {
        title: 'Admin Support',
        desc: 'Help with communications, outreach, and operations.',
        iconType: 'message',
      },
    ],

    impactStats: [
      { val: '250+', label: 'People Supported', desc: 'LGBTQ+ newcomers reached' },
      { val: '45', label: 'Active Volunteers', desc: 'Dedicated members' },
      { val: '120', label: 'Events Hosted', desc: 'Gatherings & sessions' },
      { val: '15', label: 'Countries', desc: 'Diverse backgrounds' },
    ],

    donationHeading: 'Make a Donation',
    donationBtnText: 'Donate Now 💜',
    donationBtnLink: '/donate',
    donationTiers: [
      { amount: '$25', impact: 'Supports one person in a wellness circle session' },
      { amount: '$50', impact: 'Provides materials for a cultural workshop' },
      { amount: '$100', impact: 'Sponsors a community dinner for 20 people' },
      { amount: '$250', impact: 'Funds transportation support for a month' },
    ],

    corporateHeading: 'Corporate Partnerships',
    corporateDesc:
      'Partner with us to create workplace inclusion, sponsor community events, or organize team volunteering opportunities.',
    corporateLinkText: 'Work With Us',
    corporateLinkUrl: '/Partnership',
    corporateFeatures: [
      { title: 'Workplace Inclusion', desc: 'Training & consulting services' },
      { title: 'Event Sponsorship', desc: 'Direct impact workshops' },
    ],

    ctaHeading: 'Ready to Make a Difference?',
    ctaPrimaryText: 'Start Volunteering',
    ctaPrimaryLink: '/volunteer',
    ctaSecondaryText: 'Make a Donation',
    ctaSecondaryLink: '/donate',
  }

  await payload.updateGlobal({
    slug: 'uip-involved-page' as any,
    data: involvedData as any,
  })

  console.log('✅ UipInvolvedPage seeded successfully!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Error seeding UipInvolvedPage:', err)
  process.exit(1)
})
