import type { GlobalConfig } from 'payload'
import { checkTenantAccess } from '../../utils/tenantAccess'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  admin: {
    group: 'People For Honor',
    livePreview: {
      url: process.env.PAYLOAD_PUBLIC_SITE_URL || 'http://localhost:5173',
    },
  },
  access: {
    read: (args) => checkTenantAccess(args, 'peopleforhonor'),
    update: (args) => checkTenantAccess(args, 'peopleforhonor'),
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: '1. Hero Section',
          fields: [
            {
              name: 'hero_title',
              label: 'About Hero Title',
              type: 'text',
              defaultValue: 'About People for Honor',
            },
            {
              name: 'hero_subtitle',
              label: 'About Hero Subtitle',
              type: 'textarea',
              defaultValue:
                '"Honor" isn\'t just our name. It\'s how we show up—for ourselves, for each other, and for the country we call home.',
            },
          ],
        },
        {
          label: '2. Founder Story',
          fields: [
            {
              name: 'founder_badge',
              label: 'Founder Section Badge',
              type: 'text',
              defaultValue: 'Leadership & Vision',
            },
            {
              name: 'founder_title',
              label: 'Founder Section Title',
              type: 'text',
              defaultValue: 'Founder’s Story',
            },
            {
              name: 'founder_quote',
              label: 'Founder Quote',
              type: 'textarea',
              defaultValue:
                'We believe every immigrant deserves more than just survival—they deserve to belong, thrive, and rebuild their lives with dignity.',
            },
            {
              name: 'founder_name',
              label: 'Founder Name',
              type: 'text',
              defaultValue: 'Founder & CEO',
            },
            {
              name: 'founder_role',
              label: 'Founder Title / Role',
              type: 'text',
              defaultValue: 'People for Honor',
            },
            {
              name: 'founder_image',
              label: 'Founder Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'founder_paragraphs',
              label: 'Founder Story Paragraphs',
              type: 'array',
              fields: [
                {
                  name: 'paragraph_text',
                  label: 'Paragraph Text',
                  type: 'textarea',
                },
              ],
            },
          ],
        },
        {
          label: '3. Mission & Vision',
          fields: [
            {
              name: 'mission_title',
              label: 'Mission Box Title',
              type: 'text',
              defaultValue: 'Our Mission',
            },
            {
              name: 'mission_description',
              label: 'Mission Box Description',
              type: 'textarea',
              defaultValue:
                'To empower immigrants in Canada with the guidance, resources, and community support needed to navigate life, build careers, and flourish with honor.',
            },
            {
              name: 'vision_title',
              label: 'Vision Box Title',
              type: 'text',
              defaultValue: 'Our Vision',
            },
            {
              name: 'vision_description',
              label: 'Vision Box Description',
              type: 'textarea',
              defaultValue:
                'A Canada where every newcomer feels welcomed, valued, and fully equipped to contribute their unique talents to a thriving society.',
            },
          ],
        },
        {
          label: '4. Core Values',
          fields: [
            {
              name: 'values_badge',
              label: 'Values Section Badge',
              type: 'text',
              defaultValue: 'What Guides Us',
            },
            {
              name: 'values_title',
              label: 'Values Section Title',
              type: 'text',
              defaultValue: 'Our Core Values',
            },
            {
              name: 'values_subtitle',
              label: 'Values Section Subtitle',
              type: 'textarea',
              defaultValue:
                'These fundamental principles shape our approach, decisions, and community interactions every day.',
            },
            {
              name: 'values_list',
              label: 'Core Values Cards',
              type: 'array',
              fields: [
                {
                  name: 'value_id',
                  label: 'Value ID Slug (e.g. dignity)',
                  type: 'text',
                },
                {
                  name: 'title',
                  label: 'Value Title',
                  type: 'text',
                },
                {
                  name: 'description',
                  label: 'Value Description',
                  type: 'textarea',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
