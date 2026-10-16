import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscTorontoHeader: GlobalConfig = {
  slug: 'mtsc-toronto-header',
  label: 'MTSC Toronto Header',
  versions: {
    max: 5,
  },
  admin: {
    group: 'MTSC Toronto',
    hidden: ({ user }) => isHiddenForUser(user, 'tornto'),
  },
  access: {
    read: () => true,
    update: (args) => checkTenantAccess(args, 'tornto'),
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // TAB 1: LOGO & BRANDING
        {
          label: 'Branding & Logo',
          fields: [
            {
              name: 'header_logo',
              label: 'Header Logo Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'brand_title',
                  label: 'Brand Main Title',
                  type: 'text',
                  defaultValue: 'Mission to Seafarers',
                },
                {
                  name: 'brand_subtitle',
                  label: 'Brand Subtitle',
                  type: 'text',
                  defaultValue: 'Toronto',
                },
              ],
            },
          ],
        },

        // TAB 2: NAVIGATION MENU ITEMS
        {
          label: 'Navigation Links',
          fields: [
            {
              name: 'nav_items',
              label: 'Menu Items',
              type: 'array',
              fields: [
                {
                  name: 'label',
                  label: 'Menu Label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'to',
                  label: 'Route Path / URL',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'subItems',
                  label: 'Sub Menu Items (Dropdown)',
                  type: 'array',
                  fields: [
                    {
                      name: 'label',
                      label: 'Sub Item Label',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'to',
                      label: 'Sub Item Path / URL',
                      type: 'text',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },

        // TAB 3: HEADER CTA BUTTONS & POPUP
        {
          label: 'Header Action Buttons',
          fields: [
            // Parcel Button
            {
              type: 'row',
              fields: [
                {
                  name: 'parcel_btn_label_full',
                  label: 'Parcel Button Label (Desktop Full)',
                  type: 'text',
                  defaultValue: 'Seafarer Parcel Pickup Service',
                },
                {
                  name: 'parcel_btn_label_short',
                  label: 'Parcel Button Label (Short)',
                  type: 'text',
                  defaultValue: 'Parcel Pickup',
                },
              ],
            },
            {
              name: 'parcel_btn_link',
              label: 'Parcel Service Portal URL',
              type: 'text',
              defaultValue: 'https://parcelservice.mtsc.ca/',
            },

            // Prayer Button
            {
              type: 'row',
              fields: [
                {
                  name: 'prayer_btn_label',
                  label: 'Prayer Button Label',
                  type: 'text',
                  defaultValue: 'Send a Prayer',
                },
                {
                  name: 'prayer_btn_link',
                  label: 'Prayer Wall URL',
                  type: 'text',
                  defaultValue: 'https://mtsc.ca/for-seafarers/prayer-wall/',
                },
              ],
            },

            // Donate Button & Modal
            {
              type: 'row',
              fields: [
                {
                  name: 'donate_btn_label',
                  label: 'Donate Button Label',
                  type: 'text',
                  defaultValue: 'Donate',
                },
                {
                  name: 'donate_dialog_title',
                  label: 'Donation Modal Title',
                  type: 'text',
                  defaultValue: 'Secure Donation Form',
                },
              ],
            },
            {
              name: 'donate_iframe_url',
              label: 'CanadaHelps Donation Form URL',
              type: 'text',
              defaultValue: 'https://www.canadahelps.org/en/dn/145961',
            },
          ],
        },
      ],
    },
  ],
}