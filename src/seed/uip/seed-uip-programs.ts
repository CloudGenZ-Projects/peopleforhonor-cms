import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seed() {
  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  console.log('Seeding UipProgramsPage Global into PostgreSQL...')
  const payload = await getPayload({ config })

  const programsData = {
    heroBadge: 'Community Support & Wellness',
    heroTitleLine1: 'Heal, Empower, and',
    heroTitleGradient: 'Connect',
    heroCardTitle: 'Grounded in Lived Experience & Cultural Affirmation',
    heroCardDesc:
      'At United in Pride, we offer a range of programs and services designed to meet the unique needs of LGBTQ+ newcomers, immigrants, and refugees. Our initiatives focus on healing, connection, empowerment, and advocacy.',
    
    programsList: [
      {
        programId: 'peer-support',
        title: 'Peer Support Circles',
        desc: 'Warm, welcoming spaces where we come together to share our stories, build real friendships, and support one another as we navigate our new lives.',
        emoji: '💬',
        schedule: 'Weekly Gatherings',
        btnText: 'Join a Circle',
        link: '/programs/peer-support',
        features: [
          { title: 'Safe & Welcoming', desc: 'A trusting, judgment-free space where you can truly be yourself' },
          { title: 'Chosen Family', desc: 'Build deep, lasting friendships with people who genuinely get it' },
          { title: 'Shared Wisdom', desc: 'Navigate your new life with the love and support of the community' },
        ],
      },
      {
        programId: 'wellness',
        title: 'Wellness Workshops',
        desc: 'Gentle, community-centered workshops focused on healing, mental well-being, and self-care, designed specially for the unique journeys of queer and trans newcomers.',
        emoji: '🧘',
        schedule: 'Monthly Workshops',
        btnText: 'Explore Wellness',
        link: '/programs/wellness',
        features: [
          { title: 'Mental Well-being', desc: 'Gentle, affirming approaches to easing anxiety and finding peace' },
          { title: 'Healing Together', desc: 'A culturally-aware space to process our experiences together' },
          { title: 'Holistic Care', desc: 'Explore art therapy, movement, and everyday self-care practices' },
        ],
      },
      {
        programId: 'cultural',
        title: 'Cultural & Community Events',
        desc: 'Joyful gatherings and celebrations where we honor our diverse backgrounds, share our beautiful cultures, and build a chosen family together.',
        emoji: '🎉',
        schedule: 'Monthly Events',
        btnText: 'Join the Joy',
        link: '/programs/cultural',
        features: [
          { title: 'Celebrate Heritage', desc: 'Honor where you come from while embracing exactly who you are' },
          { title: 'Joyful Gatherings', desc: 'Share food, music, and laughter with a beautiful, diverse family' },
          { title: 'True Belonging', desc: 'Experience the magic of being fully seen and loved by your community' },
        ],
      },
      {
        programId: 'navigation',
        title: 'Resource Navigation',
        desc: 'A helping hand to guide you through finding the right doctors, housing, and legal help. We are here to navigate the system with you, step by step.',
        emoji: '🧭',
        schedule: 'By Appointment',
        btnText: 'Get Support',
        link: '/ourpartners',
        features: [
          { title: 'Affirming Care', desc: "We'll help you find doctors and therapists who celebrate who you are" },
          { title: 'Legal Support', desc: 'Compassionate guidance for refugee claims and immigration paperwork' },
          { title: 'Everyday Needs', desc: 'Help with the basics, from finding safe housing to writing a resume' },
        ],
      },
      {
        programId: 'youth',
        title: 'Youth & Newcomer Programs',
        desc: 'Dedicated, uplifting spaces for young LGBTQ+ newcomers to hang out, express themselves, learn new skills, and grow together.',
        emoji: '🌱',
        schedule: 'Ongoing Programs',
        btnText: 'Join Youth Programs',
        link: '/programs/youth-programs',
        features: [
          { title: 'Safe Hangouts', desc: 'A relaxed, fun environment just for young folks to be themselves' },
          { title: 'Life Skills', desc: 'Gentle guidance on everything from resume building to self-care' },
          { title: 'Peer Mentorship', desc: 'Connect with older community members who truly understand' },
        ],
      },
    ],

    impactHeading: 'Program Impact',
    impactSubtitle: 'Real results from culturally-affirming community programs',
    impactStats: [
      {
        value: '75%+',
        label: 'Reported Improved Well-Being',
        desc: 'Participants said they felt more connected, supported, and positive after attending a United in Pride event or program.',
      },
      {
        value: '80%+',
        label: 'Felt a Greater Sense of Belonging',
        desc: 'Participants shared that they felt welcomed, accepted, and part of a community.',
      },
      {
        value: '70%+',
        label: 'Made a New Connection or Friendship',
        desc: 'Many participants left with at least one new friendship, peer connection, or support contact.',
      },
      {
        value: '90%+',
        label: 'Would Attend Again or Recommend',
        desc: 'Participants expressed strong interest in returning and encouraging others to join United in Pride.',
      },
    ],

    journeyHeading: 'Ready to Begin Your Journey?',
    journeySubtitle: 'Simple steps to join our community programs',
    journeySteps: [
      {
        num: '1',
        title: 'Reach Out',
        desc: "Contact us through our support form, phone, or email. We'll schedule a welcoming conversation to understand your needs.",
      },
      {
        num: '2',
        title: 'Find Your Fit',
        desc: "Together, we'll identify which programs align with your goals, comfort level, and availability. Every journey is unique.",
      },
      {
        num: '3',
        title: 'Join Community',
        desc: 'Start participating in programs that speak to you. Build connections, access resources, and begin your healing journey.',
      },
    ],

    ctaEmoji: '🌈',
    ctaTitleLine1: 'Your Healing Journey',
    ctaTitleLine2: 'Starts Here',
    ctaDesc:
      'Join a community that understands your story, celebrates your identity, and supports your dreams. Every program is designed with your unique needs in mind.',
    ctaPrimaryBtnText: 'Join Our Programs',
    ctaPrimaryBtnLink: '/programs',
    ctaSecondaryBtnText: 'Ask Questions',
    ctaSecondaryBtnLink: '/contact',
  }

  await payload.updateGlobal({
    slug: 'uip-programs-page' as any,
    data: programsData as any,
  })

  console.log('✅ UipProgramsPage seeded successfully!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Error seeding UipProgramsPage:', err)
  process.exit(1)
})
