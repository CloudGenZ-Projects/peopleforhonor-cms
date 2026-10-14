import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const UipContactPage: GlobalConfig = {
  slug: 'uip-contact-page',
  label: 'UIP Contact Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'UIP',
    hidden: ({ user }) => isHiddenForUser(user, 'uip'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_UIP_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/contact`
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
        // TAB 1: HERO
        {
          label: 'Hero Section',
          fields: [
            {
              name: 'heroBadge',
              type: 'text',
              label: 'Badge',
              defaultValue: 'Get in Touch',
            },
            {
              name: 'heroTitleLine1',
              type: 'text',
              label: 'Title Line 1',
              defaultValue: "We'd Love to",
            },
            {
              name: 'heroTitleGradient',
              type: 'text',
              label: 'Title Gradient Text',
              defaultValue: 'Hear From You',
            },
            {
              name: 'heroDescription',
              type: 'textarea',
              label: 'Description',
              defaultValue:
                "Reach out with questions, ideas, or to learn more about joining our community. We're here to support you on your journey.",
            },
          ],
        },

        // TAB 2: CONTACT DETAILS & FORM
        {
          label: 'Contact Details & Form',
          fields: [
            {
              name: 'formTitle',
              type: 'text',
              label: 'Form Title',
              defaultValue: 'Send Us a Message',
            },
            {
              name: 'formSubtitle',
              type: 'text',
              label: 'Form Subtitle',
              defaultValue: 'Fill out the form below and our team will get back to you.',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'contactEmail',
                  type: 'text',
                  label: 'Email Address',
                  defaultValue: 'hello@unitedinpride.org',
                },
                {
                  name: 'contactEmailSub',
                  type: 'text',
                  label: 'Email Subtitle',
                  defaultValue: 'We typically respond within 24-48 hours',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'contactPhone',
                  type: 'text',
                  label: 'Phone Number',
                  defaultValue: '+1 (613) 296-3392',
                },
                {
                  name: 'contactPhoneSub',
                  type: 'text',
                  label: 'Phone Subtitle',
                  defaultValue: 'Monday - Friday, 9am - 5pm EST',
                },
              ],
            },
            {
              name: 'whatsappUrl',
              type: 'text',
              label: 'WhatsApp Channel URL',
              defaultValue: 'https://whatsapp.com/channel/0029VbC7CIMJpe8eQBfVNN3K',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'locationTitle',
                  type: 'text',
                  label: 'Location Title',
                  defaultValue: 'Ottawa, Ontario',
                },
                {
                  name: 'locationSub',
                  type: 'text',
                  label: 'Location Subtitle',
                  defaultValue: 'Programs are hosted at trusted community partner spaces across the city',
                },
              ],
            },
            {
              name: 'availabilityTitle',
              type: 'text',
              label: 'Availability Title',
              defaultValue: 'Our team operates flexibly to support community needs.',
            },
            {
              name: 'availabilitySub',
              type: 'textarea',
              label: 'Availability Subtitle',
              defaultValue:
                'Most responses are provided within 24–48 hours. Your information is kept confidential and used only to support you and connect you to appropriate resources.',
            },
            {
              name: 'mapEmbedUrl',
              type: 'textarea',
              label: 'Google Maps Embed URL',
              defaultValue:
                'https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d8805.130692564679!2d-75.68435945241849!3d45.37935242108252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d21.547494!2d78.60014749999999!4m5!1s0x4cce0609e36febf7%3A0x840991e9373515c1!2s2451%20Riverside%20Dr.%2C%20Ottawa%2C%20ON%20K1H%207X7%2C%20Canada!3m2!1d45.382172999999995!2d-75.6833748!5e0!3m2!1sen!2sin!4v1774372991048!5m2!1sen!2sin',
            },
          ],
        },

        // TAB 3: CRISIS BANNER
        {
          label: 'Crisis Support Banner',
          fields: [
            {
              name: 'crisisBadge',
              type: 'text',
              label: 'Badge',
              defaultValue: 'Immediate Crisis Support',
            },
            {
              name: 'crisisHeading',
              type: 'text',
              label: 'Heading',
              defaultValue: 'Need Help Right Away?',
            },
            {
              name: 'crisisDescription',
              type: 'textarea',
              label: 'Description',
              defaultValue:
                "If you're in immediate danger or having thoughts of self-harm, please reach out. You are not alone. These services are free, confidential, and available 24/7.",
            },
            {
              name: 'crisisItems',
              type: 'array',
              label: 'Crisis Hotlines',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'val',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'desc',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
