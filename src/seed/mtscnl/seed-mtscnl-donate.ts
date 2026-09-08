import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscnlDonate() {
  console.log('Seeding MtscnlDonatePage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtscnl-donate-page' as any,
    data: {
      hero_background_image: null,
      hero_eyebrow: "Donate",
      hero_title: "Help care for seafarers visiting Toronto",
      hero_description: "Every gift helps us provide hospitality, transportation, Wi-Fi, refreshments, haircuts, and a welcoming place for seafarers far from home.",
      hero_primary_cta_label: "Become a Monthly Donor",
      hero_primary_cta_link: "#monthly",
      hero_secondary_cta_label: "Make a One-Time Gift",
      hero_secondary_cta_link: "#one-time",

      monthly_title: "Become a Monthly Donor",
      monthly_description: "Monthly gifts help us plan ahead and ensure seafarers in Toronto always have access to the support they need.",
      monthly_tiers: [
        { amount: "$15", period: "/month", body: "Help provide refreshments and hospitality." },
        { amount: "$25", period: "/month", body: "Support transportation and communication needs." },
        { amount: "$50", period: "/month", body: "Provide care, comfort, and practical assistance for visiting crews." },
      ],
      monthly_button_label: "Become a Monthly Donor",
      monthly_button_link: "https://www.canadahelps.org/en/dn/145961",

      onetime_title: "Make a One-Time Donation",
      onetime_description: "Your gift helps create a welcoming station space, support local programs, and care for seafarers when they arrive in Toronto.",
      onetime_amounts: [
        { amount: "$50" },
        { amount: "$100" },
        { amount: "$250" },
      ],
      onetime_button_label: "Give Now",
      onetime_button_link: "https://www.canadahelps.org/en/dn/145961",
      onetime_footer: "All donations are processed through Mission to Seafarers Canada in support of the Toronto station and the national mission.",

      inkind_title: "Donate Goods or Services",
      inkind_description: "We are always grateful for in-kind gifts that help us create a welcoming and comfortable space for seafarers — from snacks to furniture to professional services.",
      inkind_btn1_label: "Contact About In-Kind",
      inkind_btn1_link: "/contact",
      inkind_btn2_label: "View Wish List",
      inkind_btn2_link: "/get-involved",
      inkind_items: [
        { text: "Snacks and refreshments" },
        { text: "Gift cards" },
        { text: "Technology and Wi-Fi support" },
        { text: "Office supplies" },
        { text: "Haircut and personal care" },
        { text: "Professional services" },
        { text: "Event support" },
        { text: "Furniture & lounge items" },
      ],

      cta_background_image: null,
      cta_title: "Support locally. Give nationally. Care globally.",
      cta_description: "Donations sustain the work of Mission to Seafarers Canada and the Toronto station.",
      cta_btn1_label: "Volunteer Locally",
      cta_btn1_link: "/get-involved",
      cta_btn2_label: "Contact Toronto",
      cta_btn2_link: "/contact",
    },
  })

  console.log('🎉 MtscnlDonatePage Global seeded successfully with Image Edit options added!')
  process.exit(0)
}

seedMtscnlDonate().catch((err) => {
  console.error('❌ Error seeding MtscnlDonatePage:', err)
  process.exit(1)
})