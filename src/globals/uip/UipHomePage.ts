import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const UipHomePage: GlobalConfig = {
  slug: 'uip-home-page',
  label: 'UIP Home Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'UIP',
    hidden: ({ user }) => isHiddenForUser(user, 'uip'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_UIP_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/`
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
        // TAB 1: HERO SECTION
        {
          label: 'Hero Section',
          fields: [
            {
              name: 'hero_badge',
              label: 'Hero Eyebrow Badge',
              type: 'text',
              defaultValue: "Ottawa's LGBTQ+ Community Centre",
            },
            {
              name: 'hero_title_line_1',
              label: 'Hero Title Line 1',
              type: 'text',
              defaultValue: 'Find community. Build belonging.',
            },
            {
              name: 'hero_title_gradient',
              label: 'Hero Title Gradient Text',
              type: 'text',
              defaultValue: 'Start your journey with people who understand you.',
            },
            {
              name: 'hero_description',
              label: 'Hero Description',
              type: 'textarea',
              defaultValue:
                'We support LGBTQ+ newcomers, immigrants, and refugees through community programs, peer support, and culturally affirming spaces.',
            },
            {
              name: 'hero_youtube_id',
              label: 'Hero Background YouTube Video ID',
              type: 'text',
              defaultValue: 'RHaZ3dy1rc0',
            },
            {
              name: 'hero_fallback_image',
              label: 'Hero Fallback Background Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'hero_cta_primary_label',
                  label: 'Primary CTA Label',
                  type: 'text',
                  defaultValue: 'Get Support',
                },
                {
                  name: 'hero_cta_primary_link',
                  label: 'Primary CTA Link',
                  type: 'text',
                  defaultValue: '/contact',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'hero_cta_secondary_label',
                  label: 'Secondary CTA Label',
                  type: 'text',
                  defaultValue: 'Join Our Programs',
                },
                {
                  name: 'hero_cta_secondary_link',
                  label: 'Secondary CTA Link',
                  type: 'text',
                  defaultValue: '/programs',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'hero_cta_tertiary_label',
                  label: 'Tertiary CTA Label',
                  type: 'text',
                  defaultValue: 'Get Involved',
                },
                {
                  name: 'hero_cta_tertiary_link',
                  label: 'Tertiary CTA Link',
                  type: 'text',
                  defaultValue: '/Waystogive',
                },
              ],
            },
          ],
        },

        // TAB 2: STATS SECTION
        {
          label: 'Stats Section',
          fields: [
            {
              name: 'stats',
              label: 'Community Statistics',
              type: 'array',
              defaultValue: [
                { number: '100+', label: 'Participants', description: 'Through United in Pride events' },
                { number: '300+', label: 'Participants Reached', description: 'Through community partner events' },
                { number: '150+', label: 'Community Members', description: 'Engaged in our community' },
                { number: '10+', label: 'Community Events', description: 'Workshops, socials, and more' },
                { number: '$500+', label: 'Funds Raised', description: 'Toward our fundraising goal' },
                { number: '🏳️‍🌈', label: 'A Safe Space', description: 'Always welcoming, always open' },
              ],
              fields: [
                {
                  name: 'number',
                  label: 'Number / Icon Stat',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'label',
                  label: 'Stat Label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  label: 'Description',
                  type: 'text',
                },
              ],
            },
          ],
        },

        // TAB 3: ANNOUNCEMENT TICKER
        {
          label: 'Announcement Ticker',
          fields: [
            {
              name: 'ticker_items',
              label: 'Ticker Announcements',
              type: 'array',
              defaultValue: [
                { text: '🎬 Queer Movie Night — Every Last Saturday of the Month, Starting April 25' },
                { text: '🏕️ Upcoming Camp — July 17' },
              ],
              fields: [
                {
                  name: 'text',
                  label: 'Announcement Text',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },

        // TAB 4: WHAT WE DO (SERVICES)
        {
          label: 'What We Do',
          fields: [
            {
              name: 'what_we_do_badge',
              label: 'Section Eyebrow',
              type: 'text',
              defaultValue: 'Our Services',
            },
            {
              name: 'what_we_do_title',
              label: 'Section Heading',
              type: 'text',
              defaultValue: 'What We Do',
            },
            {
              name: 'services',
              label: 'Services / Pillars',
              type: 'array',
              defaultValue: [
                {
                  icon: '🤝',
                  title: 'Community Programs',
                  description: 'Engaging activities and inclusive spaces designed for connection.',
                },
                {
                  icon: '💬',
                  title: 'Peer Support',
                  description: 'Safe, guided environments to share experiences and find solidarity.',
                },
                {
                  icon: '🧭',
                  title: 'Resource Navigation',
                  description: 'Help with accessing local healthcare, legal, and community services.',
                },
                {
                  icon: '🌍',
                  title: 'Cultural Connection',
                  description: 'Honoring diverse backgrounds and intersectional LGBTQ+ identities.',
                },
              ],
              fields: [
                {
                  name: 'icon',
                  label: 'Icon / Emoji',
                  type: 'text',
                  defaultValue: '🤝',
                },
                {
                  name: 'title',
                  label: 'Service Title',
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
          ],
        },

        // TAB 5: WHO WE ARE (ABOUT & SLIDER)
        {
          label: 'Who We Are',
          fields: [
            {
              name: 'about_badge',
              label: 'Section Eyebrow',
              type: 'text',
              defaultValue: 'Our Story',
            },
            {
              name: 'about_title',
              label: 'Section Heading',
              type: 'text',
              defaultValue: 'Who We Are',
            },
            {
              name: 'about_description',
              label: 'Section Description',
              type: 'textarea',
              defaultValue:
                'United in Pride is a vibrant LGBTQ+ community centre located on the unceded territory of the Algonquin Anishinaabe Nation in Ottawa.',
            },
            {
              name: 'about_image',
              label: 'Main About Community Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'about_features',
              label: 'Core Highlights',
              type: 'array',
              defaultValue: [
                { icon: '🌈', title: 'Inclusive Community', description: 'Open to all identities' },
                { icon: '🛡️', title: 'Safe Space', description: 'Affirming environment for everyone' },
                { icon: '🌱', title: 'Growth & Healing', description: 'Programs for wellness' },
              ],
              fields: [
                {
                  name: 'icon',
                  label: 'Icon / Emoji',
                  type: 'text',
                },
                {
                  name: 'title',
                  label: 'Title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  label: 'Description',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'about_cta_label',
                  label: 'About Button Label',
                  type: 'text',
                  defaultValue: 'Learn More',
                },
                {
                  name: 'about_cta_link',
                  label: 'About Button Link',
                  type: 'text',
                  defaultValue: '/about',
                },
              ],
            },
            {
              name: 'about_gallery_images',
              label: 'Who We Are Slider Gallery Images',
              type: 'array',
              fields: [
                {
                  name: 'image',
                  label: 'Gallery Photo',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'caption',
                  label: 'Caption / Alt Text (Optional)',
                  type: 'text',
                },
              ],
            },
          ],
        },

        // TAB 6: COMMUNITY VOICES / VIDEOS
        {
          label: 'Community Voices',
          fields: [
            {
              name: 'community_vid_title',
              label: 'Section Heading',
              type: 'text',
              defaultValue: 'Community Voices',
            },
            {
              name: 'community_vid_subtitle',
              label: 'Section Subtitle',
              type: 'text',
              defaultValue: 'Inspiring journeys of resilience and growth',
            },
            {
              name: 'community_videos',
              label: 'Featured Videos',
              type: 'array',
              defaultValue: [
                { youtube_id: 'fadY9BXl79o', title: 'Community Voice 1' },
                { youtube_id: 'd58Gft_Ioa0', title: 'Community Voice 2' },
                { youtube_id: 'RSvC4Ps-u1Y', title: 'Community Voice 3' },
              ],
              fields: [
                {
                  name: 'title',
                  label: 'Video Title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'youtube_id',
                  label: 'YouTube Video ID',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },

        // TAB 7: COMMUNITY PARTNERS
        {
          label: 'Community Partners',
          fields: [
            {
              name: 'partners_title',
              label: 'Section Heading',
              type: 'text',
              defaultValue: 'Our Community Partners',
            },
            {
              name: 'partners_description',
              label: 'Section Description',
              type: 'textarea',
              defaultValue: 'We work closely with trusted partners to support our community.',
            },
            {
              name: 'partners',
              label: 'Partner Organizations',
              type: 'array',
              defaultValue: [
                { name: 'AIDS Committee of Ottawa (ACO)', url: 'https://aco-cso.ca/' },
                { name: 'Empower Youth Canada', url: 'https://empoweryouthcanada.ca/' },
                { name: 'Velor Digital', url: 'https://www.velordigital.ca' },
              ],
              fields: [
                {
                  name: 'name',
                  label: 'Partner Name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'url',
                  label: 'Website URL',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'logo',
                  label: 'Partner Logo (Optional)',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
          ],
        },

        // TAB 8: DONATE SECTION
        {
          label: 'Donate Section',
          fields: [
            {
              name: 'donate_badge',
              label: 'Section Eyebrow',
              type: 'text',
              defaultValue: 'Make a Difference',
            },
            {
              name: 'donate_title',
              label: 'Section Heading',
              type: 'text',
              defaultValue: 'Support Our Community',
            },
            {
              name: 'donate_description',
              label: 'Section Description',
              type: 'textarea',
              defaultValue:
                'Your donation directly funds programs and safe spaces for LGBTQ+ individuals in Ottawa.',
            },
            {
              name: 'donate_impact_items',
              label: 'Impact Tiers',
              type: 'array',
              defaultValue: [
                { amount: '$25', description: 'Art supplies' },
                { amount: '$50', description: 'Youth workshop' },
                { amount: '$100', description: 'Support group' },
              ],
              fields: [
                {
                  name: 'amount',
                  label: 'Dollar Amount',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  label: 'What this provides',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'donate_cta_label',
                  label: 'Button Label',
                  type: 'text',
                  defaultValue: 'Donate Now',
                },
                {
                  name: 'donate_cta_link',
                  label: 'Button Link',
                  type: 'text',
                  defaultValue: '/donate',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
