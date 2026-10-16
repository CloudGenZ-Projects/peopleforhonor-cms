import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscTorontoContactPage: GlobalConfig = {
  slug: 'mtsc-toronto-contact-page',
  label: 'MTSC Toronto Contact Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'MTSC Toronto',
    hidden: ({ user }) => isHiddenForUser(user, 'tornto'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_MTSC_TORONTO_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/contact`
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
              label: 'Hero Eyebrow / Badge Text',
              type: 'text',
              defaultValue: 'Contact',
            },
            {
              name: 'hero_title',
              label: 'Hero Title',
              type: 'text',
              defaultValue: 'Contact Mission to Seafarers Toronto',
            },
            {
              name: 'hero_subtitle',
              label: 'Hero Subtitle',
              type: 'textarea',
              defaultValue: 'We would love to hear from you.',
            },
            {
              name: 'hero_bg_image',
              label: 'Hero Background Image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },

        // TAB 2: STATION INFORMATION
        {
          label: 'Station Info Card',
          fields: [
            {
              name: 'station_title',
              label: 'Card Heading',
              type: 'text',
              defaultValue: 'Toronto Station',
            },
            {
              name: 'station_subtitle',
              label: 'Card Subtitle',
              type: 'text',
              defaultValue: 'Local support at the Port of Toronto.',
            },
            {
              name: 'station_location_text',
              label: 'Full Address',
              type: 'textarea',
              defaultValue: 'Cruise Ship Terminal, 8 Unwin Ave, Toronto, ON M5A 1A1, Canada',
            },
            {
              name: 'station_email',
              label: 'Email Address',
              type: 'text',
              defaultValue: 'glutenfreepriest@gmail.com',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'station_phone_display',
                  label: 'Phone (Display Text)',
                  type: 'text',
                  defaultValue: '+1 416-469-5391',
                },
                {
                  name: 'station_phone_tel',
                  label: 'Phone (tel: link format)',
                  type: 'text',
                  defaultValue: '+14164695391',
                },
              ],
            },
            {
              name: 'station_hours_text',
              label: 'Operating Hours',
              type: 'text',
              defaultValue: 'By appointment and during ship visits',
            },
          ],
        },

        // TAB 3: AFFILIATION & CONTEXT BOX
        {
          label: 'Affiliation Info Box',
          fields: [
            {
              name: 'info_paragraphs',
              label: 'Context Paragraphs',
              type: 'array',
              fields: [
                {
                  name: 'text',
                  label: 'Paragraph Text',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
          ],
        },

        // TAB 4: CONTACT FORM SETTINGS
        {
          label: 'Contact Form Settings',
          fields: [
            {
              name: 'form_title',
              label: 'Form Heading',
              type: 'text',
              defaultValue: 'Send Us a Message',
            },
            {
              name: 'form_subtitle',
              label: 'Form Subtitle',
              type: 'textarea',
              defaultValue:
                'Whether you are a seafarer, volunteer, supporter, or community partner, we welcome your questions and inquiries.',
            },
            {
              name: 'form_action_url',
              label: 'Google Form Action URL',
              type: 'text',
              defaultValue:
                'https://docs.google.com/forms/d/e/1FAIpQLSdDRLf8Fjde4Y-q1oUmoa_5JAbmAFp5TeG0RV3qjyVL3Aabhg/formResponse',
            },
            {
              name: 'form_interests',
              label: 'Interest Dropdown Options',
              type: 'array',
              fields: [
                {
                  name: 'label',
                  label: 'Option Label',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'form_submit_label',
              label: 'Submit Button Label',
              type: 'text',
              defaultValue: 'Submit Inquiry',
            },
          ],
        },
      ],
    },
  ],
}