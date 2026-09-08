import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscnlSupport() {
  console.log('Seeding MtscnlSupportPage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtscnl-support-page' as any,
    data: {
      hero_background_image: null,
      hero_badge: 'For Seafarers',
      hero_title: 'Support While You’re at Port',
      hero_subtitle: 'Wherever you’re from, you are welcome here. We’re here to support you with practical help, connection and care while you’re in Newfoundland and Labrador.',
      
      quick_access_title: 'How Can We Support You Today?',
      quick_access_cards: [
        { id: 'visit', icon: 'Ship', title: 'Ship Visits', desc: 'Connect Us Today', isLink: false, isExternal: false, link: '' },
        { id: 'centre', icon: 'Home', title: 'Seafarers’ Centre', desc: 'Come visit us', isLink: false, isExternal: false, link: '' },
        { id: 'mental', icon: 'HeartHandshake', title: 'Mental Health Support', desc: 'Reach Out for Support', isLink: false, isExternal: false, link: '' },
        { id: 'explore', icon: 'Globe', title: 'Explore NL', desc: 'An Adventure Awaits', isLink: true, isExternal: true, link: 'https://www.newfoundlandlabrador.com/' },
      ],

      centre_image: null,
      centre_title: 'Seafarers’ Centre',
      centre_subtitle: 'A Welcoming Haven for Rest and Connection',
      centre_description: 'Our Seafarers’ Centre is a safe, welcoming space designed to help seafarers relax, recharge, and connect with loved ones. When you come ashore, you can access a variety of services, including',
      centre_bullets: [
        { text: 'Free Wi-Fi and phone charging' },
        { text: 'Comfortable lounge with snacks and drinks' },
        { text: 'Friendly volunteers available to assist' },
        { text: 'Local info and support resources on hand' },
      ],
      centre_button: 'Come visit us',

      transport_image: null,
      transport_title: 'Transportation Assistance',
      transport_subtitle: 'Making Your Time in Port Easier',
      transport_desc_1: 'Whether you’re staying on board or able to go ashore, our transportation assistance ensures your time in port is as comfortable as possible.',
      transport_bullets: [
        { text: 'If you can’t leave the ship, our volunteers can shop for essentials (SIM cards, toiletries, snacks) and deliver them directly to your vessel' },
        { text: 'If you’re able to go ashore, we can assist with transportation to nearby stores, pharmacies, or other locations to help you get what you need' },
      ],
      transport_desc_2: 'We strive to provide fast, friendly, and reliable service to make your visit as stress-free as possible.',
      transport_button: 'Request Transportation',

      ship_title: 'Ship Visits',
      ship_subtitle: 'Connecting Seafarers with Support in Newfoundland and Labrador',
      ship_description: 'At Mission to Seafarers Newfoundland and Labrador, we are committed to visiting every ship that arrives at our ports. Seafarers often face long voyages with limited access to support during their time in port. Our ship visits provide a vital connection by offering a friendly face, a listening ear, and practical assistance. These visits bridge the gap between life at sea and the world ashore, reminding seafarers that they are seen, valued, and cared for.',
      ship_callout: 'If you would like to learn more about our ship visit program or request a visit to your vessel, we would be happy to connect with you.',
      ship_button: 'Connect Us Today',

      religion_image: null,
      religion_title: 'Religious Services',
      religion_subtitle: 'Spiritual Support for All Beliefs',
      religion_description: 'Our chaplain is available to provide spiritual care, regardless of your faith tradition. Whether you seek Anglican, Catholic, Orthodox, or multi-faith services, we are here to support you. We also offer:',
      religion_bullets: [
        { text: 'Spiritual care and prayer are available upon request' },
        { text: 'Quiet space for personal reflection' },
        { text: 'Faith-based support for all beliefs' },
      ],
      religion_button: 'Let Us Connect with You',

      mental_title: 'Mental Health & Crisis Resources',
      mental_subtitle: 'Your Well-being is Our Priority',
      mental_description: 'Life at sea can be stressful, and our Mental Health & Crisis Resources provide confidential emotional and mental health support to seafarers in need:',
      mental_bullets: [
        { text: 'Pastoral care and emotional support from our trained team' },
        { text: 'Referrals to local mental health services and global seafarer support partners' },
        { text: 'Emergency crisis resources available 24/7' },
      ],
      mental_callout: 'You do not have to face challenges alone support is always available when you need it most.',
      mental_button: 'Reach Out for Support',

      explore_title: 'Explore Newfoundland & Labrador',
      explore_subtitle: 'An Adventure Awaits',
      explore_description: 'Newfoundland and Labrador offer unforgettable natural beauty, historic towns, and warm local hospitality. When you have time ashore, take the opportunity to explore our rugged coastlines, scenic landscapes, and vibrant culture.',
      explore_button: 'Explore Now',
      explore_link: 'https://www.newfoundlandlabrador.com/',
      explore_map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.250901896602!2d-52.69271455!3d47.601810799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0ca148b3fca06f%3A0xbca2e587c54ade57!2sSt.%20John&#39;s%2C%20NL%20A1A%205N8%2C%20Canada!5e0!3m2!1sen!2sin!4v1780888530650!5m2!1sen!2sin',
    },
  })

  console.log('🎉 MtscnlSupportPage Global seeded successfully with Image Fields mapped!')
  process.exit(0)
}

seedMtscnlSupport().catch((err) => {
  console.error('❌ Error seeding MtscnlSupportPage:', err)
  process.exit(1)
})