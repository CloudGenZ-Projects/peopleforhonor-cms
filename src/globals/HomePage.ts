import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  admin: {
    livePreview: {
      url: process.env.PAYLOAD_PUBLIC_SITE_URL || 'http://localhost:8080',
    },
  },
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero Section',
          fields: [
            {
              name: 'hero_badge',
              label: 'Hero Badge Text',
              type: 'text',
              defaultValue: 'Supporting Immigrants to Canada',
            },
            {
              name: 'hero_title',
              label: 'Hero Main Title',
              type: 'text',
              defaultValue: 'Trusted Help for Your',
            },
            {
              name: 'hero_title_highlight',
              label: 'Hero Title Highlighted Text',
              type: 'text',
              defaultValue: 'Life in Canada',
            },
            {
              name: 'hero_subtitle',
              label: 'Hero Subtitle',
              type: 'textarea',
              defaultValue:
                'Do more than survive in Canada! We provide Career Guidance & Support, mentorship, and community support to help newcomers thrive and build meaningful lives.',
            },
            {
              name: 'primary_cta_text',
              label: 'Primary Button Text',
              type: 'text',
              defaultValue: 'Find the Support You Need',
            },
            {
              name: 'primary_cta_link',
              label: 'Primary Button Link',
              type: 'text',
              defaultValue: '/programs',
            },
            {
              name: 'secondary_cta_text',
              label: 'Secondary Button Text',
              type: 'text',
              defaultValue: 'Learn More About Us',
            },
            {
              name: 'secondary_cta_link',
              label: 'Secondary Button Link',
              type: 'text',
              defaultValue: '/about',
            },
            {
              name: 'third_cta_text',
              label: 'Third Button Text',
              type: 'text',
              defaultValue: 'Apply for our Computer Access Program',
            },
            {
              name: 'third_cta_link',
              label: 'Third Button Link',
              type: 'text',
              defaultValue:
                'https://www.zeffy.com/en-CA/newsletter-form/computer-access-program-application',
            },
            {
              name: 'hero_image',
              label: 'Hero Main Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'hero_stats',
              label: 'Hero Section Stats',
              type: 'array',
              fields: [
                {
                  name: 'stat_number',
                  label: 'Stat Number/Value',
                  type: 'text',
                },
                {
                  name: 'stat_label',
                  label: 'Stat Label',
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          label: 'About Section',
          fields: [
            {
              name: 'about_title',
              label: 'About Title',
              type: 'text',
              defaultValue: 'Our Mission & Vision',
            },
            {
              name: 'about_text',
              label: 'About Paragraph Text',
              type: 'textarea',
              defaultValue:
                'Dedicated to serving, supporting, and honoring seafarers and community members.',
            },
          ],
        },
        {
          label: 'Contact & Links',
          fields: [
            {
              name: 'contact_email',
              label: 'Contact Email',
              type: 'text',
              defaultValue: 'contact@peopleforhonor.org',
            },
            {
              name: 'contact_phone',
              label: 'Contact Phone',
              type: 'text',
              defaultValue: '+1 (902) 000-0000',
            },
          ],
        },
      ],
    },
  ],
}
