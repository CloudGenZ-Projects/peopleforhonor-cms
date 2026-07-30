import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const MtscWhoWeArePage: GlobalConfig = {
  slug: 'mtsc-whoweare-page',
  label: 'MTSC Who We Are Page',
  admin: {
    group: 'MTSC Halifax',
    hidden: ({ user }) => isHiddenForUser(user, 'mtsc'),
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_MTSC_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/whoweare`
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
              label: 'Hero Eyebrow Badge',
              type: 'text',
              defaultValue: 'About Mission to Seafarers Halifax',
            },
            {
              name: 'hero_title',
              label: 'Hero Main Title',
              type: 'text',
              defaultValue: 'A Harbour of Care on Canada’s Atlantic Coast',
            },
            {
              name: 'hero_subtitle',
              label: 'Hero Subtitle Paragraph',
              type: 'textarea',
              defaultValue:
                'For generations, the Port of Halifax has stood as one of Canada’s most important gateways to the world. Ships arrive daily carrying the goods that sustain communities, industries, hospitals, businesses, and families across the country.',
            },
            {
              name: 'hero_image',
              label: 'Hero Background / Section Image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },

        // TAB 2: OUR STORY TIMELINE
        {
          label: 'Our Story Timeline',
          fields: [
            {
              name: 'story_eyebrow',
              label: 'Story Eyebrow',
              type: 'text',
              defaultValue: 'Our Story',
            },
            {
              name: 'story_title',
              label: 'Story Main Title',
              type: 'text',
              defaultValue: 'Behind every vessel is a crew.',
            },
            {
              name: 'story_description',
              label: 'Story Description Paragraphs',
              type: 'textarea',
              defaultValue:
                'seafarers who spend months away from home, crossing oceans to keep global trade moving. Mission to Seafarers Halifax exists to ensure that when those seafarers arrive in Halifax, they are not alone.\n\nWhether visiting for only a few hours or several days, many crew members arrive exhausted, isolated, and disconnected from loved ones. Limited shore leave, demanding schedules, and long periods at sea can take a significant emotional and physical toll.\n\nAt our station and through ship visits across Halifax Harbour, we provide a welcoming place where seafarers can rest, reconnect with family, receive practical support, and experience kindness far from home.\n\nSometimes support means helping a crew member make their first video call home in weeks. Sometimes it means offering warm winter clothing after arriving from sea in harsh Atlantic weather. Sometimes it simply means listening.',
            },
            {
              name: 'history_blocks',
              label: 'History & Story Timeline Cards',
              type: 'array',
              fields: [
                {
                  name: 'era',
                  label: 'Era / Badge (e.g. The Gateway)',
                  type: 'text',
                },
                {
                  name: 'title',
                  label: 'Card Title',
                  type: 'text',
                },
                {
                  name: 'content',
                  label: 'Card Content Paragraphs',
                  type: 'textarea',
                },
                {
                  name: 'image',
                  label: 'Card Image',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
          ],
        },

        // TAB 3: OUR IMPACT & SERVICES
        {
          label: 'Our Impact & Services',
          fields: [
            {
              name: 'impact_eyebrow',
              label: 'Impact Eyebrow',
              type: 'text',
              defaultValue: 'Our Impact',
            },
            {
              name: 'impact_title',
              label: 'Impact Title',
              type: 'text',
              defaultValue: 'Supporting Seafarers in Halifax Today',
            },
            {
              name: 'impact_description',
              label: 'Impact Description Paragraph',
              type: 'textarea',
              defaultValue:
                'Every interaction matters. Volunteers regularly meet crews who have spent months at sea without stepping onto land. Others arrive carrying the stress of uncertain contracts, fatigue, isolation, or the emotional weight of being away from family for extended periods. For many seafarers, even a small moment of kindness can make a lasting difference.',
            },
            {
              name: 'services_list',
              label: 'Services Checklist Items',
              type: 'array',
              fields: [
                {
                  name: 'service_text',
                  label: 'Service Item Text',
                  type: 'text',
                },
              ],
            },
            {
              name: 'looking_ahead_title',
              label: 'Looking Ahead Box Title',
              type: 'text',
              defaultValue: 'Looking Ahead',
            },
            {
              name: 'looking_ahead_paragraphs',
              label: 'Looking Ahead Paragraphs',
              type: 'textarea',
              defaultValue:
                'As Mission to Seafarers Halifax continues to grow, so does our vision for the future. We are building more than a station. We are building a welcoming maritime hub where seafarers can find rest, support, connection, and community while visiting Halifax.\n\nThrough volunteers, partnerships, churches, donors, and national collaboration, we hope to continue expanding services and outreach that respond to the evolving needs of seafarers visiting Canada’s Atlantic coast.',
            },
            {
              name: 'looking_ahead_quote',
              label: 'Looking Ahead Quote',
              type: 'textarea',
              defaultValue:
                'Every donation, volunteer hour, partnership, and act of kindness helps strengthen this mission. Because behind every ship entering Halifax Harbour is a crew of people who deserve to feel seen, valued, and cared for.',
            },
          ],
        },

        // TAB 4: STATION LEADERSHIP & TEAM
        {
          label: 'Station Leadership',
          fields: [
            {
              name: 'team_eyebrow',
              label: 'Team Eyebrow',
              type: 'text',
              defaultValue: 'Station Leadership',
            },
            {
              name: 'team_title',
              label: 'Team Main Title',
              type: 'text',
              defaultValue: 'The People Behind the Welcome',
            },
            {
              name: 'team_description',
              label: 'Team Description Paragraph',
              type: 'textarea',
              defaultValue:
                'Guided by our Board of Directors and supported by dedicated staff and volunteers, Mission to Seafarers Halifax works to create a welcoming and supportive environment for seafarers visiting Canada’s Atlantic gateway. Whether through ship visits, station hospitality, transportation support, outreach, or simply offering a listening ear, every interaction is rooted in compassion, dignity, and care.',
            },
            {
              name: 'leader_1_name',
              label: 'Leader 1 Name (Mission Manager)',
              type: 'text',
              defaultValue: 'HELEN GLENN',
            },
            {
              name: 'leader_1_role',
              label: 'Leader 1 Role / Title',
              type: 'text',
              defaultValue: 'Mission Manager',
            },
            {
              name: 'leader_1_bio',
              label: 'Leader 1 Bio Paragraphs',
              type: 'textarea',
              defaultValue:
                'Helen leads Mission to Seafarers Halifax with compassion, warmth, and a deep commitment to the welfare of seafarers visiting the Port of Halifax.\n\nThrough leadership, outreach, volunteer coordination, and community engagement, she helps ensure that every seafarer who connects with the station experiences hospitality, practical support, and a welcoming place of care while ashore.\n\nHelen continues to play an important role in strengthening Halifax’s maritime community and advancing the Mission’s work across the region.',
            },
            {
              name: 'leader_1_image',
              label: 'Leader 1 Photo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'leader_2_name',
              label: 'Leader 2 Name (Assistant Manager)',
              type: 'text',
              defaultValue: 'Joseph Loot',
            },
            {
              name: 'leader_2_role',
              label: 'Leader 2 Role / Title',
              type: 'text',
              defaultValue: 'Assistant Manager',
            },
            {
              name: 'leader_2_bio',
              label: 'Leader 2 Bio Paragraphs',
              type: 'textarea',
              defaultValue:
                'Joseph supports the daily operations of the Halifax Mission and helps create a welcoming environment for seafarers visiting the port. Supporting outreach, station activities, and practical services to ensure seafarers in Halifax receive care, connection, and assistance during their stay. His dedication and calm presence help make the station a trusted place for many visiting crews.',
            },
            {
              name: 'leader_2_image',
              label: 'Leader 2 Photo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'volunteers_card_title',
              label: 'Volunteers Card Title',
              type: 'text',
              defaultValue: 'Our Volunteers',
            },
            {
              name: 'volunteers_card_description',
              label: 'Volunteers Card Description',
              type: 'textarea',
              defaultValue:
                'Behind every ship visit, warm meal, ride into the city, care package, or friendly conversation is a volunteer helping make it possible.',
            },
            {
              name: 'volunteers_active_count',
              label: 'Active Volunteers Count Stat',
              type: 'text',
              defaultValue: '50+',
            },
            {
              name: 'volunteers_hours_count',
              label: 'Hours Served Count Stat',
              type: 'text',
              defaultValue: '1000+',
            },
          ],
        },

        // TAB 5: VOLUNTEERS GALLERY & COMMUNITY CARE
        {
          label: 'Volunteers Gallery & Care',
          fields: [
            {
              name: 'gallery_section_title',
              label: 'Volunteers Gallery Section Title',
              type: 'text',
              defaultValue: 'The Heart of the Mission | Our Volunteers',
            },
            {
              name: 'gallery_section_description',
              label: 'Volunteers Gallery Section Description',
              type: 'textarea',
              defaultValue:
                'Behind every ship visit, warm meal, ride into the city, care package, or friendly conversation is a volunteer helping make it possible.\n\nMission to Seafarers Halifax is powered by a compassionate network of volunteers who generously give their time, skills, and energy to support seafarers arriving at the Port of Halifax.\n\nSome volunteers greet seafarers at the station. Others help coordinate transportation, organize seasonal programs, prepare hospitality spaces, assist with outreach, or participate in ship visits across Halifax Harbour.',
            },
            {
              name: 'volunteers_gallery',
              label: 'Volunteers Photo Carousel',
              type: 'array',
              fields: [
                {
                  name: 'image',
                  label: 'Volunteer Photo',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'image_caption',
                  label: 'Image Caption / Title',
                  type: 'text',
                },
              ],
            },
            {
              name: 'community_care_title',
              label: 'Community of Care Title',
              type: 'text',
              defaultValue: 'A Community of Care',
            },
            {
              name: 'community_care_description',
              label: 'Community Care Description Paragraphs',
              type: 'textarea',
              defaultValue:
                'Many simply offer something equally meaningful: human connection.\n\nFor crew members who may spend months away from family and home, those moments of kindness and conversation can leave a lasting impact.',
            },
            {
              name: 'community_care_subtext',
              label: 'Community Care Subtext',
              type: 'textarea',
              defaultValue:
                'Our volunteers come from diverse backgrounds but share one common purpose: to ensure seafarers visiting Halifax feel welcomed, respected, and supported. Their commitment reflects the spirit of Halifax’s maritime community and the long-standing tradition of caring for those who work at sea.',
            },
            {
              name: 'stat_box_1_number',
              label: 'Stat Box 1 Number',
              type: 'text',
              defaultValue: '30+',
            },
            {
              name: 'stat_box_1_label',
              label: 'Stat Box 1 Label',
              type: 'text',
              defaultValue: 'Active Volunteers',
            },
            {
              name: 'stat_box_1_desc',
              label: 'Stat Box 1 Description',
              type: 'textarea',
              defaultValue:
                'Supporting ship visits, hospitality, outreach, transportation, and station programs',
            },
            {
              name: 'stat_box_2_number',
              label: 'Stat Box 2 Number',
              type: 'text',
              defaultValue: '1,000+',
            },
            {
              name: 'stat_box_2_label',
              label: 'Stat Box 2 Label',
              type: 'text',
              defaultValue: 'Volunteer Hours Served',
            },
            {
              name: 'stat_box_2_desc',
              label: 'Stat Box 2 Description',
              type: 'textarea',
              defaultValue: 'Dedicated annually to supporting seafarers visiting Halifax',
            },
            {
              name: 'thank_you_title',
              label: 'Thank You Box Title',
              type: 'text',
              defaultValue: 'Thank You',
            },
            {
              name: 'thank_you_text',
              label: 'Thank You Paragraph',
              type: 'textarea',
              defaultValue:
                'To every volunteer, supporter, maritime partner, church community, and donor who helps sustain this mission: thank you. Your compassion and generosity continue to make Mission to Seafarers Halifax a place of welcome, care, and connection for seafarers from around the world.',
            },
            {
              name: 'volunteer_cta_title',
              label: 'Volunteer CTA Box Title',
              type: 'text',
              defaultValue: 'Interested in Volunteering?',
            },
            {
              name: 'volunteer_cta_text',
              label: 'Volunteer CTA Paragraph',
              type: 'textarea',
              defaultValue:
                'Whether you can help occasionally or become part of ongoing outreach efforts, there are many ways to get involved and support seafarers visiting Halifax.',
            },
            {
              name: 'volunteer_button_text',
              label: 'Volunteer Modal Button Text',
              type: 'text',
              defaultValue: 'Volunteer Application',
            },
          ],
        },

        // TAB 6: FACILITIES & AMENITIES
        {
          label: 'Facilities & Amenities',
          fields: [
            {
              name: 'facilities_eyebrow',
              label: 'Facilities Eyebrow',
              type: 'text',
              defaultValue: 'Our Facilities',
            },
            {
              name: 'facilities_title',
              label: 'Facilities Section Title',
              type: 'text',
              defaultValue: 'Comfort & Care for Seafarers',
            },
            {
              name: 'facilities_description',
              label: 'Facilities Description Paragraph',
              type: 'textarea',
              defaultValue:
                'We offer a variety of amenities designed to provide a relaxing and welcoming environment for seafarers arriving in the Port of Halifax.',
            },
            {
              name: 'amenities_gallery',
              label: 'Amenities Photo Carousel',
              type: 'array',
              fields: [
                {
                  name: 'image',
                  label: 'Amenity Photo',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'title',
                  label: 'Amenity Title (e.g. Edmonds Lounge)',
                  type: 'text',
                },
              ],
            },
          ],
        },

        // TAB 7: STRUCTURE & FOOTER CTA
        {
          label: 'Structure & Footer CTA',
          fields: [
            {
              name: 'structure_title',
              label: 'Structure Section Title',
              type: 'text',
              defaultValue: 'How the Structure Works',
            },
            {
              name: 'structure_subtitle',
              label: 'Structure Subtitle',
              type: 'text',
              defaultValue: 'One Mission. Many Hands. Shared Care.',
            },
            {
              name: 'canada_card_title',
              label: 'Canada Card Title',
              type: 'text',
              defaultValue: 'Mission to Seafarers Canada',
            },
            {
              name: 'canada_card_text',
              label: 'Canada Card Description',
              type: 'textarea',
              defaultValue: 'provides the national foundation, leadership, and support.',
            },
            {
              name: 'halifax_card_title',
              label: 'Halifax Card Title',
              type: 'text',
              defaultValue: 'Mission to Seafarers Halifax',
            },
            {
              name: 'halifax_card_text',
              label: 'Halifax Card Description',
              type: 'textarea',
              defaultValue: 'brings that mission to life locally at the Port of Halifax.',
            },
            {
              name: 'structure_footer_quote',
              label: 'Structure Footer Quote',
              type: 'textarea',
              defaultValue:
                'Together, ensure that every seafarer who comes through Halifax is not only seen, but cared for.',
            },
            {
              name: 'structure_button_text',
              label: 'Structure Section Button Text',
              type: 'text',
              defaultValue: 'Become a Volunteer',
            },
          ],
        },
      ],
    },
  ],
}
