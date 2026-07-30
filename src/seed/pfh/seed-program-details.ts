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
  {
    title: 'Coaching Program',
    slug: 'coaching',
    badge: 'Support Program',
    hero_subtitle:
      'One-on-one support to help you reach your goals. Our Coaching program connects you with trained PFH coaches who guide you through practical steps for personal growth, employment readiness, and everyday wellbeing.',
    duration: 'Flexible Schedule',
    capacity: '1-on-1 Sessions',
    cost: '100% Free',
    coaching_section_heading: 'Choose Your Coaching Path',
    coaching_section_subtitle: 'All coaching is free and available online or in person.',
    coaching_career_title: 'Career Development',
    coaching_career_desc: "Sharpen your professional skills and get job-ready support. You'll work one-on-one with a coach to:",
    coaching_career_items: [
      { text: 'Build a strong, modern résumé that highlights your experience and goals' },
      { text: 'Create or improve your LinkedIn profile for networking and job searches' },
      { text: 'Strengthen your computer literacy, using email, job boards, and digital tools with confidence' },
    ],
    coaching_life_title: 'Life & Wellbeing',
    coaching_life_desc: 'Focus on balance, motivation, and everyday habits that help you thrive. Your coach will guide you through:',
    coaching_life_items: [
      { text: 'Goal setting that sticks and feels achievable' },
      { text: 'Time management techniques to get more done, with less stress' },
      { text: 'Nutrition and sleep basics for sustained energy' },
      { text: 'Building healthy habits that support your physical and mental wellness' },
    ],
    coaching_expect_title: 'What to Expect',
    coaching_expect_items: [
      { title: 'A dedicated PFH coach matched to your goals', description: 'Get paired with a coach who understands your journey' },
      { title: 'Structured sessions with hands-on exercises', description: 'Practical, actionable sessions that build real skills' },
      { title: 'Simple action plans and accountability check-ins', description: 'Stay on track with clear goals and regular support' },
      { title: 'Access to templates, resources, and referrals', description: 'Tools and connections to help you succeed' },
    ],
    cta_heading: 'Ready to Start Your Coaching Journey?',
    cta_description:
      "Whether you're looking to advance your career or improve your wellbeing, our trained coaches are here to support you every step of the way.",
    register_button_text: 'Apply for Coaching',
    register_button_url:
      'https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform',
    cta_btn2_text: 'Become a Volunteer Coach',
    cta_btn2_url:
      'https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform',
  },
  {
    title: 'Mentorship Program',
    slug: 'mentorship',
    badge: 'Support Program',
    hero_subtitle:
      'Real people. Real careers. Real guidance. PFH pairs you with a mentor in your field of interest for day-in-the-life insights, career advice, and practical next steps. Free. Safe. Flexible. Hybrid.',
    duration: 'Flexible Schedule',
    capacity: 'Virtual or In-Person',
    cost: '100% Free',
    mentorship_for_title: "Who It's For",
    mentorship_for_subtitle:
      "Whether you're exploring careers, switching fields, or ready to give back, our mentorship program connects you with the right people.",
    mentorship_for_cards: [
      { title: 'Grade 12–University Students', description: 'Explore programs, careers, and real "day-in-the-life" experiences.' },
      { title: 'Adults (Early/Mid-Career)', description: 'Switch roles, level up, or re-enter the workforce with insider guidance.' },
      { title: 'Adults Helping Adults (Mentors)', description: 'Professionals, entrepreneurs, tradespeople, and community leaders willing to share real-world insight (2–4 hrs/month). Training and support provided.' },
    ],
    mentorship_works_title: 'How Our Mentorship Works',
    mentorship_works_items: [
      { text: '1:1 mentorship (virtual or in-person), optional group circles' },
      { text: 'Adults helping Adults: 3 times a year meeting circle' },
      { text: 'Apply anytime; rolling matches based on availability' },
    ],
    mentorship_why_title: 'Why Mentorship Matters',
    mentorship_why_items: [
      { title: 'Real-World Insights', description: "Learn what it's really like in your field of interest" },
      { title: 'Career Navigation', description: 'Get guidance on education, training, and next steps' },
      { title: 'Professional Network', description: 'Build connections that open doors' },
      { title: 'Confidence & Clarity', description: 'Make informed decisions about your future' },
    ],
    cta_heading: 'Ready to Connect?',
    cta_description:
      "Whether you're seeking guidance or ready to share your experience, join our mentorship community today.",
    register_button_text: 'Apply for a Mentor',
    register_button_url:
      'https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform',
    cta_btn2_text: 'Volunteer as a Mentor',
    cta_btn2_url:
      'https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform',
  },
  {
    title: 'Career Guidance & Support',
    slug: 'empowerment',
    badge: 'Support Program',
    hero_subtitle:
      'Practical job‑market readiness, guided growth and coaching—on one path.',
    empowerment_intro_title: 'Unlock Your Potential, Seize Control of Your Life',
    empowerment_intro_desc:
      'We provide hands-on workshops, resume support, job search guidance, and culturally relevant resources to help them settle, integrate, and thrive. From understanding the job market to building confidence in interviews, we offer tools that turn uncertainty into action.\n\nOur Youth Career Guidance & Support program is built to meet newcomer and immigrant youth where they are, and walk with them as they navigate life in Canada.',
    empowerment_offer_heading: 'What We Offer',
    empowerment_offer_subtitle:
      'Life is full of ups and downs, but with the right mindset and support system, you can weather any storm. Our resilience building workshops will teach you how to bounce back from setbacks, cope with stress, and cultivate a positive outlook on life.',
    empowerment_features: [
      { feature_text: 'Personalized Guidance' },
      { feature_text: 'Skill Development' },
      { feature_text: 'Self-Discovery' },
      { feature_text: 'Resilience Building' },
    ],
    mentorship_section_title: 'Mentorship: Guidance & Growth',
    mentorship_section_desc:
      'We connect newcomers with mentors who guide them through the unspoken rules of Canadian life—career development, professional culture, leadership skills, and personal growth. Whether it’s building a career plan, shifting limiting beliefs, or learning how to lead in unfamiliar systems, we offer structured support that will speak to your challenges.',
    mentorship_features: [
      { feature_text: 'Goal Setting' },
      { feature_text: 'Performance Enhancement' },
      { feature_text: 'Clarity and Focus' },
    ],
    coaching_section_title: 'Unlock Your Potential, Seize Control of Your Life',
    coaching_section_desc:
      'We create intentional spaces where Black immigrant youths are seen, supported, and matched with mentors who reflect their realities. Through Career Guidance & Support workshops, one-on-one matching, and story-sharing, we help rebuild the self-confidence that often gets chipped away in the immigration process.\n\nOur mentors offer more than advice, they provide friendship, consistency, and a deep understanding of what it means to start over. Here, mentorship is not about fixing people. It\'s about helping them remember who they are.',
    coaching_offer_heading: 'What We Offer',
    coaching_offer_subtitle:
      'Life is full of ups and downs, but with the right mindset and support system, you can weather any storm. Our resilience building workshops will teach you how to bounce back from setbacks, cope with stress, and cultivate a positive outlook on life.',
    coaching_features: [
      { feature_text: 'Personalized Guidance' },
      { feature_text: 'Skill Development' },
      { feature_text: 'Self-Discovery' },
      { feature_text: 'Resilience Building' },
    ],
    cta_starting_point_title: 'Choose your starting point',
    cta_starting_point_desc:
      'Many participants begin with Career Guidance & Support to build practical readiness and continue with Mentorship for guidance and accountability. We’ll help you tailor the path to your goals.',
  },
  {
    title: 'Culture & Community',
    slug: 'culture-and-community-ottawa-program',
    badge: 'Culture & Community Program',
    hero_subtitle:
      'Find your Community in Ottawa. We host activities that bring people together because healing doesn’t always come from a workshop; sometimes, it comes from dancing, laughing, or cooking a familiar meal with someone who understands your story.',
    youtube_embed_url: 'https://www.youtube.com/embed/HQ5mnZqWgMk?rel=0&modestbranding=1&playsinline=1',
    community_intro_title: 'Find your Community in Ottawa',
    community_intro_p1:
      'We host activities that bring people together because healing doesn’t always come from a workshop; sometimes, it comes from dancing, laughing, or cooking a familiar meal with someone who understands your story.',
    community_intro_p2:
      'Our cultural programming includes dance empowerment sessions, cooking classes, fun social gatherings, and other creative events that remind people they’re not alone. These are more than “extras”, they’re part of how we rebuild confidence, restore belonging, and create space for joy in the settlement journey.',
    community_intro_p3:
      'Because community isn’t something we talk about. It’s something we practice together.',
    community_ways_heading: 'Ways we Bring The Community Together',
    community_cards: [
      {
        title: 'African/Caribean Cultural Dance Exchange',
        description:
          'We believe that joy, culture, and community can help carry us through. That’s why, once a month, we turn up the music and turn the room into a global dance floor.',
        button_text: 'Learn More',
        button_url: '/african-caribbean-cultural-dance-exchange',
      },
      {
        title: 'African/Caribean Domestic Empowerment',
        description:
          'Learn recipes from around Africa and the Caribbean through our domestic empowerment program.',
        button_text: 'Learn More',
        button_url: '/african-caribbean-cultural-dance-exchange',
      },
    ],
  },
]

async function seed() {
  console.log('Seeding ProgramDetails items into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  for (const item of programItems) {
    const existing = await payload.find({
      collection: 'program-details' as any,
      where: {
        slug: { equals: item.slug },
      },
    })

    if (existing.docs.length > 0) {
      await payload.update({
        collection: 'program-details' as any,
        id: existing.docs[0].id,
        data: item,
      })
      console.log(`Updated ProgramDetails document: ${item.slug}`)
    } else {
      await payload.create({
        collection: 'program-details' as any,
        data: item,
      })
      console.log(`Created ProgramDetails document: ${item.slug}`)
    }
  }

  console.log('All ProgramDetails documents seeded successfully!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Failed to seed ProgramDetails:', err?.message || err)
  process.exit(1)
})
