import { AcademicDivision } from '../types';

export const academicDivisions: AcademicDivision[] = [
  {
    id: 'early-years',
    name: 'Early Years',
    slug: 'early-years',
    gradeRange: 'Pre-Kindergarten to Kindergarten',
    ageRange: 'Ages 3 to 5',
    tagline: 'Cultivating wonder, curiosity, and joyful discovery.',
    overview: 'The Early Years at ABS provides a child-centered, play-integrated learning environment designed to nurture foundational cognitive, linguistic, emotional, and motor competencies. In our purpose-built light-filled classrooms, young learners embark on their educational journey with wonder and confidence.',
    philosophy: 'We believe early childhood is not a race to finish worksheets, but a sacred window of neurodevelopmental discovery. Guided by experiential inquiry, sensory integration, and bilingual immersion, our youngest students develop social empathy, creative courage, and foundational mathematical and phonological awareness.',
    curriculumHighlights: [
      {
        title: 'Inquiry-Led Play & Discovery',
        description: 'Guided discovery stations where children experiment with patterns, physics of water/blocks, and nature-based exploration.'
      },
      {
        title: 'Phonemic Awareness & Multilingual Literacy',
        description: 'Multi-sensory phonics, storytelling circles, and rich oral language experiences that build expressive vocabulary.'
      },
      {
        title: 'Mathematical Thinking & Spatial Reasoning',
        description: 'Hands-on manipulatives, spatial puzzles, and everyday problem-solving that anchor core numeracy concepts naturally.'
      },
      {
        title: 'Social-Emotional & Executive Functioning',
        description: 'Cooperative play, self-regulation routines, and mindfulness practices that foster empathy, patience, and collaborative joy.'
      }
    ],
    keySubjects: ['Foundational Literacy & Phonics', 'Early Mathematical Concepts', 'Science of Nature & Senses', 'Expressive Visual Arts', 'Music & Movement', 'Physical Agility & Coordination'],
    coCurricular: ['Junior Nature Explorers', 'Little Rhythm Makers', 'Creative Clay & Sculpt', 'Story Drama & Puppet Play', 'Sensory Gardening'],
    facultyLead: {
      name: 'Ms. Clara Vance, M.Ed.',
      role: 'Head of Early Childhood Development',
      qualifications: 'M.Ed. in Early Childhood Pedagogy (Columbia University)',
      message: 'In Early Years, we don’t just teach subjects; we spark an unquenchable love for learning that lasts a lifetime.'
    },
    dailyRhythm: [
      { time: '08:30 AM', activity: 'Morning Welcome & Sensory Circle' },
      { time: '09:15 AM', activity: 'Phonics, Story Exploration & Language Workshop' },
      { time: '10:15 AM', activity: 'Nutritious Snack & Guided Outdoor Gross Motor Play' },
      { time: '11:00 AM', activity: 'Hands-On Mathematical Inquiry & Science Discovery' },
      { time: '12:00 PM', activity: 'Balanced Lunch & Mindfulness Rest' },
      { time: '01:00 PM', activity: 'Visual Arts, Music & Creative Movement' },
      { time: '02:00 PM', activity: 'Reflection Circle & Departure' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'primary',
    name: 'Primary School',
    slug: 'primary',
    gradeRange: 'Grades 1 to 5',
    ageRange: 'Ages 6 to 10',
    tagline: 'Building solid academic foundations and boundless creative inquiry.',
    overview: 'Primary School at ABS transitions students into structured conceptual mastery across core academic disciplines while retaining dynamic, interdisciplinary curiosity. Students develop critical reading comprehension, mathematical fluency, scientific inquiry, and digital literacy.',
    philosophy: 'Our primary pedagogy balances academic rigor with active, collaborative learning. We foster a growth mindset where students are encouraged to ask deep questions, test hypotheses, and articulate their thoughts through structured debates, scientific experiments, and creative writing.',
    curriculumHighlights: [
      {
        title: 'Integrated STEM & Laboratory Discovery',
        description: 'Weekly hands-on laboratory sessions combining scientific method, basic coding concepts, and design thinking challenges.'
      },
      {
        title: 'Deep Literacy & Critical Reading',
        description: 'Comprehensive literary studies spanning classical children’s literature, non-fiction analytical reading, and creative composition.'
      },
      {
        title: 'Conceptual Mathematics (C-P-A Approach)',
        description: 'Concrete-Pictorial-Abstract methodology ensuring students deeply understand underlying mathematical principles.'
      },
      {
        title: 'Global Perspectives & Cultural Geography',
        description: 'Project-based exploration of world civilizations, environmental ecosystems, and community civic responsibilities.'
      }
    ],
    keySubjects: ['English Language & Advanced Composition', 'Mathematics & Applied Problem-Solving', 'General Sciences (Biology, Chemistry, Physics Basics)', 'Social Studies & Global Civics', 'Second Language (French/Spanish/Regional)', 'Computer Science & Computational Thinking', 'Visual Arts & Choir'],
    coCurricular: ['Primary Robotics League', 'Chess Masters Club', 'Junior Debate Society', 'Eco-Warriors Club', 'Athletic Track & Swimming Academy'],
    facultyLead: {
      name: 'Dr. Arthur Sterling, Ph.D.',
      role: 'Dean of Primary Academics',
      qualifications: 'Ph.D. in Curriculum & Instruction (Oxford University)',
      message: 'Primary years are about building the intellectual scaffolding upon which future academic mastery rests.'
    },
    dailyRhythm: [
      { time: '08:15 AM', activity: 'Assembly & Morning Mindset' },
      { time: '08:45 AM', activity: 'Block 1: Advanced English & Structured Writing' },
      { time: '10:00 AM', activity: 'Block 2: Conceptual Mathematics & Problem Lab' },
      { time: '11:00 AM', activity: 'Recess & Fresh Fruit Refreshment' },
      { time: '11:30 AM', activity: 'Block 3: Integrated Science & Experimental Discovery' },
      { time: '12:45 PM', activity: 'Dining Hall Lunch & Supervised Field Sports' },
      { time: '01:30 PM', activity: 'Block 4: World Languages / Computer Science Lab' },
      { time: '02:30 PM', activity: 'Co-Curricular Clubs & Performing Arts Studios' },
      { time: '03:30 PM', activity: 'Dismissal & After-School Sports Academy' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'middle-school',
    name: 'Middle School',
    slug: 'middle-school',
    gradeRange: 'Grades 6 to 8',
    ageRange: 'Ages 11 to 13',
    tagline: 'Fostering analytical rigor, self-direction, and moral leadership.',
    overview: 'Middle School is an exhilarating bridge from foundational learning to advanced academic specialization. ABS students engage with dedicated subject-specialist faculty, conduct structured laboratory investigations, and tackle complex interdisciplinary research capstones.',
    philosophy: 'Recognizing the developmental transition of early adolescence, we provide an intellectually demanding yet profoundly supportive pastoral environment. We teach students how to synthesize contradictory viewpoints, manage complex schedules, and take intellectual risks.',
    curriculumHighlights: [
      {
        title: 'Subject-Specialist Faculty Model',
        description: 'Dedicated masters and subject experts teaching distinct disciplines in specialized subject labs and seminar rooms.'
      },
      {
        title: 'Interdisciplinary Capstone Research',
        description: 'Annual research projects synthesizing history, science, and ethics presented before faculty panels and external juries.'
      },
      {
        title: 'Algorithmic Thinking & Applied Coding',
        description: 'Python programming, data analysis basics, electronics prototyping, and digital citizenship ethics.'
      },
      {
        title: 'Socratic Seminars & Formal Debate',
        description: 'Structured philosophical and historical discussions developing rhetorical mastery and evidence-based argumentation.'
      }
    ],
    keySubjects: ['Advanced Literature & Rhetoric', 'Pre-Algebra & Geometry', 'Integrated Physics & Chemistry', 'Biological Sciences & Genetics', 'World History & Geopolitics', 'Modern Foreign Languages', 'Computer Science (Python & Data)', 'Visual Arts & Instrumental Ensemble'],
    coCurricular: ['Model United Nations (MUN)', 'FIRST LEGO League Robotics', 'Math Olympiad Circle', 'School Newspaper Editorial Board', 'Competitive Basketball & Tennis'],
    facultyLead: {
      name: 'Mrs. Helena Thorne, M.Sc.',
      role: 'Head of Middle School',
      qualifications: 'M.Sc. in Adolescent Pedagogy (Stanford University)',
      message: 'We guide middle schoolers to transform their natural curiosity into disciplined, analytical, and empathetic scholarship.'
    },
    dailyRhythm: [
      { time: '08:00 AM', activity: 'Tutor Group Advisory & Academic Check-In' },
      { time: '08:30 AM', activity: 'Period 1: Advanced Mathematics / Geometry' },
      { time: '09:30 AM', activity: 'Period 2: Laboratory Science (Physics / Chemistry)' },
      { time: '10:30 AM', activity: 'Morning Break & Campus Café' },
      { time: '10:50 AM', activity: 'Period 3: World Literature & Critical Analysis' },
      { time: '11:50 AM', activity: 'Period 4: World History & Geopolitics' },
      { time: '12:50 PM', activity: 'Lunch, House Meetings & Library Commons' },
      { time: '01:45 PM', activity: 'Period 5: Foreign Language / Python Lab' },
      { time: '02:45 PM', activity: 'Period 6: Arts Studio / Music Ensemble' },
      { time: '03:45 PM', activity: 'Interscholastic Sports Training & Extended Study' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'secondary',
    name: 'Secondary School',
    slug: 'secondary',
    gradeRange: 'Grades 9 to 10',
    ageRange: 'Ages 14 to 15',
    tagline: 'Academic distinction, board examination mastery, and intellectual depth.',
    overview: 'Secondary School at ABS provides intense academic preparation for national and international board examinations while fostering deep scholarly interests. Students hone analytical problem-solving, laboratory precision, and sophisticated written communication.',
    philosophy: 'We cultivate academic tenacity alongside intellectual autonomy. Through intensive tutorials, personalized diagnostic assessments, and mentor-guided study, our students achieve top percentile board results while maintaining vibrant engagement in arts and athletics.',
    curriculumHighlights: [
      {
        title: 'Rigorous Board Examination Framework',
        description: 'Comprehensive mastery of examination syllabi supplemented by deep university-preparatory extension material.'
      },
      {
        title: 'University & Career Guidance Advisory',
        description: 'Early profile building, psychometric interest mapping, and standardized testing strategy consultations.'
      },
      {
        title: 'Advanced Wet & Computational Labs',
        description: 'College-standard equipment in Physics, Chemistry, and Biology facilitating student-led empirical investigations.'
      },
      {
        title: 'Leadership & House System Governance',
        description: 'Opportunities to lead school houses, organize inter-school symposiums, and mentor younger cohorts.'
      }
    ],
    keySubjects: ['English Literature & Academic Composition', 'Advanced Mathematics (Trigonometry & Calculus Intro)', 'Physics (Mechanics & Waves)', 'Chemistry (Organic & Quantitative)', 'Biology (Molecular & Ecology)', 'Economics & Commercial Studies', 'Computer Science (Java/C++)', 'Foreign Language'],
    coCurricular: ['National Science Olympiad Prep', 'ABS Youth Symphony Orchestra', 'Varsity Football & Track', 'Social Entrepreneurship Incubator', 'Competitive Debating Circuit'],
    facultyLead: {
      name: 'Mr. David Mercer, M.A.',
      role: 'Dean of Secondary Studies',
      qualifications: 'M.A. in Educational Leadership (Cambridge University)',
      message: 'Secondary school at ABS builds the resilience and intellectual rigor required for global university success.'
    },
    dailyRhythm: [
      { time: '07:50 AM', activity: 'Morning Assembly & Academic Briefing' },
      { time: '08:20 AM', activity: 'Lecture 1: Pure Mathematics & Calculus Foundations' },
      { time: '09:20 AM', activity: 'Lecture 2: Physics / Organic Chemistry Laboratory' },
      { time: '10:20 AM', activity: 'Academic Break & Faculty Consultation' },
      { time: '10:45 AM', activity: 'Lecture 3: Advanced English Literature & Rhetoric' },
      { time: '11:45 AM', activity: 'Lecture 4: Economics / Computer Science' },
      { time: '12:45 PM', activity: 'Dining Hall Lunch & House Council Meetings' },
      { time: '01:40 PM', activity: 'Lecture 5: Biology / Commercial Studies' },
      { time: '02:40 PM', activity: 'Lecture 6: Foreign Language & Seminar Studies' },
      { time: '03:40 PM', activity: 'Varsity Athletics & Academic Help Desks' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'senior-secondary',
    name: 'Senior Secondary',
    slug: 'senior-secondary',
    gradeRange: 'Grades 11 to 12',
    ageRange: 'Ages 16 to 18',
    tagline: 'Pre-university excellence, specialized mastery, and global vision.',
    overview: 'Senior Secondary at ABS is an elite pre-university academy. With specialized streams in Science (PCM/PCB), Commerce & Finance, and Humanities & Social Sciences, our students prepare for admissions to the world’s top universities and competitive entrance examinations.',
    philosophy: 'We treat our senior secondary scholars as emerging intellectuals and leaders. We provide seminar-style lectures, one-on-one research supervision, personalized university counseling, and extensive past-paper workshops to ensure maximum academic realization.',
    curriculumHighlights: [
      {
        title: 'Specialized Academic Streams',
        description: 'Tailored pathways in Pure & Applied Sciences, Business & Economics, and International Humanities & Law.'
      },
      {
        title: 'Global University Admissions Office (GUAO)',
        description: 'Bespoke counseling for Ivy League, Oxbridge, Russell Group, and premier national university applications.'
      },
      {
        title: 'Advanced Research Fellowship',
        description: 'Publishable research papers written under the mentorship of university professors and visiting scholars.'
      },
      {
        title: 'Executive Student Council & Prefectship',
        description: 'Highest tier of student governance managing major school conventions, budgets, and charitable foundations.'
      }
    ],
    keySubjects: ['Pure & Applied Mathematics', 'Advanced Physics & Quantum Basics', 'Organic & Physical Chemistry', 'Cellular Biology & Biotechnology', 'Micro & Macroeconomics', 'Accountancy & Corporate Finance', 'Political Science & International Relations', 'Psychology & Sociology'],
    coCurricular: ['ABS Investment & Finance Society', 'International MUN Delegation', 'Biotech Research Circle', 'Varsity Cricket & Basketball Captaincy', 'Prefect Guild Leadership'],
    facultyLead: {
      name: 'Dr. Evelyn Montgomery, Ph.D.',
      role: 'Dean of Senior Secondary & University Placement',
      qualifications: 'Ph.D. in Higher Education Policy (Harvard Graduate School of Education)',
      message: 'Our graduates leave ABS not just equipped with stellar grades, but with the character, vision, and poise to shape the future.'
    },
    dailyRhythm: [
      { time: '07:45 AM', activity: 'Senior Common Room & Academic Briefing' },
      { time: '08:15 AM', activity: 'Seminar 1: Advanced Stream Specialization' },
      { time: '09:20 AM', activity: 'Seminar 2: Advanced Laboratory & Empirical Research' },
      { time: '10:25 AM', activity: 'Academic Consultation & Morning Tea' },
      { time: '10:50 AM', activity: 'Seminar 3: Higher Level Mathematics / Quantitative Analysis' },
      { time: '11:55 AM', activity: 'Seminar 4: Humanities / Applied Economics / Computing' },
      { time: '01:00 PM', activity: 'Lunch & University Counseling Advisory' },
      { time: '01:50 PM', activity: 'Independent Research Block & Supervised Library Study' },
      { time: '03:00 PM', activity: 'Leadership Council, Debate Society & Masterclasses' },
      { time: '04:15 PM', activity: 'Competitive Sports, Portfolio Studio & University Prep' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80'
  }
];
