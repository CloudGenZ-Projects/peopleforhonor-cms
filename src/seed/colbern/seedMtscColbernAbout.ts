import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscColbernAbout() {
  console.log('Seeding MtscColbernAboutPage Global into PostgreSQL with Port Colborne Brief Data...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtsc-colbern-about-page' as any,
    data: {
      // TAB 1: HERO
      hero_eyebrow: 'About Port Colborne',
      hero_title: 'Our Story Along the Welland Canal',
      hero_subtitle:
        'A local expression of an international mission of care, serving people whose work brings them through the Great Lakes.',
      hero_cta_label: 'Meet Our Local Contact',
      hero_cta_link: '#chaplain',
      hero_bg_image: null,

      // TAB 2: STORY BLOCKS (REPLACING DATED TIMELINE)
      history_eyebrow: 'People Behind the Vessels',
      history_title: 'Our Work, Our Community, Our Commitment',
      history_blocks: [
        {
          era: 'OUR PORT',
          title: 'A Community Connected to the Great Lakes',
          paragraphs: [
            {
              text: 'Port Colborne sits where Lake Erie meets the southern entrance to the Welland Canal. This location connects the community directly to the movement of ships and the people who crew them.',
            },
          ],
          image: null,
        },
        {
          era: 'OUR PEOPLE',
          title: 'Seafarers Aboard Visiting Vessels',
          paragraphs: [
            {
              text: 'Seafarers aboard commercial ships and cruise vessels work long days far from home, with limited opportunities to rest, communicate with family, or speak privately about a concern.',
            },
          ],
          image: null,
        },
        {
          era: 'OUR PURPOSE',
          title: 'Welcoming Care Along the Canal',
          paragraphs: [
            {
              text: 'Mission to Seafarers exists to recognise the human side of maritime life. Here in Port Colborne, that purpose is expressed through local chaplaincy, ship visiting, and connections to wider seafarer welfare resources.',
            },
          ],
          image: null,
        },
      ],

      // TAB 3: LEADERSHIP & TEAM
      team_eyebrow: 'Local Leadership',
      team_title: 'Meet Deacon Annette Hoare',
      leader_heading: 'Local Chaplain & Ship Visitor',
      leader_name: 'DEACON ANNETTE HOARE',
      leader_image: null,
      leader_paragraphs: [
        {
          text: 'Deacon Annette Hoare is listed by Mission to Seafarers Southern Ontario as the principal contact for Port Colborne. The international Mission also lists her as a chaplain and ship visitor serving Port Colborne, Port Weller, and Hamilton.',
        },
        {
          text: 'For assistance, pastoral support, or enquiries about visiting ships along the Welland Canal, Annette can be contacted directly by phone at +1 905-328-0300 or by email at revannette@caecc.ca.',
        },
      ],
      team_members: [],

      // TAB 4: REGIONAL LEADERSHIP
      board_title: 'Regional Leadership & Board',
      board_members: [],

      // TAB 5: STRUCTURE & NETWORK
      structure_eyebrow: 'One Mission. Local Presence. Connected Care.',
      structure_title: 'Connected in Purpose Across Canada and Worldwide',
      structure_cards: [
        {
          org_title: 'THE INTERNATIONAL MISSION',
          description:
            'A worldwide maritime welfare network offering practical, emotional and spiritual help to seafarers across 200+ ports.',
        },
        {
          org_title: 'MISSION TO SEAFARERS CANADA',
          description:
            'A national connection among Canadian Mission stations and partners strengthening maritime welfare across the country.',
        },
        {
          org_title: 'MISSION TO SEAFARERS SOUTHERN ONTARIO',
          description:
            'An independent regional welfare organisation serving Toronto, Hamilton, Oshawa and Port Colborne.',
        },
        {
          org_title: 'PORT COLBORNE LOCAL TEAM',
          description:
            'A local chaplaincy point of contact for visiting seafarers along the Welland Canal, led by Deacon Annette Hoare.',
        },
      ],
      structure_bottom_quote:
        'Port Colborne is supported within the wider Southern Ontario network of chaplains, volunteers, and organisational leadership.',

      // TAB 6: CTA BANNER
      cta_title: 'A Port Community That Cares',
      cta_description:
        'Help extend a warm welcome to the people who keep the Great Lakes moving.',
      cta_btn1_label: 'Get Involved',
      cta_btn1_link: '/get-involved',
      cta_btn2_label: 'Contact Us',
      cta_btn2_link: '/contact',
    },
  })

  console.log('✅ MtscColbernAboutPage seeded successfully with Port Colborne Brief Data!')
  process.exit(0)
}

seedMtscColbernAbout().catch((err) => {
  console.error('❌ Failed to seed MtscColbernAboutPage:', err)
  process.exit(1)
})
