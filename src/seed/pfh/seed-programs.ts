import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seed() {
  console.log('Seeding complete ProgramsPage dataset into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'programs-page' as any,
    data: {
      // 1. Hero Section
      hero_title: 'Our Programs',
      hero_subtitle:
        "Learn. Connect. Belong. PFH's free programs give newcomers and locals hands-on skills and a supportive network, guided by trained facilitators. No experience required.",

      // 2. Culture & Community Programs
      culture_heading: 'Culture & Community Programs',
      culture_description:
        'Free hands-on training programs that build skills, confidence, and community. All tools and materials provided during class.',
      culture_programs: [
        {
          title: 'Barbershop Training',
          duration: '6 Weeks',
          capacity: '5 participants per cohort',
          description:
            'Learn clipper control, fades, line-ups, sanitation, client care, and basic business skills. Completion certificate + optional mentorship for internships/apprenticeships.',
          highlights: [
            { text: 'Clipper control, fades & line-ups' },
            { text: 'Sanitation & client care' },
            { text: 'Basic business skills' },
          ],
          link: '/programs/barbershop-training',
        },
        {
          title: 'Braiding Training',
          duration: '6 Weeks',
          capacity: '5 participants per cohort',
          description:
            'Learn sectioning, braiding foundations, cornrows, knotless and box braids, protective styling, scalp care, client care, and basic business skills. Completion certificate plus optional mentorship for internships or apprenticeships.',
          highlights: [
            { text: 'Sectioning and braiding foundations' },
            { text: 'Cornrows, knotless braids, and box braids' },
            { text: 'Protective styles and scalp care' },
            { text: 'Sanitation and client care' },
            { text: 'Basic business skills' },
          ],
          link: '/programs/braiding-training',
        },
        {
          title: 'Community Cooking & Cultural Food',
          duration: '6 Weeks',
          capacity: '5 participants per cohort',
          description:
            'Learn kitchen basics, cultural recipes, and safe food handling. Completion certificate plus optional mentorship for catering and small food business opportunities.',
          highlights: [
            { text: 'Kitchen safety and knife skills' },
            { text: 'Budget-friendly meal prep and planning' },
            { text: 'Cultural recipes and storytelling through food' },
            { text: 'Food presentation and potluck basics' },
            { text: 'Introduction to pricing, catering, and small food business skills' },
          ],
          link: '/programs/community-cooking-cultural-food',
        },
        {
          title: 'Sewing for Beginners',
          duration: '6 Weeks',
          capacity: '8 participants',
          description:
            'Machine setup, stitching, reading patterns, and creating projects like tote bags, pillow covers, and simple garments. Free machines and fabric provided.',
          highlights: [
            { text: 'Machine setup & stitching' },
            { text: 'Reading patterns' },
            { text: 'Create practical projects' },
          ],
          link: '/programs/sewing-beginners',
        },
        {
          title: 'Entrepreneurship Launchpad',
          duration: '6-8 Weeks',
          capacity: '10-15 participants',
          description:
            'From idea to pitch: business model, branding, sales, money matters, and legal basics. Includes mentors, templates, and Demo Night pitch opportunity.',
          highlights: [
            { text: 'Business model & pricing' },
            { text: 'Branding & marketing' },
            { text: 'Pitch to community panel' },
          ],
          link: '/programs/entrepreneurship-launchpad',
        },
        {
          title: 'Cultural Dance & Movement',
          duration: 'Bi-Weekly',
          capacity: '20 participants per session',
          description:
            'Stress relief through cultural rhythms and mindful movement. No experience needed. Build confidence, mobility, and belonging across cultures.',
          highlights: [
            { text: 'Stress relief & mental health' },
            { text: 'Cultural connection' },
            { text: 'Judgment-free space' },
          ],
          link: '/programs/cultural-dance',
        },
      ],

      // 3. Coaching Program
      coaching_section_heading: 'Coaching & Mentorship',
      coaching_section_subtitle:
        'One-on-one support to help you reach your goals. Free and available online or in person.',
      coaching_title: 'Coaching Program',
      coaching_desc: 'One-on-one support to help you reach your goals.',
      coaching_career_title: 'Career Development',
      coaching_career_items: [
        { text: 'Build a strong, modern résumé' },
        { text: 'Create or improve your LinkedIn profile' },
        { text: 'Strengthen computer literacy & digital tools' },
      ],
      coaching_life_title: 'Life & Wellbeing',
      coaching_life_items: [
        { text: 'Goal setting that sticks and feels achievable' },
        { text: 'Time management techniques' },
        { text: 'Nutrition, sleep & healthy habits' },
      ],
      coaching_btn_apply_text: 'Apply for Coaching',
      coaching_btn_apply_link: '/programs/coaching',
      coaching_btn_volunteer_text: 'Become a Volunteer Coach',
      coaching_btn_volunteer_url:
        'https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform',

      // 4. Mentorship Program
      mentorship_title: 'Mentorship',
      mentorship_desc: 'Real people. Real careers. Real guidance.',
      mentorship_for_title: "Who It's For",
      mentorship_for_items: [
        {
          label: 'Grade 12–University Students:',
          text: 'Explore programs, careers, and real experiences',
        },
        {
          label: 'Adults (Early/Mid-Career):',
          text: 'Switch roles, level up, or re-enter the workforce',
        },
        {
          label: 'Adults Helping Adults:',
          text: 'Professionals willing to share real-world insight (2–4 hrs/month)',
        },
      ],
      mentorship_works_title: 'How It Works',
      mentorship_works_items: [
        { text: '1:1 mentorship (virtual or in-person)' },
        { text: 'Optional group circles' },
        { text: 'Apply anytime; rolling matches' },
      ],
      mentorship_btn_apply_text: 'Apply for a Mentor',
      mentorship_btn_apply_link: '/programs/mentorship',
      mentorship_btn_volunteer_text: 'Volunteer as a Mentor',
      mentorship_btn_volunteer_url:
        'https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform',
      mentorship_btn_circle_text: 'Register for Adult Circle',

      // 5. Bottom CTA Section
      cta_heading: 'Ready to Get Started?',
      cta_description:
        'All programs are free and designed to help you learn, connect, and belong. No experience required—just bring an open heart and willingness to grow.',
      cta_btn1_text: 'Contact Us',
      cta_btn1_link: '/contact',
      cta_btn2_text: 'View Our Community Voice',
      cta_btn2_link: '/gallery',
    },
  })

  console.log('Complete ProgramsPage dataset seeded successfully into PostgreSQL!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Failed to seed ProgramsPage:', err?.message || err)
  process.exit(1)
})
