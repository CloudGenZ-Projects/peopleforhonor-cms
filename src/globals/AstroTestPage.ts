import type { GlobalConfig } from 'payload'

export const AstroTestPage: GlobalConfig = {
  slug: 'astro-test-page',
  label: 'Astro Test Page',
  admin: {
    livePreview: {
      url: process.env.PAYLOAD_PUBLIC_SITE_URL || 'http://localhost:5173',
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'test_heading',
      label: 'Test Heading',
      type: 'text',
      required: true,
    },
    {
      name: 'test_image',
      label: 'Test Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
