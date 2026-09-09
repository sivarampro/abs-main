import { StudentLifePillar } from '../types';

export const studentLifePillars: StudentLifePillar[] = [
  {
    id: 'arts',
    title: 'Arts & Culture',
    slug: 'arts',
    category: 'arts',
    tagline: 'Unleashing imagination, artistic discipline, and aesthetic expression.',
    description: 'At ABS, the arts are integral to intellectual and emotional growth. Whether through classical orchestral ensembles, experimental visual arts, dramatic productions, or contemporary dance, our students discover their creative voice and gain lifelong cultural fluency.',
    highlights: [
      'Annual Broadway-scale Musical & Theatre Festival in our 850-seat auditorium',
      'ABS Symphony Orchestra, Junior Choir, and String Quartet with international tour opportunities',
      'Juried Annual Fine Arts & Sculpture Exhibition featured in professional galleries',
      'Ceramics, pottery, digital animation, and studio photography masterclasses'
    ],
    programs: [
      { name: 'Symphony & Chamber Ensembles', description: 'Comprehensive training in strings, woodwinds, brass, and percussion under visiting concertmasters.', frequency: '3 times / week' },
      { name: 'Dramatic Arts & Playwriting Guild', description: 'Acting technique, stagecraft, scriptwriting, and lighting design culminating in public performances.', frequency: 'Bi-weekly studios' },
      { name: 'Ceramics & Classical Sculpting', description: 'Wheel throwing, glaze chemistry, hand-building techniques, and kiln firing.', frequency: 'Weekly workshop' },
      { name: 'Digital Media & Contemporary Animation', description: 'Graphic design, digital illustration, 2D vector animation, and video editing suites.', frequency: 'Weekly lab' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80'
    ],
    heroImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'athletics',
    title: 'Athletics & Sports',
    slug: 'athletics',
    category: 'athletics',
    tagline: 'Fostering grit, sportsmanship, physical vitality, and teamwork.',
    description: 'Physical education at ABS instills discipline, resilience, and lifelong healthy habits. With world-class Olympic-standard athletic infrastructure and certified national coaches, our varsity teams compete at regional, national, and international inter-school championships.',
    highlights: [
      'Olympic-standard 50m heated pool with aquatic coaching from beginners to national qualifiers',
      'FIFA-standard turf football stadium, floodlit basketball and tennis courts',
      'Dedicated strength & conditioning coaches, sports nutritionist, and physiotherapist',
      'Annual Interscholastic Sports Gala featuring 14 competitive athletic disciplines'
    ],
    programs: [
      { name: 'Varsity Football & Soccer Academy', description: 'Tactical play, endurance conditioning, and competitive league participation.', frequency: 'Daily afternoon training' },
      { name: 'Competitive Swimming Squad', description: 'Stroke mechanics, interval training, and timing analysis for competitive swim meets.', frequency: 'Morning & evening sessions' },
      { name: 'Basketball & Badminton Centers of Excellence', description: 'Court agility, offensive/defensive strategies, and tournament circuits.', frequency: '4 sessions / week' },
      { name: 'Track & Field Athletics Academy', description: 'Sprint mechanics, middle distance, hurdles, high jump, and relay coordination.', frequency: '3 sessions / week' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80'
    ],
    heroImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'innovation',
    title: 'Innovation & Technology',
    slug: 'innovation',
    category: 'innovation',
    tagline: 'Pioneering tomorrow through robotics, AI, and design thinking.',
    description: 'We believe education must empower students to be creators, not mere consumers, of technology. In our dedicated Maker Spaces and AI incubator, ABS students learn coding, electronics, robotics, machine learning fundamentals, and sustainable green design.',
    highlights: [
      'State-of-the-art Makerspace with 3D printers, laser cutters, CNC routers, and VR stations',
      'FIRST LEGO League and VEX Robotics competition teams winning regional accolades',
      'AI & Machine Learning incubator teaching ethical programming and predictive models',
      'Annual ABS 48-Hour Hackathon solving civic and ecological challenges'
    ],
    programs: [
      { name: 'Robotics & Mechatronics Lab', description: 'Building autonomous robots, sensor integration, PID tuning, and gear trains.', frequency: 'Twice / week' },
      { name: 'AI & Data Science Incubator', description: 'Python algorithms, neural network fundamentals, and ethical considerations in AI.', frequency: 'Weekly masterclass' },
      { name: 'Hardware Prototyping & 3D Fabrication', description: 'CAD modeling in Fusion 360, rapid 3D printing, and PCB soldering.', frequency: 'Open lab daily' },
      { name: 'Cybersecurity & Ethical Hacking', description: 'Network defense, encryption protocols, and digital privacy safety frameworks.', frequency: 'Weekly seminar' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
    ],
    heroImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'community',
    title: 'Community & Social Impact',
    slug: 'community',
    category: 'community',
    tagline: 'Leading with empathy, global citizenship, and purposeful action.',
    description: 'At ABS, excellence is inseparable from social responsibility. Our students actively engage with local and global communities through service learning, reforestation drives, peer tutoring, and social entrepreneurship initiatives that make an enduring positive difference.',
    highlights: [
      'Over 25,000+ collective student service hours completed annually',
      'Direct partnerships with rural literacy foundations and local community shelters',
      'Student-run Eco-Sustainability Council managing campus solar, water harvesting & composting',
      'Model United Nations (MUN) delegations participating in international conferences'
    ],
    programs: [
      { name: 'ABS Community Outreach Initiative', description: 'Weekend literacy mentoring, book distribution drives, and community health camps.', frequency: 'Bi-weekly outreach' },
      { name: 'Zero-Waste & Green Campus Council', description: 'Rainwater harvesting audits, micro-forest planting, and energy reduction campaigns.', frequency: 'Weekly action sessions' },
      { name: 'Social Venture Incubator', description: 'Student-led micro-enterprises creating sustainable products with proceeds aiding local charities.', frequency: 'Monthly board review' },
      { name: 'International Model UN (MUN)', description: 'Simulations of global diplomacy, resolution drafting, and international conflict resolution.', frequency: 'Weekly caucus' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
    ],
    heroImage: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'wellbeing',
    title: 'Wellbeing & Safety',
    slug: 'wellbeing',
    category: 'wellbeing',
    tagline: 'Ensuring psychological safety, mental wellness, and comprehensive safeguarding.',
    description: 'We believe that thriving academic excellence is rooted in emotional equilibrium and psychological safety. ABS maintains a robust pastoral care infrastructure, certified child psychologists, proactive anti-bullying protocols, and strict campus security measures.',
    highlights: [
      'Dedicated pastoral tutor for every group of 12 students for daily personal mentoring',
      'Full-time licensed child psychologists and confidential counseling suites',
      'Comprehensive safeguarding policies with ISO-certified campus security and digital access gates',
      'Mindfulness and emotional resilience curriculum woven into daily student schedules'
    ],
    programs: [
      { name: 'Advisory & Pastoral Mentorship', description: 'Daily morning check-in, goal setting, emotional self-check, and personal guidance.', frequency: 'Every morning' },
      { name: 'Mental Health & Mindfulness Workshops', description: 'Stress management, exam anxiety coping mechanisms, and positive psychology practices.', frequency: 'Bi-weekly workshops' },
      { name: 'Safeguarding & Cyber Safety', description: 'Digital footprint awareness, cyberbullying prevention, and anonymous student reporting hotline.', frequency: 'Ongoing framework' },
      { name: 'Physical Nutrition & Health Audits', description: 'Balanced chef-crafted cafeteria meals, hydration tracking, and annual health screenings.', frequency: 'Daily / Termly' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80'
    ],
    heroImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80'
  }
];

export const schoolHouses = [
  { name: 'Orion House', color: 'bg-blue-600', text: 'text-blue-600', motto: 'Wisdom & Precision', emblem: 'Star Constellation' },
  { name: 'Phoenix House', color: 'bg-amber-500', text: 'text-amber-500', motto: 'Resilience & Renewal', emblem: 'Rising Firebird' },
  { name: 'Pegasus House', color: 'bg-emerald-600', text: 'text-emerald-600', motto: 'Courage & Harmony', emblem: 'Winged Steed' },
  { name: 'Centaur House', color: 'bg-rose-700', text: 'text-rose-700', motto: 'Tenacity & Honor', emblem: 'Noble Archer' },
];
