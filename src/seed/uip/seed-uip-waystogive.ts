import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedUipWaysToGive() {
  console.log('Seeding UipWaysToGivePage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'uip-waystogive-page' as any,
    data: {
      // TAB 1: HERO
      hero_badge: 'Join the Movement',
      hero_title_line_1: 'Ways to',
      hero_title_gradient: 'Give & Support',
      hero_description:
        'Whether through a financial gift, community partnership, or sharing our mission, you are helping build a safe, affirming space for LGBTQ+ newcomers in Ottawa.',

      // TAB 2: WAYS TO GIVE TIERS
      donate_title: 'Make a Financial Donation',
      donate_description:
        'Every dollar directly supports newcomer peer groups, crisis navigation, and our affirming community space in Ottawa.',
      donate_btn_label: 'Donate Online via Zeffy',
      donate_btn_link: 'https://www.zeffy.com/en-CA/donation-form/united-in-pride',
      donate_etransfer_email: 'Unitedinpridec@gmail.com',
      carepack_title: 'Sponsor a Care Pack',
      carepack_description:
        'Support newcomers with hygiene essentials, culturally affirming items, and winter warmth packages.',
      carepack_btn_label: 'Donate a Care Pack',
      carepack_btn_link: 'https://www.zeffy.com/en-CA/donation-form/united-in-pride',

      // TAB 3: PARTNERSHIP & SHARE
      partner_form_title: 'Partner With Us',
      partner_form_desc:
        'We welcome partnerships with organizations, businesses, and groups that align with our mission to empower LGBTQ+ newcomers.',
      share_work_title: 'Share Our Work',
      share_work_desc:
        'Not everyone can donate, and that is okay. Sharing our work is one of the most powerful ways to help. Follow us, invite others to our events, and help us spread the word.',
      share_work_quote: 'Awareness creates connection. Connection creates belonging.',
    },
  })

  console.log('✅ UipWaysToGivePage Global seeded successfully!')
  process.exit(0)
}

seedUipWaysToGive().catch((err) => {
  console.error('❌ Error seeding UipWaysToGivePage:', err)
  process.exit(1)
})
