import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscTorontoGetInvolvedPage: GlobalConfig = {
  slug: 'mtsc-toronto-get-involved-page',
  label: 'MTSC Toronto Get Involved Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'MTSC Toronto',
    hidden: ({ user }) => isHiddenForUser(user, 'tornto'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_MTSC_TORONTO_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/get-involved`
      },
    },
  },
  access: {
    read: () => true,
    update: (args) => checkTenantAccess(args, 'tornto'),
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // TAB 1: HERO SECTION
        {
          label: 'Hero Section',
          fields: [
            {
              name: 'hero_badge_text',
              label: 'Hero Badge Text',
              type: 'text',
              defaultValue: 'Get Involved',
            },
            {
              name: 'hero_title',
              label: 'Hero Title',
              type: 'text',
              defaultValue: 'Get Involved with Mission to Seafarers Toronto',
            },
            {
              name: 'hero_subtitle',
              label: 'Hero Subtitle',
              type: 'textarea',
              defaultValue:
                'There are many ways to support and help create a welcoming place for seafarers arriving at the Port of Toronto. Whether you choose to volunteer, donate, provide in-kind support, or partner with us, your support helps ensure that seafarers feel cared for.',
            },
            {
              name: 'hero_bg_image',
              label: 'Hero Background Image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },

        // TAB 2: FINANCIAL DONATIONS
        {
          label: 'Donations & Giving',
          fields: [
            {
              name: 'donate_eyebrow',
              label: 'Eyebrow',
              type: 'text',
              defaultValue: 'Donate',
            },
            {
              name: 'donate_title',
              label: 'Heading',
              type: 'text',
              defaultValue: 'Help Care for Seafarers',
            },
            {
              name: 'donate_description',
              label: 'Subtext',
              type: 'textarea',
              defaultValue:
                'Every gift helps us provide hospitality, practical support, transportation, Wi-Fi, refreshments, haircuts, and a welcoming place for seafarers visiting Toronto.',
            },
            // Monthly Giving
            {
              name: 'monthly_card_title',
              label: 'Monthly Card Title',
              type: 'text',
              defaultValue: 'Monthly Giving',
            },
            {
              name: 'monthly_card_desc',
              label: 'Monthly Card Description',
              type: 'textarea',
              defaultValue:
                'Become a monthly donor and help provide ongoing care and support throughout the year. Monthly gifts help us plan ahead.',
            },
            {
              name: 'monthly_bullets',
              label: 'Monthly Giving Bullet Points',
              type: 'array',
              fields: [
                {
                  name: 'text',
                  label: 'Point',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'monthly_btn_label',
              label: 'Monthly Button Label',
              type: 'text',
              defaultValue: 'Become a Monthly Donor',
            },
            // One-Time Gift
            {
              name: 'onetime_card_title',
              label: 'One-Time Card Title',
              type: 'text',
              defaultValue: 'One-Time Gift',
            },
            {
              name: 'onetime_card_desc',
              label: 'One-Time Card Description',
              type: 'textarea',
              defaultValue:
                'Make a one-time donation to support Mission to Seafarers Toronto. Your gift helps create a welcoming space and care for seafarers right when they arrive.',
            },
            {
              name: 'onetime_btn_label',
              label: 'One-Time Button Label',
              type: 'text',
              defaultValue: 'Make a One-Time Gift',
            },
            {
              name: 'donate_footer_note',
              label: 'Donation Disclaimer / Note',
              type: 'textarea',
              defaultValue:
                'All donations are securely processed via CanadaHelps in support of the Toronto station and the national mission to care for seafarers across Canada.',
            },
            {
              name: 'canadahelps_iframe_url',
              label: 'CanadaHelps Form URL',
              type: 'text',
              defaultValue: 'https://www.canadahelps.org/en/dn/145961',
            },
          ],
        },

        // TAB 3: WAYS TO HELP
        {
          label: 'Ways to Help Banner',
          fields: [
            {
              name: 'ways_eyebrow',
              label: 'Eyebrow',
              type: 'text',
              defaultValue: 'Other Ways to Help',
            },
            {
              name: 'ways_title',
              label: 'Heading',
              type: 'text',
              defaultValue: 'Choose How You Would Like to Support',
            },
            {
              name: 'ways_bg_image',
              label: 'Section Background Image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },

        // TAB 4: IN-KIND & PARTNERSHIPS CONTEXT
        {
          label: 'In-Kind & Partnerships',
          fields: [
            // In-Kind Gifts
            {
              name: 'inkind_title',
              label: 'In-Kind Title',
              type: 'text',
              defaultValue: 'In-Kind Gifts',
            },
            {
              name: 'inkind_desc',
              label: 'In-Kind Description',
              type: 'textarea',
              defaultValue: 'We are always grateful for donations that help us create a welcoming space. Examples include:',
            },
            {
              name: 'inkind_bullets',
              label: 'In-Kind Bullet Points',
              type: 'array',
              fields: [
                {
                  name: 'text',
                  label: 'Item',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'amazon_wishlist_url',
                  label: 'Amazon Wishlist URL',
                  type: 'text',
                  defaultValue: 'https://www.amazon.ca/hz/wishlist/ls/3C9KTQNHTZ0NM?ref_=wl_fv_le.',
                },
                {
                  name: 'amazon_wishlist_label',
                  label: 'Wishlist Button Label',
                  type: 'text',
                  defaultValue: 'Order from our wishlist',
                },
              ],
            },
            // Partnerships
            {
              name: 'partnership_title',
              label: 'Partnership Title',
              type: 'text',
              defaultValue: 'Partnership Options',
            },
            {
              name: 'partnership_desc',
              label: 'Partnership Description',
              type: 'textarea',
              defaultValue: 'We welcome support from local businesses, schools, and groups. You can support:',
            },
            {
              name: 'partnership_bullets',
              label: 'Partnership Bullet Points',
              type: 'array',
              fields: [
                {
                  name: 'text',
                  label: 'Area',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'partnership_note',
              label: 'Partnership Note',
              type: 'textarea',
              defaultValue:
                'For larger corporate partnerships and national giving opportunities, please visit Mission to Seafarers Canada.',
            },
          ],
        },

        // TAB 5: FINAL CALL TO ACTION
        {
          label: 'Final CTA Banner',
          fields: [
            {
              name: 'cta_title',
              label: 'CTA Title',
              type: 'text',
              defaultValue: 'Every Act of Kindness Makes a Difference',
            },
            {
              name: 'cta_description',
              label: 'CTA Description',
              type: 'textarea',
              defaultValue:
                'From a warm drink and a haircut to a monthly donation or a few hours of volunteering, every act of support helps remind seafarers that they are not alone.',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'cta_donate_label',
                  label: 'Donate Button Label',
                  type: 'text',
                  defaultValue: 'Donate Now',
                },
                {
                  name: 'cta_volunteer_label',
                  label: 'Volunteer Button Label',
                  type: 'text',
                  defaultValue: 'Become a Volunteer',
                },
              ],
            },
            {
              name: 'cta_contact_label',
              label: 'Contact Button Label',
              type: 'text',
              defaultValue: 'Contact the Station',
            },
          ],
        },
      ],
    },
  ],
}