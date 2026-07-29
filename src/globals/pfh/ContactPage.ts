import type { GlobalConfig } from 'payload'
import { checkTenantAccess } from '../../utils/tenantAccess'

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  label: 'Contact Page',
  admin: {
    group: 'People For Honor',
    livePreview: {
      url: process.env.PAYLOAD_PUBLIC_SITE_URL || 'http://localhost:5173',
    },
  },
  access: {
    read: () => true,
    update: (args) => checkTenantAccess(args, 'peopleforhonor'),
  },
  fields: [
    {
      name: 'contact_heading',
      label: 'Contact Page Heading',
      type: 'text',
      defaultValue: 'Get in Touch',
    },
    {
      name: 'contact_description',
      label: 'Contact Page Subtitle',
      type: 'textarea',
      defaultValue:
        "Have questions about our programs or want to get involved? We'd love to hear from you. Fill out the form below or reach out directly.",
    },
    {
      name: 'contact_phone',
      label: 'Phone Number',
      type: 'text',
      defaultValue: '613 672 7062',
    },
    {
      name: 'contact_email',
      label: 'Email Address',
      type: 'text',
      defaultValue: 'info@peopleforhonor.com',
    },
    {
      name: 'contact_address',
      label: 'Mailing Address',
      type: 'textarea',
      defaultValue: '1505 laperrieve Ave Suite 506, Ottawa, ON, K127T1',
    },
    {
      name: 'contact_hours',
      label: 'Office Hours',
      type: 'text',
      defaultValue: 'Monday - Friday: 9:00 AM - 6:00 PM',
    },
    {
      name: 'contact_box_title',
      label: 'Support Card Title',
      type: 'text',
      defaultValue: "We're Here for You",
    },
    {
      name: 'contact_box_text',
      label: 'Support Card Description',
      type: 'textarea',
      defaultValue:
        "Your success is our mission. Don't hesitate to reach out - we're committed to supporting your journey in Canada.",
    },
    {
      name: 'zeffy_embed_1_url',
      label: 'Zeffy Embed Form 1 (Newsletter Signup)',
      type: 'text',
      defaultValue:
        'https://www.zeffy.com/en-CA/embed/newsletter-form/sign-up-for-our-newsletter-1932',
    },
    {
      name: 'zeffy_embed_2_url',
      label: 'Zeffy Embed Form 2 (Mailing List)',
      type: 'text',
      defaultValue:
        'https://www.zeffy.com/en-CA/embed/newsletter-form/join-our-mailing-list-18',
    },
  ],
}
