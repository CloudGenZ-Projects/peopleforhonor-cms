import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscColbernGetInvolvedPage: GlobalConfig = {
  slug: 'mtsc-colbern-get-involved-page',
  label: 'MTSC Colbern Get Involved Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'MTSC Colbern',
    hidden: ({ user }) => isHiddenForUser(user, 'colbern'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_MTSC_COLBERN_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/get-involved`
      },
    },
  },
  access: {
    read: () => true,
    update: (args) => checkTenantAccess(args, 'colbern'),
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
              defaultValue: 'Be Part of the Welcome',
            },
            {
              name: 'hero_subtitle',
              label: 'Hero Subtitle',
              type: 'textarea',
              defaultValue:
                'A warm welcome in port begins with people who choose to care. Whether you volunteer, contribute resources or build a partnership, your support can make a difference to seafarers far from home.',
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
              defaultValue: 'Ways to Give',
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
                'Support Mission to Seafarers Southern Ontario and its wider work of providing practical, emotional and spiritual care to visiting crews.',
            },
            // Card 1: One-Time / Make a Donation
            {
              name: 'onetime_card_title',
              label: 'Card 1 Title (Make a Donation)',
              type: 'text',
              defaultValue: 'MAKE A DONATION',
            },
            {
              name: 'onetime_card_desc',
              label: 'Card 1 Description',
              type: 'textarea',
              defaultValue:
                'Support Mission to Seafarers Southern Ontario and its wider work of providing practical, emotional and spiritual care to visiting crews.',
            },
            {
              name: 'onetime_btn_label',
              label: 'Card 1 Button Label',
              type: 'text',
              defaultValue: 'Make a Donation',
            },
            // Card 2: Regular Giving
            {
              name: 'monthly_card_title',
              label: 'Card 2 Title (Regular Giving)',
              type: 'text',
              defaultValue: 'DISCUSS REGULAR GIVING',
            },
            {
              name: 'monthly_card_desc',
              label: 'Card 2 Description',
              type: 'textarea',
              defaultValue:
                'Interested in ongoing support? Contact the Southern Ontario team to learn about available giving arrangements.',
            },
            {
              name: 'monthly_bullets',
              label: 'Regular Giving Bullet Points',
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
              label: 'Card 2 Button Label',
              type: 'text',
              defaultValue: 'Enquire About Regular Giving',
            },
            {
              name: 'donate_footer_note',
              label: 'Donation Disclaimer / Note',
              type: 'textarea',
              defaultValue:
                'All donations are securely processed and receipted by Mission to Seafarers Southern Ontario.',
            },
            {
              name: 'canadahelps_iframe_url',
              label: 'CanadaHelps Form URL',
              type: 'text',
              defaultValue: 'https://www.mtsso.org/support-us',
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
              defaultValue: 'Participation',
            },
            {
              name: 'ways_title',
              label: 'Heading',
              type: 'text',
              defaultValue: 'Choose How You Would Like to Help',
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
              defaultValue: 'IN-KIND GIFTS',
            },
            {
              name: 'inkind_desc',
              label: 'In-Kind Description',
              type: 'textarea',
              defaultValue:
                'Useful items may include personal care products, warm clothing or items for welfare initiatives, depending on current local needs. Please do not arrange an unsolicited drop-off. Contact the team first for an up-to-date list and delivery instructions.',
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
                  label: 'Volunteer URL',
                  type: 'text',
                  defaultValue: 'https://www.mtsso.org/volunteering',
                },
                {
                  name: 'amazon_wishlist_label',
                  label: 'Volunteer Button Label',
                  type: 'text',
                  defaultValue: 'Apply Through Southern Ontario',
                },
              ],
            },
            // Partnerships
            {
              name: 'partnership_title',
              label: 'Partnership Title',
              type: 'text',
              defaultValue: 'COMMUNITY PARTNERSHIPS',
            },
            {
              name: 'partnership_desc',
              label: 'Partnership Description',
              type: 'textarea',
              defaultValue:
                'Local businesses, maritime companies, churches, community groups and individuals may be able to support approved activities, goods, services or volunteer involvement. We welcome conversations about practical, sustainable partnerships.',
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
              defaultValue: '',
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
              defaultValue: 'Every Act of Care Matters',
            },
            {
              name: 'cta_description',
              label: 'CTA Description',
              type: 'textarea',
              defaultValue:
                'A listening ear, a practical gift or time spent volunteering can help remind a seafarer that they are not alone.',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'cta_donate_label',
                  label: 'Donate Button Label',
                  type: 'text',
                  defaultValue: 'Donate',
                },
                {
                  name: 'cta_volunteer_label',
                  label: 'Volunteer Button Label',
                  type: 'text',
                  defaultValue: 'Volunteer',
                },
              ],
            },
            {
              name: 'cta_contact_label',
              label: 'Contact Button Label',
              type: 'text',
              defaultValue: 'Contact the Team',
            },
          ],
        },
      ],
    },
  ],
}
