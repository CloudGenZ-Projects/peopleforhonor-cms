import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscContactPage: GlobalConfig = {
  slug: 'mtsc-contact-page',
  label: 'MTSC Contact Page',
  admin: {
    group: 'MTSC Halifax',
    hidden: ({ user }) => isHiddenForUser(user, 'mtsc'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_MTSC_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/contact`
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
              defaultValue: 'Contact',
            },
            {
              name: 'hero_title',
              label: 'Hero Main Title',
              type: 'text',
              defaultValue: 'Contact Mission to Seafarers Halifax',
            },
            {
              name: 'hero_subtitle',
              label: 'Hero Subtitle Paragraph',
              type: 'textarea',
              defaultValue: 'We would love to hear from you.',
            },
            {
              name: 'hero_bg_image',
              label: 'Hero Background Image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },

        // TAB 2: HALIFAX MISSION INFO
        {
          label: 'Halifax Mission Info',
          fields: [
            {
              name: 'mission_title',
              label: 'Mission Box Title',
              type: 'text',
              defaultValue: 'Halifax Mission',
            },
            {
              name: 'location_subtitle',
              label: 'Location Subtitle',
              type: 'text',
              defaultValue: 'Location: 844 Marginal Road, Halifax, Nova Scotia ,',
            },
            {
              name: 'civic_address',
              label: 'Civic Address',
              type: 'text',
              defaultValue: '844 Marginal Road, Halifax, Nova Scotia , B3H0A1',
            },
            {
              name: 'civic_address_note',
              label: 'Civic Address Note',
              type: 'text',
              defaultValue: 'Situated across from Pier 24 in the Halifax Seaport area.',
            },
            {
              name: 'mailing_address',
              label: 'Mailing Address',
              type: 'text',
              defaultValue: 'P.O. Box 27114, Halifax, NS B3H 4M8',
            },
            {
              name: 'email_address',
              label: 'Primary Email Address',
              type: 'text',
              defaultValue: 'hglenn@missiontoseafarershalifax.ca',
            },
            {
              name: 'telephone',
              label: 'Primary Telephone',
              type: 'text',
              defaultValue: '+1 902-422-7790',
            },
            {
              name: 'whatsapp_number',
              label: 'WhatsApp / Mobile Display Number',
              type: 'text',
              defaultValue: '+1 902-456-1658',
            },
            {
              name: 'whatsapp_url',
              label: 'WhatsApp Direct Link URL',
              type: 'text',
              defaultValue: 'https://wa.me/19024561658',
            },
          ],
        },

        // TAB 3: STATION HOURS
        {
          label: 'Station Hours',
          fields: [
            {
              name: 'hours_title',
              label: 'Hours Box Title',
              type: 'text',
              defaultValue: 'General Station Hours',
            },
            {
              name: 'hours_note',
              label: 'Hours Overview Note',
              type: 'textarea',
              defaultValue:
                'Hours may vary depending on ship arrivals, vessel schedules, and volunteer availability.',
            },
            {
              name: 'hours_weekday_label',
              label: 'Weekday Label',
              type: 'text',
              defaultValue: 'Monday – Saturday',
            },
            {
              name: 'hours_weekday_time',
              label: 'Weekday Time Range',
              type: 'text',
              defaultValue: '10:00 AM – 5:00 PM',
            },
            {
              name: 'hours_sunday_label',
              label: 'Sunday Label',
              type: 'text',
              defaultValue: 'Sunday',
            },
            {
              name: 'hours_sunday_status',
              label: 'Sunday Status Badge Text',
              type: 'text',
              defaultValue: 'Generally Closed',
            },
            {
              name: 'hours_sunday_description',
              label: 'Sunday Description Note',
              type: 'textarea',
              defaultValue:
                'Hours may occasionally change depending on ship schedules at port.',
            },
            {
              name: 'hours_footer_italic',
              label: 'Hours Footer Italic Note',
              type: 'textarea',
              defaultValue:
                'Ship visits and seafarer support may still occur outside regular station hours.',
            },
          ],
        },

        // TAB 4: URGENT ASSISTANCE & MANAGERS
        {
          label: 'Urgent Assistance',
          fields: [
            {
              name: 'urgent_title',
              label: 'Urgent Box Title',
              type: 'text',
              defaultValue: 'Need Urgent Assistance?',
            },
            {
              name: 'urgent_subtitle',
              label: 'Urgent Box Subtitle',
              type: 'textarea',
              defaultValue:
                'Contact us directly by phone or WhatsApp for immediate support.',
            },
            {
              name: 'urgent_main_phone_text',
              label: 'Main Station Phone Display Text',
              type: 'text',
              defaultValue: 'Main Station: +1 902-422-7790',
            },
            {
              name: 'urgent_main_phone_url',
              label: 'Main Station Tel URL',
              type: 'text',
              defaultValue: 'tel:+19024227790',
            },
            {
              name: 'manager_1_name',
              label: 'Manager 1 Name & Title',
              type: 'text',
              defaultValue: 'Helen Glenn, Mission Manager',
            },
            {
              name: 'manager_1_whatsapp_text',
              label: 'Manager 1 WhatsApp Display Text',
              type: 'text',
              defaultValue: '+1 902-456-1658',
            },
            {
              name: 'manager_1_whatsapp_url',
              label: 'Manager 1 WhatsApp URL',
              type: 'text',
              defaultValue: 'https://wa.me/19024561658',
            },
            {
              name: 'manager_1_email',
              label: 'Manager 1 Email Address',
              type: 'text',
              defaultValue: 'hglenn@missiontoseafarershalifax.ca',
            },
            {
              name: 'manager_2_name',
              label: 'Manager 2 Name & Title',
              type: 'text',
              defaultValue: 'Joseph Loot, Assistant Manager',
            },
            {
              name: 'manager_2_whatsapp_text',
              label: 'Manager 2 WhatsApp Display Text',
              type: 'text',
              defaultValue: '+1 902-989-3388',
            },
            {
              name: 'manager_2_whatsapp_url',
              label: 'Manager 2 WhatsApp URL',
              type: 'text',
              defaultValue: 'https://wa.me/19029893388',
            },
            {
              name: 'manager_2_email',
              label: 'Manager 2 Email Address',
              type: 'text',
              defaultValue: 'jloot@missiontoseafarershalifax.ca',
            },
          ],
        },

        // TAB 5: CONTACT FORM & MAP
        {
          label: 'Contact Form & Map',
          fields: [
            {
              name: 'form_title',
              label: 'Form Box Title',
              type: 'text',
              defaultValue: 'Send Us a Message',
            },
            {
              name: 'form_subtitle',
              label: 'Form Subtitle Paragraph',
              type: 'textarea',
              defaultValue:
                'Whether you are a seafarer, volunteer, supporter, donor, or community partner, we welcome your questions and inquiries.',
            },
            {
              name: 'form_success_message',
              label: 'Form Success Toast Message',
              type: 'textarea',
              defaultValue:
                'Your inquiry has been successfully sent. We will be in touch with you shortly.',
            },
            {
              name: 'form_action_url',
              label: 'Google Form Endpoint URL',
              type: 'text',
              defaultValue:
                'https://docs.google.com/forms/d/e/1FAIpQLSdDRLf8Fjde4Y-q1oUmoa_5JAbmAFp5TeG0RV3qjyVL3Aabhg/formResponse',
            },
            {
              name: 'interest_options',
              label: 'Interest Select Options Array',
              type: 'array',
              fields: [
                {
                  name: 'option_label',
                  label: 'Option Label Text',
                  type: 'text',
                },
              ],
            },
            {
              name: 'footer_note',
              label: 'Footer Disclaimer Note',
              type: 'textarea',
              defaultValue:
                'Mission to Seafarers Halifax operates as part of Mission to Seafarers Canada. Local volunteer opportunities, station engagement, seafarer support, and community partnerships are coordinated through the Halifax Mission.',
            },
            {
              name: 'google_map_embed_url',
              label: 'Google Map Embed Iframe URL',
              type: 'text',
              defaultValue:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2839.293424683058!2d-63.56860368425113!3d44.6318359790998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a223631f45025%3A0xc47eeb09f06a0302!2s844%20Marginal%20Rd%2C%20Halifax%2C%20NS%20B3H%202P7%2C%20Canada!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus',
            },
          ],
        },
      ],
    },
  ],
}
