import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import { multiTenantPlugin } from '@payloadcms/plugin-multi-tenant'
import path from 'path'
import { fileURLToPath } from 'url'
import { checkTenantAccess, isHiddenForUser } from './utils/tenantAccess'

// Website 1: People For Honor Globals
import { HomePage } from './globals/pfh/HomePage'
import { AboutPage } from './globals/pfh/AboutPage'
import { ProgramsPage } from './globals/pfh/ProgramsPage'
import { GalleryPage } from './globals/pfh/GalleryPage'
import { JoinUsPage } from './globals/pfh/JoinUsPage'
import { ContactPage } from './globals/pfh/ContactPage'

// Website 2: MTSC Halifax Globals
import { MtscHomePage } from './globals/mtsc/MtscHomePage'
import { MtscWhoWeArePage } from './globals/mtsc/MtscWhoWeArePage'
import { MtscSeafarerSupportPage } from './globals/mtsc/MtscSeafarerSupportPage'

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
  'https://www.peopleforhonor.com',
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
      media: {
        tenantFieldOverrides: {
          required: false,
          admin: {
            hidden: false,
          },
        },
      },
    },
    tenantField: {
      required: false,
      admin: {
        hidden: false,
      },
    },
    useUsersTenantFilter: false,
    useTenantsListFilter: false,
    userHasAccessToAllTenants: (user: any) => {
      if (!user) return false
      const email = (user.email || '').toLowerCase()
      return email === 'cloudgenz.dev@gmail.com'
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
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
  routes: {
    admin: '/cms/admin',
  },
  admin: {
    user: 'users',
    livePreview: {
      url: process.env.PAYLOAD_PUBLIC_SITE_URL || 'https://peopleforhonor.com',
      collections: ['program-details', 'media'],
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
      admin: {
        group: 'Admin Settings',
        hidden: ({ user }) => isHiddenForUser(user, 'admin-only'),
      },
      access: {
        read: ({ req: { user } }) => {
          if (!user) return false
          const email = (user.email || '').toLowerCase()
          if (email === 'cloudgenz.dev@gmail.com') return true
          return {
            id: {
              equals: user.id,
            },
          }
        },
        create: ({ req }) => checkTenantAccess(req, 'admin-only'),
        update: ({ req: { user } }) => {
          if (!user) return false
          const email = (user.email || '').toLowerCase()
          if (email === 'cloudgenz.dev@gmail.com') return true
          return {
            id: {
              equals: user.id,
            },
          }
        },
        delete: ({ req }) => checkTenantAccess(req, 'admin-only'),
        admin: ({ req }) => Boolean(req.user),
      },
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    {
      ...Tenants,
      admin: {
        ...Tenants.admin,
        hidden: ({ user }) => isHiddenForUser(user, 'admin-only'),
      },
    },
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
    MtscWhoWeArePage,
    MtscSeafarerSupportPage,
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
