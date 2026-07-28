import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  admin: {
    livePreview: {
      url: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
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
              name: 'hero_title',
              label: 'Hero Main Title',
              type: 'text',
              defaultValue: 'People For Honor',
            },
            {
              name: 'hero_subtitle',
              label: 'Hero Subtitle',
              type: 'textarea',
              defaultValue: 'Empowering communities through honor, service, and connection.',
            },
            {
              name: 'hero_image',
              label: 'Hero Main Image',
              type: 'upload',
              relationTo: 'media',
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
              defaultValue: 'Dedicated to serving, supporting, and honoring seafarers and community members.',
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
