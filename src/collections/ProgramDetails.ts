import type { CollectionConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../utils/tenantAccess'

export const ProgramDetails: CollectionConfig = {
  slug: 'program-details',
  admin: {
    useAsTitle: 'title',
    group: 'People For Honor',
    hidden: ({ user }) => isHiddenForUser(user, 'peopleforhonor'),
    livePreview: {
      url: ({ data }) => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_SITE_URL || 'http://localhost:8080'
        if (data?.slug === 'culture-and-community-ottawa-program') {
          return `${siteUrl}/service/culture-and-community-ottawa-program`
        }
        return `${siteUrl}/programs/${data?.slug || ''}`
      },
    },
  },
  access: {
    read: ({ req }) => checkTenantAccess(req, 'peopleforhonor'),
    create: ({ req }) => checkTenantAccess(req, 'peopleforhonor'),
    update: ({ req }) => checkTenantAccess(req, 'peopleforhonor'),
    delete: ({ req }) => checkTenantAccess(req, 'peopleforhonor'),
  },
  fields: [
    {
      name: 'title',
      label: 'Program Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'URL Slug (e.g. coaching, mentorship, barbershop-training)',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'badge',
      label: 'Top Badge Tag',
      type: 'text',
      defaultValue: 'Support Program',
    },
    {
      name: 'hero_subtitle',
      label: 'Hero Subtitle',
      type: 'textarea',
    },
    {
      name: 'duration',
      label: 'Duration Tag',
      type: 'text',
    },
    {
      name: 'capacity',
      label: 'Capacity / Location Tag',
      type: 'text',
    },
    {
      name: 'cost',
      label: 'Cost Tag',
      type: 'text',
      defaultValue: '100% Free',
    },

    // Standard Culture Program Details Card
    {
      name: 'who_can_join',
      label: 'Who Can Join',
      type: 'text',
    },
    {
      name: 'details_capacity',
      label: 'Capacity Text',
      type: 'text',
    },
    {
      name: 'schedule',
      label: 'Schedule Text',
      type: 'text',
    },
    {
      name: 'details_cost',
      label: 'Cost Description',
      type: 'text',
    },
    {
      name: 'lead_instructor',
      label: 'Lead Instructor / Support',
      type: 'text',
    },

    // Standard You'll Learn Outcomes
    {
      name: 'learning_outcomes',
      label: "You'll Learn Outcomes",
      type: 'array',
      fields: [
        {
          name: 'text',
          label: 'Outcome Text',
          type: 'text',
        },
      ],
    },

    // Coaching Specific Fields
    {
      name: 'coaching_section_heading',
      label: 'Coaching Section Heading',
      type: 'text',
      admin: {
        condition: (data) => data?.slug === 'coaching' || Boolean(data?.coaching_career_title),
      },
    },
    {
      name: 'coaching_section_subtitle',
      label: 'Coaching Section Subtitle',
      type: 'text',
      admin: {
        condition: (data) => data?.slug === 'coaching' || Boolean(data?.coaching_career_title),
      },
    },
    {
      name: 'coaching_career_title',
      label: 'Career Development Card Title',
      type: 'text',
      admin: {
        condition: (data) => data?.slug === 'coaching' || Boolean(data?.coaching_career_title),
      },
    },
    {
      name: 'coaching_career_desc',
      label: 'Career Development Card Description',
      type: 'textarea',
      admin: {
        condition: (data) => data?.slug === 'coaching' || Boolean(data?.coaching_career_title),
      },
    },
    {
      name: 'coaching_career_items',
      label: 'Career Development Bullet Points',
      type: 'array',
      admin: {
        condition: (data) => data?.slug === 'coaching' || Boolean(data?.coaching_career_title),
      },
      fields: [{ name: 'text', type: 'text' }],
    },
    {
      name: 'coaching_life_title',
      label: 'Life & Wellbeing Card Title',
      type: 'text',
      admin: {
        condition: (data) => data?.slug === 'coaching' || Boolean(data?.coaching_life_title),
      },
    },
    {
      name: 'coaching_life_desc',
      label: 'Life & Wellbeing Card Description',
      type: 'textarea',
      admin: {
        condition: (data) => data?.slug === 'coaching' || Boolean(data?.coaching_life_title),
      },
    },
    {
      name: 'coaching_life_items',
      label: 'Life & Wellbeing Bullet Points',
      type: 'array',
      admin: {
        condition: (data) => data?.slug === 'coaching' || Boolean(data?.coaching_life_title),
      },
      fields: [{ name: 'text', type: 'text' }],
    },
    {
      name: 'coaching_expect_title',
      label: 'What to Expect Title',
      type: 'text',
      admin: {
        condition: (data) => data?.slug === 'coaching' || Boolean(data?.coaching_expect_title),
      },
    },
    {
      name: 'coaching_expect_items',
      label: 'What to Expect Cards',
      type: 'array',
      admin: {
        condition: (data) => data?.slug === 'coaching' || Boolean(data?.coaching_expect_title),
      },
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
      ],
    },

    // Mentorship Specific Fields
    {
      name: 'mentorship_for_title',
      label: "Who It's For Title",
      type: 'text',
      admin: {
        condition: (data) => data?.slug === 'mentorship' || Boolean(data?.mentorship_for_title),
      },
    },
    {
      name: 'mentorship_for_subtitle',
      label: "Who It's For Subtitle",
      type: 'textarea',
      admin: {
        condition: (data) => data?.slug === 'mentorship' || Boolean(data?.mentorship_for_title),
      },
    },
    {
      name: 'mentorship_for_cards',
      label: "Who It's For Cards",
      type: 'array',
      admin: {
        condition: (data) => data?.slug === 'mentorship' || Boolean(data?.mentorship_for_cards?.length),
      },
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
      ],
    },
    {
      name: 'mentorship_works_title',
      label: 'How Our Mentorship Works Title',
      type: 'text',
      admin: {
        condition: (data) => data?.slug === 'mentorship' || Boolean(data?.mentorship_works_title),
      },
    },
    {
      name: 'mentorship_works_items',
      label: 'How Our Mentorship Works Items',
      type: 'array',
      admin: {
        condition: (data) => data?.slug === 'mentorship' || Boolean(data?.mentorship_works_items?.length),
      },
      fields: [{ name: 'text', type: 'text' }],
    },
    {
      name: 'mentorship_why_title',
      label: 'Why Mentorship Matters Title',
      type: 'text',
      admin: {
        condition: (data) => data?.slug === 'mentorship' || Boolean(data?.mentorship_why_title),
      },
    },
    {
      name: 'mentorship_why_items',
      label: 'Why Mentorship Matters Items',
      type: 'array',
      admin: {
        condition: (data) => data?.slug === 'mentorship' || Boolean(data?.mentorship_why_items?.length),
      },
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'text' },
      ],
    },

    // Takeaway Box Toggle & Fields
    {
      name: 'showTakeaway',
      label: 'Enable Takeaway / Special Note Box on Page?',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'takeaway_title',
      label: 'Takeaway Box Title',
      type: 'text',
      defaultValue: 'Takeaway',
      admin: {
        condition: (data) => Boolean(data?.showTakeaway),
      },
    },
    {
      name: 'takeaway_text',
      label: 'Takeaway Box Description',
      type: 'textarea',
      admin: {
        condition: (data) => Boolean(data?.showTakeaway),
      },
    },

    // Curriculum Section Toggle & Fields
    {
      name: 'showCurriculum',
      label: 'Enable Week-by-Week / Module Curriculum Section on Page?',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'curriculum_title',
      label: 'Curriculum Title',
      type: 'text',
      defaultValue: 'Week-by-Week Curriculum',
      admin: {
        condition: (data) => Boolean(data?.showCurriculum),
      },
    },
    {
      name: 'weeks',
      label: 'Curriculum Weeks / Modules',
      type: 'array',
      admin: {
        condition: (data) => Boolean(data?.showCurriculum),
      },
      fields: [
        {
          name: 'week',
          label: 'Week / Module Number',
          type: 'number',
        },
        {
          name: 'title',
          label: 'Title',
          type: 'text',
        },
        {
          name: 'content',
          label: 'Content',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'commitment_note',
      label: 'Commitment Required Note',
      type: 'textarea',
      admin: {
        condition: (data) => Boolean(data?.showCurriculum),
      },
    },

    // Bottom CTA
    {
      name: 'cta_heading',
      label: 'CTA Heading',
      type: 'text',
    },
    {
      name: 'cta_description',
      label: 'CTA Description',
      type: 'textarea',
    },
    {
      name: 'register_button_text',
      label: 'Button 1 Text',
      type: 'text',
      defaultValue: 'Apply Now',
    },
    {
      name: 'register_button_url',
      label: 'Button 1 Form URL',
      type: 'text',
      defaultValue:
        'https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform',
    },
    {
      name: 'cta_btn2_text',
      label: 'Button 2 Text',
      type: 'text',
    },
    {
      name: 'cta_btn2_url',
      label: 'Button 2 Form URL',
      type: 'text',
    },
  ],
}
