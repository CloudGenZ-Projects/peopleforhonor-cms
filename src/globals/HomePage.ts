import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  admin: {
    livePreview: {
      url: process.env.PAYLOAD_PUBLIC_SITE_URL || 'http://localhost:5173',
    },
  },
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: '1. Hero Section',
          fields: [
            {
              name: 'hero_badge',
              label: 'Hero Badge Text',
              type: 'text',
              defaultValue: 'Supporting Immigrants to Canada',
            },
            {
              name: 'hero_title',
              label: 'Hero Main Title',
              type: 'text',
              defaultValue: 'Trusted Help for Your',
            },
            {
              name: 'hero_title_highlight',
              label: 'Hero Title Highlighted Text',
              type: 'text',
              defaultValue: 'Life in Canada',
            },
            {
              name: 'hero_subtitle',
              label: 'Hero Subtitle',
              type: 'textarea',
              defaultValue:
                'Do more than survive in Canada! We provide Career Guidance & Support, mentorship, and community support to help newcomers thrive and build meaningful lives.',
            },
            {
              name: 'primary_cta_text',
              label: 'Primary Button Text',
              type: 'text',
              defaultValue: 'Find the Support You Need',
            },
            {
              name: 'primary_cta_link',
              label: 'Primary Button Link',
              type: 'text',
              defaultValue: '/programs',
            },
            {
              name: 'secondary_cta_text',
              label: 'Secondary Button Text',
              type: 'text',
              defaultValue: 'Learn More About Us',
            },
            {
              name: 'secondary_cta_link',
              label: 'Secondary Button Link',
              type: 'text',
              defaultValue: '/about',
            },
            {
              name: 'third_cta_text',
              label: 'Third Button Text',
              type: 'text',
              defaultValue: 'Apply for our Computer Access Program',
            },
            {
              name: 'third_cta_link',
              label: 'Third Button Link',
              type: 'text',
              defaultValue:
                'https://www.zeffy.com/en-CA/newsletter-form/computer-access-program-application',
            },
            {
              name: 'hero_image',
              label: 'Hero Main Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'hero_stats',
              label: 'Hero Section Stats',
              type: 'array',
              fields: [
                {
                  name: 'stat_number',
                  label: 'Stat Number/Value',
                  type: 'text',
                },
                {
                  name: 'stat_label',
                  label: 'Stat Label',
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          label: '2. Restore Honor & Services',
          fields: [
            {
              name: 'restore_honor_heading',
              label: 'Restore Honor Heading',
              type: 'text',
              defaultValue:
                'We Restore Honor through empowerment, coaching, and mentorship.',
            },
            {
              name: 'restore_honor_paragraph',
              label: 'Restore Honor Description Paragraph',
              type: 'textarea',
              defaultValue:
                'At People for Honor, we believe every immigrant deserves more than just a fresh start, they deserve to belong. We’re building a community in Ottawa where newcomers feel seen, supported, and empowered to thrive. We recognize the strength, purpose, and potential each person carries, and we walk alongside them as they rebuild, rediscover, and rise into the best version of themselves with dignity, not just survival.',
            },
            {
              name: 'restore_honor_points',
              label: 'Restore Honor Bullet Points',
              type: 'array',
              fields: [
                {
                  name: 'point_text',
                  label: 'Point Text',
                  type: 'text',
                },
              ],
            },
            {
              name: 'services_badge',
              label: 'Services Badge Text',
              type: 'text',
              defaultValue: 'Our Services',
            },
            {
              name: 'services_heading',
              label: 'Services Section Heading',
              type: 'text',
              defaultValue: 'Support for Your Journey',
            },
            {
              name: 'services_description',
              label: 'Services Section Subtitle',
              type: 'textarea',
              defaultValue:
                'We believe everyone has the potential to thrive. Our integrated approach combines practical skills, mentorship, and community support to help you build a fulfilling life in Canada.',
            },
            {
              name: 'services_list',
              label: 'Services List Cards',
              type: 'array',
              fields: [
                {
                  name: 'service_id',
                  label: 'Service Slug ID',
                  type: 'text',
                },
                {
                  name: 'title',
                  label: 'Service Title',
                  type: 'text',
                },
                {
                  name: 'description',
                  label: 'Service Description',
                  type: 'textarea',
                },
                {
                  name: 'image',
                  label: 'Service Image',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'url',
                  label: 'Service Page Link',
                  type: 'text',
                },
                {
                  name: 'features',
                  label: 'Service Feature Bullets',
                  type: 'array',
                  fields: [
                    {
                      name: 'feature_text',
                      label: 'Feature Item Text',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: '3. Featured & Video Section',
          fields: [
            {
              name: 'featured_badge',
              label: 'Featured Section Badge',
              type: 'text',
              defaultValue: 'Building Community',
            },
            {
              name: 'featured_heading',
              label: 'Featured Section Heading',
              type: 'text',
              defaultValue: 'Do more than survive in Canada!',
            },
            {
              name: 'featured_paragraph_1',
              label: 'Featured Paragraph 1',
              type: 'textarea',
              defaultValue:
                'At People for Honor, our values guide our actions and shape our organizational culture. We believe that everyone has the inherent potential to thrive and live a fulfilled life, and that knowing your own worth enables you to better value others.',
            },
            {
              name: 'featured_paragraph_2',
              label: 'Featured Paragraph 2',
              type: 'textarea',
              defaultValue:
                'We hold that giving back to your community not only strengthens those around you but also helps you to flourish personally. Above all, we recognize that we are all connected—sowing seeds today so that future generations may water the trees, and their descendants may one day rest in the shade they provide.',
            },
            {
              name: 'featured_primary_cta_text',
              label: 'Featured Primary Button Text',
              type: 'text',
              defaultValue: 'Explore Our Programs',
            },
            {
              name: 'featured_primary_cta_link',
              label: 'Featured Primary Button Link',
              type: 'text',
              defaultValue: '/programs',
            },
            {
              name: 'featured_secondary_cta_text',
              label: 'Featured Secondary Button Text',
              type: 'text',
              defaultValue: 'Learn More About Us',
            },
            {
              name: 'featured_secondary_cta_link',
              label: 'Featured Secondary Button Link',
              type: 'text',
              defaultValue: '/about',
            },
            {
              name: 'featured_video_id',
              label: 'YouTube Video Link or ID',
              type: 'text',
              defaultValue: 'https://www.youtube.com/watch?v=MlBTjyV_ado',
            },
            {
              name: 'impact_heading',
              label: 'Impact Section Heading',
              type: 'text',
              defaultValue: 'See Our Impact in Action',
            },
            {
              name: 'impact_description',
              label: 'Impact Section Description',
              type: 'textarea',
              defaultValue:
                "Watch how we're transforming lives and building a thriving community for immigrants in Canada.",
            },
            {
              name: 'impact_subtext',
              label: 'Impact Subtext',
              type: 'text',
              defaultValue:
                'Join thousands of immigrants who have found the support they needed',
            },
          ],
        },
        {
          label: '4. Get Involved Section',
          fields: [
            {
              name: 'get_involved_heading',
              label: 'Get Involved Heading',
              type: 'text',
              defaultValue: 'Get Involved',
            },
            {
              name: 'get_involved_subheading',
              label: 'Get Involved Subheading',
              type: 'textarea',
              defaultValue:
                'Be part of our mission to restore honor and help newcomers thrive in Canada.',
            },
            {
              name: 'donate_card_title',
              label: 'Donate Card Title',
              type: 'text',
              defaultValue: 'Donate',
            },
            {
              name: 'donate_card_description',
              label: 'Donate Card Description',
              type: 'textarea',
              defaultValue:
                'Your donations help us make an impact. Together we can support more immigrants to navigate their life in Canada.',
            },
            {
              name: 'donate_button_text',
              label: 'Donate Button Text',
              type: 'text',
              defaultValue: 'Donate Now',
            },
            {
              name: 'donate_button_link',
              label: 'Donate Button Link',
              type: 'text',
              defaultValue: '/join#donate',
            },
            {
              name: 'volunteer_card_title',
              label: 'Volunteer Card Title',
              type: 'text',
              defaultValue: 'Volunteer',
            },
            {
              name: 'volunteer_card_description',
              label: 'Volunteer Card Description',
              type: 'textarea',
              defaultValue:
                'It takes a village. Join us as a volunteer and help build the community you want to see.',
            },
            {
              name: 'volunteer_button_text',
              label: 'Volunteer Button Text',
              type: 'text',
              defaultValue: 'Become a Volunteer',
            },
            {
              name: 'volunteer_button_link',
              label: 'Volunteer Button Link',
              type: 'text',
              defaultValue:
                'https://docs.google.com/forms/d/e/1FAIpQLSeoVDTZ9VLLCRIP-0twZo8urDmzM6VLAhC-QQ2rHOoeyVce4w/viewform?usp=header',
            },
          ],
        },
        {
          label: '5. Home CTA & Newsletter',
          fields: [
            {
              name: 'cta_title',
              label: 'Home CTA Top Title',
              type: 'text',
              defaultValue: 'Ready to Start Your Journey?',
            },
            {
              name: 'cta_heading',
              label: 'Home CTA Subheading',
              type: 'text',
              defaultValue:
                'Building a life in a new country is not easy. We are here so you do not have to do it alone.',
            },
            {
              name: 'cta_description',
              label: 'Home CTA Description',
              type: 'textarea',
              defaultValue:
                'Join thousands of immigrants who have found needed help and community with People for Honor.',
            },
            {
              name: 'cta_primary_text',
              label: 'Home CTA Primary Button Text',
              type: 'text',
              defaultValue: 'Find Support',
            },
            {
              name: 'cta_primary_link',
              label: 'Home CTA Primary Button Link',
              type: 'text',
              defaultValue: '/programs',
            },
            {
              name: 'cta_secondary_text',
              label: 'Home CTA Secondary Button Text',
              type: 'text',
              defaultValue: 'Learn About Our Approach',
            },
            {
              name: 'cta_secondary_link',
              label: 'Home CTA Secondary Button Link',
              type: 'text',
              defaultValue: '/about',
            },
            {
              name: 'newsletter_heading',
              label: 'Newsletter Heading',
              type: 'text',
              defaultValue: 'Join the Transformational Journey!',
            },
            {
              name: 'newsletter_description',
              label: 'Newsletter Description',
              type: 'textarea',
              defaultValue:
                'Stay connected with our community and be the first to know about new programs, events, and opportunities to make a difference.',
            },
            {
              name: 'newsletter_button_text',
              label: 'Newsletter Submit Button Text',
              type: 'text',
              defaultValue: 'Join Our Community',
            },
            {
              name: 'newsletter_footer_quote',
              label: 'Newsletter Footer Quote',
              type: 'text',
              defaultValue: 'Contribute to the prosperity of people!',
            },
            {
              name: 'newsletter_link_text',
              label: 'Newsletter Link Text',
              type: 'text',
              defaultValue: 'Apply for our Computer Access Program',
            },
            {
              name: 'newsletter_link_url',
              label: 'Newsletter Link URL',
              type: 'text',
              defaultValue:
                'https://www.zeffy.com/en-CA/newsletter-form/computer-access-program-application',
            },
          ],
        },
      ],
    },
  ],
}
