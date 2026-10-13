import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.production' })
dotenv.config({ path: '.env.local' })

async function seedUipAbout() {
  console.log('Seeding UipAboutPage Global into PostgreSQL...')

  const { getPayload } = await import('payload')
  const { default: config } = await import('../../payload.config')

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'uip-about-page' as any,
    data: {
      // TAB 1: HERO
      hero_badge: 'From Survival to Belonging',
      hero_title_line_1: 'Building Safety,',
      hero_title_gradient: 'Pride and Belonging',
      hero_description:
        'A world where LGBTQ+ newcomers, immigrants, and refugees feel safe, supported, and deeply connected — not just surviving, but thriving in a community they can call home.',

      // TAB 2: MISSION & VISION
      mission_badge: 'Our Purpose',
      mission_title: 'Our Mission',
      mission_description:
        'United in Pride creates inclusive, culturally affirming spaces where LGBTQ+ newcomers can heal, build community, access support, and rediscover a sense of belonging.',
      mission_pillars: [
        {
          title: 'Community Building',
          desc: 'Creating safe, culturally affirming spaces where authentic connections flourish.',
        },
        {
          title: 'Healing-Centered',
          desc: 'Providing safe environments for processing trauma and reclaiming dignity.',
        },
        {
          title: 'Advocacy',
          desc: 'Lived-experience leadership guiding programs to strengthen newcomer rights.',
        },
        {
          title: 'National Reach',
          desc: 'A volunteer-led movement supporting queer and trans newcomers across Canada.',
        },
      ],
      vision_title: 'Our Vision',
      vision_description:
        'A Canada where LGBTQ+ people live openly and safely, free from fear, stigma, and isolation and are fully embraced in inclusive communities.',
      vision_tags: [
        { tag: 'Live Safely' },
        { tag: 'Live Openly' },
        { tag: 'Be Celebrated' },
      ],

      // TAB 3: FOUNDER'S JOURNEY (LEADERSHIP)
      leadership_image: null,
      leadership_image_caption_name: 'Stella & Hudson',
      leadership_image_caption_role: 'Founder & Inspiration',
      leadership_title: 'The Founder’s Journey',
      leadership_paragraph_1:
        'Founder Stella Nakitende grew up in Uganda, where being lesbian meant living with fear. Leaving her home was an act of courage. Arriving in Canada brought relief, but also new challenges of isolation and cultural barriers.',
      leadership_paragraph_2:
        'At the heart of United in Pride is Stella’s partner, Hudson, a trans man whose experiences with discrimination and transphobia shaped both their lives. Together, they navigated the emotional weight of migration and identity.',
      leadership_quote:
        'United in Pride exists because I know what it feels like to arrive in a country and still feel alone. My hope is that every queer and trans newcomer can find a community where they feel safe, proud, and truly seen.',
      leadership_quote_author: '— Stella Nakitende, Founder & Executive Director',

      // TAB 4: OUR WHY & VALUES
      why_title: 'Our Why',
      why_items: [
        {
          highlight: 'We Know Rejection.',
          text: 'We built this space because we know what it feels like to be rejected — not just by systems, but by our own families, our churches, our communities.',
        },
        {
          highlight: 'We Know Courage.',
          text: 'We know what it feels like to hide — and we know the courage it takes to stop hiding.',
        },
      ],
      why_quote:
        'United in Pride exists because we believe in something bigger. Queer immigrants deserve more than survival. We deserve to heal. To be loved. To belong.',
      card_1_title: 'Leadership',
      card_1_subtitle: 'Our Foundation',
      card_1_description:
        'United in Pride is founded by Stella Nakitende, a Ugandan lesbian dedicated and committed to empowering 2SLGBTQ+ newcomers, immigrants, and refugees fleeing persecution.',
      card_2_title: 'Growth',
      card_2_subtitle: 'Scaling Our Impact',
      card_2_description:
        'As her impact grows, she is preparing to scale: expanding peer circles, launching new wellness initiatives, and building a dedicated Advisory Board to steward our growth.',
      values_title: 'Our Values',
      values_subtitle: 'The principles that guide everything we do',
      values: [
        {
          title: 'Safety First',
          description: 'Creating secure environments where vulnerability is protected and honored.',
        },
        {
          title: 'Inclusive Community',
          description: 'Welcoming all identities, backgrounds, and experiences without judgment.',
        },
        {
          title: 'Healing Growth',
          description: 'Supporting individual journeys of healing and personal development.',
        },
        {
          title: 'Joy & Celebration',
          description: 'Embracing happiness and celebrating achievements as acts of resistance.',
        },
      ],

      // TAB 5: TEAM BIOS (BOARD MEMBERS)
      team_members: [
        {
          name: 'Winifred Ikilai',
          role: 'Board Member',
          image: null,
          bio: 'Winifred Ikilai is a Canada-based Public Health Proffessional, Social Worker, HIV Activist, and Women and Girls’ Rights Advocate with over 10 years of experience leading community-centered programs in HIV, sexual and reproductive health, mental health, gender equity, housing support, and community development. She holds a Bachelor’s degree in Development Studies from Makerere University, a Postgraduate qualification in International Gender Equality Studies from the University of Iceland and a Master of Public Health specializing in Maternal and Adolescent Health.\n\nCurrently, Winifred serves as the Project Coordinator for the City of Toronto Urban Health Sexual Health Fund under the National Network for Immigrant and Refugee Rights, where she supports initiatives focused on advancing sexual health education, equitable healthcare access, and community empowerment among immigrant and refugee populations. She also works with Neighbours Community Homes, supporting vulnerable and marginalized communities in navigating housing challenges, accessing stable housing, mental health support, and tenant eviction prevention services.\n\nIn addition, she is the Founder and Executive Director of Healthy Empowered and Resilient Initiative (HER-Initiative), an organization empowering immigrant and refugee communities in Canada through settlement support, mental health advocacy, economic empowerment, HIV awareness, and gender-based violence prevention initiatives. Winifred currently serves as a Champion to End Gender-Based Violence among immigrant and refugee communities through the Ontario Council of Agencies Serving Immigrants initiative.',
        },
        {
          name: 'Khaled Salam',
          role: 'Board Member',
          image: null,
          bio: 'Khaled Salam is the Executive Director of the AIDS Committee of Ottawa (ACO).\n\nKhaled has been with ACO for 23 years in various capacities. He has previously provided direct support to people living with HIV, in his capacity as support worker from 2004 to 2007, after which he became Manager of ACO’s support services team from 2007 to 2011. Khaled was hired as the interim Executive Director of ACO in 2011, then as the permanent Executive Director in 2013.\n\nKhaled graduated from Algonquin College in 2003 from the SSW Program and identifies as a member of the BIPOC community.',
        },
        {
          name: 'Saddic Lubega',
          role: 'Board Member',
          image: null,
          bio: 'Saddic Lubega is a Teaching Assistant with Youth Empowering Parents (YEP), a partner organization with Toronto District School Board (tdsb). My passion lies in helping students/learners achieving their goals.\n\nI\'m an African Immigrant with a strong bond for the 2SLGBTIQA+ community where I participate in activities that include supporting newcomers with access to information and resources in starting their new life in Canada 🇨🇦',
        },
        {
          name: 'Marsha Clyne',
          role: 'Board Member',
          image: null,
          bio: 'Marsha Clyne is a nonprofit leader, fundraising strategist, and Founder of True Impact Philanthropy, where she supports charities and grassroots organizations across Canada with fundraising strategy, partnerships, and organizational growth.\n\nWith over 10 years of experience in the nonprofit sector, she has worked with organizations focused on community development, youth empowerment, health, women’s leadership, and equity driven initiatives. Marsha holds a Master’s degree in Philanthropy and Nonprofit Leadership, a Bachelor’s degree in Peace and Conflict Studies, and an Associate degree in Social Communications.\n\nAs a Board Member of United in Pride, she hopes to bring strategic leadership, fundraising expertise, and a strong commitment to building inclusive, empowering, and sustainable support systems for the LGBTQ+ community.',
        },
        {
          name: 'Raymond Gukiina',
          role: 'Board Member',
          image: null,
          bio: 'Raymond Gukiina is a refugee community leader, youth advocate and the Executive Director of the National Network for Immigrants and Refugees– Canada (NNIR-Canada). Work focuses on supporting Black immigrants, refugees and LGBTQI+ communities through culturally responsive programming centered on health equity, youth empowerment, leadership and community engagement. Passionate about creating safe and inclusive spaces that uplift underserved communities and amplify lived experiences through advocacy, dialogue and collaboration.',
        },
        {
          name: 'Coretta Gordon',
          role: 'Board Member',
          image: null,
          bio: 'Coretta Gordon, known to friends as, Corie, is a 1st generation Canadian who\'s parents immigrated to Canada from Jamaica.\n\nShe works as a Financial Management Advisor with a Bachelor\'s in Commerce degree for Accountancy from Concordia University and is currently working towards a Chartered Professional Accountant designation. Corie also has background in Public Relations from McGill University.\n\nAs a lover of the Arts, Corie has a diverse interest including dance, music, fashion, & drawing. She studied piano for 12-years. Her hobbies include doing classical ballet, competing & performing Highland dance, and horseback riding.\n\nShe is a strong proponent & advocate for LGBTQ2+ rights and believes that everyone deserves dignity, respect, safety.',
        },
        {
          name: 'Xtra',
          role: 'Board Member',
          image: null,
          bio: 'Xtra is a force, an electrifying Canadian drag queen whose artistry is rooted in a bold fusion of cultures and African heritage. As a Black African trans woman, she does not just perform femininity, she reclaims it, embodies it, and celebrates it with unapologetic power, sensuality, and grace.\n\nHer journey is one of courage and defiance, rising through adversity, challenging societal norms, and carving out space in a world that too often tries to silence voices like hers. Every step of her story is a testament to resilience, self-love, and the radical act of living authentically.\n\nThrough drag, Xtra transforms the stage into a platform for visibility, liberation, and empowerment. She doesn’t just entertain, she disrupts, she inspires, and she creates space for others, especially those from marginalized communities, to see themselves, to feel seen, and to exist boldly without apology.\n\nWith magnetic energy and a commanding presence, Xtra leaves audiences captivated and transformed, carrying with them a powerful message: to live freely, love deeply, and stand fully in their truth.',
        },
      ],

      // TAB 6: CTA
      cta_title: 'Be Part of Our Story',
      cta_description:
        "Every person who joins our community adds a new chapter to our story of resilience, healing, and hope. Whether you're looking for support, wanting to volunteer, or hoping to contribute to our mission, there's a place for you here.",
      cta_primary_label: 'Join Our Programs',
      cta_primary_link: '/programs',
      cta_secondary_label: 'Support Our Mission',
      cta_secondary_link: '/donate',
    },
  })

  console.log('✅ UipAboutPage Global seeded successfully with 100% of the content!')
  process.exit(0)
}

seedUipAbout().catch((err) => {
  console.error('❌ Error seeding UipAboutPage:', err)
  process.exit(1)
})
