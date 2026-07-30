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
    read: () => true,
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

    // -------------------------------------------------------------
    // Culture & Community Specific Fields (/service/culture-and-community-ottawa-program)
    // -------------------------------------------------------------
    {
      name: 'youtube_embed_url',
      label: 'Culture & Community - YouTube Video Embed URL',
      type: 'text',
      defaultValue: 'https://www.youtube.com/embed/HQ5mnZqWgMk',
      admin: {
        condition: (data) => data?.slug === 'culture-and-community-ottawa-program' || Boolean(data?.youtube_embed_url),
      },
    },
    {
      name: 'community_intro_title',
      label: 'Culture & Community - Intro Card Title',
      type: 'text',
      defaultValue: 'Find your Community in Ottawa',
      admin: {
        condition: (data) => data?.slug === 'culture-and-community-ottawa-program' || Boolean(data?.community_intro_title),
      },
    },
    {
      name: 'community_intro_p1',
      label: 'Culture & Community - Intro Paragraph 1',
      type: 'textarea',
      defaultValue:
        'We host activities that bring people together because healing doesn’t always come from a workshop; sometimes, it comes from dancing, laughing, or cooking a familiar meal with someone who understands your story.',
      admin: {
        condition: (data) => data?.slug === 'culture-and-community-ottawa-program' || Boolean(data?.community_intro_title),
      },
    },
    {
      name: 'community_intro_p2',
      label: 'Culture & Community - Intro Paragraph 2',
      type: 'textarea',
      defaultValue:
        'Our cultural programming includes dance empowerment sessions, cooking classes, fun social gatherings, and other creative events that remind people they’re not alone. These are more than “extras”, they’re part of how we rebuild confidence, restore belonging, and create space for joy in the settlement journey.',
      admin: {
        condition: (data) => data?.slug === 'culture-and-community-ottawa-program' || Boolean(data?.community_intro_title),
      },
    },
    {
      name: 'community_intro_p3',
      label: 'Culture & Community - Intro Paragraph 3',
      type: 'textarea',
      defaultValue: 'Because community isn’t something we talk about. It’s something we practice together.',
      admin: {
        condition: (data) => data?.slug === 'culture-and-community-ottawa-program' || Boolean(data?.community_intro_title),
      },
    },
    {
      name: 'community_ways_heading',
      label: 'Culture & Community - Ways We Bring Together Heading',
      type: 'text',
      defaultValue: 'Ways we Bring The Community Together',
      admin: {
        condition: (data) => data?.slug === 'culture-and-community-ottawa-program' || Boolean(data?.community_ways_heading),
      },
    },
    {
      name: 'community_cards',
      label: 'Culture & Community - Ways Cards',
      type: 'array',
      admin: {
        condition: (data) => data?.slug === 'culture-and-community-ottawa-program' || Boolean(data?.community_cards?.length),
      },
      fields: [
        { name: 'title', type: 'text', label: 'Card Title' },
        { name: 'image', type: 'upload', relationTo: 'media', label: 'Card Image' },
        { name: 'description', type: 'textarea', label: 'Card Description' },
        { name: 'button_text', type: 'text', label: 'Button Text', defaultValue: 'Learn More' },
        { name: 'button_url', type: 'text', label: 'Button Link URL', defaultValue: '/african-caribbean-cultural-dance-exchange' },
      ],
    },

    // -------------------------------------------------------------
    // Empowerment Page Specific Fields (/programs/empowerment)
    // -------------------------------------------------------------
    {
      name: 'empowerment_intro_title',
      label: 'Career Guidance & Support Card Title',
      type: 'text',
      defaultValue: 'Unlock Your Potential, Seize Control of Your Life',
      admin: {
        condition: (data) => data?.slug === 'empowerment' || Boolean(data?.empowerment_intro_title),
      },
    },
    {
      name: 'empowerment_intro_desc',
      label: 'Career Guidance & Support Card Description',
      type: 'textarea',
      defaultValue:
        'We provide hands-on workshops, resume support, job search guidance, and culturally relevant resources to help them settle, integrate, and thrive. From understanding the job market to building confidence in interviews, we offer tools that turn uncertainty into action.',
      admin: {
        condition: (data) => data?.slug === 'empowerment' || Boolean(data?.empowerment_intro_title),
      },
    },
    {
      name: 'empowerment_image',
      label: 'Career Guidance & Support Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (data) => data?.slug === 'empowerment' || Boolean(data?.empowerment_intro_title),
      },
    },
    {
      name: 'empowerment_offer_heading',
      label: 'Career Guidance & Support - What We Offer Heading',
      type: 'text',
      defaultValue: 'What We Offer',
      admin: {
        condition: (data) => data?.slug === 'empowerment' || Boolean(data?.empowerment_offer_heading),
      },
    },
    {
      name: 'empowerment_offer_subtitle',
      label: 'Career Guidance & Support - What We Offer Subtitle',
      type: 'textarea',
      defaultValue:
        'Life is full of ups and downs, but with the right mindset and support system, you can weather any storm. Our resilience building workshops will teach you how to bounce back from setbacks, cope with stress, and cultivate a positive outlook on life.',
      admin: {
        condition: (data) => data?.slug === 'empowerment' || Boolean(data?.empowerment_offer_heading),
      },
    },
    {
      name: 'empowerment_offer_image',
      label: 'What We Offer Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (data) => data?.slug === 'empowerment' || Boolean(data?.empowerment_offer_heading),
      },
    },
    {
      name: 'empowerment_features',
      label: 'Career Guidance & Support Feature Bullet Points',
      type: 'array',
      admin: {
        condition: (data) => data?.slug === 'empowerment' || Boolean(data?.empowerment_features?.length),
      },
      fields: [{ name: 'feature_text', type: 'text', label: 'Feature Text' }],
    },
    {
      name: 'mentorship_section_title',
      label: 'Mentorship Section Title',
      type: 'text',
      defaultValue: 'Mentorship: Guidance & Growth',
      admin: {
        condition: (data) => data?.slug === 'empowerment' || Boolean(data?.mentorship_section_title),
      },
    },
    {
      name: 'mentorship_section_desc',
      label: 'Mentorship Section Description',
      type: 'textarea',
      defaultValue:
        'We connect newcomers with mentors who guide them through the unspoken rules of Canadian life—career development, professional culture, leadership skills, and personal growth. Whether it’s building a career plan, shifting limiting beliefs, or learning how to lead in unfamiliar systems, we offer structured support that will speak to your challenges.',
      admin: {
        condition: (data) => data?.slug === 'empowerment' || Boolean(data?.mentorship_section_title),
      },
    },
    {
      name: 'mentorship_section_image',
      label: 'Mentorship Section Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (data) => data?.slug === 'empowerment' || Boolean(data?.mentorship_section_title),
      },
    },
    {
      name: 'mentorship_features',
      label: 'Mentorship Feature Bullet Points',
      type: 'array',
      admin: {
        condition: (data) => data?.slug === 'empowerment' || Boolean(data?.mentorship_features?.length),
      },
      fields: [{ name: 'feature_text', type: 'text', label: 'Feature Text' }],
    },
    {
      name: 'coaching_section_title',
      label: 'Coaching Section Title',
      type: 'text',
      defaultValue: 'Unlock Your Potential, Seize Control of Your Life',
      admin: {
        condition: (data) => data?.slug === 'empowerment' || Boolean(data?.coaching_section_title),
      },
    },
    {
      name: 'coaching_section_desc',
      label: 'Coaching Section Description',
      type: 'textarea',
      defaultValue:
        'We create intentional spaces where Black immigrant youths are seen, supported, and matched with mentors who reflect their realities. Through Career Guidance & Support workshops, one-on-one matching, and story-sharing, we help rebuild the self-confidence that often gets chipped away in the immigration process.\n\nOur mentors offer more than advice, they provide friendship, consistency, and a deep understanding of what it means to start over. Here, mentorship is not about fixing people. It\'s about helping them remember who they are.',
      admin: {
        condition: (data) => data?.slug === 'empowerment' || Boolean(data?.coaching_section_title),
      },
    },
    {
      name: 'coaching_section_image',
      label: 'Coaching Section Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (data) => data?.slug === 'empowerment' || Boolean(data?.coaching_section_title),
      },
    },
    {
      name: 'coaching_offer_heading',
      label: 'Coaching - What We Offer Heading',
      type: 'text',
      defaultValue: 'What We Offer',
      admin: {
        condition: (data) => data?.slug === 'empowerment' || Boolean(data?.coaching_offer_heading),
      },
    },
    {
      name: 'coaching_offer_subtitle',
      label: 'Coaching - What We Offer Subtitle',
      type: 'textarea',
      defaultValue:
        'Life is full of ups and downs, but with the right mindset and support system, you can weather any storm. Our resilience building workshops will teach you how to bounce back from setbacks, cope with stress, and cultivate a positive outlook on life.',
      admin: {
        condition: (data) => data?.slug === 'empowerment' || Boolean(data?.coaching_offer_heading),
      },
    },
    {
      name: 'coaching_offer_image',
      label: 'Coaching - What We Offer Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (data) => data?.slug === 'empowerment' || Boolean(data?.coaching_offer_heading),
      },
    },
    {
      name: 'coaching_features',
      label: 'Coaching Feature Bullet Points',
      type: 'array',
      admin: {
        condition: (data) => data?.slug === 'empowerment' || Boolean(data?.coaching_features?.length),
      },
      fields: [{ name: 'feature_text', type: 'text', label: 'Feature Text' }],
    },
    {
      name: 'cta_starting_point_title',
      label: 'Choose Your Starting Point CTA Title',
      type: 'text',
      defaultValue: 'Choose your starting point',
      admin: {
        condition: (data) => data?.slug === 'empowerment' || Boolean(data?.cta_starting_point_title),
      },
    },
    {
      name: 'cta_starting_point_desc',
      label: 'Choose Your Starting Point CTA Description',
      type: 'textarea',
      defaultValue:
        'Many participants begin with Career Guidance & Support to build practical readiness and continue with Mentorship for guidance and accountability. We’ll help you tailor the path to your goals.',
      admin: {
        condition: (data) => data?.slug === 'empowerment' || Boolean(data?.cta_starting_point_title),
      },
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
