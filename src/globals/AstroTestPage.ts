import type { GlobalConfig } from 'payload'

export const AstroTestPage: GlobalConfig = {
  slug: 'astro-test-page',
  label: 'Astro Test Page',
  admin: {
    livePreview: {
      url: 'http://localhost:4321',
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
