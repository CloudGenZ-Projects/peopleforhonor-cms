import type { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
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
              name: 'hero_title',
              label: 'Hero Title',
              type: 'text',
              defaultValue: 'About People for Honor',
            },
            {
              name: 'hero_subtitle',
              label: 'Hero Subtitle',
              type: 'textarea',
              defaultValue:
                '"Honor" isn\'t just our name. It\'s how we show up—for ourselves, for each other, and for the country we call home.',
            },
          ],
        },
        {
          label: "2. Founder's Story",
          fields: [
            {
              name: 'founder_badge',
              label: 'Badge Text',
              type: 'text',
              defaultValue: 'Leadership & Vision',
            },
            {
              name: 'founder_title',
              label: 'Section Heading',
              type: 'text',
              defaultValue: 'Founder’s Story',
            },
            {
              name: 'founder_image',
              label: 'Founder Portrait Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'founder_name',
              label: 'Founder Name',
              type: 'text',
              defaultValue: 'Mr. Francis Ukposidolo',
            },
            {
              name: 'founder_role',
              label: 'Founder Role',
              type: 'text',
              defaultValue: 'Founder & Community Builder',
            },
            {
              name: 'founder_credentials',
              label: 'Founder Credentials',
              type: 'text',
              defaultValue: 'Aeronautical Engineer | Certified Lead Auditor',
            },
            {
              name: 'founder_sec1_title',
              label: 'Section 1 Title',
              type: 'text',
              defaultValue: 'From Aeronautical Engineer to Community Builder',
            },
            {
              name: 'founder_sec1_p1',
              label: 'Section 1 Paragraph 1',
              type: 'textarea',
              defaultValue:
                'Mr. Francis Ukposidolo is an established businessman, a certified third-party Lead Auditor, and a specialized quality management consultant within the aerospace, marine, and heavy machinery sectors. Grounded in a robust background in aeronautical engineering, Mr. Ukposidolo successfully transitioned his professional practice to Canada Our several years ago.',
            },
            {
              name: 'founder_sec1_p2',
              label: 'Section 1 Paragraph 2',
              type: 'textarea',
              defaultValue:
                'Despite his technical expertise, he experienced firsthand the complex hurdles of migration—from navigating unfamiliar institutional systems to adapting to a new workplace culture. These early challenges shaped his deeply held conviction that no newcomer should have to walk this path alone.',
            },
            {
              name: 'founder_sec2_title',
              label: 'Section 2 Title',
              type: 'text',
              defaultValue: 'A Mission Rooted in Purpose and Impact',
            },
            {
              name: 'founder_sec2_p1',
              label: 'Section 2 Paragraph 1',
              type: 'textarea',
              defaultValue:
                'Moving from personal experience to community action, Mr. Ukposidolo founded People for Honor. What began as a personal mission to help friends and neighbours has grown into a vital community hub.',
            },
            {
              name: 'founder_sec2_p2',
              label: 'Section 2 Paragraph 2',
              type: 'textarea',
              defaultValue:
                'Under his visionary leadership, the organization goes beyond basic resettlement assistance. People for Honor focuses on holistic empowerment: helping individuals discover the best version of themselves, coaching them to uncover their true purpose, and mentoring them to fulfill that purpose.',
            },
            {
              name: 'founder_sec3_title',
              label: 'Section 3 Title',
              type: 'text',
              defaultValue: 'The Power of Giving Back',
            },
            {
              name: 'founder_sec3_p1',
              label: 'Section 3 Paragraph 1',
              type: 'textarea',
              defaultValue:
                'For Mr. Ukposidolo, true belonging comes from being empowered with knowledge, staying grounded in cultural pride, and giving back to the community. He operates under a simple, profound guiding philosophy:',
            },
            {
              name: 'founder_quote',
              label: 'Highlight Quote',
              type: 'text',
              defaultValue: '"Life is not about duration, but donation."',
            },
            {
              name: 'founder_sec3_p2',
              label: 'Section 3 Paragraph 2',
              type: 'textarea',
              defaultValue:
                'Through People for Honor, he ensures every individual is met with unwavering dignity. The organization proudly supports newcomers at every stage of their Canadian journey by providing practical guidance, holistic skills training, and purposeful mentorship rooted in dignity and from writing their very first résumé to celebrating their first major workplace promotion. Proudly Nigerian-Canadian, Mr. Francis measures success not just by individual outcomes but by what we build together—strong families, connected neighbourhoods, and opportunities that last. His aim is a living legacy: communities of belonging and fully empowered people who will lift the next generation, just as others once lifted him.',
            },
            {
              name: 'founder_legacy_quote',
              label: 'Legacy Quote',
              type: 'text',
              defaultValue:
                '"Together we plant a tree, others water the tree, and the next generation enjoys the shade."',
            },
          ],
        },
        {
          label: '3. Who We Are & Values',
          fields: [
            {
              name: 'who_title',
              label: 'Section Title',
              type: 'text',
              defaultValue: 'Who We Are',
            },
            {
              name: 'who_p1',
              label: 'Paragraph 1',
              type: 'textarea',
              defaultValue:
                "At People for Honor, there's no judgment—only community lifting community. We serve women, men, and youth (Anglophone and Francophone) with culturally grounded workshops, coaching, and mentorship that spark confidence, protect mental well-being, and open doors to work, school, and community life in Canada.",
            },
            {
              name: 'who_p2',
              label: 'Paragraph 2',
              type: 'textarea',
              defaultValue:
                'Our programs are built on the idea that we can think big, belong fully, and give back.',
            },
            {
              name: 'values_list',
              label: 'Core Value Cards',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  label: 'Value Title',
                  type: 'text',
                },
                {
                  name: 'description',
                  label: 'Value Description',
                  type: 'textarea',
                },
              ],
            },
          ],
        },
        {
          label: '4. Mission & Vision',
          fields: [
            {
              name: 'mission_title',
              label: 'Mission Title',
              type: 'text',
              defaultValue: 'Our Mission',
            },
            {
              name: 'mission_text',
              label: 'Mission Description',
              type: 'textarea',
              defaultValue:
                'To remove systemic barriers for newcomers by providing practical guidance, holistic skills training, and purposeful mentorship rooted in dignity.',
            },
            {
              name: 'mission_tag',
              label: 'Mission Footer Tagline',
              type: 'text',
              defaultValue: 'Empowering Lives, Restoring Hope',
            },
            {
              name: 'vision_title',
              label: 'Vision Title',
              type: 'text',
              defaultValue: 'Our Vision',
            },
            {
              name: 'vision_text',
              label: 'Vision Description',
              type: 'textarea',
              defaultValue:
                'To build an inclusive society where every immigrant is empowered to unlock their highest potential, celebrate their cultural pride, and confidently contribute to their new home.',
            },
            {
              name: 'vision_tag',
              label: 'Vision Footer Tagline',
              type: 'text',
              defaultValue: 'A Community Where Everyone Belongs',
            },
          ],
        },
        {
          label: '5. Who We Serve & What We Do',
          fields: [
            {
              name: 'serve_heading',
              label: 'Section Heading',
              type: 'text',
              defaultValue: 'Who We Serve & What We Do',
            },
            {
              name: 'serve_title',
              label: 'Who We Serve Title',
              type: 'text',
              defaultValue: 'Who We Serve',
            },
            {
              name: 'serve_text',
              label: 'Who We Serve Description',
              type: 'textarea',
              defaultValue:
                'Newcomers and long-time residents seeking community, confidence, and practical pathways to opportunity.',
            },
            {
              name: 'help_title',
              label: 'How We Help Title',
              type: 'text',
              defaultValue: 'How We Help',
            },
            {
              name: 'help_text',
              label: 'How We Help Description',
              type: 'textarea',
              defaultValue:
                'Culturally responsive workshops, one-on-one coaching, and mentorship (EN/FR), plus warm referrals and navigation support for employment, education, and wellness resources.',
            },
          ],
        },
        {
          label: '6. Core Values List',
          fields: [
            {
              name: 'core_values_heading',
              label: 'Section Heading',
              type: 'text',
              defaultValue: 'Our Core Values',
            },
            {
              name: 'core_values_items',
              label: 'Core Value Items',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  label: 'Value Title',
                  type: 'text',
                },
                {
                  name: 'description',
                  label: 'Value Description',
                  type: 'textarea',
                },
              ],
            },
          ],
        },
        {
          label: '7. Get Involved Section',
          fields: [
            {
              name: 'get_involved_heading',
              label: 'Section Heading',
              type: 'text',
              defaultValue: 'Get Involved',
            },
            {
              name: 'get_involved_text',
              label: 'Section Description',
              type: 'textarea',
              defaultValue:
                'We believe that true community is built together. Whether you are looking for support or want to give back, there is a place for you at People for Honor.',
            },
            {
              name: 'get_involved_cards',
              label: 'Get Involved Cards',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  label: 'Card Title',
                  type: 'text',
                },
                {
                  name: 'description',
                  label: 'Card Description',
                  type: 'textarea',
                },
              ],
            },
            {
              name: 'cta_btn_1_text',
              label: 'Button 1 Text',
              type: 'text',
              defaultValue: 'Ways to Give',
            },
            {
              name: 'cta_btn_1_link',
              label: 'Button 1 Link',
              type: 'text',
              defaultValue: '/join',
            },
            {
              name: 'cta_btn_2_text',
              label: 'Button 2 Text',
              type: 'text',
              defaultValue: 'Explore Our Programs',
            },
            {
              name: 'cta_btn_2_link',
              label: 'Button 2 Link',
              type: 'text',
              defaultValue: '/programs',
            },
          ],
        },
      ],
    },
  ],
}
