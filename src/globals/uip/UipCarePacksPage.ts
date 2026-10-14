import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const UipCarePacksPage: GlobalConfig = {
  slug: 'uip-carepacks-page',
  label: 'UIP Care Packs Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'UIP',
    hidden: ({ user }) => isHiddenForUser(user, 'uip'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_UIP_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/care-packs`
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
              name: 'hero_badge',
              label: 'Hero Badge',
              type: 'text',
              defaultValue: 'Welcome to Canada',
            },
            {
              name: 'hero_title_line_1',
              label: 'Hero Title Line 1',
              type: 'text',
              defaultValue: 'Welcome',
            },
            {
              name: 'hero_title_gradient',
              label: 'Hero Title Gradient Text',
              type: 'text',
              defaultValue: 'Care Packs',
            },
            {
              name: 'hero_description',
              label: 'Hero Description',
              type: 'textarea',
              defaultValue:
                'A small gesture of care can make a big difference when starting over. Essential items delivered with love and care to support your journey. Each pack is thoughtfully curated to help you feel comfortable, connected, and supported during your first months in Canada.',
            },
            {
              name: 'hero_cta_label',
              label: 'Hero CTA Button Label',
              type: 'text',
              defaultValue: 'Request Your Care Pack 🎁',
            },
            {
              name: 'hero_cta_link',
              label: 'Hero CTA Button Link',
              type: 'text',
              defaultValue: '#request-form',
            },
          ],
        },

        // TAB 2: PACK CONTENTS
        {
          label: "What's in the Pack",
          fields: [
            {
              name: 'contents_badge',
              label: 'Eyebrow Badge',
              type: 'text',
              defaultValue: 'Thoughtfully Curated',
            },
            {
              name: 'contents_title',
              label: 'Section Heading',
              type: 'text',
              defaultValue: "What's in Your Pack",
            },
            {
              name: 'contents_description',
              label: 'Description',
              type: 'textarea',
              defaultValue:
                'Each welcome pack is prepared with love by our volunteers to provide comfort, warmth, and essential navigation.',
            },
            {
              name: 'contents_image',
              label: 'Care Pack Photo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'pack_categories',
              label: 'Pack Categories & Items',
              type: 'array',
              defaultValue: [
                {
                  title: 'Seasonal Apparel',
                  desc: 'Stay warm and comfortable as you adjust to Canadian weather.',
                  emoji: '🧣',
                  items_list: 'Warm knit beanie, Insulated gloves, Cozy wool-blend socks, Lightweight scarf',
                },
                {
                  title: 'Hygiene Essentials',
                  desc: 'Personal care items to help you feel fresh and dignified.',
                  emoji: '🧼',
                  items_list: 'Travel-size soap & body wash, Toothbrush & toothpaste, Shampoo & conditioner, Deodorant, Hand sanitizer',
                },
                {
                  title: 'Everyday Basics',
                  desc: 'Practical items for your daily appointments and routines.',
                  emoji: '📓',
                  items_list: 'Notebook & pen, Reusable water bottle, Phone charger cable',
                },
                {
                  title: 'Local Resource Card',
                  desc: 'Customized to your province to help you navigate your new home.',
                  emoji: '🗺️',
                  items_list: 'Settlement agencies, LGBTQ+ health services, Peer support contacts, Transit & grocery info',
                },
              ],
              fields: [
                {
                  name: 'title',
                  label: 'Category Title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'desc',
                  label: 'Description',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'emoji',
                  label: 'Emoji Icon',
                  type: 'text',
                  defaultValue: '🎁',
                },
                {
                  name: 'items_list',
                  label: 'Items (Comma separated)',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
          ],
        },

        // TAB 3: APPLICATION FORM CTA
        {
          label: 'Application CTA',
          fields: [
            {
              name: 'form_badge',
              label: 'Eyebrow',
              type: 'text',
              defaultValue: 'Free for LGBTQ+ Newcomers',
            },
            {
              name: 'form_title',
              label: 'Heading',
              type: 'text',
              defaultValue: 'Apply for Your Welcome Care Pack',
            },
            {
              name: 'form_description',
              label: 'Description',
              type: 'textarea',
              defaultValue:
                "No cost. Simply complete our 2‑minute form and we'll ship it to your Canadian address within 5 business days.",
            },
          ],
        },

        // TAB 4: FAQS
        {
          label: 'Frequently Asked Questions',
          fields: [
            {
              name: 'faq_title',
              label: 'FAQ Heading',
              type: 'text',
              defaultValue: 'Frequently Asked Questions',
            },
            {
              name: 'faq_description',
              label: 'FAQ Description',
              type: 'textarea',
              defaultValue: 'Everything you need to know about our Welcome Care Packs.',
            },
            {
              name: 'faqs',
              label: 'Questions & Answers',
              type: 'array',
              defaultValue: [
                {
                  question: 'Who is eligible for a Welcome Care Pack?',
                  answer:
                    'Welcome Care Packs are available to LGBTQ+ newcomers, immigrants, and refugees who have arrived in Canada within the last 12 months. We operate on an honor system and trust that those who request a pack truly need one.',
                },
                {
                  question: 'How long does shipping take?',
                  answer:
                    'Once you submit your application, our volunteers pack your box within 5 business days. Standard shipping within Canada typically takes an additional 3 to 7 business days depending on your province or territory.',
                },
                {
                  question: 'Is there really no cost?',
                  answer:
                    'Yes, it is 100% free! Thanks to the generous support of our donors, community partners, and volunteers, we cover all costs for the items and shipping.',
                },
              ],
              fields: [
                {
                  name: 'question',
                  label: 'Question',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'answer',
                  label: 'Answer',
                  type: 'textarea',
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
