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
    takeaway_title: 'Takeaway',
    takeaway_text: 'Completion certificate + optional mentorship for internships/apprenticeships',
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
      'Learn professional hair braiding techniques, scalp care, and client care in a hands-on environment. Free 6-week program.',
    duration: '6 Weeks',
    capacity: '5 Participants',
    cost: '100% Free',
    who_can_join: 'Youth & adults interested in braiding and hair care',
    details_capacity: '5 participants per cohort',
    schedule: '2 sessions/week × 6 weeks (in person)',
    details_cost: 'Free (materials provided during class)',
    lead_instructor: 'Professional hair braider & stylist',
    learning_outcomes: [
      { text: 'Sectioning and braiding foundations' },
      { text: 'Cornrows, knotless braids, and box braids' },
      { text: 'Protective styles and scalp care' },
      { text: 'Sanitation and client care' },
      { text: 'Basic business skills' },
    ],
    takeaway_title: 'Takeaway',
    takeaway_text: 'Completion certificate + optional mentorship for internships/apprenticeships',
    curriculum_title: 'Week-by-Week Curriculum',
    weeks: [
      { week: 1, title: 'Foundations', content: 'Sectioning, hair types, sanitation & tool care' },
      { week: 2, title: 'Cornrows', content: 'Underhand & overhand techniques, neat parting' },
      { week: 3, title: 'Knotless Braids', content: 'Tension control, feed-in method, seamless finish' },
      { week: 4, title: 'Box Braids', content: 'Extension attachment, length consistency & dip finishing' },
      { week: 5, title: 'Styling & Care', content: 'Edge control, scalp maintenance & client consultation' },
      { week: 6, title: 'Business & Final Showcase', content: 'Pricing, portfolio building & final assessment' },
    ],
    commitment_note: 'Attend 10 of 12 sessions to receive your completion certificate.',
    cta_heading: 'Ready to Start Your Braiding Journey?',
    cta_description: 'Join our next cohort and master professional braiding skills in a supportive community.',
    register_button_text: 'Register Now',
    register_button_url:
      'https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform',
  },
  {
    title: 'Community Cooking & Cultural Food',
    slug: 'community-cooking-cultural-food',
    badge: 'Culture & Community Program',
    hero_subtitle:
      'Explore cultural recipes, kitchen safety, and catering basics while building community through food.',
    duration: '6 Weeks',
    capacity: '5 Participants',
    cost: '100% Free',
    who_can_join: 'Newcomers & residents interested in culinary arts & catering',
    details_capacity: '5 participants per cohort',
    schedule: '1 session/week × 6 weeks',
    details_cost: 'Free (ingredients provided)',
    lead_instructor: 'Experienced Chef & Food Entrepreneur',
    learning_outcomes: [
      { text: 'Kitchen safety and knife skills' },
      { text: 'Budget-friendly meal prep and planning' },
      { text: 'Cultural recipes and storytelling through food' },
      { text: 'Food presentation and potluck basics' },
      { text: 'Introduction to pricing, catering, and small food business skills' },
    ],
    takeaway_title: 'Takeaway',
    takeaway_text: 'Food Handler Certificate guidance + culinary business mentorship',
    curriculum_title: 'Curriculum Highlights',
    weeks: [
      { week: 1, title: 'Kitchen Safety & Knife Skills', content: 'Sanitation, cuts, and prep efficiency' },
      { week: 2, title: 'Cultural Spices & Flavors', content: 'Traditional recipes and seasoning mastery' },
      { week: 3, title: 'Budget Meal Prep', content: 'Nutritious cooking on a budget' },
      { week: 4, title: 'Catering & Plating', content: 'Presentation and portion control' },
      { week: 5, title: 'Food Business Basics', content: 'Costing, permits, and food safety' },
      { week: 6, title: 'Community Feast', content: 'Final group cooking & celebration' },
    ],
    commitment_note: 'Attend 5 of 6 sessions to receive certificate.',
    cta_heading: 'Join Our Community Kitchen',
    cta_description: 'Cook, share, and connect with people who share your love for cultural food.',
    register_button_text: 'Register Now',
    register_button_url:
      'https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform',
  },
  {
    title: 'Sewing for Beginners',
    slug: 'sewing-beginners',
    badge: 'Culture & Community Program',
    hero_subtitle:
      'Learn machine setup, stitching, pattern reading, and garment creation with free machines provided during class.',
    duration: '6 Weeks',
    capacity: '8 Participants',
    cost: '100% Free',
    who_can_join: 'Beginners of all ages interested in sewing & fashion',
    details_capacity: '8 participants per cohort',
    schedule: '1 session/week × 6 weeks',
    details_cost: 'Free (sewing machines & fabric provided)',
    lead_instructor: 'Professional Tailor & Designer',
    learning_outcomes: [
      { text: 'Machine setup & stitching' },
      { text: 'Reading patterns & fabric selection' },
      { text: 'Create practical projects (tote bags, garments)' },
    ],
    takeaway_title: 'Takeaway',
    takeaway_text: 'Completed projects to take home + sewing skills certificate',
    curriculum_title: 'Curriculum Outline',
    weeks: [
      { week: 1, title: 'Machine Setup & Threading', content: 'Understanding straight stitches & bobbins' },
      { week: 2, title: 'First Project: Tote Bag', content: 'Cutting fabric & assembling seams' },
      { week: 3, title: 'Zipper & Pockets', content: 'Inserting zippers & finishing edges' },
      { week: 4, title: 'Pattern Reading', content: 'Understanding measurements & sizing' },
      { week: 5, title: 'Simple Garment Making', content: 'Creating skirts or aprons' },
      { week: 6, title: 'Final Showcase', content: 'Showcasing finished handmade items' },
    ],
    commitment_note: 'Attend 5 of 6 sessions to complete all projects.',
    cta_heading: 'Start Sewing Today',
    cta_description: 'Unlock your creative potential and build practical sewing skills.',
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
    takeaway_title: 'Demo Night',
    takeaway_text: 'Pitch your business to a community panel and get valuable feedback',
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
    commitment_note: 'Attend 6 of 8 sessions and submit pitch deck for Demo Night.',
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
      { text: 'Stress relief & mental health: Rhythmic movement doubles as meditation' },
      { text: 'Confidence, mobility, and joy: Low-impact movement builds balance' },
      { text: 'Belonging across cultures: Shared music and stories foster connection' },
      { text: 'Low-barrier access: Free, equipment-free, led by trained facilitators' },
    ],
    takeaway_title: 'No Experience Required',
    takeaway_text: 'This is a judgment-free space where everyone is welcome, regardless of skill level or background.',
    curriculum_title: 'What to Expect Flow',
    weeks: [
      { week: 1, title: 'Gentle warm-up and breathwork', content: 'Start with mindful breathing and gentle stretches' },
      { week: 2, title: 'Learn foundational steps & cultural context', content: 'Discover the stories and traditions behind the movements' },
      { week: 3, title: 'Group choreography & cool-down reflection', content: 'Dance together and reflect on the experience' },
    ],
    commitment_note: 'Drop-in sessions available, bi-weekly registration recommended.',
    cta_heading: 'Ready to Move & Connect?',
    cta_description:
      'Join us for Cultural Dance & Movement and experience the joy of rhythmic movement, cultural connection, and community belonging. All levels welcome!',
    register_button_text: 'Reserve a Spot',
    register_button_url:
      'https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform',
  },
]

async function seed() {
  console.log('Seeding all 6 ProgramDetails items into PostgreSQL...')

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

  console.log('All 6 ProgramDetails documents seeded successfully!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Failed to seed ProgramDetails:', err?.message || err)
  process.exit(1)
})
