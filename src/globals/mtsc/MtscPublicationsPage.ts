import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscPublicationsPage: GlobalConfig = {
  slug: 'mtsc-publications-page',
  label: 'MTSC Publications Page',
  admin: {
    group: 'MTSC Halifax',
    hidden: ({ user }) => isHiddenForUser(user, 'mtsc'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_MTSC_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/publication`
      },
    },
  },
  access: {
    read: () => true,
    update: (args) => checkTenantAccess(args, 'mtsc'),
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // TAB 1: HERO SECTION
        {
          label: 'Hero Section',
          fields: [
            {
              name: 'hero_badge',
              label: 'Hero Badge Text',
              type: 'text',
              defaultValue: 'Resources & Archives',
            },
            {
              name: 'hero_title',
              label: 'Hero Main Title Prefix',
              type: 'text',
              defaultValue: 'Our',
            },
            {
              name: 'hero_title_coral',
              label: 'Hero Title Coral Text',
              type: 'text',
              defaultValue: 'Publications',
            },
            {
              name: 'hero_title_suffix',
              label: 'Hero Title Suffix',
              type: 'text',
              defaultValue: '& Reports',
            },
            {
              name: 'hero_subtitle',
              label: 'Hero Subtitle Paragraph',
              type: 'textarea',
              defaultValue:
                'Explore our latest newsletters, happiness indexes, marine safety guidelines, and vital research supporting global seafarers.',
            },
            {
              name: 'hero_bg_image',
              label: 'Hero Background Image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },

        // TAB 2: HALIFAX NEWSLETTERS
        {
          label: 'Halifax Newsletters',
          fields: [
            {
              name: 'halifax_title',
              label: 'Halifax Newsletters Title',
              type: 'text',
              defaultValue: 'Mission to Seafarers Halifax Flying Angel Newsletters',
            },
            {
              name: 'halifax_subtitle',
              label: 'Halifax Newsletters Subtitle',
              type: 'textarea',
              defaultValue:
                'Catch up on our latest local updates and stories from the Halifax Mission.',
            },
            {
              name: 'btn_halifax_archive_text',
              label: 'Archive Toggle Button Text',
              type: 'text',
              defaultValue: 'Halifax Newsletter Archives',
            },
            {
              name: 'halifax_newsletters',
              label: 'Halifax Newsletters List (PDF Uploads / Links)',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  label: 'Newsletter Title (e.g. Spring 2026)',
                  type: 'text',
                },
                {
                  name: 'pdf_file',
                  label: 'PDF File Upload (Media)',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'pdf_url',
                  label: 'PDF Direct URL (if not media upload)',
                  type: 'text',
                },
              ],
            },
          ],
        },

        // TAB 3: THE SEA & FAN NEWSLETTERS
        {
          label: 'The Sea & FAN',
          fields: [
            {
              name: 'sea_badge',
              label: 'The Sea Badge Text',
              type: 'text',
              defaultValue: 'Global Reach',
            },
            {
              name: 'sea_title',
              label: 'The Sea Section Title',
              type: 'textarea',
              defaultValue: 'Mission to Seafarers\nThe Sea Newsletters',
            },
            {
              name: 'sea_description',
              label: 'The Sea Section Description',
              type: 'textarea',
              defaultValue:
                'To sign up and have the latest issue sent directly to your inbox with news from Canada and around the world, choose an option below.',
            },
            {
              name: 'btn_sea_global_text',
              label: 'Global Sign Up Button Text',
              type: 'text',
              defaultValue: 'Global Sign Up',
            },
            {
              name: 'btn_sea_global_link',
              label: 'Global Sign Up Link',
              type: 'text',
              defaultValue: 'https://www.missiontoseafarers.org/the-sea',
            },
            {
              name: 'btn_sea_canada_text',
              label: 'Canada Newsletter Button Text',
              type: 'text',
              defaultValue: 'Canada Newsletter',
            },
            {
              name: 'btn_sea_canada_link',
              label: 'Canada Newsletter Link',
              type: 'text',
              defaultValue: '/contact',
            },
            {
              name: 'btn_sea_archive_text',
              label: 'The Sea Archive Button Text',
              type: 'text',
              defaultValue: 'Archive Copies',
            },
            {
              name: 'btn_sea_archive_link',
              label: 'The Sea Archive Link',
              type: 'text',
              defaultValue: 'https://www.missiontoseafarers.org/the-sea-archive',
            },
            {
              name: 'fan_title_prefix',
              label: 'FAN Title Prefix',
              type: 'text',
              defaultValue: 'Mission to Seafarers Flying Angel News',
            },
            {
              name: 'fan_title_coral',
              label: 'FAN Title Coral Text',
              type: 'text',
              defaultValue: '(FAN)',
            },
            {
              name: 'fan_description',
              label: 'FAN Section Description',
              type: 'textarea',
              defaultValue: 'To receive a free copy of the FAN, sign up here.',
            },
            {
              name: 'btn_fan_signup_text',
              label: 'FAN Sign Up Button Text',
              type: 'text',
              defaultValue: 'Sign Up Now',
            },
            {
              name: 'btn_fan_signup_link',
              label: 'FAN Sign Up Link',
              type: 'text',
              defaultValue: 'https://www.missiontoseafarers.org/fan',
            },
          ],
        },

        // TAB 4: STATISTICS & HAPPINESS INDEX
        {
          label: 'Stats & Happiness Index',
          fields: [
            {
              name: 'stats_title',
              label: 'Statistics Title',
              type: 'text',
              defaultValue: 'MtS Halifax Statistics',
            },
            {
              name: 'stats_description',
              label: 'Statistics Description',
              type: 'textarea',
              defaultValue:
                'Statistics include the frequency count of three categories: (1) seafarers visiting the Mission Centre; (2) volunteer and staff visits to ships; and, (3) seafarers provided with transport to and from the port and desired destination in Halifax and Dartmouth. Data are presented in actual counts and tables, showcasing monthly and annual comparisons.',
            },
            {
              name: 'stats_pdf_file',
              label: 'Statistics PDF File (Media Upload)',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'stats_pdf_url',
              label: 'Statistics PDF Direct URL',
              type: 'text',
            },
            {
              name: 'btn_stats_text',
              label: 'Statistics Button Text',
              type: 'text',
              defaultValue: 'View Latest Statistics',
            },
            {
              name: 'happiness_title',
              label: 'Happiness Index Title',
              type: 'text',
              defaultValue: 'Seafarers Happiness Index',
            },
            {
              name: 'happiness_subtitle',
              label: 'Happiness Index Subtitle',
              type: 'textarea',
              defaultValue:
                'Measuring the wellbeing of seafarers worldwide across various categories.',
            },
            {
              name: 'btn_happiness_archive_text',
              label: 'Happiness Archive Button Text',
              type: 'text',
              defaultValue: 'Happiness Index Archives',
            },
            {
              name: 'happiness_reports',
              label: 'Happiness Reports List (PDF Uploads / Links)',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  label: 'Report Title (e.g. Quarter 1 2026 Report)',
                  type: 'text',
                },
                {
                  name: 'pdf_file',
                  label: 'PDF File Upload (Media)',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'pdf_url',
                  label: 'PDF Direct URL',
                  type: 'text',
                },
              ],
            },
            {
              name: 'happiness_survey_text',
              label: 'Happiness Survey Link Text',
              type: 'textarea',
              defaultValue:
                'Read link to the survey and access the full archive of Reports here.',
            },
            {
              name: 'happiness_survey_link',
              label: 'Happiness Survey URL',
              type: 'text',
              defaultValue: 'https://www.seafarershappinessindex.org/',
            },
          ],
        },

        // TAB 5: ESG & SAFETY HANDBOOKS & FOGHORN
        {
          label: 'ESG, Foghorn & Safety',
          fields: [
            {
              name: 'esg_title',
              label: 'ESG Strategy Title',
              type: 'text',
              defaultValue: 'Mission to Seafarers ESG Strategy',
            },
            {
              name: 'esg_subtitle',
              label: 'ESG Strategy Subtitle',
              type: 'textarea',
              defaultValue:
                'Read about our commitment to Environmental, Social, and Governance principles.',
            },
            {
              name: 'btn_esg_archive_text',
              label: 'ESG Archive Button Text',
              type: 'text',
              defaultValue: 'ESG Strategy Archives',
            },
            {
              name: 'esg_reports',
              label: 'ESG Reports List',
              type: 'array',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'pdf_file', type: 'upload', relationTo: 'media' },
                { name: 'pdf_url', type: 'text' },
              ],
            },
            {
              name: 'foghorn_title',
              label: 'Foghorn Section Title',
              type: 'text',
              defaultValue: 'The Foghorn',
            },
            {
              name: 'foghorn_subtitle',
              label: 'Foghorn Section Subtitle',
              type: 'text',
              defaultValue: 'Master Mariners of Canada, Maritimes Division Publications',
            },
            {
              name: 'btn_foghorn_archive_text',
              label: 'Foghorn Archive Button Text',
              type: 'text',
              defaultValue: 'Foghorn Archives',
            },
            {
              name: 'foghorn_reports',
              label: 'Foghorn Reports List',
              type: 'array',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'pdf_file', type: 'upload', relationTo: 'media' },
                { name: 'pdf_url', type: 'text' },
              ],
            },
            {
              name: 'safety_title',
              label: 'Marine Safety Title',
              type: 'text',
              defaultValue: 'Marine Safety Handbook',
            },
            {
              name: 'safety_subtitle',
              label: 'Marine Safety Subtitle',
              type: 'textarea',
              defaultValue:
                'Port of Halifax guidelines and crucial safety protocols for all mariners.',
            },
            {
              name: 'btn_safety_archive_text',
              label: 'Marine Safety Archive Button Text',
              type: 'text',
              defaultValue: 'Marine Safety Archives',
            },
            {
              name: 'safety_handbooks',
              label: 'Marine Safety Handbooks List',
              type: 'array',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'pdf_file', type: 'upload', relationTo: 'media' },
                { name: 'pdf_url', type: 'text' },
              ],
            },
          ],
        },

        // TAB 6: INDUSTRY & STORYTELLING
        {
          label: 'Industry & Storytelling',
          fields: [
            {
              name: 'industry_title',
              label: 'Industry Resources Title',
              type: 'text',
              defaultValue: 'Industry Resources & Certifications',
            },
            {
              name: 'industry_subtitle',
              label: 'Industry Resources Subtitle',
              type: 'textarea',
              defaultValue:
                'Important links for marine training, qualifications, and career building.',
            },
            {
              name: 'industry_cards',
              label: 'Industry Resource Cards List',
              type: 'array',
              fields: [
                { name: 'card_title', type: 'text' },
                { name: 'card_url', type: 'text' },
              ],
            },
            {
              name: 'story_title',
              label: 'Storytelling Main Title',
              type: 'text',
              defaultValue: 'Connecting Seafarers to the World',
            },
            {
              name: 'story_subtitle',
              label: 'Storytelling Subtitle',
              type: 'textarea',
              defaultValue:
                'Through our publications, we keep seafarers, supporters, and maritime communities informed, advocated for, and connected.',
            },
            {
              name: 'card_1_title',
              label: 'Story Card 1 Title',
              type: 'text',
              defaultValue: 'Stories from the Sea',
            },
            {
              name: 'card_1_desc',
              label: 'Story Card 1 Description',
              type: 'textarea',
              defaultValue:
                'Our newsletters share real stories from seafarers, highlighting their unique experiences, daily challenges, and the essential support they receive at our Halifax Mission.',
            },
            {
              name: 'card_1_image',
              label: 'Story Card 1 Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'card_2_title',
              label: 'Story Card 2 Title',
              type: 'text',
              defaultValue: 'Research & Insights',
            },
            {
              name: 'card_2_desc',
              label: 'Story Card 2 Description',
              type: 'textarea',
              defaultValue:
                'Through happiness surveys, statistics, and deeply researched reports, we continuously track seafarer wellbeing and strongly advocate for better conditions at sea.',
            },
            {
              name: 'card_2_image',
              label: 'Story Card 2 Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'cta_box_title',
              label: 'Bottom CTA Box Title',
              type: 'text',
              defaultValue: 'Stay Informed About Seafarer Welfare',
            },
            {
              name: 'cta_box_desc',
              label: 'Bottom CTA Box Description',
              type: 'textarea',
              defaultValue:
                'Our publications provide invaluable insights into the daily lives of seafarers and the vital, life-saving work being done to support them in ports around the globe.',
            },
            {
              name: 'btn_cta_1_text',
              label: 'CTA Button 1 Text',
              type: 'text',
              defaultValue: 'Read Our Newsletters',
            },
            {
              name: 'btn_cta_1_link',
              label: 'CTA Button 1 Link',
              type: 'text',
              defaultValue: '#halifax-newsletters',
            },
            {
              name: 'btn_cta_2_text',
              label: 'CTA Button 2 Text',
              type: 'text',
              defaultValue: 'Subscribe to The Sea',
            },
            {
              name: 'btn_cta_2_link',
              label: 'CTA Button 2 Link',
              type: 'text',
              defaultValue: 'https://www.missiontoseafarers.org/the-sea',
            },
          ],
        },
      ],
    },
  ],
}
