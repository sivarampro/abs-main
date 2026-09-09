import { AdmissionStep, FeeTier, Scholarship } from '../types';

export const admissionSteps: AdmissionStep[] = [
  {
    stepNumber: 1,
    title: 'Submit Online Enquiry / Application',
    description: 'Complete our simple online admission form. Provide basic student academic history, parent contact details, and grade preference.',
    timeline: 'Rolling Admissions / Open Year-Round',
    requirements: ['Student birth certificate', 'Previous 2 years academic report cards', 'Passport / National ID']
  },
  {
    stepNumber: 2,
    title: 'Interactive Assessment & Student Dialogue',
    description: 'Candidates participate in age-appropriate diagnostic evaluations (cognitive, literacy, and numeracy) and a friendly conversational interaction with our academic team.',
    timeline: 'Scheduled within 5 working days of application',
    requirements: ['In-person campus visit or online proctored interaction for overseas applicants']
  },
  {
    stepNumber: 3,
    title: 'Parent & Leadership Consultation',
    description: 'An informal meeting between parents and the Head of School / Division Dean to align educational values, expectations, and student aspirations.',
    timeline: 'Within 3 days post-assessment',
    requirements: ['Both parents/guardians invited to attend']
  },
  {
    stepNumber: 4,
    title: 'Offer of Admission & Enrollment Confirmation',
    description: 'Successful candidates receive an official Letter of Admission. Secure the seat by completing registration formalities and initial term fee settlement.',
    timeline: 'Offers released within 48 hours of final meeting',
    requirements: ['Signed enrollment agreement & fee confirmation']
  }
];

export const feeTiers: FeeTier[] = [
  {
    gradeRange: 'Early Years',
    grades: 'Pre-K & Kindergarten',
    tuitionPerTerm: '$4,200',
    annualTotal: '$12,600',
    developmentLevy: '$1,200 (One-Time)',
    inclusions: ['All sensory learning materials & art supplies', 'Morning organic fruit & wholesome dining lunch', 'Full-time nurse coverage & infirmary access', 'Specialist music & movement classes']
  },
  {
    gradeRange: 'Primary School',
    grades: 'Grades 1 to 5',
    tuitionPerTerm: '$5,400',
    annualTotal: '$16,200',
    developmentLevy: '$1,500 (One-Time)',
    inclusions: ['Textbooks & interactive digital learning licenses', 'STEM laboratory supplies & robotics kits', 'Daily nutritious lunch & sports snacks', 'Swimming, tennis & track coaching']
  },
  {
    gradeRange: 'Middle School',
    grades: 'Grades 6 to 8',
    tuitionPerTerm: '$6,300',
    annualTotal: '$18,900',
    developmentLevy: '$1,800 (One-Time)',
    inclusions: ['Individual 1:1 iPad/Laptop learning management access', 'Specialized wet laboratory reagents & lab coats', 'Symphony orchestra & arts studio materials', 'Interscholastic league entry & referee fees']
  },
  {
    gradeRange: 'Secondary School',
    grades: 'Grades 9 to 10',
    tuitionPerTerm: '$7,200',
    annualTotal: '$21,600',
    developmentLevy: '$2,000 (One-Time)',
    inclusions: ['Board examination registration & diagnostic workshops', 'Advanced physics, chemistry & bio reagents', 'Standardized test prep foundations', 'Career counseling & aptitude profiling']
  },
  {
    gradeRange: 'Senior Secondary',
    grades: 'Grades 11 to 12',
    tuitionPerTerm: '$8,100',
    annualTotal: '$24,300',
    developmentLevy: '$2,200 (One-Time)',
    inclusions: ['Bespoke Global University Admissions (GUAO) counseling', 'Advanced research fellowship supervision & lab access', 'JSTOR, EBSCO, and university research database licenses', 'Senior Common Room privileges & masterclasses']
  }
];

export const scholarshipsData: Scholarship[] = [
  {
    id: 'founders-merit-scholarship',
    title: 'The ABS Founder’s Academic Merit Scholarship',
    award: 'Up to 100% Tuition Remission',
    category: 'Merit',
    criteria: [
      'Top 2 percentile in ABS Academic Diagnostic Evaluation',
      'Consistent grade average of 95%+ or A* equivalent across past 3 years',
      'Exemplary analytical reasoning and critical essay writing demonstration'
    ],
    coverage: '100% or 50% tuition remission renewable annually based on sustained academic distinction.',
    deadline: 'December 15, 2026',
    description: 'Awarded to exceptional young scholars who demonstrate profound intellectual curiosity, academic rigor, and a hunger to excel across STEM and humanities.'
  },
  {
    id: 'turing-stem-innovation-fellowship',
    title: 'Alan Turing STEM & Robotics Fellowship',
    award: '75% Tuition Remission + Research Grant',
    category: 'STEM',
    criteria: [
      'Documented achievements in National/International Science Olympiads, Hackathons, or Robotics competitions',
      'Submission of an original hardware prototype, software application, or empirical research paper',
      'Technical interview with the Head of Physics and Innovation'
    ],
    coverage: '75% tuition fee coverage plus a $2,500 annual lab prototyping grant.',
    deadline: 'January 10, 2027',
    description: 'Designed for visionary young technologists, programmers, and scientific researchers aiming to pioneer solutions for real-world environmental and technological challenges.'
  },
  {
    id: 'olympian-athletic-excellence-award',
    title: 'Olympic Sports & Athletic Excellence Award',
    award: '50% to 75% Tuition Remission + Elite Coaching',
    category: 'Athletics',
    criteria: [
      'State or National level representation in Swimming, Track, Football, Basketball, Badminton, or Tennis',
      'Verified performance timings / match records',
      'Fitness assessment by the ABS Sports Science department'
    ],
    coverage: 'Tuition support, personalized sports nutrition plan, and physiotherapy conditioning.',
    deadline: 'January 20, 2027',
    description: 'Recognizes student-athletes who embody discipline, relentless grit, sportsmanship, and the ambition to compete on the international stage.'
  },
  {
    id: 'da-vinci-fine-performing-arts-endowment',
    title: 'Leonardo da Vinci Visual & Performing Arts Endowment',
    award: '50% Tuition Remission',
    category: 'Arts',
    criteria: [
      'Exceptional portfolio submission (Visual Arts, Photography, Sculpture) OR Grade 7+ ABRSM/Trinity certification in Music/Drama',
      'Live audition or studio portfolio presentation before the Arts Faculty Jury'
    ],
    coverage: '50% tuition fee coverage and dedicated masterclass mentoring.',
    deadline: 'January 15, 2027',
    description: 'Celebrates outstanding musical prodigies, theatrical actors, and visual artists who enrich the aesthetic and cultural tapestry of our campus.'
  }
];

export const admissionsFAQs = [
  {
    question: 'What is the student-to-teacher ratio at ABS?',
    answer: 'ABS maintains an exceptional 8:1 overall student-to-teacher ratio. In Early Years, classroom sizes average 14–16 with 2 certified educators, while in Secondary and Senior Secondary seminar courses average 16–18 students.'
  },
  {
    question: 'Are admissions accepted mid-year or on a rolling basis?',
    answer: 'While our primary intake occurs for the Autumn term (commencing August/September), we accept rolling applications throughout the academic year subject to seat availability in respective grades, especially for relocating international families.'
  },
  {
    question: 'What language support is available for non-native English speakers?',
    answer: 'We provide comprehensive English as an Additional Language (EAL) immersion support led by specialized language acquisition faculty to ensure international students transition seamlessly into mainstream academics.'
  },
  {
    question: 'What transportation facilities does the school provide?',
    answer: 'ABS operates a modern fleet of air-conditioned, GPS-tracked school buses with CCTV monitoring and trained attendants covering all major residential corridors throughout the city.'
  },
  {
    question: 'How do I schedule an in-person or virtual campus tour?',
    answer: 'You can easily reserve your preferred date and time through our online "Book a Visit" portal. We offer personalized private guided tours on weekdays and Saturday Open Houses.'
  }
];
