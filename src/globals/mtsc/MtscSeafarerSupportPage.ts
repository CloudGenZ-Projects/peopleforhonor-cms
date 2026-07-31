import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscSeafarerSupportPage: GlobalConfig = {
  slug: 'mtsc-support-page',
  label: 'MTSC Seafarer Support Page',
  admin: {
    group: 'MTSC Halifax',
    hidden: ({ user }) => isHiddenForUser(user, 'mtsc'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_MTSC_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/support`
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
              defaultValue: 'For Visiting Crews',
            },
            {
              name: 'hero_title',
              label: 'Hero Main Title',
              type: 'text',
              defaultValue: 'Support While You’re in Halifax Harbour',
            },
            {
              name: 'hero_subtitle',
              label: 'Hero Subtitle Paragraph',
              type: 'textarea',
              defaultValue:
                'Wherever you are from, you are welcome here. Mission to Seafarers Halifax is here to support you with practical help, connection, hospitality, and care while your ship is visiting the Port of Halifax.',
            },
            {
              name: 'hero_image',
              label: 'Hero Background Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'btn_ship_visit_text',
              label: 'Ship Visit Button Text',
              type: 'text',
              defaultValue: 'Request a Ship Visit',
            },
            {
              name: 'btn_services_text',
              label: 'Explore Services Button Text',
              type: 'text',
              defaultValue: 'Explore Services',
            },
            {
              name: 'btn_whatsapp_text',
              label: 'WhatsApp Button Text',
              type: 'text',
              defaultValue: 'Message on WhatsApp',
            },
            {
              name: 'btn_whatsapp_link',
              label: 'WhatsApp Link URL',
              type: 'text',
              defaultValue: 'https://wa.me/+19029893388',
            },
          ],
        },

        // TAB 2: SUPPORT SERVICES DASHBOARD (6 CARDS)
        {
          label: 'Services Dashboard',
          fields: [
            {
              name: 'services_title',
              label: 'Dashboard Section Title',
              type: 'text',
              defaultValue: 'How Can We Help You Today?',
            },
            {
              name: 'services_subtitle',
              label: 'Dashboard Section Subtitle',
              type: 'text',
              defaultValue: 'Select a service below to request assistance quickly.',
            },
            {
              name: 'support_services',
              label: 'Support Service Cards',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  label: 'Service Card Title',
                  type: 'text',
                },
                {
                  name: 'description',
                  label: 'Service Card Description',
                  type: 'textarea',
                },
                {
                  name: 'button_text',
                  label: 'Card Button Text',
                  type: 'text',
                },
                {
                  name: 'button_link',
                  label: 'Card Link URL (if external link)',
                  type: 'text',
                },
              ],
            },
          ],
        },

        // TAB 3: OUR COMMITMENT & REASSURANCE
        {
          label: 'Our Commitment',
          fields: [
            {
              name: 'commitment_eyebrow',
              label: 'Commitment Eyebrow',
              type: 'text',
              defaultValue: 'Our Commitment',
            },
            {
              name: 'commitment_title',
              label: 'Commitment Title',
              type: 'text',
              defaultValue: 'Every day, seafarers from around the world arrive in Halifax.',
            },
            {
              name: 'commitment_description',
              label: 'Commitment Description Paragraph',
              type: 'textarea',
              defaultValue:
                'Every day, seafarers from around the world arrive in Halifax after long journeys at sea. Whether you are here for a few hours or several days, our team is here to welcome and support you.',
            },
            {
              name: 'reassurance_image',
              label: 'Commitment Section Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'reassurance_overlay_title',
              label: 'Image Overlay Badge Title',
              type: 'text',
              defaultValue: 'You Are Not Alone.',
            },
            {
              name: 'commitment_checklist',
              label: 'Checklist Items',
              type: 'array',
              fields: [
                {
                  name: 'item_text',
                  label: 'Checklist Item Text',
                  type: 'text',
                },
              ],
            },
          ],
        },

        // TAB 4: HOW IT WORKS (3 STEPS)
        {
          label: 'How It Works',
          fields: [
            {
              name: 'how_it_works_title',
              label: 'Section Title',
              type: 'text',
              defaultValue: 'Getting Support is Simple',
            },
            {
              name: 'how_it_works_steps',
              label: 'Steps List',
              type: 'array',
              fields: [
                {
                  name: 'step_number',
                  label: 'Step Number (e.g. 1)',
                  type: 'text',
                },
                {
                  name: 'step_title',
                  label: 'Step Title',
                  type: 'text',
                },
                {
                  name: 'step_desc',
                  label: 'Step Description',
                  type: 'textarea',
                },
              ],
            },
          ],
        },

        // TAB 5: MEET YOUR TEAM
        {
          label: 'Meet Your Team',
          fields: [
            {
              name: 'team_title',
              label: 'Team Main Title',
              type: 'text',
              defaultValue: 'A Friendly Face While Far From Home',
            },
            {
              name: 'team_subtitle',
              label: 'Team Subtitle Paragraph',
              type: 'textarea',
              defaultValue:
                'Our volunteers, chaplaincy team, and station staff are here to welcome you, listen, and support you during your time in Halifax.',
            },
            {
              name: 'leader_1_name',
              label: 'Leader 1 Name (Helen Glenn)',
              type: 'text',
              defaultValue: 'Helen Glenn',
            },
            {
              name: 'leader_1_role',
              label: 'Leader 1 Role',
              type: 'text',
              defaultValue: 'Mission Manager',
            },
            {
              name: 'leader_1_whatsapp',
              label: 'Leader 1 WhatsApp Link',
              type: 'text',
              defaultValue: 'https://wa.me/19024561658',
            },
            {
              name: 'leader_1_email',
              label: 'Leader 1 Email Link',
              type: 'text',
              defaultValue: 'mailto:hglenn@missiontoseafarershalifax.ca',
            },
            {
              name: 'leader_1_image',
              label: 'Leader 1 Photo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'leader_2_name',
              label: 'Leader 2 Name (Joseph Loot)',
              type: 'text',
              defaultValue: 'Joseph Loot',
            },
            {
              name: 'leader_2_role',
              label: 'Leader 2 Role',
              type: 'text',
              defaultValue: 'Assistant Manager',
            },
            {
              name: 'leader_2_whatsapp',
              label: 'Leader 2 WhatsApp Link',
              type: 'text',
              defaultValue: 'https://wa.me/19029893388',
            },
            {
              name: 'leader_2_email',
              label: 'Leader 2 Email Link',
              type: 'text',
              defaultValue: 'mailto:jloot@missiontoseafarershalifax.ca',
            },
            {
              name: 'leader_2_image',
              label: 'Leader 2 Photo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'welcoming_box_title',
              label: 'Welcoming Box Title',
              type: 'text',
              defaultValue: 'We Welcome Seafarers from Around the World',
            },
            {
              name: 'welcoming_box_text',
              label: 'Welcoming Box Description',
              type: 'textarea',
              defaultValue:
                'Mission to Seafarers Halifax supports seafarers of all nationalities, cultures, and faiths. If English is not your first language, we will do our best to support you and help you feel comfortable during your visit.',
            },
          ],
        },

        // TAB 6: URGENT ASSISTANCE BANNER
        {
          label: 'Urgent Assistance',
          fields: [
            {
              name: 'urgent_title',
              label: 'Urgent Banner Title',
              type: 'text',
              defaultValue: 'Need Urgent Assistance?',
            },
            {
              name: 'urgent_subtitle',
              label: 'Urgent Banner Subtitle',
              type: 'text',
              defaultValue: 'Contact us directly by phone or WhatsApp for immediate support.',
            },
            {
              name: 'btn_call_text',
              label: 'Call Button Text',
              type: 'text',
              defaultValue: 'Call Station',
            },
            {
              name: 'btn_call_link',
              label: 'Call Phone URL / Link',
              type: 'text',
              defaultValue: 'tel:+19024227790',
            },
            {
              name: 'btn_urgent_whatsapp_text',
              label: 'Urgent WhatsApp Button Text',
              type: 'text',
              defaultValue: 'WhatsApp Team',
            },
            {
              name: 'btn_urgent_whatsapp_link',
              label: 'Urgent WhatsApp Link',
              type: 'text',
              defaultValue: 'https://wa.me/19024561658',
            },
          ],
        },

        // TAB 7: LOCATION & HOURS
        {
          label: 'Location & Hours',
          fields: [
            {
              name: 'visit_section_title',
              label: 'Visit Section Title',
              type: 'text',
              defaultValue: 'Visit the Halifax Mission',
            },
            {
              name: 'civic_address_title',
              label: 'Civic Address Title',
              type: 'text',
              defaultValue: 'Civic Address',
            },
            {
              name: 'civic_address_text',
              label: 'Civic Address Text',
              type: 'textarea',
              defaultValue:
                '844 Marginal Road, Halifax NS B3H 2P7, Nova Scotia\nSituated across from Pier 24 in the Halifax Seaport area.',
            },
            {
              name: 'mailing_address_title',
              label: 'Mailing Address Title',
              type: 'text',
              defaultValue: 'Mailing Address',
            },
            {
              name: 'mailing_address_text',
              label: 'Mailing Address Text',
              type: 'text',
              defaultValue: 'P.O. Box 27114, Halifax, NS B3H 4M8',
            },
            {
              name: 'hours_title',
              label: 'Station Hours Title',
              type: 'text',
              defaultValue: 'General Station Hours',
            },
            {
              name: 'mon_sat_hours',
              label: 'Monday - Saturday Hours',
              type: 'text',
              defaultValue: 'Mon - Sat: 10:00 AM – 4:00 PM',
            },
            {
              name: 'sunday_hours',
              label: 'Sunday Hours',
              type: 'text',
              defaultValue: 'Sunday: Generally Closed',
            },
            {
              name: 'hours_note',
              label: 'Hours Note Paragraph',
              type: 'textarea',
              defaultValue:
                'Note: Ship visits and seafarer support may still occur outside regular station hours depending on vessel schedules.',
            },
            {
              name: 'map_embed_url',
              label: 'Google Maps Iframe Embed URL',
              type: 'text',
              defaultValue:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2839.2629471138245!2d-63.56839968446387!3d44.63248697909985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a2233f28325db%3A0xc3c5dd3b603eb61!2s844%20Marginal%20Rd%2C%20Halifax%2C%20NS%20B3H%204M8!5e0!3m2!1sen!2sca!4v1615560123456!5m2!1sen!2sca',
            },
          ],
        },
      ],
    },
  ],
}
