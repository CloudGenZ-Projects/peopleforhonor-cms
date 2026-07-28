import dotenv from 'dotenv'

// Ensure .env is loaded before Payload initialization
dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seed() {
  console.log('Seeding HomePage Hero Section data...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('./payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'home-page',
    data: {
      hero_badge: 'Supporting Immigrants to Canada',
      hero_title: 'Trusted Help for Your',
      hero_title_highlight: 'Life in Canada',
      hero_subtitle:
        'Do more than survive in Canada! We provide Career Guidance & Support, mentorship, and community support to help newcomers thrive and build meaningful lives.',
      primary_cta_text: 'Find the Support You Need',
      primary_cta_link: '/programs',
      secondary_cta_text: 'Learn More About Us',
      secondary_cta_link: '/about',
      third_cta_text: 'Apply for our Computer Access Program',
      third_cta_link:
        'https://www.zeffy.com/en-CA/newsletter-form/computer-access-program-application',
      hero_stats: [
        {
          stat_number: '1000+',
          stat_label: 'Lives Impacted',
        },
        {
          stat_number: '50+',
          stat_label: 'Events Done',
        },
        {
          stat_number: '15+',
          stat_label: 'Countries Represented',
        },
      ],
    },
  })

  console.log('HomePage Hero Section seeded successfully!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Failed to seed HomePage:', err?.message || err)
  process.exit(1)
})
