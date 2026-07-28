import type { CollectionConfig } from 'payload'

export const ProgramDetails: CollectionConfig = {
  slug: 'program-details',
  admin: {
    useAsTitle: 'title',
    livePreview: {
      url: process.env.PAYLOAD_PUBLIC_SITE_URL || 'http://localhost:5173',
    },
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
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
      label: 'URL Slug (e.g. barbershop-training)',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'badge',
      label: 'Top Badge Tag',
      type: 'text',
      defaultValue: 'Culture & Community Program',
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
      label: 'Capacity Tag',
      type: 'text',
    },
    {
      name: 'cost',
      label: 'Cost Tag',
      type: 'text',
      defaultValue: '100% Free',
    },

    // Program Details Card
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
      label: 'Lead Instructor',
      type: 'text',
    },

    // You'll Learn & Takeaway
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
    {
      name: 'takeaway_title',
      label: 'Takeaway Box Title',
      type: 'text',
      defaultValue: 'Takeaway',
    },
    {
      name: 'takeaway_text',
      label: 'Takeaway Box Description',
      type: 'textarea',
    },

    // Week-by-Week Curriculum
    {
      name: 'curriculum_title',
      label: 'Curriculum Title',
      type: 'text',
      defaultValue: 'Week-by-Week Curriculum',
    },
    {
      name: 'weeks',
      label: 'Curriculum Weeks',
      type: 'array',
      fields: [
        {
          name: 'week',
          label: 'Week Number',
          type: 'number',
        },
        {
          name: 'title',
          label: 'Week Title',
          type: 'text',
        },
        {
          name: 'content',
          label: 'Week Content',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'commitment_note',
      label: 'Commitment Required Note',
      type: 'textarea',
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
      label: 'Register Button Text',
      type: 'text',
      defaultValue: 'Register Now',
    },
    {
      name: 'register_button_url',
      label: 'Register Form URL',
      type: 'text',
      defaultValue:
        'https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform',
    },
  ],
}
