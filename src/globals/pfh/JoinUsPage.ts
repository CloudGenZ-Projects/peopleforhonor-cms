import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const JoinUsPage: GlobalConfig = {
  slug: 'join-us-page',
  admin: {
    group: 'People For Honor',
    hidden: ({ user }) => isHiddenForUser(user, 'peopleforhonor'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_SITE_URL || 'http://localhost:8080'
        return `${siteUrl}/join`
      },
    },
  },
  access: {
    read: () => true,
    update: (args) => checkTenantAccess(args, 'peopleforhonor'),
  },
  fields: [
    {
      name: 'hero_title',
      label: 'Hero Title',
      type: 'text',
      defaultValue: 'Ways to Give',
    },
    {
      name: 'hero_subtitle',
      label: 'Hero Subtitle',
      type: 'textarea',
      defaultValue:
        'Be part of a community that believes in the potential of every immigrant. Together, we can create lasting change and build a more inclusive Canada.',
    },
    {
      name: 'hero_button_text',
      label: 'Hero Button Text',
      type: 'text',
      defaultValue: 'Get Involved Today',
    },
    {
      name: 'hero_tagline',
      label: 'Hero Tagline Box',
      type: 'textarea',
      defaultValue:
        'We are a non-profit ORG Empowering you to discover your inner eagle , Coaching you to soar, and Mentoring you to stay focused. Join us to empower others or be empowered!',
    },
    {
      name: 'hero_whatsapp_text',
      label: 'WhatsApp Button Text',
      type: 'text',
      defaultValue: 'Join us on WhatsApp',
    },
    {
      name: 'hero_whatsapp_url',
      label: 'WhatsApp Group Link URL',
      type: 'text',
      defaultValue: 'https://chat.whatsapp.com/HSUmX0TTqpxDEIkJWZXRMv',
    },

    // 2. Ways to Give Section Header
    {
      name: 'give_heading',
      label: 'Ways to Give Heading',
      type: 'text',
      defaultValue: "Give in a Way That's Meaningful to You",
    },
    {
      name: 'give_description',
      label: 'Ways to Give Subtitle',
      type: 'textarea',
      defaultValue:
        'Your generosity lifts newcomers and neighbours: helping more people learn, belong, and move forward. Think big. Belong fully. Give back.',
    },

    // 3. One-Time Donation Card
    {
      name: 'onetime_title',
      label: 'One-Time Donation Title',
      type: 'text',
      defaultValue: 'One-Time Donation',
    },
    {
      name: 'onetime_description',
      label: 'One-Time Donation Description',
      type: 'textarea',
      defaultValue:
        'Make a quick, secure gift online. Even a small donation makes a real difference—every dollar helps fuel workshops, coaching, mentorship, and community circles.',
    },
    {
      name: 'onetime_impact_heading',
      label: 'One-Time Impact Box Heading',
      type: 'text',
      defaultValue: 'Examples of Impact:',
    },
    {
      name: 'onetime_impact_items',
      label: 'One-Time Impact Items',
      type: 'array',
      fields: [
        { name: 'amount', type: 'text', label: 'Amount (e.g. $25)' },
        { name: 'text', type: 'text', label: 'Impact Description' },
      ],
    },
    {
      name: 'onetime_button_text',
      label: 'One-Time Button Text',
      type: 'text',
      defaultValue: 'Make a One-Time Donation',
    },
    {
      name: 'onetime_button_url',
      label: 'One-Time Zeffy URL',
      type: 'text',
      defaultValue: 'https://www.zeffy.com/en-CA/donation-form/people-for-honor-donate',
    },

    // 4. Monthly Giving Card
    {
      name: 'monthly_title',
      label: 'Monthly Giving Title',
      type: 'text',
      defaultValue: 'Monthly Giving',
    },
    {
      name: 'monthly_description',
      label: 'Monthly Giving Description',
      type: 'textarea',
      defaultValue:
        'Monthly gifts give us reliable support and give you convenience and flexibility. Consider $10/$15/$20 per month to sustain program seats, coaching matches, and community sessions all year.',
    },
    {
      name: 'monthly_why_heading',
      label: 'Why Monthly Giving Heading',
      type: 'text',
      defaultValue: 'Why Monthly Giving?',
    },
    {
      name: 'monthly_why_items',
      label: 'Monthly Why Bullet Points',
      type: 'array',
      fields: [{ name: 'text', type: 'text', label: 'Bullet Text' }],
    },
    {
      name: 'monthly_button_text',
      label: 'Monthly Button Text',
      type: 'text',
      defaultValue: 'Raising Futures Every Month',
    },
    {
      name: 'monthly_button_url',
      label: 'Monthly Zeffy URL',
      type: 'text',
      defaultValue: 'https://www.zeffy.com/embed/donation-form/raising-futures-every-month?modal=true',
    },

    // 5. Additional Giving Options (3 Cards)
    {
      name: 'honour_title',
      label: 'Honour/Memory Card Title',
      type: 'text',
      defaultValue: 'Give in Honour or in Memory',
    },
    {
      name: 'honour_desc',
      label: 'Honour/Memory Card Description',
      type: 'text',
      defaultValue: 'Recognize a loved one, mentor, or community leader with a tribute gift.',
    },
    {
      name: 'honour_btn_text',
      label: 'Honour/Memory Button Text',
      type: 'text',
      defaultValue: 'Donate in Honour/Memory',
    },
    {
      name: 'honour_btn_url',
      label: 'Honour/Memory Link URL',
      type: 'text',
      defaultValue: 'https://www.zeffy.com/embed/donation-form/give-in-honour-or-in-memory?modal=true',
    },

    {
      name: 'securities_title',
      label: 'Securities Card Title',
      type: 'text',
      defaultValue: 'Donate Securities',
    },
    {
      name: 'securities_desc',
      label: 'Securities Card Description',
      type: 'text',
      defaultValue: 'Donate stocks, mutual funds, or ETFs. Avoid capital gains tax while maximizing impact.',
    },
    {
      name: 'securities_btn_text',
      label: 'Securities Button Text',
      type: 'text',
      defaultValue: 'Donate Securities',
    },
    {
      name: 'securities_btn_url',
      label: 'Securities Form URL',
      type: 'text',
      defaultValue:
        'https://docs.google.com/forms/d/e/1FAIpQLSeCFnInCVyyaS5FA3-BYdb5nrjO45x3A1jVhYuQ76DpjGYcTA/viewform',
    },

    {
      name: 'corporate_title',
      label: 'Corporate Card Title',
      type: 'text',
      defaultValue: 'Corporate Partnerships',
    },
    {
      name: 'corporate_desc',
      label: 'Corporate Card Description',
      type: 'text',
      defaultValue: 'Sponsor a cohort, match employee gifts, or support a campaign.',
    },
    {
      name: 'corporate_btn_text',
      label: 'Corporate Button Text',
      type: 'text',
      defaultValue: 'Sponsor a Program',
    },
    {
      name: 'corporate_btn_url',
      label: 'Corporate Link URL',
      type: 'text',
      defaultValue:
        'https://www.zeffy.com/embed/donation-form/corporate-partnerships-sponsor-a-program?modal=true',
    },

    // 6. Other Ways to Support Section
    {
      name: 'other_heading',
      label: 'Other Ways Heading',
      type: 'text',
      defaultValue: 'Other Ways to Support People for Honor',
    },
    {
      name: 'other_cards',
      label: 'Other Ways Support Cards',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', label: 'Card Title' },
        { name: 'description', type: 'textarea', label: 'Card Description' },
        { name: 'btn_text', type: 'text', label: 'Button Text' },
        { name: 'btn_url', type: 'text', label: 'Button URL' },
      ],
    },

    // e-Transfer / Cheque Box
    {
      name: 'etransfer_title',
      label: 'e-Transfer Box Title',
      type: 'text',
      defaultValue: 'e-Transfer / Cheque',
    },
    {
      name: 'etransfer_email',
      label: 'e-Transfer Email Address',
      type: 'text',
      defaultValue: 'info@peopleforhonor.com',
    },
    {
      name: 'etransfer_cheque',
      label: 'Cheque Instructions',
      type: 'textarea',
      defaultValue: 'Pay to People for Honor, mail to: 1505 Laperriere Ave Suite 506, Ottawa, ON K1Z 7T1',
    },

    // 7. Stay Connected Section
    {
      name: 'stay_heading',
      label: 'Stay Connected Heading',
      type: 'text',
      defaultValue: 'Stay Connected',
    },
    {
      name: 'stay_description',
      label: 'Stay Connected Subtitle',
      type: 'textarea',
      defaultValue: 'Be first to hear about programs, events, and impact stories.',
    },
    {
      name: 'stay_email',
      label: 'Stay Connected Email',
      type: 'text',
      defaultValue: 'info@peopleforhonor.com',
    },
    {
      name: 'stay_phone',
      label: 'Stay Connected Phone',
      type: 'text',
      defaultValue: '613 672 7062',
    },
    {
      name: 'stay_address',
      label: 'Stay Connected Address',
      type: 'textarea',
      defaultValue: '1505 Laperriere Ave Suite 506\nOttawa, ON K1Z 7T1',
    },
    {
      name: 'stay_btn_text',
      label: 'Mailing List Button Text',
      type: 'text',
      defaultValue: 'Join Our Mailing List',
    },

    // 8. Community Gathering Gallery (6 Bottom Images)
    {
      name: 'gallery_heading',
      label: 'Community Gathering Gallery Title',
      type: 'text',
      defaultValue: 'community Gathering',
    },
    {
      name: 'gallery_description',
      label: 'Community Gathering Gallery Subtitle',
      type: 'textarea',
      defaultValue: 'At People for Honor, we believe in the power of hope to transform lives.',
    },
    {
      name: 'community_images',
      label: 'Community Gathering Images (6 Images)',
      type: 'array',
      fields: [
        {
          name: 'image',
          label: 'Media Upload Image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'imageUrl',
          label: 'Direct Image URL Fallback',
          type: 'text',
        },
        {
          name: 'alt',
          label: 'Alt Text Description',
          type: 'text',
        },
      ],
    },
  ],
}
