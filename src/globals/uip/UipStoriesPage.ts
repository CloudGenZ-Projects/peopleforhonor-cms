import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const UipStoriesPage: GlobalConfig = {
  slug: 'uip-stories-page',
  label: 'UIP Stories Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'UIP',
    hidden: ({ user }) => isHiddenForUser(user, 'uip'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_UIP_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/stories`
      },
    },
  },
  access: {
    read: () => true,
    update: (args) => checkTenantAccess(args, 'uip'),
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // TAB 1: HERO
        {
          label: 'Hero Section',
          fields: [
            {
              name: 'hero_badge',
              label: 'Hero Badge',
              type: 'text',
              defaultValue: '📖 Voices of Resilience',
            },
            {
              name: 'hero_title_line_1',
              label: 'Hero Title Line 1',
              type: 'text',
              defaultValue: 'Stories of Courage,',
            },
            {
              name: 'hero_title_gradient',
              label: 'Hero Title Gradient Text',
              type: 'text',
              defaultValue: 'Hope & Belonging',
            },
            {
              name: 'hero_description',
              label: 'Hero Description',
              type: 'textarea',
              defaultValue:
                'Real journeys from LGBTQ+ newcomers finding safety, community, and themselves in Canada.',
            },
          ],
        },

        // TAB 2: COMMUNITY VOICES
        {
          label: 'Community Voices',
          fields: [
            {
              name: 'community_voices_title',
              label: 'Section Heading',
              type: 'text',
              defaultValue: 'Community Voices',
            },
            {
              name: 'community_voices_subtitle',
              label: 'Section Subtitle',
              type: 'text',
              defaultValue: 'Inspiring journeys of resilience and growth',
            },
          ],
        },

        // TAB 3: SHARE STORY
        {
          label: 'Share Your Story',
          fields: [
            {
              name: 'share_story_badge',
              label: 'Emoji Badge / Icon',
              type: 'text',
              defaultValue: '✍️',
            },
            {
              name: 'share_story_title',
              label: 'Heading',
              type: 'text',
              defaultValue: 'Share Your Story',
            },
            {
              name: 'share_story_description',
              label: 'Description',
              type: 'textarea',
              defaultValue:
                'Your journey matters. Help inspire others by sharing your experience with our community.',
            },
          ],
        },

        // TAB 4: CTA
        {
          label: 'Call to Action',
          fields: [
            {
              name: 'cta_title',
              label: 'CTA Heading',
              type: 'text',
              defaultValue: 'Every Story Matters',
            },
            {
              name: 'cta_description',
              label: 'CTA Description',
              type: 'textarea',
              defaultValue:
                'Your journey can light the way for others. Join our community and help create a world where every LGBTQ+ person can live authentically and safely.',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'cta_primary_label',
                  label: 'Primary Button Label',
                  type: 'text',
                  defaultValue: 'Join Our Community',
                },
                {
                  name: 'cta_primary_link',
                  label: 'Primary Button Link',
                  type: 'text',
                  defaultValue: '/programs',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'cta_secondary_label',
                  label: 'Secondary Button Label',
                  type: 'text',
                  defaultValue: 'Learn More',
                },
                {
                  name: 'cta_secondary_link',
                  label: 'Secondary Button Link',
                  type: 'text',
                  defaultValue: '/about',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
