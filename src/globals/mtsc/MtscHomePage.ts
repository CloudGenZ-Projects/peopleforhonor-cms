import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscHomePage: GlobalConfig = {
  slug: 'mtsc-home-page',
  label: 'MTSC Home Page',
  admin: {
    group: 'MTSC Halifax',
    hidden: ({ user }) => isHiddenForUser(user, 'mtsc'),
    livePreview: {
      url: process.env.PAYLOAD_PUBLIC_MTSC_SITE_URL || 'http://localhost:5173',
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
        // TAB 1: HERO BANNER
        {
          label: 'Hero Banner',
          fields: [
            {
              name: 'skyline_image',
              label: 'Hero Skyline Small Logo/Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'eyebrow_badge',
              label: 'Hero Eyebrow Badge',
              type: 'text',
              defaultValue: '✦ A local presence. Part of something larger.',
            },
            {
              name: 'title_line_1',
              label: 'Hero Title Line 1',
              type: 'text',
              defaultValue: 'Mission to',
            },
            {
              name: 'title_line_2',
              label: 'Hero Title Line 2 (Coral)',
              type: 'text',
              defaultValue: 'Seafarers Halifax',
            },
            {
              name: 'hero_strong_text',
              label: 'Hero Intro Bold Statement',
              type: 'textarea',
              defaultValue: 'At the Port of Halifax, seafarers arrive after time at sea, sometimes for days, weeks and even months. Mission to Seafarers Halifax is here during that window.',
            },
            {
              name: 'hero_paragraph',
              label: 'Hero Description Paragraph',
              type: 'textarea',
              defaultValue: 'With practical support.\nWith a place to step off the vessel.\nWith people to speak to while they are ashore. As part of Mission to Seafarers Canada, this work is connected to a global network supporting seafarers in ports around the world.',
            },
            {
              name: 'hero_image',
              label: 'Hero Main Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'hero_badge_number',
              label: 'Hero Badge Number/Stat',
              type: 'text',
              defaultValue: '85+',
            },
            {
              name: 'hero_badge_text_1',
              label: 'Hero Badge Top Label',
              type: 'text',
              defaultValue: 'Legacy',
            },
            {
              name: 'hero_badge_text_2',
              label: 'Hero Badge Bottom Label',
              type: 'text',
              defaultValue: 'Years',
            },
            {
              name: 'hero_contact_button_text',
              label: 'Contact Button Text',
              type: 'text',
              defaultValue: 'Contact the Halifax Mission',
            },
            {
              name: 'hero_contact_button_url',
              label: 'Contact Button Link URL',
              type: 'text',
              defaultValue: '/contact',
            },
            {
              name: 'hero_donate_button_text',
              label: 'Donate Button Text',
              type: 'text',
              defaultValue: 'Donate',
            },
          ],
        },

        // TAB 2: HOW WE HELP (INTRO)
        {
          label: 'How We Help',
          fields: [
            {
              name: 'intro_eyebrow',
              label: 'Intro Eyebrow',
              type: 'text',
              defaultValue: 'How We Help',
            },
            {
              name: 'intro_title',
              label: 'Intro Section Title',
              type: 'text',
              defaultValue: 'How We Support the World’s Seafarers in Canada',
            },
            {
              name: 'intro_subtitle',
              label: 'Intro Subtitle',
              type: 'textarea',
              defaultValue: 'As part of a 160+ year legacy, we provide practical, emotional, and community-based support for seafarers while they are in port ensuring no one feels alone.',
            },
            {
              name: 'intro_paragraphs',
              label: 'Intro Paragraphs',
              type: 'textarea',
              defaultValue: 'Mission to Seafarers Canada provides the national leadership, fund development, partnerships, and support that strengthen stations across the country.\n\nAt the Port of Halifax, that work becomes direct.\n\nHere, we offer seafarers a welcoming place where they can rest, connect with loved ones, access practical help, receive a haircut, and know that they are not alone.',
            },
          ],
        },

        // TAB 3: SERVICE HIGHLIGHTS (CARDS)
        {
          label: 'Service Cards',
          fields: [
            {
              name: 'service_1_eyebrow',
              label: 'Service 1 Eyebrow',
              type: 'text',
              defaultValue: 'At the Station',
            },
            {
              name: 'service_1_title',
              label: 'Service 1 Title',
              type: 'text',
              defaultValue: 'Community Connection',
            },
            {
              name: 'service_1_description',
              label: 'Service 1 Description',
              type: 'textarea',
              defaultValue: 'Refreshments and a comfortable place to sit, pause, and reconnect with loved ones in a welcoming station space.',
            },
            {
              name: 'service_1_link_text',
              label: 'Service 1 Button / Link Text',
              type: 'text',
              defaultValue: 'Come Visit Us at the Station',
            },
            {
              name: 'service_1_link_url',
              label: 'Service 1 Link URL',
              type: 'text',
              defaultValue: '/contact',
            },
            {
              name: 'service_2_eyebrow',
              label: 'Service 2 Eyebrow',
              type: 'text',
              defaultValue: 'Logistics',
            },
            {
              name: 'service_2_title',
              label: 'Service 2 Title',
              type: 'text',
              defaultValue: 'Seafarers Parcel Pickup Service',
            },
            {
              name: 'service_2_description',
              label: 'Service 2 Description',
              type: 'textarea',
              defaultValue: 'Order essentials online and have them delivered securely to our station for pickup when you dock.',
            },
            {
              name: 'service_2_link_text',
              label: 'Service 2 Button / Link Text',
              type: 'text',
              defaultValue: 'Send Your Parcel',
            },
            {
              name: 'service_2_link_url',
              label: 'Service 2 Link URL',
              type: 'text',
              defaultValue: 'https://parcelservice.mtsc.ca/',
            },
          ],
        },

        // TAB 4: STATS SECTION
        {
          label: 'Stats Section',
          fields: [
            {
              name: 'stats_image',
              label: 'Stats Section Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'stats_percentage',
              label: 'Stats Highlight Percentage',
              type: 'text',
              defaultValue: '90%',
            },
            {
              name: 'stats_percentage_label',
              label: 'Stats Highlight Label',
              type: 'textarea',
              defaultValue: 'of world trade is carried by sea. The clothes we wear, the cars we drive, the food on our tables',
            },
            {
              name: 'stats_items',
              label: 'Stats Counter Grid Items',
              type: 'array',
              fields: [
                {
                  name: 'stat_number',
                  label: 'Stat Number (e.g. 2,312)',
                  type: 'text',
                },
                {
                  name: 'stat_label',
                  label: 'Stat Label',
                  type: 'text',
                },
                {
                  name: 'stat_description',
                  label: 'Stat Description',
                  type: 'textarea',
                },
                {
                  name: 'stat_prefix',
                  label: 'Stat Prefix (e.g. +)',
                  type: 'text',
                },
                {
                  name: 'stat_suffix',
                  label: 'Stat Suffix (e.g. %)',
                  type: 'text',
                },
              ],
            },
          ],
        },

        // TAB 5: OUR NETWORK (LOCAL IN PRESENCE)
        {
          label: 'Our Network',
          fields: [
            {
              name: 'network_eyebrow',
              label: 'Network Eyebrow',
              type: 'text',
              defaultValue: 'Our Network',
            },
            {
              name: 'network_title',
              label: 'Network Section Title',
              type: 'text',
              defaultValue: 'Local In Presence.\nConnected In Purpose.',
            },
            {
              name: 'network_subtitle',
              label: 'Network Subtitle',
              type: 'textarea',
              defaultValue: 'Practical support for those in port and a community effort that ensures no seafarer is alone.',
            },
            {
              name: 'network_paragraphs',
              label: 'Network Description Paragraphs',
              type: 'textarea',
              defaultValue: 'Mission to Seafarers Canada provides national leadership, partnerships, fundraising support, and shared resources that help strengthen stations across the country. In Halifax, Mission to Seafarers Halifax serves as a welcoming place of care and connection for seafarers arriving at one of Canada’s busiest ports.\n\nAt the Port of Halifax, that mission becomes personal.\n\nHere, seafarers can find a warm and welcoming space to rest, connect with loved ones, access practical support, receive transportation assistance, enjoy refreshments, participate in community activities, and know they are not alone while far from home.',
            },
            {
              name: 'network_image',
              label: 'Network Section Image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },

        // TAB 6: STATION SERVICES (SUPPORTING SEAFARERS IN HALIFAX)
        {
          label: 'Station Services',
          fields: [
            {
              name: 'station_eyebrow',
              label: 'Station Services Eyebrow',
              type: 'text',
              defaultValue: 'Station Services',
            },
            {
              name: 'station_title',
              label: 'Station Services Title',
              type: 'text',
              defaultValue: 'Supporting Seafarers in Halifax',
            },
            {
              name: 'station_subtitle',
              label: 'Station Services Subtitle',
              type: 'textarea',
              defaultValue: 'As part of a 160+ year legacy, Seafarers visiting the Port of Halifax can access',
            },
            {
              name: 'station_box_title',
              label: 'Station Box Title',
              type: 'text',
              defaultValue: 'How We Care for Seafarers',
            },
            {
              name: 'station_services_list',
              label: 'Station Services Badges List',
              type: 'array',
              fields: [
                {
                  name: 'service_name',
                  label: 'Service Name / Description',
                  type: 'text',
                },
              ],
            },
            {
              name: 'station_footer_text',
              label: 'Station Footer Paragraph',
              type: 'textarea',
              defaultValue: 'As the Halifax Mission develops, it continues to take shape around what seafarers need during their time ashore. As the Halifax Mission grows, we are creating a space',
            },
            {
              name: 'station_button_1_text',
              label: 'Station Button 1 Text',
              type: 'text',
              defaultValue: 'Learn More About Seafarer Support',
            },
            {
              name: 'station_button_1_url',
              label: 'Station Button 1 URL',
              type: 'text',
              defaultValue: '/whoweare',
            },
            {
              name: 'station_button_2_text',
              label: 'Station Button 2 Text',
              type: 'text',
              defaultValue: 'Seafarers send a parcel to our address for pickup',
            },
            {
              name: 'station_button_2_url',
              label: 'Station Button 2 URL',
              type: 'text',
              defaultValue: 'https://parcelservice.mtsc.ca/',
            },
          ],
        },

        // TAB 7: CLOTHING BANK
        {
          label: 'Clothing Bank',
          fields: [
            {
              name: 'clothing_eyebrow',
              label: 'Clothing Bank Eyebrow',
              type: 'text',
              defaultValue: 'A Small Service That Makes a Big Difference',
            },
            {
              name: 'clothing_title',
              label: 'Clothing Bank Title',
              type: 'text',
              defaultValue: 'Clothing Bank',
            },
            {
              name: 'clothing_paragraphs',
              label: 'Clothing Bank Paragraphs',
              type: 'textarea',
              defaultValue: 'After extended periods at sea, small things can feel significant.\n\nAt Mission to Seafarers Halifax, we maintain a small clothing bank where seafarers can access warm clothing and essential items, including jackets, gloves, hats, and other seasonal necessities while visiting the Port of Halifax.',
            },
            {
              name: 'clothing_disclaimer',
              label: 'Clothing Bank Disclaimer Text',
              type: 'textarea',
              defaultValue: 'Clothing support can be arranged in advance by seafarers, ship agents, or crew representatives. Availability is based on current inventory, volunteer capacity, and ship schedules.',
            },
            {
              name: 'clothing_button_1_text',
              label: 'Clothing Button 1 Text',
              type: 'text',
              defaultValue: 'Access Our Clothing Bank',
            },
            {
              name: 'clothing_button_1_url',
              label: 'Clothing Button 1 URL',
              type: 'text',
              defaultValue: '/contact',
            },
            {
              name: 'clothing_button_2_text',
              label: 'Clothing Button 2 Text',
              type: 'text',
              defaultValue: 'Contact the Halifax Mission',
            },
            {
              name: 'clothing_button_2_url',
              label: 'Clothing Button 2 URL',
              type: 'text',
              defaultValue: '/contact',
            },
          ],
        },

        // TAB 8: WHY HALIFAX MATTERS (IMPACT)
        {
          label: 'Why Halifax Matters',
          fields: [
            {
              name: 'impact_eyebrow',
              label: 'Impact Eyebrow',
              type: 'text',
              defaultValue: 'Our Impact',
            },
            {
              name: 'impact_title',
              label: 'Impact Section Title',
              type: 'text',
              defaultValue: 'Why Halifax Matters',
            },
            {
              name: 'impact_subtitle',
              label: 'Impact Subtitle',
              type: 'text',
              defaultValue: 'Welcoming Seafarers at the Port of Halifax',
            },
            {
              name: 'impact_paragraphs',
              label: 'Impact Paragraphs',
              type: 'textarea',
              defaultValue: 'Halifax is one of Canada’s most important and historic ports, welcoming seafarers from around the world who help keep global trade and our communities moving every day. Many arrive with limited time ashore and few opportunities to rest, reconnect, or access support while in port.\n\nMission to Seafarers Halifax ensures that, when they arrive here, they are met with dignity, compassion, and a welcoming place of care and connection.\n\nMission to Seafarers Halifax operates locally, supported nationally, and connected globally through a network serving seafarers in more than 200 ports worldwide.',
            },
          ],
        },

        // TAB 9: GET INVOLVED
        {
          label: 'Get Involved',
          fields: [
            {
              name: 'involved_eyebrow',
              label: 'Get Involved Eyebrow',
              type: 'text',
              defaultValue: 'Support Us',
            },
            {
              name: 'involved_title',
              label: 'Get Involved Title',
              type: 'text',
              defaultValue: 'Get Involved',
            },
            {
              name: 'involved_subtitle',
              label: 'Get Involved Subtitle',
              type: 'text',
              defaultValue: 'Help Us Welcome Seafarers to Halifax',
            },
            {
              name: 'involved_description',
              label: 'Get Involved Description',
              type: 'textarea',
              defaultValue: 'There are many ways to support the Halifax Mission and the seafarers we serve.',
            },
            {
              name: 'involvement_list',
              label: 'Involvement Bullet List Items',
              type: 'array',
              fields: [
                {
                  name: 'list_item_text',
                  label: 'List Item Text',
                  type: 'text',
                },
              ],
            },
            {
              name: 'involved_footer_text',
              label: 'Get Involved Footer Paragraph',
              type: 'textarea',
              defaultValue: 'For major donations, national sponsorships, monthly giving, and larger corporate partnerships, please connect with Mission to Seafarers Canada.',
            },
            {
              name: 'involved_button_1_text',
              label: 'Button 1 Text (Volunteer)',
              type: 'text',
              defaultValue: 'Volunteer Locally',
            },
            {
              name: 'involved_button_1_url',
              label: 'Button 1 URL',
              type: 'text',
              defaultValue: '/contact',
            },
            {
              name: 'involved_button_2_text',
              label: 'Button 2 Text (Support)',
              type: 'text',
              defaultValue: 'Support the Halifax Mission',
            },
            {
              name: 'involved_button_3_text',
              label: 'Button 3 Text (National)',
              type: 'text',
              defaultValue: 'Explore National Partnerships',
            },
            {
              name: 'involved_button_3_url',
              label: 'Button 3 URL',
              type: 'text',
              defaultValue: 'https://mtsc.ca/',
            },
          ],
        },

        // TAB 10: DONATE SECTION
        {
          label: 'Donate Section',
          fields: [
            {
              name: 'donate_eyebrow',
              label: 'Donate Eyebrow',
              type: 'text',
              defaultValue: 'Help Care for Seafarers',
            },
            {
              name: 'donate_title',
              label: 'Donate Title',
              type: 'text',
              defaultValue: 'Donate',
            },
            {
              name: 'donate_subtitle',
              label: 'Donate Subtitle Paragraph',
              type: 'textarea',
              defaultValue: 'Every gift helps us provide hospitality, transportation, Wi-Fi, refreshments, haircuts, and a welcoming place for seafarers visiting Halifax.',
            },
            {
              name: 'donate_card_1_eyebrow',
              label: 'Card 1 Badge / Eyebrow',
              type: 'text',
              defaultValue: 'Recurring Giving',
            },
            {
              name: 'donate_card_1_title',
              label: 'Card 1 Title',
              type: 'text',
              defaultValue: 'Become a monthly donor',
            },
            {
              name: 'donate_card_1_description',
              label: 'Card 1 Description',
              type: 'textarea',
              defaultValue: 'Support Mission to Seafarers Halifax through Mission to Seafarers Canada',
            },
            {
              name: 'donate_card_1_button',
              label: 'Card 1 Button Text',
              type: 'text',
              defaultValue: 'Become a Monthly Donor',
            },
            {
              name: 'donate_card_2_eyebrow',
              label: 'Card 2 Badge / Eyebrow',
              type: 'text',
              defaultValue: 'One-Time Gift',
            },
            {
              name: 'donate_card_2_title',
              label: 'Card 2 Title',
              type: 'text',
              defaultValue: 'Make a one-time gift',
            },
            {
              name: 'donate_card_2_description',
              label: 'Card 2 Description',
              type: 'textarea',
              defaultValue: 'Support Mission to Seafarers Halifax through Mission to Seafarers Canada',
            },
            {
              name: 'donate_card_2_button',
              label: 'Card 2 Button Text',
              type: 'text',
              defaultValue: 'Make a One-Time Gift',
            },
            {
              name: 'donate_disclaimer',
              label: 'Donate Section Disclaimer',
              type: 'textarea',
              defaultValue: 'Every donation made through this page directly supports Mission to Seafarers Halifax, helping us provide care, practical assistance, and a welcoming community for seafarers visiting the Port of Halifax.',
            },
          ],
        },
      ],
    },
  ],
}
