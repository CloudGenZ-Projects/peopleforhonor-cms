import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const UipAboutPage: GlobalConfig = {
  slug: 'uip-about-page',
  label: 'UIP About Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'UIP',
    hidden: ({ user }) => isHiddenForUser(user, 'uip'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_UIP_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/about`
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
              defaultValue: 'From Survival to Belonging',
            },
            {
              name: 'hero_title_line_1',
              label: 'Hero Title Line 1',
              type: 'text',
              defaultValue: 'Building Safety,',
            },
            {
              name: 'hero_title_gradient',
              label: 'Hero Title Gradient Text',
              type: 'text',
              defaultValue: 'Pride and Belonging',
            },
            {
              name: 'hero_description',
              label: 'Hero Description (Optional)',
              type: 'textarea',
            },
          ],
        },

        // TAB 2: MISSION & VISION
        {
          label: 'Mission & Vision',
          fields: [
            {
              name: 'mission_badge',
              label: 'Mission Eyebrow Badge',
              type: 'text',
              defaultValue: 'Our Purpose',
            },
            {
              name: 'mission_title',
              label: 'Mission Heading',
              type: 'text',
              defaultValue: 'Our Mission',
            },
            {
              name: 'mission_description',
              label: 'Mission Statement',
              type: 'textarea',
              defaultValue:
                'United in Pride creates inclusive, culturally affirming spaces where LGBTQ+ newcomers can heal, build community, access support, and rediscover a sense of belonging.',
            },
            {
              name: 'mission_pillars',
              label: 'Mission Pillars',
              type: 'array',
              defaultValue: [
                {
                  title: 'Community Building',
                  desc: 'Creating safe, culturally affirming spaces where authentic connections flourish.',
                },
                {
                  title: 'Healing-Centered',
                  desc: 'Providing safe environments for processing trauma and reclaiming dignity.',
                },
                {
                  title: 'Advocacy',
                  desc: 'Lived-experience leadership guiding programs to strengthen newcomer rights.',
                },
                {
                  title: 'National Reach',
                  desc: 'A volunteer-led movement supporting queer and trans newcomers across Canada.',
                },
              ],
              fields: [
                {
                  name: 'title',
                  label: 'Pillar Title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'desc',
                  label: 'Description',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
            {
              name: 'vision_title',
              label: 'Vision Heading',
              type: 'text',
              defaultValue: 'Our Vision',
            },
            {
              name: 'vision_description',
              label: 'Vision Statement',
              type: 'textarea',
              defaultValue:
                'A Canada where LGBTQ+ people live openly and safely, free from fear, stigma, and isolation and are fully embraced in inclusive communities.',
            },
            {
              name: 'vision_tags',
              label: 'Vision Pill Tags',
              type: 'array',
              defaultValue: [
                { tag: 'Live Safely' },
                { tag: 'Live Openly' },
                { tag: 'Be Celebrated' },
              ],
              fields: [
                {
                  name: 'tag',
                  label: 'Tag Text',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },

        // TAB 3: FOUNDER'S JOURNEY (LEADERSHIP)
        {
          label: "Founder's Journey",
          fields: [
            {
              name: 'leadership_image',
              label: 'Founder & Inspiration Photo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'leadership_image_caption_name',
                  label: 'Photo Caption Name',
                  type: 'text',
                  defaultValue: 'Stella & Hudson',
                },
                {
                  name: 'leadership_image_caption_role',
                  label: 'Photo Caption Role',
                  type: 'text',
                  defaultValue: 'Founder & Inspiration',
                },
              ],
            },
            {
              name: 'leadership_title',
              label: 'Section Heading',
              type: 'text',
              defaultValue: 'The Founder’s Journey',
            },
            {
              name: 'leadership_paragraph_1',
              label: 'Story Paragraph 1',
              type: 'textarea',
              defaultValue:
                'Founder Stella Nakitende grew up in Uganda, where being lesbian meant living with fear. Leaving her home was an act of courage. Arriving in Canada brought relief, but also new challenges of isolation and cultural barriers.',
            },
            {
              name: 'leadership_paragraph_2',
              label: 'Story Paragraph 2',
              type: 'textarea',
              defaultValue:
                'At the heart of United in Pride is Stella’s partner, Hudson, a trans man whose experiences with discrimination and transphobia shaped both their lives. Together, they navigated the emotional weight of migration and identity.',
            },
            {
              name: 'leadership_quote',
              label: 'Founder Quote',
              type: 'textarea',
              defaultValue:
                'United in Pride exists because I know what it feels like to arrive in a country and still feel alone. My hope is that every queer and trans newcomer can find a community where they feel safe, proud, and truly seen.',
            },
            {
              name: 'leadership_quote_author',
              label: 'Quote Author Signature',
              type: 'text',
              defaultValue: '— Stella Nakitende, Founder & Executive Director',
            },
          ],
        },

        // TAB 4: OUR WHY & VALUES
        {
          label: 'Our Why & Values',
          fields: [
            {
              name: 'why_title',
              label: 'Our Why Heading',
              type: 'text',
              defaultValue: 'Our Why',
            },
            {
              name: 'why_items',
              label: 'Why Statements',
              type: 'array',
              defaultValue: [
                {
                  highlight: 'We Know Rejection.',
                  text: 'We built this space because we know what it feels like to be rejected — not just by systems, but by our own families, our churches, our communities.',
                },
                {
                  highlight: 'We Know Courage.',
                  text: 'We know what it feels like to hide — and we know the courage it takes to stop hiding.',
                },
              ],
              fields: [
                {
                  name: 'highlight',
                  label: 'Bold Highlight Lead',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'text',
                  label: 'Statement Text',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
            {
              name: 'why_quote',
              label: 'Big Closing Why Callout',
              type: 'textarea',
              defaultValue:
                'United in Pride exists because we believe in something bigger. Queer immigrants deserve more than survival. We deserve to heal. To be loved. To belong.',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'card_1_title',
                  label: 'Card 1 Title',
                  type: 'text',
                  defaultValue: 'Leadership',
                },
                {
                  name: 'card_1_subtitle',
                  label: 'Card 1 Subtitle',
                  type: 'text',
                  defaultValue: 'Our Foundation',
                },
              ],
            },
            {
              name: 'card_1_description',
              label: 'Card 1 Description',
              type: 'textarea',
              defaultValue:
                'United in Pride is founded by Stella Nakitende, a Ugandan lesbian dedicated and committed to empowering 2SLGBTQ+ newcomers, immigrants, and refugees fleeing persecution.',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'card_2_title',
                  label: 'Card 2 Title',
                  type: 'text',
                  defaultValue: 'Growth',
                },
                {
                  name: 'card_2_subtitle',
                  label: 'Card 2 Subtitle',
                  type: 'text',
                  defaultValue: 'Scaling Our Impact',
                },
              ],
            },
            {
              name: 'card_2_description',
              label: 'Card 2 Description',
              type: 'textarea',
              defaultValue:
                'As her impact grows, she is preparing to scale: expanding peer circles, launching new wellness initiatives, and building a dedicated Advisory Board to steward our growth.',
            },
            {
              name: 'values_title',
              label: 'Values Section Heading',
              type: 'text',
              defaultValue: 'Our Values',
            },
            {
              name: 'values_subtitle',
              label: 'Values Subtitle',
              type: 'text',
              defaultValue: 'The principles that guide everything we do',
            },
            {
              name: 'values',
              label: 'Core Values',
              type: 'array',
              defaultValue: [
                {
                  title: 'Safety First',
                  description: 'Creating secure environments where vulnerability is protected and honored.',
                },
                {
                  title: 'Inclusive Community',
                  description: 'Welcoming all identities, backgrounds, and experiences without judgment.',
                },
                {
                  title: 'Healing Growth',
                  description: 'Supporting individual journeys of healing and personal development.',
                },
                {
                  title: 'Joy & Celebration',
                  description: 'Embracing happiness and celebrating achievements as acts of resistance.',
                },
              ],
              fields: [
                {
                  name: 'title',
                  label: 'Value Title',
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

        // TAB 5: TEAM BIOS (BOARD MEMBERS)
        {
          label: 'Team Bios',
          fields: [
            {
              name: 'team_members',
              label: 'Board Members / Team',
              type: 'array',
              fields: [
                {
                  name: 'name',
                  label: 'Member Name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'role',
                  label: 'Role / Designation',
                  type: 'text',
                  defaultValue: 'Board Member',
                  required: true,
                },
                {
                  name: 'image',
                  label: 'Member Photo',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'bio',
                  label: 'Biography / Description',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
          ],
        },

        // TAB 6: CALL TO ACTION (CTA)
        {
          label: 'Call to Action',
          fields: [
            {
              name: 'cta_title',
              label: 'CTA Heading',
              type: 'text',
              defaultValue: 'Be Part of Our Story',
            },
            {
              name: 'cta_description',
              label: 'CTA Description',
              type: 'textarea',
              defaultValue:
                "Every person who joins our community adds a new chapter to our story of resilience, healing, and hope. Whether you're looking for support, wanting to volunteer, or hoping to contribute to our mission, there's a place for you here.",
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'cta_primary_label',
                  label: 'Primary Button Label',
                  type: 'text',
                  defaultValue: 'Join Our Programs',
                },
                {
                  name: 'cta_primary_link',
                  label: 'Primary Button Link',
                  type: 'text',
                  defaultValue: '/programs',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'cta_secondary_label',
                  label: 'Secondary Button Label',
                  type: 'text',
                  defaultValue: 'Support Our Mission',
                },
                {
                  name: 'cta_secondary_link',
                  label: 'Secondary Button Link',
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
