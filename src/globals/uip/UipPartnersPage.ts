import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const UipPartnersPage: GlobalConfig = {
  slug: 'uip-partners-page',
  label: 'UIP Partners Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'UIP',
    hidden: ({ user }) => isHiddenForUser(user, 'uip'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_UIP_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/ourpartners`
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
              label: 'Hero Badge',
              type: 'text',
              defaultValue: 'Trusted Network & Resources',
            },
            {
              name: 'hero_title_line_1',
              label: 'Hero Title Line 1',
              type: 'text',
              defaultValue: 'Connecting You to',
            },
            {
              name: 'hero_title_gradient',
              label: 'Hero Title Gradient Text',
              type: 'text',
              defaultValue: 'Safe & Affirming Support',
            },
            {
              name: 'hero_description',
              label: 'Hero Description',
              type: 'textarea',
              defaultValue:
                "We've partnered with verified organizations across Canada to ensure LGBTQ+ newcomers have access to legal, housing, healthcare, and settlement services you can trust.",
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'hero_cta_primary_label',
                  label: 'Primary CTA Label',
                  type: 'text',
                  defaultValue: 'Meet Our Partners',
                },
                {
                  name: 'hero_cta_primary_link',
                  label: 'Primary CTA Link',
                  type: 'text',
                  defaultValue: '#partners',
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
                  defaultValue: 'Get Personal Support',
                },
                {
                  name: 'hero_cta_secondary_link',
                  label: 'Secondary CTA Link',
                  type: 'text',
                  defaultValue: '/support',
                },
              ],
            },
          ],
        },

        // TAB 2: RESOURCE NAVIGATION INTRO
        {
          label: 'Navigation & Support',
          fields: [
            {
              name: 'intro_badge',
              label: 'Section Eyebrow Badge',
              type: 'text',
              defaultValue: 'Resource Navigation',
            },
            {
              name: 'intro_title',
              label: 'Heading',
              type: 'text',
              defaultValue: 'We Walk Alongside You',
            },
            {
              name: 'intro_description',
              label: 'Description',
              type: 'textarea',
              defaultValue:
                "Whether you need help understanding immigration policies, finding legal assistance, or connecting with culturally safe support services, we're here to guide you every step of the way.",
            },
            {
              name: 'intro_image',
              label: 'Support Showcase Photo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'intro_features',
              label: 'Key Pillars / Services',
              type: 'array',
              defaultValue: [
                { title: 'Legal Support', desc: 'Immigration policies, refugee claims, and rights protection' },
                { title: 'Housing & Shelter', desc: 'Safe, affirming accommodation and housing assistance' },
                { title: 'Healthcare Access', desc: 'Medical care, mental health support, and wellness services' },
                { title: 'Settlement Services', desc: 'Language learning, employment, and community integration' },
              ],
              fields: [
                {
                  name: 'title',
                  label: 'Title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'desc',
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
                  name: 'intro_card_title',
                  label: 'Connect Card Title',
                  type: 'text',
                  defaultValue: 'Ready to Connect?',
                },
                {
                  name: 'intro_card_desc',
                  label: 'Connect Card Subtitle',
                  type: 'text',
                  defaultValue: "Give us a call or send a message—we're here for you",
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'intro_card_btn_1_label',
                  label: 'Button 1 Label',
                  type: 'text',
                  defaultValue: 'Contact Our Team',
                },
                {
                  name: 'intro_card_btn_1_link',
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
                  name: 'intro_card_btn_2_label',
                  label: 'Button 2 Label',
                  type: 'text',
                  defaultValue: 'Get Immediate Help',
                },
                {
                  name: 'intro_card_btn_2_link',
                  label: 'Button 2 Link',
                  type: 'text',
                  defaultValue: '/support',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'intro_floating_badge_title',
                  label: 'Floating Badge Title',
                  type: 'text',
                  defaultValue: 'Trusted Partners',
                },
                {
                  name: 'intro_floating_badge_desc',
                  label: 'Floating Badge Subtitle',
                  type: 'text',
                  defaultValue: 'Connected to 200+ LGBTQ+ affirming organizations across Canada',
                },
              ],
            },
          ],
        },

        // TAB 3: PARTNERS DIRECTORY
        {
          label: 'Partners Directory',
          fields: [
            {
              name: 'partners_badge',
              label: 'Section Eyebrow',
              type: 'text',
              defaultValue: 'Verified Network',
            },
            {
              name: 'partners_title',
              label: 'Section Heading',
              type: 'text',
              defaultValue: 'Our Trusted Community Partners',
            },
            {
              name: 'partners_description',
              label: 'Section Description',
              type: 'textarea',
              defaultValue:
                'Browse our network of vetted organizations dedicated to supporting LGBTQ+ newcomers in Canada.',
            },
            {
              name: 'partners_list',
              label: 'Partner Organizations',
              type: 'array',
              defaultValue: [
                {
                  name: 'AIDS Committee of Ottawa (ACO)',
                  summary: 'Providing support, prevention, and education services to ensure our community receives safe and affirming care.',
                  type: 'Community Partner',
                  website: 'https://aco-cso.ca',
                },
                {
                  name: 'Empower Youth Canada',
                  summary: 'Empowering young people through inclusive programs, safe spaces, and dedicated community support.',
                  type: 'Community Partner',
                  website: 'https://empoweryouthcanada.ca',
                },
                {
                  name: 'Velor Digital',
                  summary: 'Tailored digital marketing solutions to elevate your brand.',
                  type: 'Community Partner',
                  website: 'https://www.velordigital.ca',
                },
              ],
              fields: [
                {
                  name: 'name',
                  label: 'Partner Name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'summary',
                  label: 'Description / Summary',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'type',
                  label: 'Partner Category / Badge',
                  type: 'text',
                  defaultValue: 'Community Partner',
                },
                {
                  name: 'website',
                  label: 'Website Link',
                  type: 'text',
                },
                {
                  name: 'logo',
                  label: 'Partner Logo',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
          ],
        },

        // TAB 4: SUPPORT FORM CTA
        {
          label: 'Support CTA',
          fields: [
            {
              name: 'support_cta_badge',
              label: 'Eyebrow',
              type: 'text',
              defaultValue: 'Need Personalized Guidance?',
            },
            {
              name: 'support_cta_title',
              label: 'Heading',
              type: 'text',
              defaultValue: 'Let Us Help You Navigate',
            },
            {
              name: 'support_cta_description',
              label: 'Description',
              type: 'textarea',
              defaultValue:
                "Tell us what you're looking for, and our team will connect you with the right verified partners and resources.",
            },
          ],
        },
      ],
    },
  ],
}
