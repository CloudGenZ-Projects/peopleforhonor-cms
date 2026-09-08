import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscnlHomePage: GlobalConfig = {
  slug: 'mtscnl-home-page',
  label: 'MTSCNL Home Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'MTSC Newfoundland',
    hidden: ({ user }) => isHiddenForUser(user, 'mtscnl'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_MTSCNL_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/`
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
        // TAB 1: HERO SECTION
        {
          label: 'Hero Section',
          fields: [
            {
              name: 'hero_background_image',
              label: 'Hero Background Image',
              type: 'upload',
              relationTo: 'media', 
            },
            {
              name: 'hero_skyline_image',
              label: 'Hero Skyline Floating Image',
              type: 'upload',
              relationTo: 'media', 
            },
            {
              name: 'hero_main_image',
              label: 'Hero Main Image (Right Side)',
              type: 'upload',
              relationTo: 'media', 
            },
            {
              name: 'hero_eyebrow',
              label: 'Eyebrow Text',
              type: 'text',
              defaultValue: 'Mission to Seafarers · Newfoundland and Labrador',
            },
            {
              name: 'hero_title_line_1',
              label: 'Hero Main Title (Line 1)',
              type: 'text',
              defaultValue: 'Here When Seafarers',
            },
            {
              name: 'hero_title_highlight',
              label: 'Hero Title Highlight (Coral)',
              type: 'text',
              defaultValue: 'Come Ashore',
            },
            {
              name: 'hero_paragraph_1',
              label: 'Paragraph 1',
              type: 'textarea',
              defaultValue: 'After days, weeks, and sometimes months at sea, seafarers arrive in port with only a short window ashore.',
            },
            {
              name: 'hero_paragraph_2',
              label: 'Paragraph 2',
              type: 'textarea',
              defaultValue: 'Mission to Seafarers Newfoundland and Labrador is here during that window—with practical support, a welcoming place to step off the vessel, and people to speak with while they are ashore.',
            },
            {
              name: 'hero_paragraph_3_prefix',
              label: 'Paragraph 3 (Prefix)',
              type: 'text',
              defaultValue: 'We are part of',
            },
            {
              name: 'hero_paragraph_3_link_text',
              label: 'Paragraph 3 (Link Text)',
              type: 'text',
              defaultValue: 'Mission to Seafarers Canada',
            },
            {
              name: 'hero_paragraph_3_link_url',
              label: 'Paragraph 3 (Link URL)',
              type: 'text',
              defaultValue: 'https://mtsc.ca/',
            },
            {
              name: 'hero_paragraph_3_suffix',
              label: 'Paragraph 3 (Suffix)',
              type: 'textarea',
              defaultValue: 'and connected to a wider global network caring for seafarers in ports around the world.',
            },
            {
              name: 'hero_button_1_label',
              label: 'Button 1 Label',
              type: 'text',
              defaultValue: 'Contact the Station',
            },
            {
              name: 'hero_button_1_link',
              label: 'Button 1 Link',
              type: 'text',
              defaultValue: '/contact',
            },
            {
              name: 'hero_button_2_label',
              label: 'Button 2 Label',
              type: 'text',
              defaultValue: 'Donate',
            },
            {
              name: 'hero_image_badge',
              label: 'Hero Image Overlay Badge',
              type: 'text',
              defaultValue: 'Newfoundland and Labrador Station',
            },
            {
              name: 'hero_image_title',
              label: 'Hero Image Overlay Title',
              type: 'text',
              defaultValue: 'Welcoming crews who keep global trade moving.',
            },
          ],
        },

        // TAB 2: TRUST STRIP
        {
          label: 'Trust Strip',
          fields: [
            {
              name: 'trust_stats',
              label: 'Trust Statistics',
              type: 'array',
              fields: [
                {
                  name: 'stat_number',
                  label: 'Statistic Number/Value',
                  type: 'text',
                },
                {
                  name: 'stat_label',
                  label: 'Statistic Label',
                  type: 'text',
                },
              ],
            },
          ],
        },

        // TAB 3: HOW WE HELP
        {
          label: 'How We Help',
          fields: [
            {
              name: 'help_eyebrow',
              label: 'Section Eyebrow',
              type: 'text',
              defaultValue: 'How We Help',
            },
            {
              name: 'help_title',
              label: 'Section Title',
              type: 'text',
              defaultValue: 'How We Support the World’s Seafarers in Newfoundland and Labrador',
            },
            {
              name: 'help_subtitle',
              label: 'Section Subtitle',
              type: 'textarea',
              defaultValue: 'As part of a 160+ year legacy, we offer practical, emotional and spiritual support to seafarers visiting Newfoundland and Labrador, helping ensure that no seafarer feels alone.',
            },
            {
              name: 'featured_services_title',
              label: 'Featured Services Title',
              type: 'text',
              defaultValue: 'Featured Services',
            },
            {
              name: 'featured_services',
              label: 'Featured Services Cards',
              type: 'array',
              maxRows: 2,
              fields: [
                {
                  name: 'icon',
                  label: 'Icon',
                  type: 'select',
                  options: ['users', 'package', 'briefcase', 'heart', 'sparkles', 'scale', 'map-pin', 'wifi', 'coffee'],
                },
                { name: 'eyebrow', label: 'Eyebrow', type: 'text' },
                { name: 'title', label: 'Title', type: 'text' },
                { name: 'description', label: 'Description', type: 'textarea' },
                { name: 'button_label', label: 'Button Label', type: 'text' },
                { name: 'button_link', label: 'Button Link', type: 'text' },
              ],
            },
            {
              name: 'care_items_title',
              label: 'How We Care Title',
              type: 'text',
              defaultValue: 'How We Care for Seafarers',
            },
            {
              name: 'care_items',
              label: 'Care Items Grid',
              type: 'array',
              fields: [
                {
                  name: 'icon',
                  label: 'Icon',
                  type: 'select',
                  options: ['users', 'package', 'briefcase', 'heart', 'sparkles', 'scale', 'map-pin', 'wifi', 'coffee'],
                },
                { name: 'title', label: 'Care Title', type: 'text' },
              ],
            },
          ],
        },

        // TAB 4: CONNECTED NETWORK
        {
          label: 'Connected Network',
          fields: [
            {
              name: 'network_title',
              label: 'Section Title',
              type: 'text',
              defaultValue: 'Local Presence. Connected in Purpose.',
            },
            {
              name: 'network_subtitle',
              label: 'Section Subtitle',
              type: 'textarea',
              defaultValue: 'Mission to Seafarers Newfoundland and Labrador is part of a connected network of care.',
            },
            {
              name: 'network_cards',
              label: 'Network Cards',
              type: 'array',
              maxRows: 2,
              fields: [
                {
                  name: 'icon',
                  label: 'Icon',
                  type: 'select',
                  options: ['globe2', 'building2'],
                },
                { name: 'eyebrow', label: 'Eyebrow', type: 'text' },
                { name: 'title', label: 'Title', type: 'text' },
                { name: 'description', label: 'Description', type: 'textarea' },
                { name: 'link_text', label: 'Link Text', type: 'text', defaultValue: 'Visit Website' },
                { name: 'link_url', label: 'Link URL', type: 'text' },
              ],
            },
          ],
        },

        // TAB 5: SUPPORT LOCALLY
        {
          label: 'Support Locally',
          fields: [
            {
              name: 'support_title',
              label: 'Section Title',
              type: 'text',
              defaultValue: 'Support Locally. Care Globally.',
            },
            {
              name: 'support_subtitle',
              label: 'Section Subtitle',
              type: 'textarea',
              defaultValue: 'Whether you volunteer, donate, attend an event or simply help us welcome a seafarer, you become part of a connected network of care reaching from Newfoundland and Labrador to ports around the world.',
            },
            {
              name: 'support_button_label',
              label: 'Button Label',
              type: 'text',
              defaultValue: 'Get Involved',
            },
            {
              name: 'support_button_link',
              label: 'Button Link',
              type: 'text',
              defaultValue: '/get-involved',
            },
          ],
        },

        // TAB 6: INVOLVE & DONATE
        {
          label: 'Involve & Donate',
          fields: [
            {
              name: 'get_involved_background_image',
              label: 'Get Involved & Donate Background Image',
              type: 'upload',
              relationTo: 'media',
            },
            // Get Involved Card
            {
              name: 'involved_eyebrow',
              label: 'Get Involved Eyebrow',
              type: 'text',
              defaultValue: 'Get Involved',
            },
            {
              name: 'involved_title',
              label: 'Get Involved Title',
              type: 'text',
              defaultValue: 'Help Us Welcome Seafarers to Newfoundland and Labrador',
            },
            {
              name: 'involved_description',
              label: 'Get Involved Description',
              type: 'textarea',
              defaultValue: 'There are many ways to support our station and the seafarers we serve. You can:',
            },
            {
              name: 'involved_bullets',
              label: 'Get Involved Bullet Points',
              type: 'array',
              fields: [{ name: 'bullet', label: 'Bullet Text', type: 'text' }],
            },
            {
              name: 'involved_footer_italic',
              label: 'Get Involved Footer (Italic)',
              type: 'textarea',
              defaultValue: 'Local volunteers, supporters and community partners help make Mission to Seafarers Newfoundland and Labrador possible.',
            },
            {
              name: 'involved_button_label',
              label: 'Get Involved Button Label',
              type: 'text',
              defaultValue: 'Contact the Newfoundland and Labrador Station',
            },
            {
              name: 'involved_button_link',
              label: 'Get Involved Button Link',
              type: 'text',
              defaultValue: '/contact',
            },

            // Donate Card
            {
              name: 'donate_eyebrow',
              label: 'Donate Eyebrow',
              type: 'text',
              defaultValue: 'Donate',
            },
            {
              name: 'donate_title',
              label: 'Donate Title',
              type: 'text',
              defaultValue: 'Help Care for Seafarers',
            },
            {
              name: 'donate_description',
              label: 'Donate Description',
              type: 'textarea',
              defaultValue: 'Every gift helps us provide hospitality, transportation, Wi-Fi, refreshments and a welcoming place for seafarers visiting Newfoundland and Labrador.',
            },
            {
              name: 'donate_bullets_title',
              label: 'Donate Bullets Title',
              type: 'text',
              defaultValue: 'You can:',
            },
            {
              name: 'donate_bullets',
              label: 'Donate Bullet Points',
              type: 'array',
              fields: [{ name: 'bullet', label: 'Bullet Text', type: 'text' }],
            },
            {
              name: 'donate_footer_italic',
              label: 'Donate Footer (Italic)',
              type: 'textarea',
              defaultValue: 'National donations and partnerships help strengthen the work of Mission to Seafarers Canada across the country. Donations are processed through Mission to Seafarers Canada in support of the Newfoundland and Labrador station and the wider Mission across Canada.',
            },
            {
              name: 'donate_button_label',
              label: 'Donate Button Label',
              type: 'text',
              defaultValue: 'Donate Now',
            },
            {
              name: 'donation_iframe_url',
              label: 'CanadaHelps iFrame URL',
              type: 'text',
              defaultValue: 'https://www.canadahelps.org/en/dn/73316',
            },
          ],
        },
      ],
    },
  ],
}