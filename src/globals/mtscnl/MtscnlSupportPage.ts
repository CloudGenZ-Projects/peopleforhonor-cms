import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscnlSupportPage: GlobalConfig = {
  slug: 'mtscnl-support-page',
  label: 'MTSCNL Support Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'MTSC Newfoundland',
    hidden: ({ user }) => isHiddenForUser(user, 'mtscnl'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_MTSCNL_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/support`
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
        // TAB 1: HERO & QUICK ACCESS
        {
          label: 'Hero & Quick Access',
          fields: [
            {
              name: 'hero_background_image',
              label: 'Hero Background Image',
              type: 'upload',
              relationTo: 'media',
            },
            { name: 'hero_badge', label: 'Hero Badge', type: 'text', defaultValue: 'For Seafarers' },
            { name: 'hero_title', label: 'Hero Title', type: 'text', defaultValue: 'Support While You’re at Port' },
            { name: 'hero_subtitle', label: 'Hero Subtitle', type: 'textarea', defaultValue: 'Wherever you’re from, you are welcome here. We’re here to support you with practical help, connection and care while you’re in Newfoundland and Labrador.' },
            { name: 'quick_access_title', label: 'Quick Access Title', type: 'text', defaultValue: 'How Can We Support You Today?' },
            {
              name: 'quick_access_cards',
              label: 'Quick Access Cards',
              type: 'array',
              maxRows: 4,
              fields: [
                { name: 'id', label: 'Form ID (Do not change)', type: 'text', admin: { description: 'Must be visit, centre, mental, or explore' } },
                { name: 'icon', label: 'Icon', type: 'select', options: ['Ship', 'Home', 'HeartHandshake', 'Globe'] },
                { name: 'title', label: 'Title', type: 'text' },
                { name: 'desc', label: 'Description', type: 'text' },
                { name: 'isLink', label: 'Is Link?', type: 'checkbox', defaultValue: false },
                { name: 'isExternal', label: 'Is External Link?', type: 'checkbox', defaultValue: false },
                { name: 'link', label: 'Link URL (if applicable)', type: 'text' },
              ],
            },
          ],
        },

        // TAB 2: SEAFARERS CENTRE
        {
          label: 'Seafarers Centre',
          fields: [
            {
              name: 'centre_image',
              label: 'Section Image',
              type: 'upload',
              relationTo: 'media',
            },
            { name: 'centre_title', label: 'Title', type: 'text', defaultValue: 'Seafarers’ Centre' },
            { name: 'centre_subtitle', label: 'Subtitle', type: 'text', defaultValue: 'A Welcoming Haven for Rest and Connection' },
            { name: 'centre_description', label: 'Description', type: 'textarea', defaultValue: 'Our Seafarers’ Centre is a safe, welcoming space designed to help seafarers relax, recharge, and connect with loved ones. When you come ashore, you can access a variety of services, including' },
            {
              name: 'centre_bullets',
              label: 'Bullet Points',
              type: 'array',
              fields: [{ name: 'text', label: 'Text', type: 'text' }],
            },
            { name: 'centre_button', label: 'Button Label', type: 'text', defaultValue: 'Come visit us' },
          ],
        },

        // TAB 3: TRANSPORTATION
        {
          label: 'Transportation',
          fields: [
            {
              name: 'transport_image',
              label: 'Section Image',
              type: 'upload',
              relationTo: 'media',
            },
            { name: 'transport_title', label: 'Title', type: 'text', defaultValue: 'Transportation Assistance' },
            { name: 'transport_subtitle', label: 'Subtitle', type: 'text', defaultValue: 'Making Your Time in Port Easier' },
            { name: 'transport_desc_1', label: 'Description (Top)', type: 'textarea', defaultValue: 'Whether you’re staying on board or able to go ashore, our transportation assistance ensures your time in port is as comfortable as possible.' },
            {
              name: 'transport_bullets',
              label: 'Bullet Points',
              type: 'array',
              fields: [{ name: 'text', label: 'Text', type: 'textarea' }],
            },
            { name: 'transport_desc_2', label: 'Description (Bottom)', type: 'textarea', defaultValue: 'We strive to provide fast, friendly, and reliable service to make your visit as stress-free as possible.' },
            { name: 'transport_button', label: 'Button Label', type: 'text', defaultValue: 'Request Transportation' },
          ],
        },

        // TAB 4: SHIP VISITS
        {
          label: 'Ship Visits',
          fields: [
            { name: 'ship_title', label: 'Title', type: 'text', defaultValue: 'Ship Visits' },
            { name: 'ship_subtitle', label: 'Subtitle', type: 'text', defaultValue: 'Connecting Seafarers with Support in Newfoundland and Labrador' },
            { name: 'ship_description', label: 'Description', type: 'textarea', defaultValue: 'At Mission to Seafarers Newfoundland and Labrador, we are committed to visiting every ship that arrives at our ports. Seafarers often face long voyages with limited access to support during their time in port. Our ship visits provide a vital connection by offering a friendly face, a listening ear, and practical assistance. These visits bridge the gap between life at sea and the world ashore, reminding seafarers that they are seen, valued, and cared for.' },
            { name: 'ship_callout', label: 'Callout Text', type: 'text', defaultValue: 'If you would like to learn more about our ship visit program or request a visit to your vessel, we would be happy to connect with you.' },
            { name: 'ship_button', label: 'Button Label', type: 'text', defaultValue: 'Connect Us Today' },
          ],
        },

        // TAB 5: RELIGIOUS SERVICES
        {
          label: 'Religious Services',
          fields: [
            {
              name: 'religion_image',
              label: 'Section Image',
              type: 'upload',
              relationTo: 'media',
            },
            { name: 'religion_title', label: 'Title', type: 'text', defaultValue: 'Religious Services' },
            { name: 'religion_subtitle', label: 'Subtitle', type: 'text', defaultValue: 'Spiritual Support for All Beliefs' },
            { name: 'religion_description', label: 'Description', type: 'textarea', defaultValue: 'Our chaplain is available to provide spiritual care, regardless of your faith tradition. Whether you seek Anglican, Catholic, Orthodox, or multi-faith services, we are here to support you. We also offer:' },
            {
              name: 'religion_bullets',
              label: 'Bullet Points',
              type: 'array',
              fields: [{ name: 'text', label: 'Text', type: 'text' }],
            },
            { name: 'religion_button', label: 'Button Label', type: 'text', defaultValue: 'Let Us Connect with You' },
          ],
        },

        // TAB 6: MENTAL HEALTH
        {
          label: 'Mental Health',
          fields: [
            { name: 'mental_title', label: 'Title', type: 'text', defaultValue: 'Mental Health & Crisis Resources' },
            { name: 'mental_subtitle', label: 'Subtitle', type: 'text', defaultValue: 'Your Well-being is Our Priority' },
            { name: 'mental_description', label: 'Description', type: 'textarea', defaultValue: 'Life at sea can be stressful, and our Mental Health & Crisis Resources provide confidential emotional and mental health support to seafarers in need:' },
            {
              name: 'mental_bullets',
              label: 'Bullet Points (Keep to 3 items)',
              type: 'array',
              maxRows: 3,
              fields: [{ name: 'text', label: 'Text', type: 'text' }],
            },
            { name: 'mental_callout', label: 'Callout Box Text', type: 'textarea', defaultValue: 'You do not have to face challenges alone support is always available when you need it most.' },
            { name: 'mental_button', label: 'Button Label', type: 'text', defaultValue: 'Reach Out for Support' },
          ],
        },

        // TAB 7: EXPLORE NL
        {
          label: 'Explore NL',
          fields: [
            { name: 'explore_title', label: 'Title', type: 'text', defaultValue: 'Explore Newfoundland & Labrador' },
            { name: 'explore_subtitle', label: 'Subtitle', type: 'text', defaultValue: 'An Adventure Awaits' },
            { name: 'explore_description', label: 'Description', type: 'textarea', defaultValue: 'Newfoundland and Labrador offer unforgettable natural beauty, historic towns, and warm local hospitality. When you have time ashore, take the opportunity to explore our rugged coastlines, scenic landscapes, and vibrant culture.' },
            { name: 'explore_button', label: 'Button Label', type: 'text', defaultValue: 'Explore Now' },
            { name: 'explore_link', label: 'Button URL', type: 'text', defaultValue: 'https://www.newfoundlandlabrador.com/' },
            { name: 'explore_map_url', label: 'Google Maps Embedded iframe URL', type: 'text', defaultValue: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.250901896602!2d-52.69271455!3d47.601810799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0ca148b3fca06f%3A0xbca2e587c54ade57!2sSt.%20John&#39;s%2C%20NL%20A1A%205N8%2C%20Canada!5e0!3m2!1sen!2sin!4v1780888530650!5m2!1sen!2sin' },
          ],
        },
      ],
    },
  ],
}