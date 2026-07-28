import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

const programItems = [
  {
    title: 'Barbershop Training',
    slug: 'barbershop-training',
    badge: 'Culture & Community Program',
    hero_subtitle:
      'Learn professional barbering skills in a supportive, hands-on environment. Free 6-week program with tools provided and certification upon completion.',
    duration: '6 Weeks',
    capacity: '5 Participants',
    cost: '100% Free',
    who_can_join: 'Youth & young adults (men/women/non-binary), ages 16+',
    details_capacity: '5 participants per cohort',
    schedule: '2 sessions/week × 6 weeks (in person)',
    details_cost: 'Free (tools provided during class)',
    lead_instructor: 'Certified barber & trainer',
    learning_outcomes: [
      { text: 'Clipper control, fades & line-ups' },
      { text: 'Sanitation, client care & shop etiquette' },
      { text: 'Basic business skills (pricing, bookings, tips)' },
    ],
    showTakeaway: true,
    takeaway_title: 'Takeaway',
    takeaway_text: 'Completion certificate + optional mentorship for internships/apprenticeships',
    showCurriculum: true,
    curriculum_title: 'Week-by-Week Curriculum',
    weeks: [
      { week: 1, title: 'Foundations', content: 'Tools, safety, sanitation; clipper guards & lengths' },
      { week: 2, title: 'Basic Techniques', content: 'Sectioning, tapers, line-ups; live demo' },
      { week: 3, title: 'Fades & Beards', content: 'Fades (low/mid/high), beard basics' },
      { week: 4, title: 'Advanced Skills', content: 'Scissor over comb; blending; edge refinement' },
      { week: 5, title: 'Client Experience', content: 'Client consultation; timing; barbershop etiquette' },
      { week: 6, title: 'Final Practice', content: 'Commitment: Attend 10 of 12 sessions' },
    ],
    commitment_note:
      'Attend 10 of 12 sessions to receive your completion certificate and qualify for mentorship opportunities.',
    cta_heading: 'Ready to Start Your Barbering Journey?',
    cta_description:
      'Join our next cohort and learn professional barbering skills in a supportive, judgment-free environment. All tools provided—just bring your commitment to learn.',
    register_button_text: 'Register Now',
    register_button_url:
      'https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform',
  },
  {
    title: 'Braiding Training',
    slug: 'braiding-training',
    badge: 'Culture & Community Program',
    hero_subtitle:
      'Learn sectioning, braiding foundations, cornrows, knotless and box braids, protective styling, scalp care, client care, and basic business skills. Completion certificate plus optional mentorship for internships or apprenticeships.',
    duration: '6 Weeks',
    capacity: '5 Participants',
    cost: '100% Free',
    who_can_join: 'Youth & young adults (all genders), ages 16+',
    details_capacity: '5 participants per cohort',
    schedule: '2 sessions/week × 6 weeks (in person)',
    details_cost: 'Free (all braiding tools provided during class)',
    lead_instructor: 'Experienced braider & community trainer',
    learning_outcomes: [
      { text: 'Sectioning and braiding foundations' },
      { text: 'Cornrows, knotless braids, and box braids' },
      { text: 'Protective styles and scalp care' },
      { text: 'Sanitation and client care' },
      { text: 'Basic business skills' },
    ],
    showTakeaway: false,
    takeaway_title: null,
    takeaway_text: null,
    showCurriculum: false,
    curriculum_title: null,
    weeks: [],
    commitment_note: null,
    cta_heading: 'Ready to Start Your Braiding Journey?',
    cta_description:
      'Join our next cohort and build confident braiding skills in a supportive, judgment-free environment. All tools provided—just bring your commitment to learn.',
    register_button_text: 'Register Now',
    register_button_url:
      'https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform',
  },
  {
    title: 'Community Cooking & Cultural Food',
    slug: 'community-cooking-cultural-food',
    badge: 'Culture & Community Program',
    hero_subtitle:
      'Learn kitchen basics, cultural recipes, and safe food handling. Completion certificate plus optional mentorship for catering and small food business opportunities.',
    duration: '6 Weeks',
    capacity: '5 Participants',
    cost: '100% Free',
    who_can_join: 'Adults and youth (all genders), comfortable working in a shared kitchen',
    details_capacity: '5 participants per cohort',
    schedule: '1–2 sessions/week × 6 weeks (in person, kitchen-based)',
    details_cost: 'Free (all ingredients and tools provided during class)',
    lead_instructor: 'Community cook/caterer with cultural food experience',
    learning_outcomes: [
      { text: 'Kitchen safety and knife skills' },
      { text: 'Budget-friendly meal prep and planning' },
      { text: 'Cultural recipes and storytelling through food' },
      { text: 'Food presentation and potluck basics' },
      { text: 'Introduction to pricing, catering, and small food business skills' },
    ],
    showTakeaway: false,
    takeaway_title: null,
    takeaway_text: null,
    showCurriculum: false,
    curriculum_title: null,
    weeks: [],
    commitment_note: null,
    cta_heading: 'Ready to Cook and Share Your Culture?',
    cta_description:
      'Join our community kitchen to learn new recipes, share your own, and explore how food can open doors to catering and small business opportunities.',
    register_button_text: 'Register Now',
    register_button_url:
      'https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform',
  },
  {
    title: 'Sewing for Beginners',
    slug: 'sewing-beginners',
    badge: 'Culture & Community Program',
    hero_subtitle:
      'Learn essential sewing skills and create practical projects. Free 6-week program with machines and fabric provided.',
    duration: '6 Weeks',
    capacity: '8 Participants',
    cost: '100% Free',
    who_can_join: 'Youth & adults, ages 14+',
    details_capacity: '8 participants per cohort',
    schedule: '1 session/week × 6 weeks (in person)',
    details_cost: 'Free (machines on site; fabric provided for class projects)',
    lead_instructor: 'Trained sewing instructor',
    learning_outcomes: [
      { text: 'Machine setup, stitching, seam finishes' },
      { text: 'Reading simple patterns, measuring & cutting' },
      { text: 'Make: tote bag, pillow cover, simple skirt or joggers' },
    ],
    showTakeaway: true,
    takeaway_title: 'Takeaway',
    takeaway_text: 'Completion certificate + option to join intermediate cohort',
    showCurriculum: true,
    curriculum_title: 'Week-by-Week Curriculum',
    weeks: [
      { week: 1, title: 'Machine Basics', content: 'Machine basics, threading, straight/zigzag stitches' },
      { week: 2, title: 'Seams & Hems', content: 'Seams & hems; practice sampler' },
      { week: 3, title: 'Project 1: Tote Bag', content: 'Project 1: tote bag (pattern, cut, sew)' },
      { week: 4, title: 'Project 2: Pillow Cover', content: 'Project 2: pillow cover (zipper or envelope)' },
      { week: 5, title: 'Garment Basics', content: 'Garment basics: measuring, pattern layout' },
      { week: 6, title: 'Final Project', content: 'Project 3 start/finish; showcase & photos' },
    ],
    commitment_note: null,
    cta_heading: 'Ready to Start Sewing?',
    cta_description:
      "Join our beginner-friendly sewing class and create practical projects you'll be proud of. All machines and fabric provided—no experience needed!",
    register_button_text: 'Register Now',
    register_button_url:
      'https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform',
  },
  {
    title: 'Entrepreneurship Launchpad',
    slug: 'entrepreneurship-launchpad',
    badge: 'Culture & Community Program',
    hero_subtitle:
      'From idea to pitch: Learn business fundamentals, create your business plan, and pitch to a community panel. Free 6-8 week program with mentors and templates.',
    duration: '6-8 Weeks',
    capacity: '10-15 Participants',
    cost: '100% Free',
    who_can_join: 'Early-stage founders & side-hustlers (all ages 16+)',
    details_capacity: '10–15 participants per cohort',
    schedule: '6–8 weekly workshops + office hours (hybrid)',
    details_cost: 'Free',
    lead_instructor: 'Mentors, templates, and pitch feedback',
    learning_outcomes: [
      { text: 'One-page business plan' },
      { text: 'Basic budget' },
      { text: 'Starter brand kit' },
      { text: 'A public pitch' },
    ],
    showTakeaway: true,
    takeaway_title: 'Demo Night',
    takeaway_text: 'Pitch your business to a community panel and get valuable feedback',
    showCurriculum: true,
    curriculum_title: 'Program Modules',
    weeks: [
      { week: 1, title: 'Problem → Solution', content: 'Clarity & customer discovery' },
      { week: 2, title: 'Business Model & Pricing', content: 'Break-even, margins' },
      { week: 3, title: 'Branding', content: 'Simple website/landing pages' },
      { week: 4, title: 'Sales & Marketing', content: 'Social, email, partnerships' },
      { week: 5, title: 'Money Matters', content: 'Startup costs, bookkeeping, grants' },
      { week: 6, title: 'Legal Basics', content: 'Registration, permits, contracts' },
      { week: 7, title: 'Pitch Practice', content: 'Storytelling' },
      { week: 8, title: 'Demo Night', content: 'Pitch to community panel' },
    ],
    commitment_note: null,
    cta_heading: 'Ready to Launch Your Business?',
    cta_description:
      'Join our Entrepreneurship Launchpad and turn your idea into reality. Get mentorship, templates, and the confidence to pitch your business.',
    register_button_text: 'Apply to Cohort',
    register_button_url:
      'https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform',
  },
  {
    title: 'Cultural Dance & Movement',
    slug: 'cultural-dance',
    badge: 'Culture & Community Program',
    hero_subtitle:
      'Stress relief through cultural rhythms and mindful movement. No experience needed. Build confidence, mobility, and belonging across cultures.',
    duration: 'Bi-Weekly',
    capacity: '20 Participants',
    cost: '100% Free',
    who_can_join: 'All ages 14+ (no experience needed)',
    details_capacity: '20 participants per session',
    schedule: 'Every other Saturday, 1.5–2 hours',
    details_cost: 'Free',
    lead_instructor: 'Cultural rhythms, community, and mindful movement',
    learning_outcomes: [
      { text: 'Stress relief & mental health: Rhythmic movement doubles as meditation—reducing stress and improving mood' },
      { text: 'Confidence, mobility, and joy: Low-impact movement builds balance, flexibility, and self-esteem' },
      { text: 'Belonging across cultures: Shared music and stories foster social connection and reduce isolation' },
      { text: 'Low-barrier access: Free, equipment-free, and led by trained facilitators' },
    ],
    showTakeaway: true,
    takeaway_title: 'No Experience Required',
    takeaway_text:
      'This is a judgment-free space where everyone is welcome, regardless of skill level or background.',
    showCurriculum: true,
    curriculum_title: 'What to Expect',
    weeks: [
      { week: 1, title: 'Gentle warm-up and breathwork', content: 'Start with mindful breathing and gentle stretches' },
      { week: 2, title: 'Learn foundational steps & cultural context', content: 'Discover the stories and traditions behind the movements' },
      { week: 3, title: 'Group choreography & cool-down reflection', content: 'Dance together and reflect on the experience' },
    ],
    commitment_note: null,
    cta_heading: 'Ready to Move & Connect?',
    cta_description:
      'Join us for Cultural Dance & Movement and experience the joy of rhythmic movement, cultural connection, and community belonging. All levels welcome!',
    register_button_text: 'Reserve a Spot',
    register_button_url:
      'https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform',
  },
]

async function seed() {
  console.log('Seeding all 6 ProgramDetails items with 100% exact initial commit text...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('./payload.config')

  const payload = await getPayload({ config })

  for (const item of programItems) {
    const existing = await payload.find({
      collection: 'program-details',
      where: {
        slug: { equals: item.slug },
      },
    })

    if (existing.docs.length > 0) {
      await payload.update({
        collection: 'program-details',
        id: existing.docs[0].id,
        data: item,
      })
      console.log(`Updated ProgramDetails document: ${item.slug}`)
    } else {
      await payload.create({
        collection: 'program-details',
        data: item,
      })
      console.log(`Created ProgramDetails document: ${item.slug}`)
    }
  }

  console.log('All 6 ProgramDetails documents seeded with exact initial text successfully!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Failed to seed ProgramDetails:', err?.message || err)
  process.exit(1)
})
