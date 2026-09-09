import { SchoolEvent } from '../types';

export const schoolEvents: SchoolEvent[] = [
  {
    id: 'open-house-autumn-2026',
    title: 'Annual Admissions Open House & Campus Discovery Day',
    date: '2026-10-24',
    formattedDate: 'Saturday, October 24, 2026',
    time: '09:30 AM – 01:30 PM',
    location: 'Main Campus Amphitheatre & Academic Wings',
    category: 'Admissions',
    excerpt: 'An immersive morning for prospective families to tour facilities, meet Deans and educators, and experience sample inquiry classes.',
    description: 'Join the Head of School, Deans of Academics, and current student ambassadors for our flagship Autumn Open House. Prospective parents and students will experience live STEM demonstrations in our laboratories, attend interactive music and art showcases, and gain deep insights into our curriculum frameworks from Early Years to Senior Secondary.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    isUpcoming: true,
    registrationRequired: true,
    seatsLeft: 34
  },
  {
    id: 'stem-ai-symposium-2026',
    title: 'ABS National Student STEM & AI Innovation Symposium',
    date: '2026-11-07',
    formattedDate: 'Saturday, November 7, 2026',
    time: '10:00 AM – 04:30 PM',
    location: 'Innovation Hub & Grand Auditorium',
    category: 'Academic',
    excerpt: 'Student inventors from across the nation present empirical research, robotics prototypes, and AI solutions to a distinguished jury.',
    description: 'The annual ABS STEM & AI Symposium brings together budding scientists, mathematicians, and engineers. Features keynote addresses from renowned university professors, live 48-hour hackathon project demos, autonomous robotics showcases, and paper presentations evaluated by leading industry researchers.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    isUpcoming: true,
    registrationRequired: true,
    seatsLeft: 78
  },
  {
    id: 'symphony-autumn-gala',
    title: 'Annual Grand Autumn Gala & Symphonic Showcase',
    date: '2026-11-21',
    formattedDate: 'Saturday, November 21, 2026',
    time: '06:00 PM – 08:30 PM',
    location: 'Performing Arts Grand Auditorium',
    category: 'Arts',
    excerpt: 'An evening of classical and contemporary orchestral masterpieces performed by the 80-member ABS Youth Symphony & Vocal Choir.',
    description: 'Experience a breathtaking evening of music and theatrical performance. The program features selections from Dvořák, Mozart, contemporary cinema orchestrations, and an original four-part choral cantata composed by ABS Senior Secondary music scholars.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    isUpcoming: true,
    registrationRequired: true,
    seatsLeft: 110
  },
  {
    id: 'interscholastic-aquatics-championship',
    title: 'Regional Interscholastic Swimming Championship',
    date: '2026-12-05',
    formattedDate: 'Saturday, December 5, 2026',
    time: '08:00 AM – 05:00 PM',
    location: 'ABS Olympic-Standard Aquatic Center',
    category: 'Sports',
    excerpt: 'Elite high school swimmers from 24 accredited international schools compete in individual medleys, relays, and sprint heats.',
    description: 'ABS proudly hosts the Regional Interscholastic Swimming Championship at our heated 8-lane 50m competition pool with electronic touch timing. Cheer for our varsity swim squads across freestyle, butterfly, breaststroke, and backstroke events.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    isUpcoming: true,
    registrationRequired: false
  },
  {
    id: 'winter-carnival-community-fundraiser',
    title: 'ABS Winter Charity Fair & Community Festival',
    date: '2026-12-19',
    formattedDate: 'Saturday, December 19, 2026',
    time: '11:00 AM – 06:00 PM',
    location: 'Central Lawn & Sports Pavilion',
    category: 'Community',
    excerpt: 'A joyous campus-wide festival featuring artisan student stalls, international culinary booths, musical acts, and charity auctions.',
    description: 'Organized jointly by the Student Council and Parent-Teacher Association (PTA), all proceeds from the Winter Charity Fair directly benefit rural literacy initiatives and local community healthcare partners. Open to all ABS families and alumni.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80',
    isUpcoming: true,
    registrationRequired: false
  },
  {
    id: 'inter-house-debating-championship',
    title: 'Annual Socratic Parliamentary Debate Championship',
    date: '2027-01-16',
    formattedDate: 'Saturday, January 16, 2027',
    time: '09:00 AM – 03:00 PM',
    location: 'The Knowledge Commons & Central Library',
    category: 'Academic',
    excerpt: 'Four student Houses clash in rigorous parliamentary rounds debating global geopolitical ethics and economic policy.',
    description: 'Our annual Parliamentary Debating Tournament tests rhetoric, empirical research, and quick logical refutation across high school divisions.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    isUpcoming: true,
    registrationRequired: true,
    seatsLeft: 45
  },
  {
    id: 'annual-theatre-spring-production',
    title: 'Shakespeare Under the Stars: The Tempest',
    date: '2027-02-12',
    formattedDate: 'Friday, February 12, 2027',
    time: '06:30 PM – 09:00 PM',
    location: 'Open-Air Amphitheatre',
    category: 'Arts',
    excerpt: 'An immersive outdoor dramatic production featuring original stage craft, live acoustic orchestration, and student actors.',
    description: 'Presented by the ABS Senior Drama Society, Shakespeare’s The Tempest comes to life in our stone amphitheatre with digital projection mapping and live orchestral score.',
    image: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=1200&q=80',
    isUpcoming: true,
    registrationRequired: true,
    seatsLeft: 85
  },
  {
    id: 'track-field-championship-2027',
    title: 'Founder’s Cup Annual Athletic Meet',
    date: '2027-02-27',
    formattedDate: 'Saturday, February 27, 2027',
    time: '07:30 AM – 04:00 PM',
    location: 'Olympic Stadium & 400m Track',
    category: 'Sports',
    excerpt: 'Over 600 student athletes compete in sprint relays, long jump, shot put, and distance running for the coveted House Cup.',
    description: 'A day of high athletic energy and spirit as all four houses compete across 32 track and field disciplines with formal opening march-past.',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
    isUpcoming: true,
    registrationRequired: false
  }
];

export const academicCalendarTerms = [
  {
    term: 'Term 1 (Autumn Semester)',
    dates: 'August 18 – December 18, 2026',
    keyDates: [
      { date: 'Aug 18', event: 'First Day of Academic Classes (Grades 1–12)' },
      { date: 'Sep 05', event: 'Teachers & Mentors Appreciation Gala' },
      { date: 'Oct 12–16', event: 'Mid-Term Break & Faculty In-Service' },
      { date: 'Oct 24', event: 'Annual Admissions Open House' },
      { date: 'Nov 07', event: 'National STEM & AI Innovation Symposium' },
      { date: 'Dec 07–15', event: 'Term 1 Comprehensive Assessment Examinations' },
      { date: 'Dec 19', event: 'Winter Break Commences' }
    ]
  },
  {
    term: 'Term 2 (Spring Semester)',
    dates: 'January 11 – April 09, 2027',
    keyDates: [
      { date: 'Jan 11', event: 'School Resumes for Spring Semester' },
      { date: 'Jan 16', event: 'Inter-House Socratic Debating Championship' },
      { date: 'Feb 12–14', event: 'Annual Spring Drama Production' },
      { date: 'Feb 27', event: 'Founder’s Cup Annual Athletic Meet' },
      { date: 'Mar 15–26', event: 'Mock Board & Pre-University Practicals' },
      { date: 'Apr 09', event: 'Spring Vacation Commences' }
    ]
  },
  {
    term: 'Term 3 (Summer Semester & Commencement)',
    dates: 'April 26 – June 25, 2027',
    keyDates: [
      { date: 'Apr 26', event: 'Final Academic Term Commences' },
      { date: 'May 10–28', event: 'National Board Examinations' },
      { date: 'Jun 12', event: 'Senior Secondary Graduation Commencement Gala' },
      { date: 'Jun 25', event: 'Final Report Cards Issued & Summer Recess' }
    ]
  }
];

export const pastEventHighlights = [
  {
    id: 'past-gala-2025',
    title: 'Silver Jubilee Annual Concert & Philharmonic Gala',
    date: 'December 2025',
    category: 'Arts & Culture',
    highlights: 'Over 1,200 attendees celebrated 25 years of ABS with a 100-piece symphony orchestra and alumni choir reunion.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'past-robotics-2026',
    title: 'International FIRST Robotics Regional Champions',
    date: 'March 2026',
    category: 'Academic & STEM',
    highlights: 'ABS Robotics team "Vanguard 42" took First Place with their autonomous disaster response rover prototype.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'past-athletics-2026',
    title: 'State High School Football Championship Trophy',
    date: 'January 2026',
    category: 'Sports & Athletics',
    highlights: 'ABS Varsity Football Squad clinched the state championship in a thrilling penalty shootout victory.',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80'
  }
];
