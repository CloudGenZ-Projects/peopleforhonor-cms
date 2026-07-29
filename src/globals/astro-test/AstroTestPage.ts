import type { GlobalConfig } from 'payload'

export const AstroTestPage: GlobalConfig = {
  slug: 'astro-test-page',
  label: 'Astro Test Page',
  admin: {
    livePreview: {
      url: 'https://astro-test.cloudgenz.com',
    },
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        console.log('🔄 [PAYLOAD HOOK] Triggering Astro static build...')
        const { exec } = await import('child_process')
        exec('cd /var/www/astro-payload-test && npm run build', (err, stdout) => {
          if (err) {
            console.error('❌ [PAYLOAD HOOK] Astro build failed:', err)
          } else {
            console.log('✅ [PAYLOAD HOOK] Astro build completed successfully!')
            if (stdout) console.log(stdout)
          }
        })
      },
    ],
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
