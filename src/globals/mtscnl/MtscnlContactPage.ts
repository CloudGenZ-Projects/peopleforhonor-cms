import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscnlContactPage: GlobalConfig = {
  slug: 'mtscnl-contact-page',
  label: 'MTSCNL Contact Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'MTSC Newfoundland',
    hidden: ({ user }) => isHiddenForUser(user, 'mtscnl'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_MTSCNL_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/contact`
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
        // TAB 1: HERO
        {
          label: 'Hero Section',
          fields: [
            { name: 'hero_badge', label: 'Badge', type: 'text', defaultValue: 'Contact Us' },
            { name: 'hero_title', label: 'Title', type: 'text', defaultValue: 'We want to hear from you!' },
            { name: 'hero_subtitle', label: 'Subtitle', type: 'textarea', defaultValue: 'Whether it’s by email, social media, or LinkedIn — we want to hear from you!' },
          ],
        },

        // TAB 2: CONTACT INFO
        {
          label: 'Contact Info',
          fields: [
            { name: 'info_title', label: 'Card Title', type: 'text', defaultValue: 'Newfoundland and Labrador Station' },
            { name: 'info_subtitle', label: 'Card Subtitle', type: 'text', defaultValue: 'Need to contact our Newfoundland and Labrador station directly?' },
            { name: 'address_line1', label: 'Address Line 1', type: 'text', defaultValue: '687 Water Street, 2nd Floor' },
            { name: 'address_line2', label: 'Address Line 2', type: 'text', defaultValue: "St. John's, NL A1E 1B5" },
            { name: 'email', label: 'Email Address', type: 'text', defaultValue: 'info@missiontoseafarersnl.ca' },
            { name: 'phone_label', label: 'Phone Display Label', type: 'text', defaultValue: '+1 514-501-0590' },
            { name: 'phone_link', label: 'Phone URL (e.g., +15145010590)', type: 'text', defaultValue: '+15145010590' },
            { name: 'hours', label: 'Operating Hours', type: 'text', defaultValue: 'Mon-Fri 9:00AM - 5:00PM' },
          ],
        },

        // TAB 3: MAP & FORM
        {
          label: 'Map & Form',
          fields: [
            { name: 'map_iframe_url', label: 'Google Maps Embedded iframe URL', type: 'text', defaultValue: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2690.244206463253!2d-52.69266400000001!3d47.601941000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0ca148b3fca06f%3A0xbca2e587c54ade57!2sSt.%20John&#39;s%2C%20NL%20A1A%205N8%2C%20Canada!5e0!3m2!1sen!2sus!4v1780885325679!5m2!1sen!2sus' },
            { name: 'form_title', label: 'Form Title', type: 'text', defaultValue: 'Contact us' },
            { name: 'form_description', label: 'Form Description', type: 'textarea', defaultValue: 'Have questions about our services? Want to get involved or support our mission? We’re here to connect. We look forward to connecting with you!' },
          ],
        },

        // TAB 4: GLOBAL PORTS
        {
          label: 'Global Ports',
          fields: [
            { name: 'global_title', label: 'Section Title', type: 'text', defaultValue: 'Our ports and Seafarers Centers' },
            { name: 'global_description_prefix', label: 'Description Prefix', type: 'text', defaultValue: 'For information on the ports we serve or to reach a local Seafarers’ Centre, please visit our' },
            { name: 'global_link_text', label: 'Link Text', type: 'text', defaultValue: 'national website' },
            { name: 'global_link_url', label: 'Link URL', type: 'text', defaultValue: 'https://mtsc.ca/' },
            { name: 'global_description_suffix', label: 'Description Suffix', type: 'text', defaultValue: '.' },
            { name: 'global_button_label', label: 'Button Label', type: 'text', defaultValue: 'Visit National Website' },
          ],
        },
      ],
    },
  ],
}