import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscColbernEventsPage: GlobalConfig = {
  slug: 'mtsc-colbern-events-page',
  label: 'MTSC Colbern Events Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'MTSC Colbern',
    hidden: ({ user }) => isHiddenForUser(user, 'colbern'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_MTSC_COLBERN_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/events`
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
              defaultValue: 'Events & Community Gatherings',
            },
            {
              name: 'hero_subtitle',
              label: 'Hero Subtitle',
              type: 'textarea',
              defaultValue:
                'Mission to Seafarers Toronto hosts events, conversations, awareness initiatives, and waterfront gatherings that help connect people to maritime life and the seafarers who help keep global trade moving.',
            },
            {
              name: 'hero_btn_label',
              label: 'Scroll Button Label',
              type: 'text',
              defaultValue: 'View Upcoming Events',
            },
            {
              name: 'hero_bg_image',
              label: 'Hero Background Image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },

        // TAB 2: FEATURED EVENT SECTION
        {
          label: 'Featured Event',
          fields: [
            {
              name: 'featured_badge',
              label: 'Badge Label',
              type: 'text',
              defaultValue: 'Featured Event',
            },
            {
              name: 'featured_title',
              label: 'Featured Event Title',
              type: 'text',
              defaultValue: 'Women in Maritime 2026',
            },
            {
              name: 'featured_image',
              label: 'Featured Event Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'featured_theme',
              label: 'Theme Heading',
              type: 'text',
              defaultValue:
                'Theme: From Policy to Practice: Advancing Gender Equality for Maritime Excellence',
            },
            {
              name: 'featured_subtheme',
              label: 'Subtheme Text (Coral)',
              type: 'text',
              defaultValue:
                'International Day for Women in Maritime & Reopening of the Mission to Seafarers Toronto Station',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'featured_date',
                  label: 'Event Date / Time',
                  type: 'text',
                  defaultValue: 'Wednesday, May 20, 2026',
                },
                {
                  name: 'featured_location',
                  label: 'Event Location',
                  type: 'text',
                  defaultValue: 'Port of Toronto Cruise Ship Terminal',
                },
              ],
            },
            {
              name: 'featured_desc_p1',
              label: 'Description Paragraph 1',
              type: 'textarea',
              defaultValue:
                "This gathering brings together maritime leaders, cadets, labour voices, educators, seafarers, and community partners for a day of conversation, reflection, and collaboration focused on the realities shaping women's experiences across the maritime sector.",
            },
            {
              name: 'featured_desc_p2',
              label: 'Description Paragraph 2',
              type: 'textarea',
              defaultValue:
                'The event also marks the reopening of the Mission to Seafarers Toronto Station, helping restore a welcoming place of care and connection for seafarers arriving at the Port of Toronto.',
            },
            {
              name: 'featured_btn_label',
              label: 'Modal Trigger Button Label',
              type: 'text',
              defaultValue: 'View Event Highlights',
            },
          ],
        },

        // TAB 3: HIGHLIGHTS POPUP (MODAL)
        {
          label: 'Event Highlights Modal',
          fields: [
            {
              name: 'modal_title',
              label: 'Modal Header Title',
              type: 'text',
              defaultValue: 'What the Day Includes',
            },
            {
              name: 'highlights_list',
              label: 'Highlights Items',
              type: 'array',
              fields: [
                {
                  name: 'iconKey',
                  label: 'Icon Key (Lightbulb, Anchor, Users, Ship)',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'title',
                  label: 'Highlight Title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  label: 'Highlight Description',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
            {
              name: 'modal_close_label',
              label: 'Close Button Label',
              type: 'text',
              defaultValue: 'Close Details',
            },
          ],
        },

        // TAB 4: STORIES CAROUSEL GALLERY
        {
          label: 'Stories Carousel',
          fields: [
            {
              name: 'carousel_title',
              label: 'Section Heading',
              type: 'text',
              defaultValue: 'Stories From Our Events',
            },
            {
              name: 'carousel_gallery',
              label: 'Carousel Image Gallery',
              type: 'array',
              fields: [
                {
                  name: 'image',
                  label: 'Moment Image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'caption',
                  label: 'Image Alt/Caption (Optional)',
                  type: 'text',
                },
              ],
            },
          ],
        },

        // TAB 5: FINAL CTA
        {
          label: 'Final CTA Banner',
          fields: [
            {
              name: 'cta_title',
              label: 'CTA Heading',
              type: 'text',
              defaultValue: 'Be Part of the Conversation',
            },
            {
              name: 'cta_description',
              label: 'CTA Description',
              type: 'textarea',
              defaultValue:
                'Whether through attending an event, volunteering, donating, partnering with us, or supporting the station, every act of involvement helps strengthen care and visibility for seafarers visiting Toronto.',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'cta_btn1_label',
                  label: 'Button 1 Label',
                  type: 'text',
                  defaultValue: 'Partner With Us',
                },
                {
                  name: 'cta_btn1_link',
                  label: 'Button 1 Link',
                  type: 'text',
                  defaultValue: '/contact',
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
                  defaultValue: 'Volunteer',
                },
                {
                  name: 'cta_btn2_link',
                  label: 'Button 2 Link',
                  type: 'text',
                  defaultValue: '/get-involved',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'cta_btn3_label',
                  label: 'Button 3 Label',
                  type: 'text',
                  defaultValue: 'Support the Toronto Station',
                },
                {
                  name: 'cta_btn3_link',
                  label: 'Button 3 Link',
                  type: 'text',
                  defaultValue: '/support',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}