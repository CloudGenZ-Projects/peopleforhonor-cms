import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const UipDonatePage: GlobalConfig = {
  slug: 'uip-donate-page',
  label: 'UIP Donate Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'UIP',
    hidden: ({ user }) => isHiddenForUser(user, 'uip'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_UIP_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/donate`
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
              defaultValue: 'Get Involved',
            },
            {
              name: 'heroTitleLine1',
              type: 'text',
              label: 'Title Line 1',
              defaultValue: 'Join Us in Building a',
            },
            {
              name: 'heroTitleGradient',
              type: 'text',
              label: 'Title Gradient Text',
              defaultValue: 'National Movement',
            },
            {
              name: 'heroDescription',
              type: 'textarea',
              label: 'Description',
              defaultValue:
                "Together, we're creating lasting change for LGBTQ+ newcomers across Canada. Your voice, your time, and your support make all the difference.",
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'heroPrimaryBtnText',
                  type: 'text',
                  label: 'Primary Button Text',
                  defaultValue: 'Apply to Volunteer',
                },
                {
                  name: 'heroPrimaryBtnLink',
                  type: 'text',
                  label: 'Primary Button Link',
                  defaultValue: '/volunteer#apply-form',
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
                  defaultValue: 'Give Now',
                },
                {
                  name: 'heroSecondaryBtnLink',
                  type: 'text',
                  label: 'Secondary Button Link',
                  defaultValue: '/donate',
                },
              ],
            },
          ],
        },

        // TAB 2: DONATION & IMPACT
        {
          label: 'Donation & Impact',
          fields: [
            {
              name: 'zeffyDonationUrl',
              type: 'text',
              label: 'Zeffy Donation Form URL',
              defaultValue: 'https://www.zeffy.com/en-CA/donation-form/youre-not-alone',
            },
            {
              name: 'taxDeductibleNote',
              type: 'text',
              label: 'Footer Note',
              defaultValue: 'Secure Tax-Deductible Donation',
            },
            {
              name: 'impactHeading',
              type: 'text',
              label: 'Impact Card Heading',
              defaultValue: 'Your Impact',
            },
            {
              name: 'impactQuote',
              type: 'textarea',
              label: 'Impact Quote',
              defaultValue:
                '"Every contribution helps create a safe and welcoming space for those fleeing persecution."',
            },
            {
              name: 'impactTiers',
              type: 'array',
              label: 'Impact Tiers',
              fields: [
                {
                  name: 'amount',
                  type: 'number',
                  label: 'Threshold Amount (e.g. 25)',
                  required: true,
                },
                {
                  name: 'displayAmount',
                  type: 'text',
                  label: 'Display Amount (e.g. $25)',
                  defaultValue: '$25',
                },
                {
                  name: 'desc',
                  type: 'text',
                  label: 'Impact Description',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
