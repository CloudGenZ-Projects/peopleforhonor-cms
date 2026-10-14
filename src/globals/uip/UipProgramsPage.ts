import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const UipProgramsPage: GlobalConfig = {
  slug: 'uip-programs-page',
  label: 'UIP Programs Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'UIP',
    hidden: ({ user }) => isHiddenForUser(user, 'uip'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_UIP_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/programs`
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
              name: 'heroBadge',
              type: 'text',
              label: 'Badge',
              defaultValue: 'Community Support & Wellness',
            },
            {
              name: 'heroTitleLine1',
              type: 'text',
              label: 'Title Line 1',
              defaultValue: 'Heal, Empower, and',
            },
            {
              name: 'heroTitleGradient',
              type: 'text',
              label: 'Title Gradient Text',
              defaultValue: 'Connect',
            },
            {
              name: 'galleryImages',
              type: 'array',
              label: 'Gallery Images',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
            {
              name: 'heroCardTitle',
              type: 'text',
              label: 'Floating Card Title',
              defaultValue: 'Grounded in Lived Experience & Cultural Affirmation',
            },
            {
              name: 'heroCardDesc',
              type: 'textarea',
              label: 'Floating Card Description',
              defaultValue:
                'At United in Pride, we offer a range of programs and services designed to meet the unique needs of LGBTQ+ newcomers, immigrants, and refugees. Our initiatives focus on healing, connection, empowerment, and advocacy.',
            },
          ],
        },

        // TAB 2: CORE PROGRAMS
        {
          label: 'Core Programs',
          fields: [
            {
              name: 'programsList',
              type: 'array',
              label: 'Programs List',
              fields: [
                {
                  name: 'programId',
                  type: 'text',
                  label: 'Program Identifier',
                  required: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  required: true,
                },
                {
                  name: 'desc',
                  type: 'textarea',
                  label: 'Description',
                  required: true,
                },
                {
                  name: 'emoji',
                  type: 'text',
                  label: 'Emoji',
                  defaultValue: '💬',
                },
                {
                  name: 'schedule',
                  type: 'text',
                  label: 'Schedule Badge',
                  defaultValue: 'Weekly Gatherings',
                },
                {
                  name: 'btnText',
                  type: 'text',
                  label: 'Button Text',
                  defaultValue: 'Join a Circle',
                },
                {
                  name: 'link',
                  type: 'text',
                  label: 'Button Link',
                  defaultValue: '/programs',
                },
                {
                  name: 'features',
                  type: 'array',
                  label: 'Features List',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'desc',
                      type: 'text',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },

        // TAB 3: PROGRAM IMPACT
        {
          label: 'Program Impact',
          fields: [
            {
              name: 'impactHeading',
              type: 'text',
              label: 'Section Heading',
              defaultValue: 'Program Impact',
            },
            {
              name: 'impactSubtitle',
              type: 'text',
              label: 'Section Subtitle',
              defaultValue: 'Real results from culturally-affirming community programs',
            },
            {
              name: 'impactStats',
              type: 'array',
              label: 'Impact Stats',
              fields: [
                {
                  name: 'value',
                  type: 'text',
                  label: 'Percentage / Metric',
                  required: true,
                },
                {
                  name: 'label',
                  type: 'text',
                  label: 'Label',
                  required: true,
                },
                {
                  name: 'desc',
                  type: 'textarea',
                  label: 'Description',
                  required: true,
                },
              ],
            },
          ],
        },

        // TAB 4: JOURNEY STEPS
        {
          label: 'Journey Steps',
          fields: [
            {
              name: 'journeyHeading',
              type: 'text',
              label: 'Section Heading',
              defaultValue: 'Ready to Begin Your Journey?',
            },
            {
              name: 'journeySubtitle',
              type: 'text',
              label: 'Section Subtitle',
              defaultValue: 'Simple steps to join our community programs',
            },
            {
              name: 'journeySteps',
              type: 'array',
              label: 'Steps',
              fields: [
                {
                  name: 'num',
                  type: 'text',
                  label: 'Step Number',
                  required: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  required: true,
                },
                {
                  name: 'desc',
                  type: 'textarea',
                  label: 'Description',
                  required: true,
                },
              ],
            },
          ],
        },

        // TAB 5: PROGRAMS CTA
        {
          label: 'Programs CTA',
          fields: [
            {
              name: 'ctaEmoji',
              type: 'text',
              label: 'CTA Emoji',
              defaultValue: '🌈',
            },
            {
              name: 'ctaTitleLine1',
              type: 'text',
              label: 'Title Line 1',
              defaultValue: 'Your Healing Journey',
            },
            {
              name: 'ctaTitleLine2',
              type: 'text',
              label: 'Title Line 2',
              defaultValue: 'Starts Here',
            },
            {
              name: 'ctaDesc',
              type: 'textarea',
              label: 'Description',
              defaultValue:
                'Join a community that understands your story, celebrates your identity, and supports your dreams. Every program is designed with your unique needs in mind.',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'ctaPrimaryBtnText',
                  type: 'text',
                  label: 'Primary Button Text',
                  defaultValue: 'Join Our Programs',
                },
                {
                  name: 'ctaPrimaryBtnLink',
                  type: 'text',
                  label: 'Primary Button Link',
                  defaultValue: '/programs',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'ctaSecondaryBtnText',
                  type: 'text',
                  label: 'Secondary Button Text',
                  defaultValue: 'Ask Questions',
                },
                {
                  name: 'ctaSecondaryBtnLink',
                  type: 'text',
                  label: 'Secondary Button Link',
                  defaultValue: '/contact',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
