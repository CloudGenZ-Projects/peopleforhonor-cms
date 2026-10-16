import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscColbernAboutPage: GlobalConfig = {
  slug: 'mtsc-colbern-about-page',
  label: 'MTSC Colbern About Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'MTSC Colbern',
    hidden: ({ user }) => isHiddenForUser(user, 'colbern'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_MTSC_COLBERN_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/about`
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
              name: 'hero_title',
              label: 'Hero Title',
              type: 'text',
              defaultValue: 'Toronto Station History',
            },
            {
              name: 'hero_bg_image',
              label: 'Hero Background Image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },

        // TAB 2: TIMELINE / HISTORY SECTION
        {
          label: 'History & Timeline',
          fields: [
            {
              name: 'history_eyebrow',
              label: 'Eyebrow Tag',
              type: 'text',
              defaultValue: 'Our Story',
            },
            {
              name: 'history_title',
              label: 'Main Heading',
              type: 'text',
              defaultValue: 'Decades of Care at the Port of Toronto',
            },
            {
              name: 'history_blocks',
              label: 'History Timeline Milestones',
              type: 'array',
              fields: [
                {
                  name: 'era',
                  label: 'Era / Years Badge',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'title',
                  label: 'Era Title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'paragraphs',
                  label: 'Paragraphs',
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
                {
                  name: 'image',
                  label: 'Timeline Image',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
          ],
        },

        // TAB 3: LEADERSHIP & TEAM
        {
          label: 'Team & Leadership',
          fields: [
            {
              name: 'team_eyebrow',
              label: 'Eyebrow Tag',
              type: 'text',
              defaultValue: 'Leadership',
            },
            {
              name: 'team_title',
              label: 'Section Heading',
              type: 'text',
              defaultValue: 'Toronto & MTSSO team',
            },
            // Featured Leader
            {
              name: 'leader_heading',
              label: 'Featured Leader Title',
              type: 'text',
              defaultValue: 'Toronto Station Chaplin and Manager-Rev. Judith Alltree',
            },
            {
              name: 'leader_name',
              label: 'Featured Leader Subtitle / Name',
              type: 'text',
              defaultValue: 'REV. JUDITH ALLTREE',
            },
            {
              name: 'leader_image',
              label: 'Featured Leader Photo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'leader_paragraphs',
              label: 'Featured Leader Bio Paragraphs',
              type: 'array',
              fields: [
                {
                  name: 'text',
                  label: 'Bio Paragraph',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
            // Additional Team Members
            {
              name: 'team_members',
              label: 'Additional Team Members',
              type: 'array',
              fields: [
                {
                  name: 'name',
                  label: 'Full Name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'role',
                  label: 'Role / Designation',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'image',
                  label: 'Photo',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
          ],
        },

        // TAB 4: BOARD OF DIRECTORS
        {
          label: 'Board of Directors',
          fields: [
            {
              name: 'board_title',
              label: 'Section Heading',
              type: 'text',
              defaultValue: 'Our Board of Directors',
            },
            {
              name: 'board_members',
              label: 'Board Members List',
              type: 'array',
              fields: [
                {
                  name: 'name',
                  label: 'Full Name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'role',
                  label: 'Role / Title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'image',
                  label: 'Photo',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
          ],
        },

        // TAB 5: STRUCTURE
        {
          label: 'Structure & Network',
          fields: [
            {
              name: 'structure_eyebrow',
              label: 'Eyebrow Tag',
              type: 'text',
              defaultValue: 'How the Structure Works',
            },
            {
              name: 'structure_title',
              label: 'Section Heading',
              type: 'text',
              defaultValue: 'One Mission. Many Hands. Shared Care.',
            },
            {
              name: 'structure_cards',
              label: 'Structure Cards',
              type: 'array',
              fields: [
                {
                  name: 'org_title',
                  label: 'Organization Name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  label: 'Description',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
            {
              name: 'structure_bottom_quote',
              label: 'Bottom Highlight Quote',
              type: 'textarea',
              defaultValue:
                'Together, ensure that every seafarer who comes through Toronto is not only seen, but cared for.',
            },
          ],
        },

        // TAB 6: CTA BANNER
        {
          label: 'Call to Action Banner',
          fields: [
            {
              name: 'cta_title',
              label: 'CTA Heading',
              type: 'text',
              defaultValue: 'Be part of the welcome.',
            },
            {
              name: 'cta_description',
              label: 'CTA Subtext',
              type: 'textarea',
              defaultValue:
                'Visit, volunteer, or give. Every contribution helps a seafarer feel seen.',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'cta_btn1_label',
                  label: 'Button 1 Label',
                  type: 'text',
                  defaultValue: 'Get Involved',
                },
                {
                  name: 'cta_btn1_link',
                  label: 'Button 1 Link',
                  type: 'text',
                  defaultValue: '/get-involved',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'cta_btn2_label',
                  label: 'Button 2 Label',
                  type: 'text',
                  defaultValue: 'Donate Now',
                },
                {
                  name: 'cta_btn2_link',
                  label: 'Button 2 Link',
                  type: 'text',
                  defaultValue: '/get-involved#donate',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}