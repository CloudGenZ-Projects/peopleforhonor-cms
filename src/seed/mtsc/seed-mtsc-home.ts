import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscHome() {
  console.log('Seeding MtscHomePage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtsc-home-page' as any,
    data: {
      eyebrow_badge: '✦ A local presence. Part of something larger.',
      title_line_1: 'Mission to',
      title_line_2: 'Seafarers Halifax',
      hero_strong_text:
        'At the Port of Halifax, seafarers arrive after time at sea, sometimes for days, weeks and even months. Mission to Seafarers Halifax is here during that window.',
      hero_paragraph:
        'Mission to Seafarers Halifax is here during that window. We step aboard ships with a warm welcome, offer rides into town, provide connection through SIM cards and Wi-Fi, and simply listen to whatever is on a seafarer\'s heart.',
      hero_badge_number: '85+',
      hero_badge_text_1: 'Legacy',
      hero_badge_text_2: 'Years',
      intro_eyebrow: 'How We Help',
      intro_title: 'How We Support the World’s Seafarers in Canada',
      intro_subtitle:
        'As part of a 160+ year legacy, we provide practical, emotional, and community-based support for seafarers while they are in port ensuring no one feels alone.',
      intro_paragraphs:
        'Mission to Seafarers Canada provides the national leadership, fund development, partnerships, and support that strengthen stations across the country.\n\nAt the Port of Halifax, that work becomes direct.\n\nHere, we offer seafarers a welcoming place where they can rest, connect with loved ones, access practical help, receive a haircut, and know that they are not alone.',
      service_1_eyebrow: 'At the Station',
      service_1_title: 'Community Connection',
      service_1_description:
        'Refreshments and a comfortable place to sit, pause, and reconnect with loved ones in a welcoming station space.',
      service_1_link_text: 'Come Visit Us at the Station',
      service_1_link_url: '/contact',
      service_2_eyebrow: 'Logistics',
      service_2_title: 'Seafarers Parcel Pickup Service',
      service_2_description:
        'Order essentials online and have them delivered securely to our station for pickup when you dock.',
      service_2_link_text: 'Send Your Parcel',
      service_2_link_url: 'https://parcelservice.mtsc.ca/',
      stats_percentage: '90%',
      stats_percentage_label:
        'of world trade is carried by sea. The clothes we wear, the cars we drive, the food on our tables',
      pillars_eyebrow: 'How We Work',
      pillars_title: 'Practical, Emotional, and Spiritual Care at Sea & Shore',
      pillars_subtitle:
        'Seafarers face unique challenges — months away from family, dangerous conditions, and isolation. We meet them with compassion, respect, and tangible support.',
      support_eyebrow: 'Get Involved',
      support_title: 'How You Can Support Seafarers',
      support_subtitle:
        'Your generosity keeps our doors open, our van running, and our care active for seafarers arriving in Halifax.',
    },
  })

  console.log('🎉 MtscHomePage Global seeded successfully!')
  process.exit(0)
}

seedMtscHome().catch((err) => {
  console.error('❌ Failed to seed MtscHomePage:', err?.message || err)
  process.exit(1)
})
