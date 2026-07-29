import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import { multiTenantPlugin } from '@payloadcms/plugin-multi-tenant'
import path from 'path'
import { fileURLToPath } from 'url'

// Website 1: People For Honor Globals
import { HomePage } from './globals/pfh/HomePage'
import { AboutPage } from './globals/pfh/AboutPage'
import { ProgramsPage } from './globals/pfh/ProgramsPage'
import { GalleryPage } from './globals/pfh/GalleryPage'
import { JoinUsPage } from './globals/pfh/JoinUsPage'
import { ContactPage } from './globals/pfh/ContactPage'

// Website 2: MTSC Halifax Globals
import { MtscHomePage } from './globals/mtsc/MtscHomePage'

// Test/Demo Globals
import { AstroTestPage } from './globals/astro-test/AstroTestPage'

// Collections
import { Media } from './collections/Media'
import { ProgramDetails } from './collections/ProgramDetails'
import { Tenants } from './collections/Tenants'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const defaultOrigins = [
  'http://localhost:5173',
  'http://localhost:8080',
  'http://localhost:3000',
  'http://localhost:4000',
  'https://pfh-cms.cloudgenz.com',
  'https://client.cloudgenz.com',
  'https://peopleforhonor.com',
  'https://astro-test.cloudgenz.com',
  'https://mtsc-halifax-cms.cloudgenz.com',
  'https://mtsc-halifax.cloudgenz.com',
  '*',
]

const corsOrigins = process.env.CORS_ORIGINS
  ? [
      ...process.env.CORS_ORIGINS.split(',').map((origin) => origin.trim()),
      ...defaultOrigins,
    ]
  : defaultOrigins

const plugins: any[] = [
  multiTenantPlugin({
    collections: {
      media: {},
    },
    userHasAccessToAllTenants: (user: any) => {
      if (!user) return false
      // Only Super Admin email gets access to all tenants
      if (user.email === 'cloudgenz.dev@gmail.com') {
        return true
      }
      // Otherwise, access is restricted to their assigned tenant(s)
      const tenantCount = Array.isArray(user.tenants) ? user.tenants.length : 0
      return tenantCount > 1
    },
  } as any),
]

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
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'https://pfh-cms.cloudgenz.com',
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
  cors: corsOrigins,
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
    Tenants,
    Media,
    ProgramDetails,
  ],
  globals: [
    HomePage,
    AboutPage,
    ProgramsPage,
    GalleryPage,
    JoinUsPage,
    ContactPage,
    AstroTestPage,
    MtscHomePage,
  ],
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
