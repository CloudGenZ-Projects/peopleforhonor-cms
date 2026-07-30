import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscHomePage: GlobalConfig = {
  slug: 'mtsc-home-page',
  label: 'MTSC Home Page',
  admin: {
    group: 'MTSC Halifax',
    hidden: ({ user }) => isHiddenForUser(user, 'mtsc'),
    livePreview: {
      url: process.env.PAYLOAD_PUBLIC_SITE_URL || 'http://localhost:5173',
    },
  },
  access: {
    read: () => true,
    update: (args) => checkTenantAccess(args, 'mtsc'),
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // TAB 1: HERO BANNER
        {
          label: 'Hero Banner',
          fields: [
            {
              name: 'skyline_image',
              label: 'Hero Skyline Small Logo/Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'eyebrow_badge',
              label: 'Hero Eyebrow Badge',
              type: 'text',
              defaultValue: '✦ A local presence. Part of something larger.',
            },
            {
              name: 'title_line_1',
              label: 'Hero Title Line 1',
              type: 'text',
              defaultValue: 'Mission to',
            },
            {
              name: 'title_line_2',
              label: 'Hero Title Line 2 (Coral)',
              type: 'text',
              defaultValue: 'Seafarers Halifax',
            },
            {
              name: 'hero_strong_text',
              label: 'Hero Intro Bold Statement',
              type: 'textarea',
              defaultValue: 'At the Port of Halifax, seafarers arrive after time at sea, sometimes for days, weeks and even months. Mission to Seafarers Halifax is here during that window.',
            },
            {
              name: 'hero_paragraph',
              label: 'Hero Description Paragraph',
              type: 'textarea',
              defaultValue: 'Mission to Seafarers Halifax is here during that window. We step aboard ships with a warm welcome, offer rides into town, provide connection through SIM cards and Wi-Fi, and simply listen to whatever is on a seafarer\'s heart.',
            },
            {
              name: 'hero_image',
              label: 'Hero Main Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'hero_badge_number',
              label: 'Hero Badge Number/Stat',
              type: 'text',
              defaultValue: '85+',
            },
            {
              name: 'hero_badge_text_1',
              label: 'Hero Badge Top Label',
              type: 'text',
              defaultValue: 'Legacy',
            },
            {
              name: 'hero_badge_text_2',
              label: 'Hero Badge Bottom Label',
              type: 'text',
              defaultValue: 'Years',
            },
          ],
        },

        // TAB 2: HOW WE HELP (INTRO)
        {
          label: 'How We Help',
          fields: [
            {
              name: 'intro_eyebrow',
              label: 'Intro Eyebrow',
              type: 'text',
              defaultValue: 'How We Help',
            },
            {
              name: 'intro_title',
              label: 'Intro Section Title',
              type: 'text',
              defaultValue: 'How We Support the World’s Seafarers in Canada',
            },
            {
              name: 'intro_subtitle',
              label: 'Intro Subtitle',
              type: 'textarea',
              defaultValue: 'As part of a 160+ year legacy, we provide practical, emotional, and community-based support for seafarers while they are in port ensuring no one feels alone.',
            },
            {
              name: 'intro_paragraphs',
              label: 'Intro Paragraphs',
              type: 'textarea',
              defaultValue: 'Mission to Seafarers Canada provides the national leadership, fund development, partnerships, and support that strengthen stations across the country.\n\nAt the Port of Halifax, that work becomes direct.\n\nHere, we offer seafarers a welcoming place where they can rest, connect with loved ones, access practical help, receive a haircut, and know that they are not alone.',
            },
          ],
        },

        // TAB 3: SERVICE HIGHLIGHTS
        {
          label: 'Service Cards',
          fields: [
            {
              name: 'service_1_eyebrow',
              label: 'Service 1 Eyebrow',
              type: 'text',
              defaultValue: 'At the Station',
            },
            {
              name: 'service_1_title',
              label: 'Service 1 Title',
              type: 'text',
              defaultValue: 'Community Connection',
            },
            {
              name: 'service_1_description',
              label: 'Service 1 Description',
              type: 'textarea',
              defaultValue: 'Refreshments and a comfortable place to sit, pause, and reconnect with loved ones in a welcoming station space.',
            },
            {
              name: 'service_1_link_text',
              label: 'Service 1 Button / Link Text',
              type: 'text',
              defaultValue: 'Come Visit Us at the Station',
            },
            {
              name: 'service_1_link_url',
              label: 'Service 1 Link URL',
              type: 'text',
              defaultValue: '/contact',
            },
            {
              name: 'service_2_eyebrow',
              label: 'Service 2 Eyebrow',
              type: 'text',
              defaultValue: 'Logistics',
            },
            {
              name: 'service_2_title',
              label: 'Service 2 Title',
              type: 'text',
              defaultValue: 'Seafarers Parcel Pickup Service',
            },
            {
              name: 'service_2_description',
              label: 'Service 2 Description',
              type: 'textarea',
              defaultValue: 'Order essentials online and have them delivered securely to our station for pickup when you dock.',
            },
            {
              name: 'service_2_link_text',
              label: 'Service 2 Button / Link Text',
              type: 'text',
              defaultValue: 'Send Your Parcel',
            },
            {
              name: 'service_2_link_url',
              label: 'Service 2 Link URL',
              type: 'text',
              defaultValue: 'https://parcelservice.mtsc.ca/',
            },
          ],
        },

        // TAB 4: STATS SECTION
        {
          label: 'Stats Section',
          fields: [
            {
              name: 'stats_image',
              label: 'Stats Section Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'stats_percentage',
              label: 'Stats Highlight Percentage',
              type: 'text',
              defaultValue: '90%',
            },
            {
              name: 'stats_percentage_label',
              label: 'Stats Highlight Label',
              type: 'textarea',
              defaultValue: 'of world trade is carried by sea. The clothes we wear, the cars we drive, the food on our tables',
            },
            {
              name: 'stats_items',
              label: 'Stats Counter Grid Items',
              type: 'array',
              fields: [
                {
                  name: 'stat_number',
                  label: 'Stat Number (e.g. 5,000+)',
                  type: 'text',
                },
                {
                  name: 'stat_label',
                  label: 'Stat Label',
                  type: 'text',
                },
                {
                  name: 'stat_description',
                  label: 'Stat Description',
                  type: 'textarea',
                },
              ],
            },
          ],
        },

        // TAB 5: HOW WE WORK / PILLARS
        {
          label: 'Our Pillars',
          fields: [
            {
              name: 'pillars_eyebrow',
              label: 'Pillars Section Eyebrow',
              type: 'text',
              defaultValue: 'How We Work',
            },
            {
              name: 'pillars_title',
              label: 'Pillars Section Main Title',
              type: 'text',
              defaultValue: 'Practical, Emotional, and Spiritual Care at Sea & Shore',
            },
            {
              name: 'pillars_subtitle',
              label: 'Pillars Section Subtitle',
              type: 'textarea',
              defaultValue: 'Seafarers face unique challenges — months away from family, dangerous conditions, and isolation. We meet them with compassion, respect, and tangible support.',
            },
            {
              name: 'pillars_list',
              label: 'Pillars Cards',
              type: 'array',
              fields: [
                {
                  name: 'pillar_number',
                  label: 'Pillar Number (e.g. 01)',
                  type: 'text',
                },
                {
                  name: 'title',
                  label: 'Pillar Title',
                  type: 'text',
                },
                {
                  name: 'description',
                  label: 'Pillar Description',
                  type: 'textarea',
                },
              ],
            },
          ],
        },

        // TAB 6: SUPPORT CTA (WAYS TO GIVE)
        {
          label: 'Support CTA',
          fields: [
            {
              name: 'support_eyebrow',
              label: 'Support Section Eyebrow',
              type: 'text',
              defaultValue: 'Get Involved',
            },
            {
              name: 'support_title',
              label: 'Support Section Title',
              type: 'text',
              defaultValue: 'How You Can Support Seafarers',
            },
            {
              name: 'support_subtitle',
              label: 'Support Section Subtitle',
              type: 'textarea',
              defaultValue: 'Your generosity keeps our doors open, our van running, and our care active for seafarers arriving in Halifax.',
            },
            {
              name: 'support_cards',
              label: 'Support CTA Cards',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  label: 'Card Title',
                  type: 'text',
                },
                {
                  name: 'description',
                  label: 'Card Description',
                  type: 'textarea',
                },
                {
                  name: 'cta_text',
                  label: 'Button Text',
                  type: 'text',
                },
                {
                  name: 'cta_url',
                  label: 'Button Link URL',
                  type: 'text',
                },
                {
                  name: 'badge_text',
                  label: 'Optional Badge (e.g. Most Needed)',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
