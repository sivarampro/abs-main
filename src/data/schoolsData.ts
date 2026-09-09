export interface SchoolInfo {
  id: string;
  name: string;
  shortName: string;
  category: 'CBSE' | 'Matric';
  badge: string;
  affiliation: string;
  location: string;
  address: string;
  grades: string;
  phone: string[];
  email: string;
  website: string;
  image: string;
  tagline: string;
  description: string;
  highlights: string[];
  stats: { label: string; value: string }[];
}

export const fiveSchoolsData: SchoolInfo[] = [
  {
    id: 'global-korattur',
    name: 'ABS Global Smart School — Korattur',
    shortName: 'Korattur Campus',
    category: 'CBSE',
    badge: 'Global Smart School',
    affiliation: 'Affiliated to CBSE, New Delhi',
    location: 'Korattur, Chennai',
    address: 'No.9, Sriramulu Nagar, Korattur, Chennai - 600 076',
    grades: 'Pre-KG to Class XII',
    phone: ['96001 00011', '96001 00033'],
    email: 'admission@absglobalkt.org',
    website: 'https://www.absglobalsmartschool.com',
    image: '/images/schools/korattur_official.jpg',
    tagline: 'Urban Hub for Innovation, Robotics & Global Learning',
    description: 'Located in Chennai, the Korattur campus integrates futuristic smart digital pedagogy, AI-driven learning tools, maker spaces, and rich cultural arts programs.',
    highlights: [
      'Affiliated to CBSE, New Delhi',
      'Next-Gen AI & Robotics Maker Labs',
      'Interactive Smart Boards in Every Studio',
      'Seamless Bus Transit across Chennai Suburbs'
    ],
    stats: [
      { label: 'Classes', value: 'Pre-KG - XII' },
      { label: 'Board', value: 'CBSE' },
      { label: 'City', value: 'Chennai' },
      { label: 'Focus', value: 'Smart STEM' }
    ]
  },
  {
    id: 'global-avadi',
    name: 'ABS Global Smart School — Avadi',
    shortName: 'Avadi Campus',
    category: 'CBSE',
    badge: 'Global Smart School',
    affiliation: 'Affiliated to CBSE, New Delhi',
    location: 'Avadi, Chennai',
    address: 'Mango Garden, Tonekala Camp Road, Annanur, Avadi, Chennai - 600 109',
    grades: 'Pre-KG to Class XII',
    phone: ['96000 44447', '96001 00055'],
    email: 'admission@absglobalav.org',
    website: 'https://www.absglobalsmartschoolavadi.com',
    image: '/images/schools/avadi_official.jpg',
    tagline: 'Lush Green Sanctuary for Holistic Nurturing',
    description: 'Set amidst serene Mango Garden surroundings in Avadi, offering a peaceful, expansive campus for high intellectual rigor, experiential learning, and athletics.',
    highlights: [
      'Lush Green Orchard Setting in Annanur / Avadi',
      'Comprehensive CBSE Academic Pathway',
      'Multi-Sport Outdoor Grounds & Indoor Pavilion',
      'Parent App Real-Time Updates & Tracking'
    ],
    stats: [
      { label: 'Classes', value: 'Pre-KG - XII' },
      { label: 'Board', value: 'CBSE' },
      { label: 'Setting', value: 'Greenery' },
      { label: 'Environment', value: 'Pure Veg' }
    ]
  },
  {
    id: 'global-jnroad',
    name: 'ABS Global Smart School — JN Road',
    shortName: 'JN Road Campus',
    category: 'CBSE',
    badge: 'Global Smart School',
    affiliation: 'Affiliated to CBSE, New Delhi',
    location: 'JN Road, Thiruvallur',
    address: 'No. 16, JN Road, VM Nagar, Thiruvallur - 602 001',
    grades: 'Pre-KG to Class XII',
    phone: ['95000 63055', '95000 58400'],
    email: 'admission@absglobaljn.org',
    website: 'https://www.absglobalsmartschooljnroad.com',
    image: '/images/schools/jnroad_official.jpg',
    tagline: 'Modern Architectural Hub in the Heart of Thiruvallur',
    description: 'Prime central location on JN Road featuring elegant classical architecture, sophisticated science and language labs, and specialized competitive exam guidance.',
    highlights: [
      'Prime VM Nagar, JN Road Location',
      'CBSE Affiliation with Advanced Digital Pedagogy',
      'Socratic Discussion Rooms & Extensive Library',
      '100% CCTV Security & Safe Dedicated Fleets'
    ],
    stats: [
      { label: 'Classes', value: 'Pre-KG - XII' },
      { label: 'Board', value: 'CBSE' },
      { label: 'Location', value: 'Town Center' },
      { label: 'Security', value: '100% CCTV' }
    ]
  },
  {
    id: 'vidhya-mandhir',
    name: 'ABS Vidhya Mandhir',
    shortName: 'Vidhya Mandhir',
    category: 'CBSE',
    badge: 'A World Class School',
    affiliation: 'Affiliated to CBSE, New Delhi',
    location: 'Thiruvallur',
    address: 'Thalakanchery Road, Iveli Agaram, Thiruvallur - 602 021',
    grades: 'Pre-KG to Class XII',
    phone: ['96000 47651', '96000 53511'],
    email: 'admission@absvidhyamandhir.org',
    website: 'https://www.absvidhyamandhir.com',
    image: '/images/schools/vidhyamandhir_official.jpg',
    tagline: 'CBSE Excellence with World-Class Infrastructure',
    description: 'Premier CBSE institution in Thiruvallur providing comprehensive Pre-KG to Class XII education with state-of-the-art labs, sports grounds, and holistic personality development.',
    highlights: [
      'Pre-KG to Class XII CBSE Curriculum',
      'Smart Digital Classrooms & High-Tech Science Labs',
      '100% CCTV Monitored & Safe Transport Network',
      'Hygienic, Pure Vegetarian Campus Environment'
    ],
    stats: [
      { label: 'Classes', value: 'Pre-KG - XII' },
      { label: 'Affiliation', value: 'CBSE' },
      { label: 'Campus', value: 'Thiruvallur' },
      { label: 'Environment', value: 'Pure Veg' }
    ]
  },
  {
    id: 'vidhyaalayaa',
    name: 'ABS Vidhyaalayaa',
    shortName: 'Vidhyaalayaa',
    category: 'Matric',
    badge: 'Matric Higher Secondary School',
    affiliation: 'Matric Higher Secondary School, Tamil Nadu',
    location: 'Thiruvallur',
    address: 'Thalakanchery Road, Iveli Agaram, Thiruvallur - 602 021',
    grades: 'Class VI to Class XII',
    phone: ['78679 47651', '99400 62555'],
    email: 'admission@absvidhyaalayaa.com',
    website: 'https://www.absvidhyaalayaa.com',
    image: '/images/schools/vidhyaalayaa_official.jpg',
    tagline: 'Empowering Board Exam Success & Athletic Distinction',
    description: 'Specialized Matric Higher Secondary campus delivering stellar academic results, intensive board exam preparation, disciplined coaching, and extensive athletic opportunities.',
    highlights: [
      'Class VI to Class XII Matric Stream',
      'Proven Board Examination Centum Track Record',
      'Expansive Athletic Grounds & Sports Coaching',
      'Competitive Exam Foundation & Guidance'
    ],
    stats: [
      { label: 'Classes', value: 'VI - XII' },
      { label: 'Stream', value: 'Matric' },
      { label: 'Campus', value: 'Thiruvallur' },
      { label: 'Focus', value: 'Excellence' }
    ]
  }
];

export const whatToExpectData = [
  'World Class and student-friendly learning environment',
  'Highly resourceful and dedicated team of teachers',
  'State-of-the-art Infrastructure',
  'Smart Digital classrooms to visualise concepts and enhance learning outcomes',
  'Sophisticated and well-equipped labs',
  'Empowering students for outstanding success in competitive exams and board exams',
  'Campus under 100% CCTV Surveillance',
  'Periodical updates on children progress through parent app, web, SMS, WhatsApp and other modes of communication',
  'Good Transport Facility',
  'Strong value-driven education',
  'Hygienic, well-maintained and pure vegetarian campus',
  'Supportive staffs'
];
