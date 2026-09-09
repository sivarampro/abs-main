import { Facility } from '../types';

export const campusFacilities: Facility[] = [
  {
    id: 'science-complex',
    name: 'Advanced Science & Research Labs',
    category: 'STEM',
    shortDesc: 'State-of-the-art wet and computational laboratories for Physics, Chemistry, Biology, and Biotech research.',
    fullDesc: 'The ABS Science Complex spans three dedicated wings featuring digital sensors, spectrophotometers, laminar air flow hoods, fume cabinets, and high-precision microscopes. Designed to collegiate research specifications, it empowers students from Grade 6 to 12 to conduct empirical scientific studies.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    features: ['Independent Physics, Chemistry, Biology & Biotech Wings', 'Digital Vernier sensor interface kits', 'Fume hoods with automated ventilation', 'Interactive digital lab smart displays'],
    specs: {
      capacity: '120 Students concurrent',
      size: '14,000 sq.ft.',
      technology: 'Smart digital probes, spectrum analyzers & PCR kits'
    },
    hotspot: { x: 32, y: 38 }
  },
  {
    id: 'central-library',
    name: 'The Knowledge Commons & Central Library',
    category: 'Academics',
    shortDesc: 'A dual-level architectural sanctuary housing 45,000+ print volumes, global digital journals, and quiet pods.',
    fullDesc: 'Bathed in natural daylight through floor-to-ceiling glass facades, the Central Library is the intellectual heart of the campus. It includes silent study carrels, collaborative seminar glass boxes, digital research stations with JSTOR and EBSCO subscriptions, and an inspiring rare books alcove.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    features: ['45,000+ Curated Print Volumes', 'Access to JSTOR, Nature & Oxford Academic databases', 'Acoustic glass discussion pods', 'Dedicated archival & rare research collection'],
    specs: {
      capacity: '250 Readers',
      size: '18,500 sq.ft.',
      technology: 'RFID automated cataloging & self-checkout kiosks'
    },
    hotspot: { x: 50, y: 45 }
  },
  {
    id: 'performing-arts-center',
    name: 'The Grand Auditorium & Performing Arts Center',
    category: 'Arts',
    shortDesc: 'An 850-seat acoustically engineered theatre for theatrical productions, symphonic concerts, and conferences.',
    fullDesc: 'Engineered with professional acoustic damping and an expansive proscenium stage, the Grand Auditorium hosts major annual dramatic plays, youth orchestra concerts, international debates, and graduation commencements. Flanked by green rooms, orchestral pits, and audio-visual recording suites.',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80',
    features: ['850-Seat Tiered Auditorium', 'Motorized fly system & intelligent DMX lighting', 'Surround sound audio mixing console', 'Backstage dressing suites & set workshop'],
    specs: {
      capacity: '850 Seats',
      size: '22,000 sq.ft.',
      technology: '4K laser cinema projection & digital audio recording'
    },
    hotspot: { x: 68, y: 32 }
  },
  {
    id: 'sports-complex',
    name: 'Olympic-Standard Sports Arena & Aquatic Center',
    category: 'Athletics',
    shortDesc: 'Comprehensive athletic facilities including a heated 8-lane 50m pool, indoor hardwood courts, and FIFA-grade turf.',
    fullDesc: 'Spanning over 8 acres of open athletic grounds and a multi-level indoor pavilion, our sports infrastructure supports 14 competitive sports. Features timber-sprung basketball and badminton courts, squash courts, a high-performance fitness conditioning suite, and professional floodlit football grounds.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    features: ['50m Heated Olympic-Standard Swimming Pool', 'FIFA-Standard AstroTurf Football Ground', '4 Indoor Maple Wood Badminton Courts', 'Synthetic 400m 8-Lane Running Track'],
    specs: {
      capacity: '1,500 Spectator Pavilion',
      size: '8 Acres Athletic Grounds',
      technology: 'Electronic touch-pad timing & video analysis software'
    },
    hotspot: { x: 80, y: 65 }
  },
  {
    id: 'robotics-makerspace',
    name: 'Robotics & AI Innovation Hub',
    category: 'STEM',
    shortDesc: 'Next-gen prototyping studio with 3D printers, laser cutters, drone testing cages, and IoT microcontrollers.',
    fullDesc: 'The Innovation Hub is where student ideas turn into tangible prototypes. Equipped with industrial-grade 3D printers, CNC routers, laser cutters, VR headsets, and automated testing rigs, students solve real-world problems through robotics, IoT automation, and software engineering.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    features: ['Industrial 3D Printing & CNC Prototyping Array', 'Dedicated Drone Testing Arena', 'Arduino, Raspberry Pi & ESP32 Microcontroller Wall', 'VR/AR Immersive Simulation Stations'],
    specs: {
      capacity: '60 Inventors concurrent',
      size: '8,000 sq.ft.',
      technology: 'High-speed fiber network & dual-boot GPU developer rigs'
    },
    hotspot: { x: 25, y: 60 }
  },
  {
    id: 'visual-arts-studios',
    name: 'Fine Arts & Ceramics Studios',
    category: 'Arts',
    shortDesc: 'Naturally lit creative ateliers for painting, sculpture, ceramic kilns, printmaking, and digital graphic design.',
    fullDesc: 'With panoramic north-facing skylights, the Fine Arts Studios provide serene spaces for creative expression. Students work with ceramics, pottery wheels, kiln firing, oil painting, traditional printmaking presses, and digital drawing tablets for 2D/3D animation.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80',
    features: ['Pottery wheels & electric ceramic kiln', 'Etching and lithography printmaking presses', 'Wacom Cintiq professional digital drawing stations', 'Student exhibition art gallery walkway'],
    specs: {
      capacity: '80 Artists',
      size: '7,500 sq.ft.',
      technology: 'Professional graphic design software & high-res scanners'
    },
    hotspot: { x: 45, y: 72 }
  },
  {
    id: 'smart-classrooms',
    name: 'Smart Collaborative Classrooms',
    category: 'Academics',
    shortDesc: 'Ergonomically designed, climate-controlled interactive learning studios with active acoustic management.',
    fullDesc: 'ABS classrooms depart from traditional rows. Modular furniture reconfigures seamlessly for seminar debates, small group problem-solving, or individual deep work. Every studio features 86-inch 4K interactive touch panels, dual writing surfaces, and natural daylight circadian lighting.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    features: ['86-inch 4K Interactive Touch Panels', 'Flexible modular acoustic furniture', 'Circadian-adjusted LED daylighting', 'Integrated high-fidelity audio system'],
    specs: {
      capacity: '24 Students per studio max',
      size: '850 sq.ft. per studio',
      technology: 'Wireless presentation casting & digital whiteboards'
    },
    hotspot: { x: 55, y: 22 }
  },
  {
    id: 'wellness-center',
    name: 'Health & Pastoral Wellness Pavilion',
    category: 'Wellness',
    shortDesc: 'Full-time medical infirmary staffed by certified nurses and tranquil pastoral counseling suites.',
    fullDesc: 'The Wellness Pavilion ensures the physical and emotional safety of every child. It includes a 6-bed medical observation ward, immediate emergency triage, certified registered nurses on duty throughout the school day, and confidential, soothing rooms for school counselors.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    features: ['24/7 Registered Nursing Staff & On-Call Physician', 'Emergency medical triage & AED stations', 'Confidential individual counseling pods', 'Sensory calm-down garden'],
    specs: {
      capacity: '6 Observation Beds',
      size: '4,000 sq.ft.',
      technology: 'Digital health record management system'
    },
    hotspot: { x: 70, y: 80 }
  }
];

export const campusStats = [
  { label: 'Campus Size', value: '25 Acres', description: 'Eco-friendly lush landscaped grounds' },
  { label: 'Specialized Labs', value: '18 Labs', description: 'STEM, Robotics, AI, Media & Languages' },
  { label: 'Library Volumes', value: '45,000+', description: 'Print volumes & global digital database access' },
  { label: 'Solar Powered', value: '65%', description: 'Renewable energy generated on campus' },
];
