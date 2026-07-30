import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const ProgramsPage: GlobalConfig = {
  slug: 'programs-page',
  admin: {
    group: 'People For Honor',
    hidden: ({ user }) => isHiddenForUser(user, 'peopleforhonor'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_SITE_URL || 'https://peopleforhonor.com'
        return `${siteUrl}/programs`
      },
    },
  },
  access: {
    read: () => true,
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
              label: 'Hero Title',
              type: 'text',
              defaultValue: 'Our Programs',
            },
            {
              name: 'hero_subtitle',
              label: 'Hero Subtitle',
              type: 'textarea',
              defaultValue:
                "Learn. Connect. Belong. PFH's free programs give newcomers and locals hands-on skills and a supportive network, guided by trained facilitators. No experience required.",
            },
          ],
        },
        {
          label: '2. Culture & Community Programs',
          fields: [
            {
              name: 'culture_heading',
              label: 'Section Heading',
              type: 'text',
              defaultValue: 'Culture & Community Programs',
            },
            {
              name: 'culture_description',
              label: 'Section Subtitle',
              type: 'textarea',
              defaultValue:
                'Free hands-on training programs that build skills, confidence, and community. All tools and materials provided during class.',
            },
            {
              name: 'culture_programs',
              label: 'Programs List',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  label: 'Program Title',
                  type: 'text',
                },
                {
                  name: 'duration',
                  label: 'Duration Tag',
                  type: 'text',
                },
                {
                  name: 'capacity',
                  label: 'Capacity Tag',
                  type: 'text',
                },
                {
                  name: 'description',
                  label: 'Description',
                  type: 'textarea',
                },
                {
                  name: 'highlights',
                  label: 'Highlights (One per item)',
                  type: 'array',
                  fields: [
                    {
                      name: 'text',
                      label: 'Highlight Text',
                      type: 'text',
                    },
                  ],
                },
                {
                  name: 'link',
                  label: 'Register Button Link',
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          label: '3. Coaching Program',
          fields: [
            {
              name: 'coaching_section_heading',
              label: 'Coaching & Mentorship Section Heading',
              type: 'text',
              defaultValue: 'Coaching & Mentorship',
            },
            {
              name: 'coaching_section_subtitle',
              label: 'Coaching & Mentorship Section Subtitle',
              type: 'textarea',
              defaultValue:
                'One-on-one support to help you reach your goals. Free and available online or in person.',
            },
            {
              name: 'coaching_title',
              label: 'Card Title',
              type: 'text',
              defaultValue: 'Coaching Program',
            },
            {
              name: 'coaching_desc',
              label: 'Card Subtitle',
              type: 'text',
              defaultValue: 'One-on-one support to help you reach your goals.',
            },
            {
              name: 'coaching_career_title',
              label: 'Career Development Subheading',
              type: 'text',
              defaultValue: 'Career Development',
            },
            {
              name: 'coaching_career_items',
              label: 'Career Development Items',
              type: 'array',
              fields: [
                {
                  name: 'text',
                  label: 'Item Text',
                  type: 'text',
                },
              ],
            },
            {
              name: 'coaching_life_title',
              label: 'Life & Wellbeing Subheading',
              type: 'text',
              defaultValue: 'Life & Wellbeing',
            },
            {
              name: 'coaching_life_items',
              label: 'Life & Wellbeing Items',
              type: 'array',
              fields: [
                {
                  name: 'text',
                  label: 'Item Text',
                  type: 'text',
                },
              ],
            },
            {
              name: 'coaching_btn_apply_text',
              label: 'Apply Button Text',
              type: 'text',
              defaultValue: 'Apply for Coaching',
            },
            {
              name: 'coaching_btn_apply_link',
              label: 'Apply Button Link',
              type: 'text',
              defaultValue: '/programs/coaching',
            },
            {
              name: 'coaching_btn_volunteer_text',
              label: 'Volunteer Button Text',
              type: 'text',
              defaultValue: 'Become a Volunteer Coach',
            },
            {
              name: 'coaching_btn_volunteer_url',
              label: 'Volunteer Button URL',
              type: 'text',
              defaultValue:
                'https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform',
            },
          ],
        },
        {
          label: '4. Mentorship Program',
          fields: [
            {
              name: 'mentorship_title',
              label: 'Card Title',
              type: 'text',
              defaultValue: 'Mentorship',
            },
            {
              name: 'mentorship_desc',
              label: 'Card Subtitle',
              type: 'text',
              defaultValue: 'Real people. Real careers. Real guidance.',
            },
            {
              name: 'mentorship_for_title',
              label: 'Who It Is For Subheading',
              type: 'text',
              defaultValue: "Who It's For",
            },
            {
              name: 'mentorship_for_items',
              label: 'Who It Is For Items',
              type: 'array',
              fields: [
                {
                  name: 'label',
                  label: 'Bold Label',
                  type: 'text',
                },
                {
                  name: 'text',
                  label: 'Description Text',
                  type: 'text',
                },
              ],
            },
            {
              name: 'mentorship_works_title',
              label: 'How It Works Subheading',
              type: 'text',
              defaultValue: 'How It Works',
            },
            {
              name: 'mentorship_works_items',
              label: 'How It Works Items',
              type: 'array',
              fields: [
                {
                  name: 'text',
                  label: 'Item Text',
                  type: 'text',
                },
              ],
            },
            {
              name: 'mentorship_btn_apply_text',
              label: 'Apply Button Text',
              type: 'text',
              defaultValue: 'Apply for a Mentor',
            },
            {
              name: 'mentorship_btn_apply_link',
              label: 'Apply Button Link',
              type: 'text',
              defaultValue: '/programs/mentorship',
            },
            {
              name: 'mentorship_btn_volunteer_text',
              label: 'Volunteer Button Text',
              type: 'text',
              defaultValue: 'Volunteer as a Mentor',
            },
            {
              name: 'mentorship_btn_volunteer_url',
              label: 'Volunteer Button URL',
              type: 'text',
              defaultValue:
                'https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform',
            },
            {
              name: 'mentorship_btn_circle_text',
              label: 'Circle Button Text',
              type: 'text',
              defaultValue: 'Register for Adult Circle',
            },
          ],
        },
        {
          label: '5. Bottom CTA Section',
          fields: [
            {
              name: 'cta_heading',
              label: 'CTA Heading',
              type: 'text',
              defaultValue: 'Ready to Get Started?',
            },
            {
              name: 'cta_description',
              label: 'CTA Description',
              type: 'textarea',
              defaultValue:
                'All programs are free and designed to help you learn, connect, and belong. No experience required—just bring an open heart and willingness to grow.',
            },
            {
              name: 'cta_btn1_text',
              label: 'Button 1 Text',
              type: 'text',
              defaultValue: 'Contact Us',
            },
            {
              name: 'cta_btn1_link',
              label: 'Button 1 Link',
              type: 'text',
              defaultValue: '/contact',
            },
            {
              name: 'cta_btn2_text',
              label: 'Button 2 Text',
              type: 'text',
              defaultValue: 'View Our Community Voice',
            },
            {
              name: 'cta_btn2_link',
              label: 'Button 2 Link',
              type: 'text',
              defaultValue: '/gallery',
            },
          ],
        },
      ],
    },
  ],
}
