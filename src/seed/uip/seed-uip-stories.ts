import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedUipStories() {
  console.log('Seeding UipStoriesPage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'uip-stories-page' as any,
    data: {
      // TAB 1: HERO
      hero_badge: '📖 Voices of Resilience',
      hero_title_line_1: 'Stories of Courage,',
      hero_title_gradient: 'Hope & Belonging',
      hero_description:
        'Real journeys from LGBTQ+ newcomers finding safety, community, and themselves in Canada.',

      // TAB 2: COMMUNITY VOICES
      community_voices_title: 'Community Voices',
      community_voices_subtitle: 'Inspiring journeys of resilience and growth',

      // TAB 3: SHARE STORY
      share_story_badge: '✍️',
      share_story_title: 'Share Your Story',
      share_story_description:
        'Your journey matters. Help inspire others by sharing your experience with our community.',

      // TAB 4: CTA
      cta_title: 'Every Story Matters',
      cta_description:
        'Your journey can light the way for others. Join our community and help create a world where every LGBTQ+ person can live authentically and safely.',
      cta_primary_label: 'Join Our Community',
      cta_primary_link: '/programs',
      cta_secondary_label: 'Learn More',
      cta_secondary_link: '/about',
    },
  })

  console.log('✅ UipStoriesPage Global seeded successfully!')
  process.exit(0)
}

seedUipStories().catch((err) => {
  console.error('❌ Error seeding UipStoriesPage:', err)
  process.exit(1)
})
