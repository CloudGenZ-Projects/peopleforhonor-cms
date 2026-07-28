import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

const imageList = [
  {
    title: 'Year-end celebration 1',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0038.jpg',
    description: 'Year-end celebration',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Year-end celebration 2',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0037.jpg',
    description: 'Year-end celebration',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Community Gathering 1',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0036.jpg',
    description: 'Community event & workshops',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Community Gathering 2',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0035.jpg',
    description: 'Youth mentorship & workshop session',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Barbershop Workshop',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0034.jpg',
    description: 'Hands-on barbering session',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Braiding & Haircare Class',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0033.jpg',
    description: 'Braiding training session',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Community Kitchen Event',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0032.jpg',
    description: 'Cultural food preparation',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Sewing Class Workshop',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0031.jpg',
    description: 'Beginner sewing workshop',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Entrepreneurship Panel',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0030.jpg',
    description: 'Business launchpad presentation',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Cultural Dance Circle',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0029.jpg',
    description: 'Rhythmic movement & dance session',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Youth Mentorship Circle',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0028.jpg',
    description: 'Group mentorship discussion',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Volunteer Appreciation',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0027.jpg',
    description: 'Celebrating our amazing community volunteers',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Community Feast & Potluck',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0026.jpg',
    description: 'Sharing meals and storytelling',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Coaching 1-on-1 Session',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0025.jpg',
    description: 'Career development coaching',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Graduation & Certificate Showcase',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0024.jpg',
    description: 'Program graduates receiving certificates',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Hands-on Skill Workshop',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0023.jpg',
    description: 'Interactive practical learning session',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Community Empowerment Rally',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0022.jpg',
    description: 'Inspiring speeches and connection',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Youth Leadership Forum',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0021.jpg',
    description: 'Young leaders sharing their visions',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Barbering Tools Demo',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0020.jpg',
    description: 'Clipper control and safety training',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Braiding Extensions Session',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0019.jpg',
    description: 'Knotless and box braid techniques',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Culinary Spices & Flavors',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0018.jpg',
    description: 'Exploring cultural spices and dishes',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Sewing Fabric Selection',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0017.jpg',
    description: 'Choosing patterns and textiles',
    date: 'December 2024',
    location: 'People for Honor',
  },
  {
    title: 'Annual Family & Community Gala',
    category: 'gallery',
    imageUrl: 'https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0016.jpg',
    description: 'Celebrating community achievements and honors',
    date: 'December 2024',
    location: 'People for Honor',
  },
]

const videoList = [
  { title: 'Community Voice Video 1', category: 'gallery', youtube_url: 'https://youtu.be/L8tsLvAhXYQ' },
  { title: 'Community Voice Video 2', category: 'gallery', youtube_url: 'https://youtu.be/MCi493kuCtg' },
  { title: 'Community Voice Video 3', category: 'gallery', youtube_url: 'https://youtu.be/mJ41FnYfi1M' },
  { title: 'Community Voice Video 4', category: 'gallery', youtube_url: 'https://www.youtube.com/watch?v=r8Z0QHQY_Bk' },
  { title: 'Community Voice Video 5', category: 'gallery', youtube_url: 'https://youtu.be/CeBroypqQLQ' },
  { title: 'Community Voice Video 6', category: 'gallery', youtube_url: 'https://youtu.be/I8B-j-UBFzs' },
  { title: 'Community Voice Video 7', category: 'gallery', youtube_url: 'https://youtu.be/2Azj1KLcz_o' },
  { title: 'Community Voice Video 8', category: 'gallery', youtube_url: 'https://youtu.be/2FHO9-0mGzc' },
  { title: 'Community Voice Video 9', category: 'gallery', youtube_url: 'https://youtu.be/wc7qLue8JiA' },
  { title: 'Community Voice Video 10', category: 'gallery', youtube_url: 'https://youtu.be/EuqJ_fj4nlk' },
  { title: 'Community Voice Video 11', category: 'gallery', youtube_url: 'https://youtu.be/vx_riA-W03Q' },
  { title: 'Community Voice Video 12', category: 'gallery', youtube_url: 'https://youtu.be/OB-0fGkGFK4' },
]

async function seed() {
  console.log('Seeding GalleryPage Global with 23 images and 12 YouTube video links...')

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

  console.log('GalleryPage Global seeded successfully with 23 images and 12 YouTube video links!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Failed to seed GalleryPage:', err?.message || err)
  process.exit(1)
})
