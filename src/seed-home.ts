import dotenv from 'dotenv'

// Ensure .env is loaded before Payload initialization
dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seed() {
  console.log('Seeding complete HomePage dataset into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('./payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'home-page',
    data: {
      // 1. Hero Section
      hero_badge: 'Supporting Immigrants to Canada',
      hero_title: 'Trusted Help for Your',
      hero_title_highlight: 'Life in Canada',
      hero_subtitle:
        'Do more than survive in Canada! We provide Career Guidance & Support, mentorship, and community support to help newcomers thrive and build meaningful lives.',
      primary_cta_text: 'Find the Support You Need',
      primary_cta_link: '/programs',
      secondary_cta_text: 'Learn More About Us',
      secondary_cta_link: '/about',
      third_cta_text: 'Apply for our Computer Access Program',
      third_cta_link:
        'https://www.zeffy.com/en-CA/newsletter-form/computer-access-program-application',
      hero_stats: [
        {
          stat_number: '1000+',
          stat_label: 'Lives Impacted',
        },
        {
          stat_number: '50+',
          stat_label: 'Events Done',
        },
        {
          stat_number: '15+',
          stat_label: 'Countries Represented',
        },
      ],

      // 2. Restore Honor & Services Section
      restore_honor_heading:
        'We Restore Honor through empowerment, coaching, and mentorship.',
      restore_honor_paragraph:
        'At People for Honor, we believe every immigrant deserves more than just a fresh start, they deserve to belong. We’re building a community in Ottawa where newcomers feel seen, supported, and empowered to thrive. We recognize the strength, purpose, and potential each person carries, and we walk alongside them as they rebuild, rediscover, and rise into the best version of themselves with dignity, not just survival.',
      restore_honor_points: [
        { point_text: 'Assisting in setting goals for your life in Canada.' },
        { point_text: 'Working with you to take control of your life.' },
        { point_text: 'Connecting you with experienced mentors and coaches.' },
        { point_text: 'Supporting you to live a life of honor in Canada.' },
      ],
      services_badge: 'Our Services',
      services_heading: 'Support for Your Journey',
      services_description:
        'We believe everyone has the potential to thrive. Our integrated approach combines practical skills, mentorship, and community support to help you build a fulfilling life in Canada.',
      services_list: [
        {
          service_id: 'empowerment',
          title: 'Career Guidance & Support',
          description:
            'We provide hands-on workshops, resume support, job search guidance, and relevant resources to help you understand the job market & build confidence in interviews.',
          url: '/programs/empowerment',
          features: [
            { feature_text: 'Resume writing & optimization' },
            { feature_text: 'Interview preparation' },
            { feature_text: 'Job search strategies' },
            { feature_text: 'Professional networking' },
          ],
        },
        {
          service_id: 'mentorship',
          title: 'Mentorship',
          description:
            'We connect newcomers with mentors who guide them through the unspoken rules of Canadian life; career development, professional culture, leadership skills, and personal growth.',
          url: '/programs/mentorship',
          features: [
            { feature_text: 'One-on-one mentor matching' },
            { feature_text: 'Cultural integration support' },
            { feature_text: 'Professional development' },
            { feature_text: 'Leadership skills training' },
          ],
        },
        {
          service_id: 'coaching',
          title: 'Coaching',
          description:
            'We facilitate Career Guidance & Support-focused group sessions and individual coaching that help participants build clarity, confidence, and emotional resilience.',
          url: '/programs/coaching',
          features: [
            { feature_text: 'Individual coaching sessions' },
            { feature_text: 'Group Career Guidance & Support workshops' },
            { feature_text: 'Confidence building' },
            { feature_text: 'Emotional resilience training' },
          ],
        },
        {
          service_id: 'community',
          title: 'Culture & Community',
          description:
            "We host activities that bring people together because healing doesn't always come from a workshop; sometimes, it comes from dancing, laughing, or cooking a meal with people who understand your story.",
          url: '/service/culture-and-community-ottawa-program',
          features: [
            { feature_text: 'Cultural events & celebrations' },
            { feature_text: 'Community gatherings' },
            { feature_text: 'Social activities' },
            { feature_text: 'Peer support networks' },
          ],
        },
      ],

      // 3. Featured & Video Section
      featured_badge: 'Building Community',
      featured_heading: 'Do more than survive in Canada!',
      featured_paragraph_1:
        'At People for Honor, our values guide our actions and shape our organizational culture. We believe that everyone has the inherent potential to thrive and live a fulfilled life, and that knowing your own worth enables you to better value others.',
      featured_paragraph_2:
        'We hold that giving back to your community not only strengthens those around you but also helps you to flourish personally. Above all, we recognize that we are all connected—sowing seeds today so that future generations may water the trees, and their descendants may one day rest in the shade they provide.',
      featured_primary_cta_text: 'Explore Our Programs',
      featured_primary_cta_link: '/programs',
      featured_secondary_cta_text: 'Learn More About Us',
      featured_secondary_cta_link: '/about',
      featured_video_id: 'MlBTjyV_ado',
      impact_heading: 'See Our Impact in Action',
      impact_description:
        "Watch how we're transforming lives and building a thriving community for immigrants in Canada.",
      impact_subtext:
        'Join thousands of immigrants who have found the support they needed',

      // 4. Get Involved Section
      get_involved_heading: 'Get Involved',
      get_involved_subheading:
        'Be part of our mission to restore honor and help newcomers thrive in Canada.',
      donate_card_title: 'Donate',
      donate_card_description:
        'Your donations help us make an impact. Together we can support more immigrants to navigate their life in Canada.',
      donate_button_text: 'Donate Now',
      donate_button_link: '/join#donate',
      volunteer_card_title: 'Volunteer',
      volunteer_card_description:
        'It takes a village. Join us as a volunteer and help build the community you want to see.',
      volunteer_button_text: 'Become a Volunteer',
      volunteer_button_link:
        'https://docs.google.com/forms/d/e/1FAIpQLSeoVDTZ9VLLCRIP-0twZo8urDmzM6VLAhC-QQ2rHOoeyVce4w/viewform?usp=header',

      // 5. Home CTA & Newsletter
      cta_heading:
        'Building a life in a new country is not easy. We are here so you do not have to do it alone.',
      cta_description:
        'Join thousands of immigrants who have found needed help and community with People for Honor.',
      cta_primary_text: 'Find Support',
      cta_primary_link: '/programs',
      cta_secondary_text: 'Learn About Our Approach',
      cta_secondary_link: '/about',
      newsletter_heading: 'Join the Transformational Journey!',
      newsletter_description:
        'Stay connected with our community and be the first to know about new programs, events, and opportunities to make a difference.',
      newsletter_button_text: 'Join Our Community',
      newsletter_footer_quote: 'Contribute to the prosperity of people!',
      newsletter_link_text: 'Apply for our Computer Access Program',
      newsletter_link_url:
        'https://www.zeffy.com/en-CA/newsletter-form/computer-access-program-application',

      // 6. Contact & Journey Section
      contact_heading: 'Ready to Start Your Journey?',
      contact_description:
        "We're here to help you every step of the way. Reach out to us and let's begin building your bright future in Canada together.",
      contact_phone: '613 672 7062',
      contact_email: 'info@peopleforhonor.com',
      contact_address: '1505 laperrieve Ave Suite 506, Ottawa, ON, K127T1',
      contact_hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
      contact_box_title: "We're Here for You",
      contact_box_text:
        "Your success is our mission. Don't hesitate to reach out - we're committed to supporting your journey in Canada.",
      zeffy_embed_1_url:
        'https://www.zeffy.com/en-CA/embed/newsletter-form/sign-up-for-our-newsletter-1932',
      zeffy_embed_2_url:
        'https://www.zeffy.com/en-CA/embed/newsletter-form/join-our-mailing-list-18',
    },
  })

  console.log(
    'Complete HomePage dataset (Hero, Restore Honor, Services, Video, Get Involved, CTA) seeded successfully!'
  )
  process.exit(0)
}

seed().catch((err) => {
  console.error('Failed to seed HomePage:', err?.message || err)
  process.exit(1)
})
