import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'uploads',
    mimeTypes: ['image/*', 'application/pdf', 'video/*'],
  },
  hooks: {
    afterRead: [
      ({ doc }) => {
        const cmsUrl = process.env.PAYLOAD_PUBLIC_SERVER_URL || 'https://pfh-cms.cloudgenz.com'
        if (doc && doc.filename) {
          doc.url = `${cmsUrl}/api/media/file/${doc.filename}`
        }
        return doc
      },
    ],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alt Text / Description',
    },
  ],
}
