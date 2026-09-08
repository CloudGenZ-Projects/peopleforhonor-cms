import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscnlGetInvolvedPage: GlobalConfig = {
  slug: 'mtscnl-get-involved-page',
  label: 'MTSCNL Get Involved Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'MTSC Newfoundland',
    hidden: ({ user }) => isHiddenForUser(user, 'mtscnl'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_MTSCNL_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/get-involved`
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
          label: 'Hero',
          fields: [
            {
              name: 'hero_background_image',
              label: 'Hero Background Image',
              type: 'upload',
              relationTo: 'media',
            },
            { name: 'hero_badge', label: 'Hero Badge', type: 'text', defaultValue: 'Get Involved' },
            { name: 'hero_title', label: 'Hero Title', type: 'text', defaultValue: 'Get Involved with Mission to Seafarers Newfoundland and Labrador' },
            { name: 'hero_subtitle', label: 'Hero Subtitle', type: 'textarea', defaultValue: 'Whether you volunteer, donate, attend an event or simply help us welcome a seafarer, you become part of a connected network of care reaching from Newfoundland and Labrador to ports around the world.' },
            { name: 'hero_button_label', label: 'Button Label', type: 'text', defaultValue: 'Get Involved' },
          ],
        },

        // TAB 2: GET INVOLVED & DONATE
        {
          label: 'Get Involved & Donate',
          fields: [
            // Left Card
            { name: 'involved_title', label: 'Get Involved Title', type: 'text', defaultValue: 'Help Us Welcome Seafarers to Newfoundland and Labrador' },
            { name: 'involved_description', label: 'Get Involved Description', type: 'textarea', defaultValue: 'There are many ways to support our station and the seafarers we serve. You can:' },
            {
              name: 'involved_bullets',
              label: 'Get Involved Bullets',
              type: 'array',
              fields: [{ name: 'text', label: 'Text', type: 'text' }],
            },
            { name: 'involved_footer', label: 'Get Involved Footer', type: 'textarea', defaultValue: 'Local volunteers, supporters and community partners help make Mission to Seafarers Newfoundland and Labrador possible.' },
            { name: 'involved_button_label', label: 'Button Label', type: 'text', defaultValue: 'Contact the Newfoundland and Labrador Station' },
            { name: 'involved_button_link', label: 'Button Link', type: 'text', defaultValue: '/contact' },

            // Right Card
            { name: 'donate_title', label: 'Donate Title', type: 'text', defaultValue: 'Help Care for Seafarers' },
            { name: 'donate_description', label: 'Donate Description', type: 'textarea', defaultValue: 'Every gift helps us provide hospitality, transportation, Wi-Fi, refreshments and a welcoming place for seafarers visiting Newfoundland and Labrador.' },
            { name: 'donate_bullets_title', label: 'Donate Bullets Title', type: 'text', defaultValue: 'You can:' },
            {
              name: 'donate_bullets',
              label: 'Donate Bullets',
              type: 'array',
              fields: [{ name: 'text', label: 'Text', type: 'text' }],
            },
            { name: 'donate_footer', label: 'Donate Footer', type: 'textarea', defaultValue: 'National donations and partnerships help strengthen the work of Mission to Seafarers Canada across the country. Donations are processed through Mission to Seafarers Canada in support of the Newfoundland and Labrador station and the wider Mission across Canada.' },
            { name: 'donate_button_label', label: 'Donate Button Label', type: 'text', defaultValue: 'Donate Now' },
            { name: 'donate_iframe_url', label: 'CanadaHelps Form URL', type: 'text', defaultValue: 'https://www.canadahelps.org/en/dn/145961' },
          ],
        },

        // TAB 3: WAYS TO HELP
        {
          label: 'Ways to Help',
          fields: [
            {
              name: 'ways_background_image',
              label: 'Ways to Help Background Image',
              type: 'upload',
              relationTo: 'media',
            },
            { name: 'ways_eyebrow', label: 'Eyebrow', type: 'text', defaultValue: 'Other Ways to Help' },
            { name: 'ways_title', label: 'Title', type: 'text', defaultValue: 'Choose How You Would Like to Support' },
            {
              name: 'ways_cards',
              label: 'Action Cards (Must keep exactly 3: Goods, Partner, Volunteer)',
              type: 'array',
              minRows: 3,
              maxRows: 3,
              fields: [
                { name: 'title', label: 'Title', type: 'text' },
                { name: 'desc', label: 'Description', type: 'text' },
              ],
            },
          ],
        },

        // TAB 4: IN KIND & PARTNER
        {
          label: 'In Kind & Partner',
          fields: [
            // In Kind
            { name: 'inkind_title', label: 'In-Kind Title', type: 'text', defaultValue: 'In-Kind Gifts' },
            { name: 'inkind_description', label: 'In-Kind Description', type: 'textarea', defaultValue: 'We are always grateful for donations that help us create a welcoming space. Examples include:' },
            {
              name: 'inkind_bullets',
              label: 'In-Kind Bullets',
              type: 'array',
              fields: [{ name: 'text', label: 'Text', type: 'text' }],
            },
            { name: 'inkind_button_1_label', label: 'Button 1 Label (Opens Form)', type: 'text', defaultValue: 'Donate Goods Form' },
            { name: 'inkind_button_2_label', label: 'Button 2 Label (Wishlist)', type: 'text', defaultValue: 'Order from our wishlist' },
            { name: 'inkind_button_2_link', label: 'Button 2 URL', type: 'text', defaultValue: 'https://www.amazon.ca/hz/wishlist/ls/3C9KTQNHTZ0NM?ref_=wl_fv_le.' },

            // Partner
            { name: 'partner_title', label: 'Partner Title', type: 'text', defaultValue: 'Partnership Options' },
            { name: 'partner_description', label: 'Partner Description', type: 'textarea', defaultValue: 'We welcome support from local businesses, schools, and groups. You can support:' },
            {
              name: 'partner_bullets',
              label: 'Partner Bullets',
              type: 'array',
              fields: [{ name: 'text', label: 'Text', type: 'text' }],
            },
            { name: 'partner_button_label', label: 'Button Label (Opens Form)', type: 'text', defaultValue: 'Partner with the Newfoundland and Labrador Station' },
            { name: 'partner_footer', label: 'Partner Footer', type: 'textarea', defaultValue: 'For larger corporate partnerships and national giving opportunities, please visit Mission to Seafarers Canada.' },
          ],
        },

        // TAB 5: ECARD
        {
          label: 'eCard',
          fields: [
            { name: 'ecard_eyebrow', label: 'Eyebrow', type: 'text', defaultValue: 'Send a Card' },
            { name: 'ecard_title', label: 'Title', type: 'text', defaultValue: 'Send a Seafarer a Card' },
            { name: 'ecard_description', label: 'Description', type: 'textarea', defaultValue: 'Send a handwritten or digital card with words of encouragement, holiday wishes, or simple thanks...' },
            {
              name: 'ecard_steps',
              label: 'Steps',
              type: 'array',
              maxRows: 3,
              fields: [
                { name: 'title', label: 'Step Title', type: 'text' },
                { name: 'desc', label: 'Step Description', type: 'textarea' },
              ],
            },
            { name: 'ecard_summary_title', label: 'Summary Title', type: 'text', defaultValue: 'Once submitted, we will:' },
            {
              name: 'ecard_summary_bullets',
              label: 'Summary Bullets (Include emojis if desired)',
              type: 'array',
              fields: [{ name: 'text', label: 'Text', type: 'text' }],
            },
            { name: 'ecard_summary_callout', label: 'Summary Callout', type: 'textarea', defaultValue: '💙 Thank you for sending kindness across the sea.\nEvery word matters.' },
            { name: 'ecard_button_label', label: 'Button Label', type: 'text', defaultValue: 'Send Ecard' },
            { name: 'ecard_button_link', label: 'Button URL', type: 'text', defaultValue: 'https://www.canadahelps.org/en/donate/ecard-donation/' },
          ],
        },

        // TAB 6: CTA FOOTER
        {
          label: 'CTA Footer',
          fields: [
            { name: 'cta_title', label: 'Title', type: 'text', defaultValue: 'Every Act of Kindness Makes a Difference' },
            { name: 'cta_description', label: 'Description', type: 'textarea', defaultValue: 'From a warm drink and a haircut to a monthly donation or a few hours of volunteering, every act of support helps remind seafarers that they are not alone.' },
            { name: 'cta_btn_1_label', label: 'Button 1 Label (Donate)', type: 'text', defaultValue: 'Donate Now' },
            { name: 'cta_btn_2_label', label: 'Button 2 Label (Volunteer Form)', type: 'text', defaultValue: 'Become a Volunteer' },
            { name: 'cta_btn_3_label', label: 'Button 3 Label', type: 'text', defaultValue: 'Contact the Station' },
            { name: 'cta_btn_3_link', label: 'Button 3 URL', type: 'text', defaultValue: '/contact' },
            { name: 'cta_btn_4_label', label: 'Button 4 Label', type: 'text', defaultValue: 'Order from our wishlist' },
            { name: 'cta_btn_4_link', label: 'Button 4 URL', type: 'text', defaultValue: 'https://www.amazon.ca/hz/wishlist/ls/3C9KTQNHTZ0NM?ref_=wl_fv_le.' },
          ],
        },
      ],
    },
  ],
}