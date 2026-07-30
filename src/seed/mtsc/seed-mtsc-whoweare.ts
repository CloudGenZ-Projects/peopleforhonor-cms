import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedMtscWhoWeAre() {
  console.log('Seeding MtscWhoWeArePage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'mtsc-whoweare-page' as any,
    data: {
      // TAB 1: HERO SECTION
      hero_eyebrow: 'About Mission to Seafarers Halifax',
      hero_title: 'A Harbour of Care on Canada’s Atlantic Coast',
      hero_subtitle:
        'For generations, the Port of Halifax has stood as one of Canada’s most important gateways to the world. Ships arrive daily carrying the goods that sustain communities, industries, hospitals, businesses, and families across the country.',

      // TAB 2: OUR STORY TIMELINE
      story_eyebrow: 'Our Story',
      story_title: 'Behind every vessel is a crew.',
      story_description:
        'seafarers who spend months away from home, crossing oceans to keep global trade moving. Mission to Seafarers Halifax exists to ensure that when those seafarers arrive in Halifax, they are not alone.\n\nWhether visiting for only a few hours or several days, many crew members arrive exhausted, isolated, and disconnected from loved ones. Limited shore leave, demanding schedules, and long periods at sea can take a significant emotional and physical toll.\n\nAt our station and through ship visits across Halifax Harbour, we provide a welcoming place where seafarers can rest, reconnect with family, receive practical support, and experience kindness far from home.\n\nSometimes support means helping a crew member make their first video call home in weeks. Sometimes it means offering warm winter clothing after arriving from sea in harsh Atlantic weather. Sometimes it simply means listening.',
      history_blocks: [
        {
          era: 'The Gateway',
          title: 'Why Halifax Matters',
          content:
            'As one of North America’s deepest and most connected Atlantic ports, Halifax plays a vital role in international shipping and global trade. Thousands of seafarers pass through Halifax Harbour each year, helping move cargo and goods between continents and communities.\n\nFor many crews, Halifax may be one of only a few opportunities to step ashore during long voyages.\n\nThat makes this port more than a shipping gateway. It becomes a place of rest, human connection, and care. Mission to Seafarers Halifax helps ensure that seafarers arriving on Canada’s Atlantic coast have access to hospitality, support, and a welcoming community while far from home.',
        },
        {
          era: 'Our Roots',
          title: 'Rooted in Halifax’s Maritime Story',
          content:
            'Halifax has always been shaped by the sea. Its waterfront tells stories of immigration, naval service, shipbuilding, resilience, and global connection. For generations, the harbour has welcomed ships and people from around the world, making Halifax one of Canada’s most historic maritime communities.\n\nMission to Seafarers Halifax continues that tradition of welcome. Today, our station serves seafarers of all nationalities, cultures, and faiths through practical, emotional, and pastoral care rooted in compassion and dignity.\n\nOur work is made possible through volunteers, churches, maritime partners, donors, and community supporters who believe every seafarer deserves kindness, connection, and support during their time in port. While our care begins locally in Halifax, we are proud to be part of Mission to Seafarers Canada and the wider global Mission to Seafarers network supporting seafarers in ports around the world.',
        },
        {
          era: 'The History',
          title: 'From One Chaplain’s Compassion to a Global Mission',
          content:
            'The story of Mission to Seafarers began in 1835 with a simple but powerful act of compassion. While visiting the Bristol Channel in England, a young Anglican clergyman named Rev. John Ashley noticed that seafarers arriving by ship had no one to care for their spiritual or emotional well-being. Moved by their isolation and hardship, he chose to dedicate his life to supporting merchant crews working at sea.\n\nWhat started with one chaplain soon inspired a movement. By 1856, similar ministries joined together under the name The Mission to Seamen Afloat, expanding support across multiple ports. Through world wars, economic hardship, and the evolution of global shipping, the Mission continued to grow and adapt.\n\nToday, Mission to Seafarers supports seafarers in hundreds of ports across more than 50 countries, serving over a million crew members every year. Though the maritime world has changed dramatically over the last century, one thing has remained constant: our commitment to being a source of hope, care, dignity, and human connection for seafarers and their families.',
        },
        {
          era: 'Community',
          title: 'A Community That Continues to Show Up',
          content:
            'The strength of Mission to Seafarers Halifax has always come from the community surrounding it. During the COVID-19 pandemic, when public restrictions forced many fundraising activities and events to pause, support for seafarers never stopped. Volunteers and supporters adapted quickly, organizing take-out dinners, outreach initiatives, and alternative fundraising efforts to ensure seafarers continued receiving care during one of the most isolating periods in modern shipping history.\n\nOne of the most meaningful traditions remains our annual Christmas Shoebox program. Even during the height of the pandemic, volunteers and community supporters came together to distribute more than 1,000 Christmas gifts to seafarers visiting Halifax ports. For many crew members spending the holidays far from home, those gifts became reminders that they had not been forgotten.\n\nThese moments reflect the heart of Mission to Seafarers Halifax: a community choosing to care for the people who keep the world moving.',
        },
      ],

      // TAB 3: OUR IMPACT & SERVICES
      impact_eyebrow: 'Our Impact',
      impact_title: 'Supporting Seafarers in Halifax Today',
      impact_description:
        'Every interaction matters. Volunteers regularly meet crews who have spent months at sea without stepping onto land. Others arrive carrying the stress of uncertain contracts, fatigue, isolation, or the emotional weight of being away from family for extended periods. For many seafarers, even a small moment of kindness can make a lasting difference.',
      services_list: [
        { service_text: 'Friendly ship visits across Halifax Harbour' },
        { service_text: 'Transportation and local guidance' },
        { service_text: 'Wi-Fi and communication support' },
        { service_text: 'Seasonal clothing and essential items' },
        { service_text: 'Refreshments and hospitality' },
        { service_text: 'Emotional and spiritual care' },
        { service_text: 'Seafarers Parcel Pickup Service' },
        { service_text: 'Community connection and advocacy' },
        { service_text: 'Recreational amenities including bikes, billiards, darts, and basketball' },
      ],
      looking_ahead_title: 'Looking Ahead',
      looking_ahead_paragraphs:
        'As Mission to Seafarers Halifax continues to grow, so does our vision for the future. We are building more than a station. We are building a welcoming maritime hub where seafarers can find rest, support, connection, and community while visiting Halifax.\n\nThrough volunteers, partnerships, churches, donors, and national collaboration, we hope to continue expanding services and outreach that respond to the evolving needs of seafarers visiting Canada’s Atlantic coast.',
      looking_ahead_quote:
        'Every donation, volunteer hour, partnership, and act of kindness helps strengthen this mission. Because behind every ship entering Halifax Harbour is a crew of people who deserve to feel seen, valued, and cared for.',

      // TAB 4: STATION LEADERSHIP
      team_eyebrow: 'Station Leadership',
      team_title: 'The People Behind the Welcome',
      team_description:
        'Guided by our Board of Directors and supported by dedicated staff and volunteers, Mission to Seafarers Halifax works to create a welcoming and supportive environment for seafarers visiting Canada’s Atlantic gateway. Whether through ship visits, station hospitality, transportation support, outreach, or simply offering a listening ear, every interaction is rooted in compassion, dignity, and care.',
      leader_1_name: 'HELEN GLENN',
      leader_1_role: 'Mission Manager',
      leader_1_bio:
        'Helen leads Mission to Seafarers Halifax with compassion, warmth, and a deep commitment to the welfare of seafarers visiting the Port of Halifax.\n\nThrough leadership, outreach, volunteer coordination, and community engagement, she helps ensure that every seafarer who connects with the station experiences hospitality, practical support, and a welcoming place of care while ashore.\n\nHelen continues to play an important role in strengthening Halifax’s maritime community and advancing the Mission’s work across the region.',
      leader_2_name: 'Joseph Loot',
      leader_2_role: 'Assistant Manager',
      leader_2_bio:
        'Joseph supports the daily operations of the Halifax Mission and helps create a welcoming environment for seafarers visiting the port. Supporting outreach, station activities, and practical services to ensure seafarers in Halifax receive care, connection, and assistance during their stay. His dedication and calm presence help make the station a trusted place for many visiting crews.',
      volunteers_card_title: 'Our Volunteers',
      volunteers_card_description:
        'Behind every ship visit, warm meal, ride into the city, care package, or friendly conversation is a volunteer helping make it possible.',
      volunteers_active_count: '50+',
      volunteers_hours_count: '1000+',

      // TAB 5: VOLUNTEERS GALLERY & CARE
      gallery_section_title: 'The Heart of the Mission | Our Volunteers',
      gallery_section_description:
        'Behind every ship visit, warm meal, ride into the city, care package, or friendly conversation is a volunteer helping make it possible.\n\nMission to Seafarers Halifax is powered by a compassionate network of volunteers who generously give their time, skills, and energy to support seafarers arriving at the Port of Halifax.\n\nSome volunteers greet seafarers at the station. Others help coordinate transportation, organize seasonal programs, prepare hospitality spaces, assist with outreach, or participate in ship visits across Halifax Harbour.',
      community_care_title: 'A Community of Care',
      community_care_description:
        'Many simply offer something equally meaningful: human connection.\n\nFor crew members who may spend months away from family and home, those moments of kindness and conversation can leave a lasting impact.',
      community_care_subtext:
        'Our volunteers come from diverse backgrounds but share one common purpose: to ensure seafarers visiting Halifax feel welcomed, respected, and supported. Their commitment reflects the spirit of Halifax’s maritime community and the long-standing tradition of caring for those who work at sea.',
      stat_box_1_number: '30+',
      stat_box_1_label: 'Active Volunteers',
      stat_box_1_desc:
        'Supporting ship visits, hospitality, outreach, transportation, and station programs',
      stat_box_2_number: '1,000+',
      stat_box_2_label: 'Volunteer Hours Served',
      stat_box_2_desc: 'Dedicated annually to supporting seafarers visiting Halifax',
      thank_you_title: 'Thank You',
      thank_you_text:
        'To every volunteer, supporter, maritime partner, church community, and donor who helps sustain this mission: thank you. Your compassion and generosity continue to make Mission to Seafarers Halifax a place of welcome, care, and connection for seafarers from around the world.',
      volunteer_cta_title: 'Interested in Volunteering?',
      volunteer_cta_text:
        'Whether you can help occasionally or become part of ongoing outreach efforts, there are many ways to get involved and support seafarers visiting Halifax.',
      volunteer_button_text: 'Volunteer Application',

      // TAB 6: FACILITIES & AMENITIES
      facilities_eyebrow: 'Our Facilities',
      facilities_title: 'Comfort & Care for Seafarers',
      facilities_description:
        'We offer a variety of amenities designed to provide a relaxing and welcoming environment for seafarers arriving in the Port of Halifax.',

      // TAB 7: STRUCTURE & FOOTER CTA
      structure_title: 'How the Structure Works',
      structure_subtitle: 'One Mission. Many Hands. Shared Care.',
      canada_card_title: 'Mission to Seafarers Canada',
      canada_card_text: 'provides the national foundation, leadership, and support.',
      halifax_card_title: 'Mission to Seafarers Halifax',
      halifax_card_text: 'brings that mission to life locally at the Port of Halifax.',
      structure_footer_quote:
        'Together, ensure that every seafarer who comes through Halifax is not only seen, but cared for.',
      structure_button_text: 'Become a Volunteer',
    },
  })

  console.log('🎉 MtscWhoWeArePage Global seeded successfully with 100% of all section-wise content!')
  process.exit(0)
}

seedMtscWhoWeAre().catch((err) => {
  console.error('❌ Error seeding MtscWhoWeArePage:', err)
  process.exit(1)
})
