import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { fileURLToPath } from 'url'
import { HomePage } from './globals/HomePage'
import { AboutPage } from './globals/AboutPage'
import { ProgramsPage } from './globals/ProgramsPage'
import { Media } from './collections/Media'
import { ProgramDetails } from './collections/ProgramDetails'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const defaultOrigins = [
  'http://localhost:5173',
  'http://localhost:8080',
  'http://localhost:3000',
  'http://localhost:4000',
  'https://client.cloudgenz.com',
  '*',
]

const corsOrigins = process.env.CORS_ORIGINS
  ? [
      ...process.env.CORS_ORIGINS.split(',').map((origin) => origin.trim()),
      ...defaultOrigins,
    ]
  : defaultOrigins

const plugins: any[] = []

// Dynamically enable Cloudflare R2 / S3 if credentials are provided in .env
const r2Key = process.env.R2_ACCESS_KEY_ID || process.env.S3_ACCESS_KEY_ID
const r2Secret = process.env.R2_SECRET_ACCESS_KEY || process.env.S3_SECRET_ACCESS_KEY
const r2Bucket = process.env.R2_BUCKET || process.env.S3_BUCKET
const r2Endpoint = process.env.R2_ENDPOINT || process.env.S3_ENDPOINT

if (r2Key && r2Secret && r2Bucket) {
  plugins.push(
    s3Storage({
      collections: {
        media: true,
      },
      bucket: r2Bucket,
      config: {
        credentials: {
          accessKeyId: r2Key,
          secretAccessKey: r2Secret,
        },
        region: process.env.R2_REGION || process.env.S3_REGION || 'auto',
        ...(r2Endpoint ? { endpoint: r2Endpoint } : {}),
      },
    })
  )
}

export default buildConfig({
  routes: {
    admin: '/cms/admin',
  },
  admin: {
    user: 'users',
    livePreview: {
      url: process.env.PAYLOAD_PUBLIC_SITE_URL || 'http://localhost:5173',
      collections: ['media'],
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  cors: '*',
  csrf: corsOrigins,
  collections: [
    {
      slug: 'users',
      auth: true,
      access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
      },
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    Media,
    ProgramDetails,
  ],
  globals: [HomePage, AboutPage, ProgramsPage],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'peopleforhonor-payload-secret-key-2026',
  db: postgresAdapter({
    pool: {
      connectionString: String(process.env.DATABASE_URI || ''),
    },
    push: true,
  }),
  plugins,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
