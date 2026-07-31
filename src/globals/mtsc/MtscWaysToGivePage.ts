import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscWaysToGivePage: GlobalConfig = {
  slug: 'mtsc-waystogive-page',
  label: 'MTSC Ways to Give Page',
  admin: {
    group: 'MTSC Halifax',
    hidden: ({ user }) => isHiddenForUser(user, 'mtsc'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_MTSC_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/WaysToGive`
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
              name: 'hero_eyebrow',
              label: 'Hero Eyebrow',
              type: 'text',
              defaultValue: '✦ Support Our Mission',
            },
            {
              name: 'hero_title',
              label: 'Hero Main Title',
              type: 'text',
              defaultValue: 'Get Involved with Mission to Seafarers Halifax',
            },
            {
              name: 'hero_title_coral',
              label: 'Hero Title Coral Text (Optional)',
              type: 'text',
            },
            {
              name: 'hero_subtitle',
              label: 'Hero Subtitle Paragraph',
              type: 'textarea',
              defaultValue:
                'There are many ways to support Mission to Seafarers Halifax and help create a welcoming place for seafarers arriving at the Port of Halifax. Whether you choose to volunteer, donate, provide in-kind support, or partner with us, your support helps ensure that seafarers feel cared for, connected, and welcomed while they are far from home.',
            },
            {
              name: 'hero_bg_image',
              label: 'Hero Background Image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },

        // TAB 2: DONATION OPTIONS
        {
          label: 'Donation Options',
          fields: [
            {
              name: 'donate_eyebrow',
              label: 'Donation Section Eyebrow',
              type: 'text',
              defaultValue: 'DONATE',
            },
            {
              name: 'donate_title',
              label: 'Donation Section Title',
              type: 'text',
              defaultValue: 'Donate – Help Care for Seafarers',
            },
            {
              name: 'donate_subtitle',
              label: 'Donation Section Subtitle',
              type: 'textarea',
              defaultValue:
                'Every gift helps us provide hospitality, practical support, transportation, Wi-Fi, refreshments, haircuts, and a welcoming place for seafarers visiting Halifax.',
            },
            // Monthly Giving Box
            {
              name: 'monthly_title',
              label: 'Monthly Giving Title',
              type: 'text',
              defaultValue: 'Monthly Giving',
            },
            {
              name: 'monthly_desc',
              label: 'Monthly Giving Description',
              type: 'textarea',
              defaultValue:
                'Become a monthly donor and help provide ongoing care and support for seafarers throughout the year. Monthly gifts help us plan ahead.',
            },
            {
              name: 'monthly_tier_1',
              label: 'Monthly Tier 1 Text',
              type: 'text',
              defaultValue: '/month can help provide refreshments and hospitality',
            },
            {
              name: 'monthly_tier_2',
              label: 'Monthly Tier 2 Text',
              type: 'text',
              defaultValue: '/month can help support transportation and communication',
            },
            {
              name: 'monthly_tier_3',
              label: 'Monthly Tier 3 Text',
              type: 'text',
              defaultValue: '/month can help provide care, comfort, and practical assistance',
            },
            {
              name: 'monthly_btn_text',
              label: 'Monthly Button Text',
              type: 'text',
              defaultValue: 'Become a Monthly Donor',
            },
            // One-Time Gift Box
            {
              name: 'onetime_title',
              label: 'One-Time Gift Title',
              type: 'text',
              defaultValue: 'One-Time Gift',
            },
            {
              name: 'onetime_desc',
              label: 'One-Time Gift Description',
              type: 'textarea',
              defaultValue:
                'Make a one-time donation to support Mission to Seafarers Halifax and the work of Mission to Seafarers Canada. Your gift can help create a welcoming station space, support local programs, and care for seafarers when they arrive in Halifax.',
            },
            {
              name: 'onetime_btn_text',
              label: 'One-Time Gift Button Text',
              type: 'text',
              defaultValue: 'Make a One-Time Gift',
            },
            // Events & Tickets Box
            {
              name: 'events_title',
              label: 'Events & Tickets Title',
              type: 'text',
              defaultValue: 'Purchase Event Tickets',
            },
            {
              name: 'events_desc',
              label: 'Events & Tickets Description',
              type: 'textarea',
              defaultValue:
                'Join us at our upcoming events! Select an event from the list below and purchase your tickets to show your support.',
            },
            {
              name: 'events_btn_text',
              label: 'Events Button Text',
              type: 'text',
              defaultValue: 'Get Tickets',
            },
            {
              name: 'events_list',
              label: 'Events List for Ticket Modal',
              type: 'array',
              fields: [
                {
                  name: 'event_name',
                  label: 'Event Name',
                  type: 'text',
                },
                {
                  name: 'event_url',
                  label: 'Event CanadaHelps Page URL',
                  type: 'text',
                },
              ],
            },
            {
              name: 'donate_footer_text',
              label: 'Donation Section Footer Note',
              type: 'textarea',
              defaultValue:
                'Every donation made through this page directly supports Mission to Seafarers Halifax, helping us provide care, practical assistance, and a welcoming community for seafarers visiting the Port of Halifax.',
            },
          ],
        },

        // TAB 3: WAYS TO HELP (6 CARDS)
        {
          label: 'Ways to Help (6 Cards)',
          fields: [
            {
              name: 'help_eyebrow',
              label: 'Help Section Eyebrow',
              type: 'text',
              defaultValue: 'WAYS TO HELP',
            },
            {
              name: 'help_title',
              label: 'Help Section Title',
              type: 'text',
              defaultValue: 'Choose How You Would Like to Support',
            },
            // Card 1: Sponsorship
            {
              name: 'sponsorship_title',
              label: 'Card 1 Title',
              type: 'text',
              defaultValue: 'Partner Through Sponsorship',
            },
            {
              name: 'sponsorship_items',
              label: 'Card 1 List Items',
              type: 'array',
              fields: [{ name: 'item_text', type: 'text' }],
            },
            {
              name: 'sponsorship_btn_text',
              label: 'Card 1 Button Text',
              type: 'text',
              defaultValue: 'Sponsor Now →',
            },
            // Card 2: Workplace
            {
              name: 'workplace_title',
              label: 'Card 2 Title',
              type: 'text',
              defaultValue: 'Engage Your Workplace',
            },
            {
              name: 'workplace_desc',
              label: 'Card 2 Description',
              type: 'text',
              defaultValue: 'Empower your team to make a difference together.',
            },
            {
              name: 'workplace_items',
              label: 'Card 2 List Items',
              type: 'array',
              fields: [
                { name: 'item_text', type: 'text' },
                { name: 'item_url', type: 'text' },
              ],
            },
            {
              name: 'workplace_btn_text',
              label: 'Card 2 Button Text',
              type: 'text',
              defaultValue: 'Get Your Team Involved →',
            },
            // Card 3: Awareness
            {
              name: 'awareness_title',
              label: 'Card 3 Title',
              type: 'text',
              defaultValue: 'Awareness Through Purpose',
            },
            {
              name: 'awareness_desc',
              label: 'Card 3 Description',
              type: 'text',
              defaultValue: 'Host an event on our behalf:',
            },
            {
              name: 'awareness_items',
              label: 'Card 3 List Items',
              type: 'array',
              fields: [{ name: 'item_text', type: 'text' }],
            },
            {
              name: 'awareness_btn_text',
              label: 'Card 3 Button Text',
              type: 'text',
              defaultValue: 'Start Fundraising →',
            },
            {
              name: 'awareness_btn_link',
              label: 'Card 3 Link URL',
              type: 'text',
              defaultValue: 'https://fundraising.mtsc.ca/',
            },
            // Card 4: Volunteer
            {
              name: 'volunteer_title',
              label: 'Card 4 Title',
              type: 'text',
              defaultValue: 'Volunteer with Us',
            },
            {
              name: 'volunteer_desc',
              label: 'Card 4 Description',
              type: 'textarea',
              defaultValue:
                'By sharing your time and skills, you can help ensure seafarers are welcomed with kindness.',
            },
            {
              name: 'volunteer_items',
              label: 'Card 4 List Items',
              type: 'array',
              fields: [{ name: 'item_text', type: 'text' }],
            },
            {
              name: 'volunteer_btn_text',
              label: 'Card 4 Button Text',
              type: 'text',
              defaultValue: 'Become a Volunteer →',
            },
            // Card 5: Customized Partnerships
            {
              name: 'partnership_title',
              label: 'Card 5 Title',
              type: 'text',
              defaultValue: 'Explore Customized Partnerships',
            },
            {
              name: 'partnership_desc',
              label: 'Card 5 Description',
              type: 'textarea',
              defaultValue:
                'Connect with our team to find a fit that realizes your philanthropic goals across Halifax\'s Port.',
            },
            {
              name: 'partnership_btn_text',
              label: 'Card 5 Button Text',
              type: 'text',
              defaultValue: 'Contact Us →',
            },
            // Card 6: In-Kind Gifts
            {
              name: 'inkind_title',
              label: 'Card 6 Title',
              type: 'text',
              defaultValue: 'In-Kind Gifts',
            },
            {
              name: 'inkind_desc',
              label: 'Card 6 Description',
              type: 'textarea',
              defaultValue:
                'We are always grateful for items that help create a comfortable space:',
            },
            {
              name: 'inkind_items',
              label: 'Card 6 List Items',
              type: 'array',
              fields: [{ name: 'item_text', type: 'text' }],
            },
            {
              name: 'inkind_wishlist_text',
              label: 'Amazon Wishlist Link Text',
              type: 'text',
              defaultValue: 'View Amazon Wishlist →',
            },
            {
              name: 'inkind_wishlist_link',
              label: 'Amazon Wishlist URL',
              type: 'text',
              defaultValue:
                'https://www.amazon.ca/hz/wishlist/ls/3C9KTQNHTZ0NM/ref=hz_ls_biz_ex',
            },
            {
              name: 'inkind_contact_text',
              label: 'In-Kind Contact Link Text',
              type: 'text',
              defaultValue: 'Contact About In-Kind →',
            },
          ],
        },

        // TAB 4: PARTNERS & SPONSORS
        {
          label: 'Partners & Sponsors',
          fields: [
            {
              name: 'partners_title',
              label: 'Partners Marquee Title',
              type: 'text',
              defaultValue: 'Our Corporate & Maritime Partners',
            },
            {
              name: 'partners_subtitle',
              label: 'Partners Marquee Subtitle',
              type: 'textarea',
              defaultValue:
                'Recognizing the local and international organizations that stand alongside us in supporting seafarers\' welfare in Halifax.',
            },
            {
              name: 'partner_logos',
              label: 'Corporate & Maritime Partner Logos (Images Array)',
              type: 'array',
              fields: [
                {
                  name: 'logo',
                  label: 'Sponsor Logo Image',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
            {
              name: 'community_title',
              label: 'Community Section Title',
              type: 'text',
              defaultValue: 'Community & Business Partners',
            },
            {
              name: 'community_desc_1',
              label: 'Community Description 1',
              type: 'textarea',
              defaultValue:
                'We welcome support from local businesses, organizations, schools, faith communities, and community groups. Partnering with the Mission will provide your organization with extraordinary and rewarding relationship opportunities.',
            },
            {
              name: 'community_desc_2',
              label: 'Community Description 2',
              type: 'textarea',
              defaultValue:
                'You can support local events, volunteer activities, hospitality, and community awareness initiatives. For customized packages, please complete the partnership inquiry form, and our team will connect with you directly.',
            },
            {
              name: 'btn_partner_text',
              label: 'Partner Button Text',
              type: 'text',
              defaultValue: 'Partner with Halifax Mission',
            },
            {
              name: 'btn_national_text',
              label: 'National Partnerships Button Text',
              type: 'text',
              defaultValue: 'National Partnerships',
            },
            {
              name: 'btn_national_link',
              label: 'National Partnerships URL',
              type: 'text',
              defaultValue: 'https://mtsc.ca/contact/',
            },
            {
              name: 'star_card_title',
              label: 'STAR Program Card Title',
              type: 'text',
              defaultValue: 'STAR\nProgram',
            },
            {
              name: 'star_card_desc',
              label: 'STAR Program Card Description',
              type: 'textarea',
              defaultValue:
                'Join an elite group of recurring sponsors dedicated to seafarer welfare.',
            },
            {
              name: 'corp_card_title',
              label: 'Corporate Package Card Title',
              type: 'text',
              defaultValue: 'Corporate\nPackage',
            },
            {
              name: 'corp_card_desc',
              label: 'Corporate Package Card Description',
              type: 'textarea',
              defaultValue:
                'Customized sponsorship packages designed for maximum CSR impact.',
            },
          ],
        },

        // TAB 5: STAR CLUB MEMBERS
        {
          label: 'Star Club Members',
          fields: [
            {
              name: 'star_club_title',
              label: 'Star Club Title',
              type: 'text',
              defaultValue: 'Star Club Members',
            },
            {
              name: 'star_club_subtitle',
              label: 'Star Club Subtitle',
              type: 'textarea',
              defaultValue:
                'THANK YOU to our elite sponsors without whom we could not offer our service.',
            },
            {
              name: 'star_club_members',
              label: 'Star Club Member Names Array',
              type: 'array',
              fields: [
                {
                  name: 'member_name',
                  label: 'Member Name',
                  type: 'text',
                },
              ],
            },
            {
              name: 'btn_sponsor_now_text',
              label: 'Become a Sponsor Button Text',
              type: 'text',
              defaultValue: 'Become a Sponsor',
            },
          ],
        },

        // TAB 6: FINAL CALL TO ACTION
        {
          label: 'Final Call to Action',
          fields: [
            {
              name: 'cta_title',
              label: 'CTA Main Title',
              type: 'text',
              defaultValue: 'Every Act of Kindness Makes a Difference',
            },
            {
              name: 'cta_desc',
              label: 'CTA Description Paragraph',
              type: 'textarea',
              defaultValue:
                'From a warm drink and a haircut to a monthly donation or a few hours of volunteering, every act of support helps remind seafarers that they are not alone.',
            },
            {
              name: 'cta_bg_image',
              label: 'CTA Background Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'btn_donate_text',
              label: 'Donate Button Text',
              type: 'text',
              defaultValue: 'Donate Now',
            },
            {
              name: 'btn_volunteer_text',
              label: 'Volunteer Button Text',
              type: 'text',
              defaultValue: 'Become a Volunteer',
            },
            {
              name: 'btn_contact_text',
              label: 'Contact Button Text',
              type: 'text',
              defaultValue: 'Contact Halifax Mission',
            },
            {
              name: 'btn_wishlist_text',
              label: 'Wishlist Button Text',
              type: 'text',
              defaultValue: 'Gift from Wishlist',
            },
            {
              name: 'btn_wishlist_link',
              label: 'Wishlist URL',
              type: 'text',
              defaultValue:
                'https://www.amazon.ca/hz/wishlist/ls/3C9KTQNHTZ0NM/ref=hz_ls_biz_ex',
            },
          ],
        },
      ],
    },
  ],
}
