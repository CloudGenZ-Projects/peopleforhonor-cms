import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscColbernHomePage: GlobalConfig = {
  slug: 'mtsc-colbern-home-page',
  label: 'MTSC Colbern Home Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'MTSC Colbern',
    hidden: ({ user }) => isHiddenForUser(user, 'colbern'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_MTSC_COLBERN_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/`
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
              name: 'hero_eyebrow',
              label: 'Hero Eyebrow Badge',
              type: 'text',
              defaultValue: 'Mission to Seafarers · Toronto',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'hero_title_lead',
                  label: 'Title Lead',
                  type: 'text',
                  defaultValue: 'A Global Lifeline with a',
                },
                {
                  name: 'hero_title_highlight',
                  label: 'Title Highlighted (Coral)',
                  type: 'text',
                  defaultValue: 'Local Heart',
                },
              ],
            },
            {
              name: 'hero_lead_bold',
              label: 'Hero Bold Callout Paragraph',
              type: 'textarea',
              defaultValue:
                'Welcoming seafarers at the Port of Toronto with hospitality, practical support, and a place to belong while they are far from home.',
            },
            {
              name: 'hero_description',
              label: 'Hero Main Story / Paragraph',
              type: 'textarea',
              defaultValue:
                'At the Port of Toronto, seafarers arrive after time at sea, sometimes for days, weeks and even months. Mission to Seafarers Toronto is here during that window. With practical support. With a place to step off the vessel. With people to speak to while they are ashore. We are a part of Mission to Seafarers Southern Ontario and Mission to Seafarers Canada, connected to a wider network that meets seafarers in ports around world.',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'hero_primary_cta_label',
                  label: 'Primary Button Label',
                  type: 'text',
                  defaultValue: 'Contact the Station',
                },
                {
                  name: 'hero_primary_cta_link',
                  label: 'Primary Button Link',
                  type: 'text',
                  defaultValue: '/contact',
                },
              ],
            },
            {
              name: 'hero_donate_btn_label',
              label: 'Donate Button Label',
              type: 'text',
              defaultValue: 'Donate',
            },
            {
              name: 'hero_image',
              label: 'Hero Main Image (Port View)',
              type: 'upload',
              relationTo: 'media',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'hero_card_tag',
                  label: 'Overlay Card Tag',
                  type: 'text',
                  defaultValue: 'Toronto Station',
                },
                {
                  name: 'hero_card_text',
                  label: 'Overlay Card Caption',
                  type: 'text',
                  defaultValue: 'Welcoming crews who keep global trade moving.',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'hero_badge_stat',
                  label: 'Badge Stat Value',
                  type: 'text',
                  defaultValue: '200+',
                },
                {
                  name: 'hero_badge_sub',
                  label: 'Badge Subtext',
                  type: 'text',
                  defaultValue: 'Global Ports',
                },
              ],
            },
          ],
        },

        // TAB 2: TRUST STRIP (GLOBAL STATS)
        {
          label: 'Trust Strip Stats',
          fields: [
            {
              name: 'trust_stats',
              label: 'Trust Statistics (Counters)',
              type: 'array',
              defaultValue: [
                { n: '74,000+', l: 'Operating Ships supported globally' },
                { n: '1,890,000+', l: 'Seafarers supported worldwide' },
                { n: '160+', l: 'Years of service to seafarers' },
              ],
              fields: [
                {
                  name: 'n',
                  label: 'Counter Number',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'l',
                  label: 'Description Label',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },

        // TAB 3: HOW WE HELP (FEATURE CARDS & CARE PILLARS)
        {
          label: 'How We Help',
          fields: [
            {
              name: 'help_eyebrow',
              label: 'Eyebrow Tag',
              type: 'text',
              defaultValue: 'How We Help',
            },
            {
              name: 'help_title',
              label: 'Section Heading',
              type: 'text',
              defaultValue: 'How We Support the World’s Seafarers in Canada',
            },
            {
              name: 'help_description',
              label: 'Section Subtitle',
              type: 'textarea',
              defaultValue:
                'As part of a 160+ year legacy, we offer practical, emotional, and spiritual support at Canadian ports, ensuring no seafarer is alone.',
            },
            {
              name: 'service_cards',
              label: 'Featured Action Cards',
              type: 'array',
              defaultValue: [
                {
                  tag: 'At the Station',
                  title: 'Community Connection',
                  body: 'Refreshments and a comfortable place to sit, pause, and reconnect with loved ones in a welcoming station space.',
                  cta: 'Come visit us at the station',
                  to: '/contact',
                  isExternal: false,
                },
                {
                  tag: 'Logistics',
                  title: 'Seafarers Parcel Pickup Service',
                  body: 'Order essentials online and have them delivered securely to our station for pickup when you dock.',
                  cta: 'Send your Parcel',
                  to: 'https://parcelservice.mtsc.ca/',
                  isExternal: true,
                },
              ],
              fields: [
                {
                  name: 'tag',
                  label: 'Category Tag',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'title',
                  label: 'Card Title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'body',
                  label: 'Description',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'cta',
                  label: 'Link CTA Text',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'to',
                  label: 'URL / Path',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'isExternal',
                  label: 'External Link?',
                  type: 'checkbox',
                  defaultValue: false,
                },
              ],
            },
            {
              name: 'pillars_heading',
              label: 'Pillars Circle Heading',
              type: 'text',
              defaultValue: 'How We Care for Seafarers',
            },
            {
              name: 'care_pillars',
              label: 'Circular Care Pillars',
              type: 'array',
              defaultValue: [
                { title: 'Practical Support', iconKey: 'LifeBuoy' },
                { title: 'Mental and Emotional Health', iconKey: 'Heart' },
                { title: 'Spiritual Care', iconKey: 'HeartHandshake' },
                { title: 'Advocacy & Rights', iconKey: 'ShieldCheck' },
                { title: 'Community Connection', iconKey: 'Users' },
                { title: 'Haircuts & Wellness', iconKey: 'Scissors' },
                { title: 'Seafarers Parcel Pickup Service', iconKey: 'Package' },
                { title: 'Transportation & Local Guidance', iconKey: 'MapPin' },
                { title: 'Wi-Fi & Communication Tools', iconKey: 'Wifi' },
                { title: 'Refreshments & Hospitality', iconKey: 'Coffee' },
              ],
              fields: [
                {
                  name: 'title',
                  label: 'Pillar Title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'iconKey',
                  label: 'Lucide Icon Key',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },

        // TAB 4: HAIRCUTS SECTION
        {
          label: 'Haircut Service Callout',
          fields: [
            {
              name: 'haircut_eyebrow',
              label: 'Section Eyebrow',
              type: 'text',
              defaultValue: 'A Small Service That Makes a Big Difference',
            },
            {
              name: 'haircut_title',
              label: 'Section Heading',
              type: 'text',
              defaultValue: 'Haircuts for Seafarers',
            },
            {
              name: 'haircut_description',
              label: 'Paragraph 1',
              type: 'textarea',
              defaultValue:
                'After extended periods at sea, small things can feel significant. Haircuts are available at the Toronto station by appointment. They can be arranged in advance by seafarers, ship agents, or crew representatives.',
            },
            {
              name: 'haircut_subtext',
              label: 'Subtext / Disclaimer',
              type: 'textarea',
              defaultValue:
                'Availability is limited and scheduled around ship movements and volunteer capacity.',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'haircut_btn_label',
                  label: 'Booking Button Label',
                  type: 'text',
                  defaultValue: 'Book a Haircut Appointment',
                },
                {
                  name: 'haircut_iframe_url',
                  label: 'Booking Popup Iframe URL',
                  type: 'text',
                  defaultValue: 'https://fadekingzmobilebarber.square.site/',
                },
              ],
            },
          ],
        },

        // TAB 5: STRUCTURE & NETWORK HIERARCHY
        {
          label: 'Structure & Network',
          fields: [
            {
              name: 'network_eyebrow',
              label: 'Section Eyebrow',
              type: 'text',
              defaultValue: 'Connected in purpose',
            },
            {
              name: 'network_title',
              label: 'Heading',
              type: 'text',
              defaultValue: 'Local presence. Connected in purpose.',
            },
            {
              name: 'network_subtitle',
              label: 'Subtitle',
              type: 'textarea',
              defaultValue: 'Mission to Seafarers Toronto is part of a connected network of care.',
            },
            // Tier 1: Global
            {
              type: 'row',
              fields: [
                {
                  name: 'tier1_tag',
                  label: 'Tier 1 Tag',
                  type: 'text',
                  defaultValue: 'Global Network',
                },
                {
                  name: 'tier1_title',
                  label: 'Tier 1 Title',
                  type: 'text',
                  defaultValue: 'The Mission to Seafarers',
                },
              ],
            },
            {
              name: 'tier1_desc',
              label: 'Tier 1 Description',
              type: 'textarea',
              defaultValue: 'Connected globally across more than 200 ports.',
            },
            // Tier 2: National
            {
              type: 'row',
              fields: [
                {
                  name: 'tier2_tag',
                  label: 'Tier 2 Tag',
                  type: 'text',
                  defaultValue: 'National Body',
                },
                {
                  name: 'tier2_title',
                  label: 'Tier 2 Title',
                  type: 'text',
                  defaultValue: 'MtS Canada',
                },
              ],
            },
            {
              name: 'tier2_desc',
              label: 'Tier 2 Description',
              type: 'textarea',
              defaultValue:
                'Mission to Seafarers Canada provides the national leadership, fund development, partnerships, and support that strengthen stations across the country.',
            },
            // Tier 3: Regional
            {
              type: 'row',
              fields: [
                {
                  name: 'tier3_tag',
                  label: 'Tier 3 Tag',
                  type: 'text',
                  defaultValue: 'Regional Hub',
                },
                {
                  name: 'tier3_title',
                  label: 'Tier 3 Title',
                  type: 'text',
                  defaultValue: 'MtS Southern Ontario',
                },
              ],
            },
            {
              name: 'tier3_desc',
              label: 'Tier 3 Description',
              type: 'textarea',
              defaultValue:
                'Within Ontario, Mission to Seafarers Southern Ontario leads work across regional ports including Toronto, Hamilton, and Oshawa.',
            },
            // Tier 4: Local
            {
              type: 'row',
              fields: [
                {
                  name: 'tier4_tag',
                  label: 'Tier 4 Tag',
                  type: 'text',
                  defaultValue: 'Local Base',
                },
                {
                  name: 'tier4_title',
                  label: 'Tier 4 Title',
                  type: 'text',
                  defaultValue: 'Toronto Station',
                },
              ],
            },
            {
              name: 'tier4_desc',
              label: 'Tier 4 Description',
              type: 'textarea',
              defaultValue:
                'At the Port of Toronto, that work becomes direct. Here, we offer seafarers a welcoming place where they can rest, connect with loved ones, access practical help, receive a haircut, and know that they are not alone.',
            },
            {
              name: 'network_closing_quote',
              label: 'Bottom Italic Quote',
              type: 'textarea',
              defaultValue:
                'Toronto is an important gateway within Canada’s maritime network. Every year, seafarers arrive carrying the goods that keep our communities running, often with limited time ashore and few options once they disembark. We ensure that, when they arrive here, they are welcomed with dignity, kindness, and support.',
            },
          ],
        },

        // TAB 6: GET INVOLVED & DONATE
        {
          label: 'Get Involved & Donate',
          fields: [
            {
              name: 'footer_band_eyebrow',
              label: 'Eyebrow',
              type: 'text',
              defaultValue: 'Support Locally Care Globally.',
            },
            {
              name: 'footer_band_heading',
              label: 'Section Heading',
              type: 'textarea',
              defaultValue:
                'Whether you volunteer, donate, provide a haircut, or simply help us welcome a seafarer, you are part of a connected network of care reaching from Toronto to ports around the world.',
            },
            // Left Card: Volunteer
            {
              name: 'volunteer_title',
              label: 'Volunteer Card Title',
              type: 'text',
              defaultValue: 'Help Us Welcome Seafarers to Toronto',
            },
            {
              name: 'volunteer_desc',
              label: 'Volunteer Card Subtitle',
              type: 'textarea',
              defaultValue:
                'There are many ways to support the Toronto station and the seafarers we serve. You can:',
            },
            {
              name: 'volunteer_bullet_points',
              label: 'Volunteer Bullet Points',
              type: 'array',
              defaultValue: [
                { text: 'Volunteer at the station or during local events' },
                { text: 'Donate snacks, refreshments, gift cards, furniture, or supplies' },
                { text: 'Support haircut and wellness services for seafarers' },
                { text: 'Help furnish and create a welcoming station space' },
                { text: 'Support a local project or event' },
                { text: 'Become a community or business partner' },
              ],
              fields: [
                {
                  name: 'text',
                  label: 'Point',
                  type: 'text',
                  required: true,
                },
              ],
            },
            // Right Card: Donate
            {
              name: 'donate_title',
              label: 'Donate Card Title',
              type: 'text',
              defaultValue: 'Help Care for Seafarers',
            },
            {
              name: 'donate_desc',
              label: 'Donate Card Subtitle',
              type: 'textarea',
              defaultValue:
                'Every gift helps us provide hospitality, transportation, Wi-Fi, refreshments, haircuts, and a welcoming place for seafarers visiting Toronto. You can choose to:',
            },
            {
              name: 'donate_bullet_points',
              label: 'Donate Bullet Points',
              type: 'array',
              defaultValue: [
                { text: 'Become a monthly donor' },
                { text: 'Make a one-time gift' },
                { text: 'Support Mission to Seafarers Toronto through Mission to Seafarers Canada' },
              ],
              fields: [
                {
                  name: 'text',
                  label: 'Point',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'donate_iframe_url',
              label: 'CanadaHelps Form URL',
              type: 'text',
              defaultValue: 'https://www.canadahelps.org/en/dn/145961',
            },
          ],
        },
      ],
    },
  ],
}