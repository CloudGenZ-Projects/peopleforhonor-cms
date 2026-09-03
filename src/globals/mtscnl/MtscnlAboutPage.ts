import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscnlAboutPage: GlobalConfig = {
  slug: 'mtscnl-about-page',
  label: 'MTSCNL About Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'MTSC Newfoundland',
    hidden: ({ user }) => isHiddenForUser(user, 'mtscnl'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_MTSCNL_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/about`
      },
    },
  },
  access: {
    read: () => true,
    update: (args) => checkTenantAccess(args, 'mtscnl'),
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // TAB 1: HERO & HISTORY
        {
          label: 'Hero & History',
          fields: [
            { name: 'hero_title', label: 'Hero Title', type: 'text', defaultValue: 'Newfoundland and Labrador Station History' },
            { name: 'history_eyebrow', label: 'History Eyebrow', type: 'text', defaultValue: 'Our Story' },
            { name: 'history_title', label: 'History Title', type: 'text', defaultValue: 'Decades of Care in Newfoundland and Labrador' },
            {
              name: 'history_blocks',
              label: 'History Blocks',
              type: 'array',
              fields: [
                { name: 'era', label: 'Era/Year', type: 'text' },
                { name: 'title', label: 'Title', type: 'text' },
                { name: 'paragraph_1', label: 'Paragraph 1', type: 'textarea' },
                { name: 'paragraph_2', label: 'Paragraph 2 (Optional)', type: 'textarea' },
              ],
            },
          ],
        },

        // TAB 2: TEAM
        {
          label: 'Team',
          fields: [
            { name: 'team_eyebrow', label: 'Team Eyebrow', type: 'text', defaultValue: 'Leadership' },
            { name: 'team_title', label: 'Team Title', type: 'text', defaultValue: 'Newfoundland and Labrador Team' },
            {
              name: 'team_members',
              label: 'Team Members',
              type: 'array',
              fields: [
                { name: 'name', label: 'Name', type: 'text' },
                { name: 'role', label: 'Role', type: 'text' },
                { name: 'bio_p1', label: 'Bio Paragraph 1', type: 'textarea' },
                { name: 'bio_p2', label: 'Bio Paragraph 2', type: 'textarea' },
              ],
            },
          ],
        },

        // TAB 3: PORT WELFARE COMMITTEE
        {
          label: 'Port Welfare Committee',
          fields: [
            { name: 'pwc_title', label: 'Section Title', type: 'text', defaultValue: 'Port Welfare Committee of Newfoundland and Labrador' },
            { name: 'pwc_description', label: 'Description', type: 'textarea', defaultValue: 'The Port Welfare Committee for Newfoundland and Labrador is a committed group of local champions from the maritime, labour, stakeholder and community sectors who have come together with a shared purpose: to ensure the wellbeing of seafarers visiting our province.' },
            {
              name: 'pwc_members',
              label: 'Committee Members',
              type: 'array',
              fields: [
                { name: 'initials', label: 'Initials (Avatar)', type: 'text' },
                { name: 'name', label: 'Name', type: 'text' },
                { name: 'role', label: 'Role', type: 'text' },
                { name: 'email', label: 'Email', type: 'text' },
                { name: 'phone', label: 'Phone', type: 'text' },
              ],
            },
          ],
        },

        // TAB 4: GALLERY
        {
          label: 'Gallery Info',
          fields: [
            { name: 'gallery_eyebrow', label: 'Eyebrow', type: 'text', defaultValue: 'Our Community in Action' },
            { name: 'gallery_title', label: 'Title', type: 'text', defaultValue: "Newfoundland and Labrador Seafarers' Centre Gallery" },
            { name: 'gallery_subtitle', label: 'Subtitle', type: 'textarea', defaultValue: 'A glimpse into our local facilities, activities, and dedicated teams welcoming international crews to our ports.' },
          ],
        },

        // TAB 5: IMPACT
        {
          label: 'Impact',
          fields: [
            { name: 'impact_eyebrow', label: 'Eyebrow', type: 'text', defaultValue: 'Our Impact' },
            { name: 'impact_title', label: 'Title', type: 'text', defaultValue: 'Supporting Seafarers in Newfoundland and Labrador & Beyond' },
            { name: 'impact_subtitle', label: 'Subtitle', type: 'text', defaultValue: 'Did you know that 90% of the world’s goods are transported by sea?' },
            { name: 'impact_card_title', label: 'Main Card Title', type: 'text', defaultValue: 'Seafarers: Newfoundland and Labrador At Mission to Seafarers Canada' },
            { name: 'impact_card_text', label: 'Main Card Text', type: 'textarea', defaultValue: 'We take pride in being the trusted support network for seafarers arriving at ports across Canada, especially in Newfoundland and Labrador. Seafarers often face long stretches at sea, feeling isolated and far from home. Through your generosity, we provide the essential care, respond to countless spiritual, emotional, and physical needs, and provide a human connection that makes a difference in their lives.' },
            { name: 'milestone_title', label: 'Milestone Section Title', type: 'text', defaultValue: '2024 Milestone' },
            {
              name: 'milestone_stats',
              label: 'Milestone Statistics',
              type: 'array',
              fields: [
                { name: 'number', label: 'Number', type: 'text' },
                { name: 'label', label: 'Label', type: 'text' },
              ],
            },
            { name: 'beyond_title', label: 'Beyond Numbers Title', type: 'text', defaultValue: 'Impact Beyond Numbers' },
            { name: 'beyond_p1', label: 'Beyond Numbers Text (P1)', type: 'textarea', defaultValue: 'Behind each number is a meaningful story: a crew member able to call home thanks to a SIM card we provided, or a seafarer who hadn’t set foot on land for weeks finally stepping ashore...' },
            { name: 'beyond_p2_bold', label: 'Beyond Numbers Text (P2 - Bold)', type: 'textarea', defaultValue: 'But we need your continued support to ensure we can keep serving those who need us most.\nWill you join us?' },
          ],
        },

        // TAB 6: FUNDING PROGRAMS
        {
          label: 'Funding Programs',
          fields: [
            { name: 'programs_title', label: 'Section Title', type: 'text', defaultValue: 'Programs You Can Support' },
            { name: 'programs_subtitle', label: 'Section Subtitle', type: 'text', defaultValue: 'Your gift will directly contribute to one or more of the following impactful programs:' },
            {
              name: 'programs_list',
              label: 'Programs List',
              type: 'array',
              fields: [
                { name: 'icon', label: 'Icon', type: 'select', options: ['HandHeart', 'Users', 'HeartPulse', 'MapPin', 'Sparkles'] },
                { name: 'title', label: 'Program Title', type: 'text' },
                { name: 'description', label: 'Description', type: 'textarea' },
              ],
            },
          ],
        },

        // TAB 7: CTA SECTION
        {
          label: 'CTA Section',
          fields: [
            { name: 'cta_eyebrow', label: 'Eyebrow', type: 'text', defaultValue: 'Funding and Support Needs' },
            { name: 'cta_title', label: 'Title', type: 'text', defaultValue: 'Be Part of the Welcome.' },
            { name: 'cta_subtitle', label: 'Subtitle', type: 'textarea', defaultValue: 'Partner, volunteer or donate. Every contribution helps a seafarer feel seen.' },
            { name: 'cta_button_1_label', label: 'Button 1 Label', type: 'text', defaultValue: 'Get Involved' },
            { name: 'cta_button_1_link', label: 'Button 1 Link', type: 'text', defaultValue: '/get-involved' },
            { name: 'cta_button_2_label', label: 'Button 2 Label', type: 'text', defaultValue: 'Donate' },
            { name: 'cta_button_2_link', label: 'Button 2 Link', type: 'text', defaultValue: 'https://www.canadahelps.org/en/dn/73316' },
          ],
        },
      ],
    },
  ],
}