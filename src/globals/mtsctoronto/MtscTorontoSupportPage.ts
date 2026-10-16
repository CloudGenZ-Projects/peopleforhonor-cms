import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscTorontoSupportPage: GlobalConfig = {
  slug: 'mtsc-toronto-support-page',
  label: 'MTSC Toronto Support Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'MTSC Toronto',
    hidden: ({ user }) => isHiddenForUser(user, 'tornto'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_MTSC_TORONTO_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/support`
      },
    },
  },
  access: {
    read: () => true,
    update: (args) => checkTenantAccess(args, 'tornto'),
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
              name: 'hero_badge_text',
              label: 'Hero Badge Text',
              type: 'text',
              defaultValue: 'Seafarer Support',
            },
            {
              name: 'hero_title',
              label: 'Hero Title',
              type: 'text',
              defaultValue: 'Support While You’re at Port',
            },
            {
              name: 'hero_subtitle',
              label: 'Hero Subtitle',
              type: 'textarea',
              defaultValue:
                'Wherever you’re from, you are welcome here.\nWe’re here to support you with practical help, connection, and care while you’re in Toronto.',
            },
            {
              name: 'hero_bg_image',
              label: 'Hero Background Image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },

        // TAB 2: QUICK ACCESS & SERVICE LINKS
        {
          label: 'Quick Access Links',
          fields: [
            {
              name: 'quick_access_title',
              label: 'Quick Access Title',
              type: 'text',
              defaultValue: 'How Can We Help You Today?',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'barber_whatsapp_url',
                  label: 'Barber WhatsApp URL',
                  type: 'text',
                  defaultValue: 'https://wa.me/14272588449',
                },
                {
                  name: 'parcel_portal_url',
                  label: 'Parcel Portal URL',
                  type: 'text',
                  defaultValue: 'https://parcelservice.mtsc.ca',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'haircut_iframe_url',
                  label: 'Haircut Booking URL',
                  type: 'text',
                  defaultValue: 'https://fadekingzmobilebarber.square.site/',
                },
                {
                  name: 'chaplain_whatsapp_url',
                  label: 'Chaplain Direct WhatsApp Link',
                  type: 'text',
                  defaultValue: 'https://wa.me/16472953219',
                },
              ],
            },
          ],
        },

        // TAB 3: YOU ARE NOT ALONE (REASSURANCE)
        {
          label: 'Reassurance & Support Points',
          fields: [
            {
              name: 'reassurance_title',
              label: 'Section Title',
              type: 'text',
              defaultValue: 'You Are Not Alone',
            },
            {
              name: 'reassurance_intro',
              label: 'Intro Text',
              type: 'text',
              defaultValue: 'We support seafarers from around the world with:',
            },
            {
              name: 'reassurance_image',
              label: 'Lounge Photo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'reassurance_points',
              label: 'Bullet Points',
              type: 'array',
              fields: [
                {
                  name: 'text',
                  label: 'Point Text',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },

        // TAB 4: HOW IT WORKS
        {
          label: 'How It Works',
          fields: [
            {
              name: 'how_it_works_title',
              label: 'Section Title',
              type: 'text',
              defaultValue: 'Getting Support is Easy',
            },
            {
              name: 'step1_title',
              label: 'Step 1 Title',
              type: 'text',
              defaultValue: 'Choose the service you need',
            },
            {
              name: 'step2_title',
              label: 'Step 2 Title',
              type: 'text',
              defaultValue: 'Fill out a quick request form',
            },
            {
              name: 'step3_title',
              label: 'Step 3 Title',
              type: 'text',
              defaultValue: 'Our team will contact you shortly',
            },
            {
              name: 'urgent_contact_note',
              label: 'Urgent Note',
              type: 'text',
              defaultValue: 'If urgent, contact us directly below.',
            },
          ],
        },

        // TAB 5: IMMEDIATE HELP & APP
        {
          label: 'Emergency & App',
          fields: [
            {
              name: 'immediate_help_title',
              label: 'Immediate Help Heading',
              type: 'text',
              defaultValue: 'Need Immediate Help?',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'phone_label',
                  label: 'Phone Label',
                  type: 'text',
                  defaultValue: 'Phone: +1 647-295-3219',
                },
                {
                  name: 'phone_tel',
                  label: 'Phone Tel Link',
                  type: 'text',
                  defaultValue: '+16472953219',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'contact_whatsapp_url',
                  label: 'WhatsApp URL',
                  type: 'text',
                  defaultValue: 'https://wa.me/16472953219',
                },
                {
                  name: 'contact_email',
                  label: 'Contact Email',
                  type: 'text',
                  defaultValue: 'glutenfreepriest@gmail.com',
                },
              ],
            },
            {
              name: 'find_station_link',
              label: 'Find Station Link',
              type: 'text',
              defaultValue: 'https://mtsc.ca/contact/#find-station',
            },
            {
              name: 'welfare_email',
              label: 'Welfare Help Email',
              type: 'text',
              defaultValue: 'crewhelp@mtsmail.org',
            },
            {
              name: 'happy_sea_title',
              label: 'App Heading',
              type: 'text',
              defaultValue: 'Happy at Sea App',
            },
            {
              name: 'happy_sea_desc',
              label: 'App Description',
              type: 'text',
              defaultValue: 'Connect instantly with a chaplain via our 24hr chat service.',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'app_store_url',
                  label: 'App Store URL',
                  type: 'text',
                  defaultValue: 'https://apps.apple.com/us/app/happy-at-sea/id6447320913',
                },
                {
                  name: 'play_store_url',
                  label: 'Google Play URL',
                  type: 'text',
                  defaultValue: 'https://play.google.com/store/apps/details?id=org.missiontoseafarers.app&hl=en_IN',
                },
              ],
            },
          ],
        },

        // TAB 6: LOCATION & CHAPLAIN
        {
          label: 'Location & Team',
          fields: [
            {
              name: 'visit_title',
              label: 'Location Title',
              type: 'text',
              defaultValue: 'Visit Us at the Port of Toronto',
            },
            {
              name: 'address_line1',
              label: 'Address Line 1',
              type: 'text',
              defaultValue: 'Cruise Ship Terminal',
            },
            {
              name: 'address_line2',
              label: 'Address Line 2',
              type: 'text',
              defaultValue: '8 Unwin Avenue, Toronto',
            },
            {
              name: 'opening_hours_text',
              label: 'Opening Hours Text',
              type: 'text',
              defaultValue: 'Check with our team for daily operating hours.',
            },
            {
              name: 'map_embed_url',
              label: 'Google Maps Embed URL',
              type: 'textarea',
              defaultValue:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.497161490382!2d-79.347566!3d43.63782369999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb1d39382c3d%3A0x48c47df25b0c53d3!2s8%20Unwin%20Ave%2C%20Toronto%2C%20ON%20M5A%203L1%2C%20Canada!5e0!3m2!1sen!2sin!4v1777293037926!5m2!1sen!2sin',
            },
            {
              name: 'team_title',
              label: 'Team Section Title',
              type: 'text',
              defaultValue: 'Meet Your Support Team',
            },
            {
              name: 'team_subtitle',
              label: 'Team Subtitle',
              type: 'text',
              defaultValue: 'Our team is here to welcome you, listen, and support you during your time in port.',
            },
            {
              name: 'chaplain_name',
              label: 'Chaplain Name',
              type: 'text',
              defaultValue: 'Rev. Judith Alltree',
            },
            {
              name: 'chaplain_role',
              label: 'Chaplain Role',
              type: 'text',
              defaultValue: 'Station Chaplain',
            },
            {
              name: 'chaplain_image',
              label: 'Chaplain Photo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'language_title',
              label: 'Language Title',
              type: 'text',
              defaultValue: 'We Welcome Seafarers from Around the World',
            },
            {
              name: 'language_subtitle',
              label: 'Language Subtitle',
              type: 'text',
              defaultValue: 'If English is not your first language, we will do our best to support you.',
            },
          ],
        },
      ],
    },
  ],
}