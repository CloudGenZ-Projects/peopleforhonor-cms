import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscColbernFooter: GlobalConfig = {
  slug: 'mtsc-colbern-footer',
  label: 'MTSC Colbern Footer',
  versions: {
    max: 5,
  },
  admin: {
    group: 'MTSC Colbern',
    hidden: ({ user }) => isHiddenForUser(user, 'colbern'),
  },
  access: {
    read: () => true,
    update: (args) => checkTenantAccess(args, 'colbern'),
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // TAB 1: BRANDING & ABOUT (COLUMN 1)
        {
          label: 'Brand & About',
          fields: [
            {
              name: 'footer_logo',
              label: 'Footer Logo Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'brand_title',
                  label: 'Brand Title',
                  type: 'text',
                  defaultValue: 'Mission to Seafarers',
                },
                {
                  name: 'brand_subtitle',
                  label: 'Brand Subtitle',
                  type: 'text',
                  defaultValue: 'Port Colborne',
                },
              ],
            },
            {
              name: 'about_text',
              label: 'About Paragraph',
              type: 'textarea',
              defaultValue:
                'A local presence at the Port of Port Colborne. Part of Mission to Seafarers Canada and the global network in 200+ ports.',
            },
          ],
        },

        // TAB 2: EXPLORE LINKS (COLUMN 2)
        {
          label: 'Navigation Links',
          fields: [
            {
              name: 'explore_title',
              label: 'Column 2 Title',
              type: 'text',
              defaultValue: 'Explore',
            },
            {
              name: 'nav_links',
              label: 'Quick Navigation Links',
              type: 'array',
              fields: [
                {
                  name: 'label',
                  label: 'Link Label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'href',
                  label: 'Target Path',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },

        // TAB 3: CONTACT & STATION (COLUMN 3 & 4)
        {
          label: 'Station & National Info',
          fields: [
            {
              name: 'station_col_title',
              label: 'Column 3 Title',
              type: 'text',
              defaultValue: 'Port Colborne Station',
            },
            {
              name: 'location_text',
              label: 'Location Line',
              type: 'text',
              defaultValue: 'Port of Port Colborne, ON',
            },
            {
              name: 'email',
              label: 'Contact Email',
              type: 'text',
              defaultValue: 'glutenfreepriest@gmail.com',
            },
            {
              name: 'national_col_title',
              label: 'Column 4 Title',
              type: 'text',
              defaultValue: 'National Office',
            },
            {
              name: 'national_text',
              label: 'National Office Description',
              type: 'textarea',
              defaultValue:
                'Major gifts, corporate partnerships are managed through Mission to Seafarers Canada.',
            },
          ],
        },

        // TAB 4: BOTTOM BAR
        {
          label: 'Bottom Copyright Bar',
          fields: [
            {
              name: 'copyright_text',
              label: 'Copyright Notice',
              type: 'text',
              defaultValue: 'Mission to Seafarers Port Colborne. All rights reserved.',
            },
            {
              name: 'bottom_subtext',
              label: 'Bottom Affiliation Text',
              type: 'text',
              defaultValue:
                'Port Colborne station of Mission to Seafarers Southern Ontario · Part of Mission to Seafarers Canada',
            },
          ],
        },
      ],
    },
  ],
}