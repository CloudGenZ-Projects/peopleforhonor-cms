import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscPublications() {
  console.log('Seeding MtscPublicationsPage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtsc-publications-page' as any,
    data: {
      // TAB 1: HERO SECTION
      hero_badge: 'Resources & Archives',
      hero_title: 'Our',
      hero_title_coral: 'Publications',
      hero_title_suffix: '& Reports',
      hero_subtitle:
        'Explore our latest newsletters, happiness indexes, marine safety guidelines, and vital research supporting global seafarers.',

      // TAB 2: HALIFAX NEWSLETTERS
      halifax_title: 'Mission to Seafarers Halifax Flying Angel Newsletters',
      halifax_subtitle:
        'Catch up on our latest local updates and stories from the Halifax Mission.',
      btn_halifax_archive_text: 'Halifax Newsletter Archives',
      halifax_newsletters: [
        { title: 'Spring 2026' },
        { title: 'Fall 2025' },
        { title: 'Summer 2025' },
        { title: 'Spring 2025' },
        { title: 'Fall 2024' },
        { title: 'Summer 2024' },
        { title: 'Spring 2024' },
        { title: 'Fall 2023' },
        { title: 'Summer 2023' },
        { title: 'Fall 2022' },
        { title: 'Summer 2022' },
        { title: 'Spring 2022' },
        { title: 'Spring 2022 (Alt)' },
        { title: 'Fall 2021' },
        { title: 'Summer 2021' },
        { title: 'Spring 2021' },
      ],

      // TAB 3: THE SEA & FAN NEWSLETTERS
      sea_badge: 'Global Reach',
      sea_title: 'Mission to Seafarers\nThe Sea Newsletters',
      sea_description:
        'To sign up and have the latest issue sent directly to your inbox with news from Canada and around the world, choose an option below.',
      btn_sea_global_text: 'Global Sign Up',
      btn_sea_global_link: 'https://www.missiontoseafarers.org/the-sea',
      btn_sea_canada_text: 'Canada Newsletter',
      btn_sea_canada_link: '/contact',
      btn_sea_archive_text: 'Archive Copies',
      btn_sea_archive_link: 'https://www.missiontoseafarers.org/the-sea-archive',
      fan_title_prefix: 'Mission to Seafarers Flying Angel News',
      fan_title_coral: '(FAN)',
      fan_description: 'To receive a free copy of the FAN, sign up here.',
      btn_fan_signup_text: 'Sign Up Now',
      btn_fan_signup_link: 'https://www.missiontoseafarers.org/fan',

      // TAB 4: STATISTICS & HAPPINESS INDEX
      stats_title: 'MtS Halifax Statistics',
      stats_description:
        'Statistics include the frequency count of three categories: (1) seafarers visiting the Mission Centre; (2) volunteer and staff visits to ships; and, (3) seafarers provided with transport to and from the port and desired destination in Halifax and Dartmouth. Data are presented in actual counts and tables, showcasing monthly and annual comparisons.',
      btn_stats_text: 'View Latest Statistics',
      happiness_title: 'Seafarers Happiness Index',
      happiness_subtitle:
        'Measuring the wellbeing of seafarers worldwide across various categories.',
      btn_happiness_archive_text: 'Happiness Index Archives',
      happiness_reports: [
        { title: 'Quarter 1 2026 Report' },
        { title: 'Quarter 3 2025 Report' },
        { title: 'Quarter 2 2025 Report' },
        { title: 'Quarter 2 2025 Report (Alt)' },
        { title: 'Quarter 1 2025 Report' },
        { title: 'Quarter 3 2024 Report' },
        { title: 'Quarter 2 2024 Report' },
        { title: 'Quarter 1 2024 Report' },
      ],
      happiness_survey_text:
        'Read link to the survey and access the full archive of Reports here.',
      happiness_survey_link: 'https://www.seafarershappinessindex.org/',

      // TAB 5: ESG & SAFETY HANDBOOKS & FOGHORN
      esg_title: 'Mission to Seafarers ESG Strategy',
      esg_subtitle:
        'Read about our commitment to Environmental, Social, and Governance principles.',
      btn_esg_archive_text: 'ESG Strategy Archives',
      esg_reports: [{ title: 'MtS ESG Strategy 2023' }],
      foghorn_title: 'The Foghorn',
      foghorn_subtitle:
        'Master Mariners of Canada, Maritimes Division Publications',
      btn_foghorn_archive_text: 'Foghorn Archives',
      foghorn_reports: [{ title: 'July 2025' }, { title: 'February 2025' }],
      safety_title: 'Marine Safety Handbook',
      safety_subtitle:
        'Port of Halifax guidelines and crucial safety protocols for all mariners.',
      btn_safety_archive_text: 'Marine Safety Archives',
      safety_handbooks: [
        { title: 'Port of Halifax Marine Safety Handbook, May 2025' },
      ],

      // TAB 6: INDUSTRY & STORYTELLING
      industry_title: 'Industry Resources & Certifications',
      industry_subtitle:
        'Important links for marine training, qualifications, and career building.',
      industry_cards: [
        {
          card_title:
            'Canada Recognition of Foreign Seafarers’ STCW Certificate',
          card_url:
            'https://tc.canada.ca/en/marine-transportation/marine-training-certification-individuals/foreign-other-qualifications-skills-recognition/canadian-endorsement-attesting-recognition-foreign-certificate-through-reciprocal-arrangement',
        },
        {
          card_title: 'Canadian Marine Careers Foundation',
          card_url: 'https://imagine-marine.ca/about-us',
        },
      ],
      story_title: 'Connecting Seafarers to the World',
      story_subtitle:
        'Through our publications, we keep seafarers, supporters, and maritime communities informed, advocated for, and connected.',
      card_1_title: 'Stories from the Sea',
      card_1_desc:
        'Our newsletters share real stories from seafarers, highlighting their unique experiences, daily challenges, and the essential support they receive at our Halifax Mission.',
      card_2_title: 'Research & Insights',
      card_2_desc:
        'Through happiness surveys, statistics, and deeply researched reports, we continuously track seafarer wellbeing and strongly advocate for better conditions at sea.',
      cta_box_title: 'Stay Informed About Seafarer Welfare',
      cta_box_desc:
        'Our publications provide invaluable insights into the daily lives of seafarers and the vital, life-saving work being done to support them in ports around the globe.',
      btn_cta_1_text: 'Read Our Newsletters',
      btn_cta_1_link: '#halifax-newsletters',
      btn_cta_2_text: 'Subscribe to The Sea',
      btn_cta_2_link: 'https://www.missiontoseafarers.org/the-sea',
    },
  })

  console.log('🎉 MtscPublicationsPage Global seeded successfully with 100% of all section-wise content!')
  process.exit(0)
}

seedMtscPublications().catch((err) => {
  console.error('❌ Error seeding MtscPublicationsPage:', err)
  process.exit(1)
})
