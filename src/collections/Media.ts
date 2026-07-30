import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'uploads',
    mimeTypes: ['image/*', 'application/pdf', 'video/*'],
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data && data.filename) {
          data.url = `/api/media/file/${data.filename}`
        }
        return data
      },
    ],
    afterRead: [
      ({ doc }) => {
        if (doc && doc.filename) {
          if (!doc.url || doc.url.includes('localhost') || doc.url.includes('127.0.0.1')) {
            doc.url = `/api/media/file/${doc.filename}`
          }
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
