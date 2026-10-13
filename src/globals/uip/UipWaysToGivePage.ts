import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const UipWaysToGivePage: GlobalConfig = {
  slug: 'uip-waystogive-page',
  label: 'UIP Ways to Give Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'UIP',
    hidden: ({ user }) => isHiddenForUser(user, 'uip'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_UIP_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/Waystogive`
      },
    },
  },
  access: {
    read: () => true,
    update: (args) => checkTenantAccess(args, 'uip'),
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // TAB 1: HERO
        {
          label: 'Hero Section',
          fields: [
            {
              name: 'hero_badge',
              label: 'Hero Badge',
              type: 'text',
              defaultValue: 'Join the Movement',
            },
            {
              name: 'hero_title_line_1',
              label: 'Hero Title Line 1',
              type: 'text',
              defaultValue: 'Ways to',
            },
            {
              name: 'hero_title_gradient',
              label: 'Hero Title Gradient Text',
              type: 'text',
              defaultValue: 'Give & Support',
            },
            {
              name: 'hero_description',
              label: 'Hero Description',
              type: 'textarea',
              defaultValue:
                'Whether through a financial gift, community partnership, or sharing our mission, you are helping build a safe, affirming space for LGBTQ+ newcomers in Ottawa.',
            },
          ],
        },

        // TAB 2: WAYS TO GIVE TIERS
        {
          label: 'Giving Options',
          fields: [
            {
              name: 'donate_title',
              label: 'Donation Block Title',
              type: 'text',
              defaultValue: 'Make a Financial Donation',
            },
            {
              name: 'donate_description',
              label: 'Donation Description',
              type: 'textarea',
              defaultValue:
                'Every dollar directly supports newcomer peer groups, crisis navigation, and our affirming community space in Ottawa.',
            },
            {
              name: 'donate_btn_label',
              label: 'Donation Button Label',
              type: 'text',
              defaultValue: 'Donate Online via Zeffy',
            },
            {
              name: 'donate_btn_link',
              label: 'Donation Button Link',
              type: 'text',
              defaultValue: 'https://www.zeffy.com/en-CA/donation-form/united-in-pride',
            },
            {
              name: 'donate_etransfer_email',
              label: 'e-Transfer Email',
              type: 'text',
              defaultValue: 'Unitedinpridec@gmail.com',
            },
            {
              name: 'carepack_title',
              label: 'Care Pack Block Title',
              type: 'text',
              defaultValue: 'Sponsor a Care Pack',
            },
            {
              name: 'carepack_description',
              label: 'Care Pack Description',
              type: 'textarea',
              defaultValue:
                'Support newcomers with hygiene essentials, culturally affirming items, and winter warmth packages.',
            },
            {
              name: 'carepack_btn_label',
              label: 'Care Pack Button Label',
              type: 'text',
              defaultValue: 'Donate a Care Pack',
            },
            {
              name: 'carepack_btn_link',
              label: 'Care Pack Button Link',
              type: 'text',
              defaultValue: 'https://www.zeffy.com/en-CA/donation-form/united-in-pride',
            },
          ],
        },

        // TAB 3: PARTNERSHIP & SHARE
        {
          label: 'Partnership & Awareness',
          fields: [
            {
              name: 'partner_form_title',
              label: 'Partner Heading',
              type: 'text',
              defaultValue: 'Partner With Us',
            },
            {
              name: 'partner_form_desc',
              label: 'Partner Description',
              type: 'textarea',
              defaultValue:
                'We welcome partnerships with organizations, businesses, and groups that align with our mission to empower LGBTQ+ newcomers.',
            },
            {
              name: 'share_work_title',
              label: 'Share Our Work Heading',
              type: 'text',
              defaultValue: 'Share Our Work',
            },
            {
              name: 'share_work_desc',
              label: 'Share Description',
              type: 'textarea',
              defaultValue:
                'Not everyone can donate, and that is okay. Sharing our work is one of the most powerful ways to help. Follow us, invite others to our events, and help us spread the word.',
            },
            {
              name: 'share_work_quote',
              label: 'Share Quote Callout',
              type: 'textarea',
              defaultValue: 'Awareness creates connection. Connection creates belonging.',
            },
          ],
        },
      ],
    },
  ],
}
