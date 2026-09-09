import { FacultyMember } from '../types';

export const leadershipTeam: FacultyMember[] = [
  {
    id: 'dr-elena-rostova',
    name: 'Dr. Elena Rostova, Ph.D.',
    role: 'Head of School & Executive Principal',
    department: 'Leadership',
    qualifications: 'Ph.D. in Educational Leadership (Oxford), M.Ed. (Harvard)',
    experienceYears: 24,
    bio: 'With over two decades of transformative leadership across premier international schools in London, Singapore, and Zurich, Dr. Rostova champions intellectual rigor, character formation, and student agency.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    quote: 'True education does not merely fill minds; it ignites an enduring quest to understand, illuminate, and serve the world.'
  },
  {
    id: 'dr-arthur-sterling',
    name: 'Dr. Arthur Sterling, Ph.D.',
    role: 'Deputy Head & Dean of Academic Pedagogy',
    department: 'Leadership',
    qualifications: 'Ph.D. in Curriculum & Instruction (Cambridge), M.Sc. (Stanford)',
    experienceYears: 19,
    bio: 'Dr. Sterling oversees academic standards, faculty development, and the integration of inquiry-led learning frameworks from Kindergarten to Grade 12.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    quote: 'We craft learning environments where questions are celebrated as deeply as answers.'
  },
  {
    id: 'dr-evelyn-montgomery',
    name: 'Dr. Evelyn Montgomery, Ph.D.',
    role: 'Dean of Senior Secondary & Global University Placement',
    department: 'Leadership',
    qualifications: 'Ph.D. in Higher Education Policy (Harvard Graduate School of Education)',
    experienceYears: 16,
    bio: 'Dr. Montgomery directs our bespoke college counseling program, guiding scholars toward admissions at leading Ivy League, Oxbridge, and global universities.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    quote: 'Every student carries a unique intellectual spark; our job is to help the world see it clearly.'
  },
  {
    id: 'mrs-helena-thorne',
    name: 'Mrs. Helena Thorne, M.Sc.',
    role: 'Director of Pastoral Care & Student Wellbeing',
    department: 'Leadership',
    qualifications: 'M.Sc. in Child Psychology & Mental Health (King’s College London)',
    experienceYears: 15,
    bio: 'Mrs. Thorne leads our dedicated counseling team, advisory mentors, and comprehensive safeguarding framework to ensure every student feels known, safe, and valued.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    quote: 'A child who feels emotionally secure and celebrated possesses limitless academic courage.'
  }
];

export const facultyDirectory: FacultyMember[] = [
  ...leadershipTeam,
  {
    id: 'prof-marcus-chen',
    name: 'Prof. Marcus Chen, M.S.',
    role: 'Head of Physics & Robotics Innovation',
    department: 'STEM & Sciences',
    qualifications: 'M.S. in Applied Physics (MIT), B.Eng. in Robotics',
    experienceYears: 14,
    bio: 'Leads our advanced experimental physics laboratories and coaches national robotics champions.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dr-ananya-sen',
    name: 'Dr. Ananya Sen, Ph.D.',
    role: 'Head of Biological Sciences & Biotechnology',
    department: 'STEM & Sciences',
    qualifications: 'Ph.D. in Molecular Genetics (Imperial College London)',
    experienceYears: 12,
    bio: 'Supervises student research in DNA electrophoresis, microbiology, and environmental ecology.',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mr-david-mercer',
    name: 'Mr. David Mercer, M.A.',
    role: 'Head of World Literature & Rhetoric',
    department: 'Humanities & Languages',
    qualifications: 'M.A. in English Literature (Oxford University)',
    experienceYears: 16,
    bio: 'Inspires critical analysis of classical and contemporary world literature, essay composition, and Socratic debate.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'maestro-julian-vance',
    name: 'Maestro Julian Vance',
    role: 'Director of Music & Symphonic Arts',
    department: 'Visual & Performing Arts',
    qualifications: 'Master of Music in Orchestral Conducting (Juilliard School)',
    experienceYears: 20,
    bio: 'Directs the 80-member ABS Youth Symphony Orchestra, Chamber Choirs, and annual musical productions.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'coach-sarah-jenkins',
    name: 'Coach Sarah Jenkins, M.Ed.',
    role: 'Director of Athletics & Physical Education',
    department: 'Physical Education',
    qualifications: 'M.Ed. in Sports Science, Former Olympic Swim Trialist',
    experienceYears: 13,
    bio: 'Oversees 14 varsity athletic sports programs, strength conditioning, and athletic leadership programs.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80'
  }
];

export const boardOfGovernors = [
  { name: 'Lord Henry Kensington', role: 'Chairman of the Board', credentials: 'Former Chancellor, International Education Trust' },
  { name: 'Dr. Sunita Ramanathan', role: 'Vice Chair & Academic Trustee', credentials: 'Professor Emeritus of Pedagogy, National Research Council' },
  { name: 'Mr. Thomas Sterling, FCA', role: 'Chair of Finance & Audit Committee', credentials: 'Senior Partner, Global Advisory & Chartered Accountant' },
  { name: 'Ambassador Claire Dubois', role: 'Trustee for International Relations', credentials: 'Former Diplomat & Cultural Affairs Envoy' },
];
