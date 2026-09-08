import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscnlDonatePage: GlobalConfig = {
  slug: 'mtscnl-donate-page',
  label: 'MTSCNL Donate Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'MTSC Newfoundland',
    hidden: ({ user }) => isHiddenForUser(user, 'mtscnl'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_MTSCNL_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/donate`
      },
    },
  },
  access: {
    read: () => true,
    update: (args) => checkTenantAccess(args, 'mtscnl'),
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
              name: 'hero_background_image',
              label: 'Hero Background Image',
              type: 'upload',
              relationTo: 'media',
            },
            { name: 'hero_eyebrow', label: 'Eyebrow', type: 'text', defaultValue: 'Donate' },
            { name: 'hero_title', label: 'Title', type: 'text', defaultValue: 'Help care for seafarers visiting Toronto' },
            { name: 'hero_description', label: 'Description', type: 'textarea', defaultValue: 'Every gift helps us provide hospitality, transportation, Wi-Fi, refreshments, haircuts, and a welcoming place for seafarers far from home.' },
            { name: 'hero_primary_cta_label', label: 'Primary CTA Label', type: 'text', defaultValue: 'Become a Monthly Donor' },
            { name: 'hero_primary_cta_link', label: 'Primary CTA Link', type: 'text', defaultValue: '#monthly' },
            { name: 'hero_secondary_cta_label', label: 'Secondary CTA Label', type: 'text', defaultValue: 'Make a One-Time Gift' },
            { name: 'hero_secondary_cta_link', label: 'Secondary CTA Link', type: 'text', defaultValue: '#one-time' },
          ],
        },

        // TAB 2: MONTHLY GIVING
        {
          label: 'Monthly Giving',
          fields: [
            { name: 'monthly_title', label: 'Title', type: 'text', defaultValue: 'Become a Monthly Donor' },
            { name: 'monthly_description', label: 'Description', type: 'textarea', defaultValue: 'Monthly gifts help us plan ahead and ensure seafarers in Toronto always have access to the support they need.' },
            {
              name: 'monthly_tiers',
              label: 'Donation Tiers',
              type: 'array',
              fields: [
                { name: 'amount', label: 'Amount (e.g. $15)', type: 'text' },
                { name: 'period', label: 'Period (e.g. /month)', type: 'text' },
                { name: 'body', label: 'Description', type: 'text' },
              ],
            },
            { name: 'monthly_button_label', label: 'Button Label', type: 'text', defaultValue: 'Become a Monthly Donor' },
            { name: 'monthly_button_link', label: 'Button Link', type: 'text', defaultValue: 'https://www.canadahelps.org/en/dn/145961' },
          ],
        },

        // TAB 3: ONE-TIME GIVING
        {
          label: 'One-Time Giving',
          fields: [
            { name: 'onetime_title', label: 'Title', type: 'text', defaultValue: 'Make a One-Time Donation' },
            { name: 'onetime_description', label: 'Description', type: 'textarea', defaultValue: 'Your gift helps create a welcoming station space, support local programs, and care for seafarers when they arrive in Toronto.' },
            {
              name: 'onetime_amounts',
              label: 'Suggested Amounts',
              type: 'array',
              fields: [{ name: 'amount', label: 'Amount (e.g. $50)', type: 'text' }],
            },
            { name: 'onetime_button_label', label: 'Button Label', type: 'text', defaultValue: 'Give Now' },
            { name: 'onetime_button_link', label: 'Button Link', type: 'text', defaultValue: 'https://www.canadahelps.org/en/dn/145961' },
            { name: 'onetime_footer', label: 'Footer Text', type: 'textarea', defaultValue: 'All donations are processed through Mission to Seafarers Canada in support of the Toronto station and the national mission.' },
          ],
        },

        // TAB 4: IN-KIND GIFTS
        {
          label: 'In-Kind Gifts',
          fields: [
            { name: 'inkind_title', label: 'Title', type: 'text', defaultValue: 'Donate Goods or Services' },
            { name: 'inkind_description', label: 'Description', type: 'textarea', defaultValue: 'We are always grateful for in-kind gifts that help us create a welcoming and comfortable space for seafarers — from snacks to furniture to professional services.' },
            { name: 'inkind_btn1_label', label: 'Button 1 Label', type: 'text', defaultValue: 'Contact About In-Kind' },
            { name: 'inkind_btn1_link', label: 'Button 1 Link', type: 'text', defaultValue: '/contact' },
            { name: 'inkind_btn2_label', label: 'Button 2 Label', type: 'text', defaultValue: 'View Wish List' },
            { name: 'inkind_btn2_link', label: 'Button 2 Link', type: 'text', defaultValue: '/get-involved' },
            {
              name: 'inkind_items',
              label: 'Wishlist Items',
              type: 'array',
              fields: [{ name: 'text', label: 'Item Name', type: 'text' }],
            },
          ],
        },

        // TAB 5: CTA SECTION
        {
          label: 'CTA Section',
          fields: [
            {
              name: 'cta_background_image',
              label: 'CTA Background Image',
              type: 'upload',
              relationTo: 'media',
            },
            { name: 'cta_title', label: 'Title', type: 'text', defaultValue: 'Support locally. Give nationally. Care globally.' },
            { name: 'cta_description', label: 'Description', type: 'textarea', defaultValue: 'Donations sustain the work of Mission to Seafarers Canada and the Toronto station.' },
            { name: 'cta_btn1_label', label: 'Button 1 Label', type: 'text', defaultValue: 'Volunteer Locally' },
            { name: 'cta_btn1_link', label: 'Button 1 Link', type: 'text', defaultValue: '/get-involved' },
            { name: 'cta_btn2_label', label: 'Button 2 Label', type: 'text', defaultValue: 'Contact Toronto' },
            { name: 'cta_btn2_link', label: 'Button 2 Link', type: 'text', defaultValue: '/contact' },
          ],
        },
      ],
    },
  ],
}