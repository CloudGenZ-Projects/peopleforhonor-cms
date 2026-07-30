import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  admin: {
    group: 'People For Honor',
    hidden: ({ user }) => isHiddenForUser(user, 'peopleforhonor'),
    livePreview: {
      url: process.env.PAYLOAD_PUBLIC_SITE_URL || 'http://localhost:5173',
    },
  },
  access: {
    read: () => true,
    update: (args) => checkTenantAccess(args, 'peopleforhonor'),
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
              name: 'banner_image',
              label: 'Story Banner Image',
              type: 'upload',
              relationTo: 'media',
            },
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
              defaultValue: 'Building Pathways of Belonging',
            },
            {
              name: 'founder_sec2_p1',
              label: 'Section 2 Paragraph 1',
              type: 'textarea',
              defaultValue:
                'Driven by this conviction, Mr. Ukposidolo established People for Honor to transform personal struggle into community support. He recognized that while many settlement services focus on immediate survival, newcomers also require space to rebuild their confidence, preserve their cultural identity, and establish long-term economic independence.',
            },
            {
              name: 'founder_sec2_p2',
              label: 'Section 2 Paragraph 2',
              type: 'textarea',
              defaultValue:
                'Under his leadership, the organization has grown into a vibrant community hub in Ottawa. By offering culturally grounded workshops, career mentorship, and hands-on skills training—such as sewing, barbering, and entrepreneurship—he has created accessible pathways for individuals and families to flourish.',
            },
            {
              name: 'founder_sec3_title',
              label: 'Section 3 Title',
              type: 'text',
              defaultValue: 'A Legacy of Empowerment & Belonging',
            },
            {
              name: 'founder_sec3_p1',
              label: 'Section 3 Paragraph 1',
              type: 'textarea',
              defaultValue:
                'Beyond practical training, Mr. Ukposidolo is a passionate advocate for intergenerational mentorship and community cohesion. He actively fosters environments where both Anglophone and Francophone immigrants feel seen, respected, and empowered to contribute back to Canadian society.',
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
