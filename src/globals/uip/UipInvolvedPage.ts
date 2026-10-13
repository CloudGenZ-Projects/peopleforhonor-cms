import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const UipInvolvedPage: GlobalConfig = {
  slug: 'uip-involved-page',
  label: 'UIP Involved Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'UIP',
    hidden: ({ user }) => isHiddenForUser(user, 'uip'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_UIP_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/involed`
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
              defaultValue: 'Systemic Change',
            },
            {
              name: 'heroTitleLine1',
              type: 'text',
              label: 'Title Line 1',
              defaultValue: 'Partnership',
            },
            {
              name: 'heroTitleGradient',
              type: 'text',
              label: 'Title Gradient Text',
              defaultValue: 'Opportunities',
            },
            {
              name: 'heroDescription',
              type: 'textarea',
              label: 'Description',
              defaultValue:
                'Join us in creating systemic change and building more inclusive communities. Together, we can expand our reach and impact for LGBTQ+ newcomers across Canada.',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'heroPrimaryBtnText',
                  type: 'text',
                  label: 'Primary Button Text',
                  defaultValue: 'Work With Us',
                },
                {
                  name: 'heroPrimaryBtnLink',
                  type: 'text',
                  label: 'Primary Button Link',
                  defaultValue: '/Partnership',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'heroSecondaryBtnText',
                  type: 'text',
                  label: 'Secondary Button Text',
                  defaultValue: 'View Programs',
                },
                {
                  name: 'heroSecondaryBtnLink',
                  type: 'text',
                  label: 'Secondary Button Link',
                  defaultValue: '/programs',
                },
              ],
            },
          ],
        },

        // TAB 2: VOLUNTEER ROLES
        {
          label: 'Volunteer Roles',
          fields: [
            {
              name: 'volunteerHeading',
              type: 'text',
              label: 'Section Heading',
              defaultValue: 'Volunteer With Us',
            },
            {
              name: 'volunteerSubtitle',
              type: 'text',
              label: 'Section Subtitle',
              defaultValue: 'Every contribution helps create safer spaces and stronger communities.',
            },
            {
              name: 'volunteerRoles',
              type: 'array',
              label: 'Volunteer Roles',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'desc',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'iconType',
                  type: 'select',
                  label: 'Icon',
                  options: [
                    { label: 'Users (Pink)', value: 'users' },
                    { label: 'Calendar (Purple)', value: 'calendar' },
                    { label: 'Heart (Red)', value: 'heart' },
                    { label: 'Message (Blue)', value: 'message' },
                  ],
                  defaultValue: 'users',
                },
              ],
            },
          ],
        },

        // TAB 3: IMPACT STATS
        {
          label: 'Impact Stats',
          fields: [
            {
              name: 'impactStats',
              type: 'array',
              label: 'Impact Statistics',
              fields: [
                {
                  name: 'val',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'label',
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

        // TAB 4: DONATION SECTION
        {
          label: 'Donation Section',
          fields: [
            {
              name: 'donationHeading',
              type: 'text',
              label: 'Heading',
              defaultValue: 'Make a Donation',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'donationBtnText',
                  type: 'text',
                  label: 'Button Text',
                  defaultValue: 'Donate Now 💜',
                },
                {
                  name: 'donationBtnLink',
                  type: 'text',
                  label: 'Button Link',
                  defaultValue: '/donate',
                },
              ],
            },
            {
              name: 'donationTiers',
              type: 'array',
              label: 'Donation Tiers',
              fields: [
                {
                  name: 'amount',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'impact',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
          ],
        },

        // TAB 5: CORPORATE PARTNERSHIPS
        {
          label: 'Corporate Partnerships',
          fields: [
            {
              name: 'corporateHeading',
              type: 'text',
              label: 'Heading',
              defaultValue: 'Corporate Partnerships',
            },
            {
              name: 'corporateDesc',
              type: 'textarea',
              label: 'Description',
              defaultValue:
                'Partner with us to create workplace inclusion, sponsor community events, or organize team volunteering opportunities.',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'corporateLinkText',
                  type: 'text',
                  label: 'Link Text',
                  defaultValue: 'Work With Us',
                },
                {
                  name: 'corporateLinkUrl',
                  type: 'text',
                  label: 'Link URL',
                  defaultValue: '/Partnership',
                },
              ],
            },
            {
              name: 'corporateFeatures',
              type: 'array',
              label: 'Features / Pillars',
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

        // TAB 6: FINAL CTA
        {
          label: 'Final CTA',
          fields: [
            {
              name: 'ctaHeading',
              type: 'text',
              label: 'Heading',
              defaultValue: 'Ready to Make a Difference?',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'ctaPrimaryText',
                  type: 'text',
                  label: 'Primary Button Text',
                  defaultValue: 'Start Volunteering',
                },
                {
                  name: 'ctaPrimaryLink',
                  type: 'text',
                  label: 'Primary Button Link',
                  defaultValue: '/volunteer',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'ctaSecondaryText',
                  type: 'text',
                  label: 'Secondary Button Text',
                  defaultValue: 'Make a Donation',
                },
                {
                  name: 'ctaSecondaryLink',
                  type: 'text',
                  label: 'Secondary Button Link',
                  defaultValue: '/donate',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
