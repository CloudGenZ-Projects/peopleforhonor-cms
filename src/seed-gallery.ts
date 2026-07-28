import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

const imageList = [
  {
    title: 'IMG-20241215-WA0038',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0038.jpg',
    description: 'Year-end celebration',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'IMG-20241215-WA0037',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0037.jpg',
    description: 'Year-end celebration',
    date: 'December 2024',
    location: 'People for Honor',
  },
]

const videoList = [
  { title: 'Gallery Video', category: 'gallery', youtube_url: 'https://youtu.be/L8tsLvAhXYQ' },
  { title: 'Gallery Video', category: 'gallery', youtube_url: 'https://youtu.be/MCi493kuCtg' },
  { title: 'Gallery Video', category: 'gallery', youtube_url: 'https://youtu.be/mJ41FnYfi1M' },
  { title: 'Gallery Video', category: 'gallery', youtube_url: 'https://www.youtube.com/watch?v=r8Z0QHQY_Bk' },
  { title: 'Gallery Video', category: 'gallery', youtube_url: 'https://youtu.be/CeBroypqQLQ' },
  { title: 'Gallery Video', category: 'gallery', youtube_url: 'https://youtu.be/I8B-j-UBFzs' },
  { title: 'Gallery Video', category: 'gallery', youtube_url: 'https://youtu.be/2Azj1KLcz_o' },
  { title: 'Gallery Video', category: 'gallery', youtube_url: 'https://youtu.be/2FHO9-0mGzc' },
  { title: 'Gallery Video', category: 'gallery', youtube_url: 'https://youtu.be/wc7qLue8JiA' },
  { title: 'Gallery Video', category: 'gallery', youtube_url: 'https://youtu.be/EuqJ_fj4nlk' },
  { title: 'Gallery Video', category: 'gallery', youtube_url: 'https://youtu.be/vx_riA-W03Q' },
  { title: 'Gallery Video', category: 'gallery', youtube_url: 'https://youtu.be/OB-0fGkGFK4' },
]

async function seed() {
  console.log('Seeding GalleryPage Global with exact 2 images and 12 YouTube video links...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('./payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'gallery-page',
    data: {
      hero_title: 'Our Community Voice',
      hero_subtitle:
        'Real voices. Real stories. Our community is at the heart of everything we do, built by them, for them. Explore the videos and images below to hear their stories and experiences of our community members.',
      images: imageList,
      videos: videoList,
      cta_heading: 'Be Part of Our Story',
      cta_description:
        'Every photo and video represents a life transformed, a connection made, and a step toward a brighter future. Join us and become part of these amazing stories.',
      cta_btn1_text: 'Join Our Programs',
      cta_btn1_link: '/programs',
      cta_btn2_text: 'Volunteer With Us',
      cta_btn2_link: '/join',
    },
  })

  console.log('GalleryPage Global seeded successfully with exact 2 images!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Failed to seed GalleryPage:', err?.message || err)
  process.exit(1)
})
