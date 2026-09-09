import { NavItem } from '../types';

export const navigationData: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    children: [
      { label: 'Our Legacy', href: '/about/legacy' },
      { label: 'Vision, Mission, Motto', href: '/about/vision-mission-motto' },
      { label: "Founder's Message", href: '/about/founder-message' },
      { label: 'Managing Director', href: '/about/managing-director' },
      { label: 'Academic Director', href: '/about/academic-director' },
    ]
  },
  {
    label: 'Campus',
    children: [
      { label: 'Campus Overview', href: '/campus' },
      { label: 'Learning Spaces', href: '/campus/learning-spaces' },
      { label: 'Arts & Creativity', href: '/campus/arts-creativity' },
      { label: 'Sports & Recreation', href: '/campus/sports-recreation' },
      { label: 'Student Life & Common Spaces', href: '/campus/student-life-spaces' },
      { label: 'Wellbeing & Safety', href: '/campus/wellbeing-safety' },
      { label: 'Technology & Innovation', href: '/campus/technology-innovation' },
    ]
  },
  {
    label: 'Academics',
    children: [
      { label: 'Academic Overview', href: '/academics' },
      {
        label: 'Learning Journey',
        href: '/academics/learning-journey',
        children: [
          { label: 'Early Years', href: '/academics/early-years' },
          { label: 'Primary School', href: '/academics/primary' },
          { label: 'Middle School', href: '/academics/middle-school' },
          { label: 'Secondary School', href: '/academics/secondary' },
          { label: 'Senior Secondary', href: '/academics/senior-secondary' },
        ]
      },
      { label: 'Curriculum', href: '/academics/curriculum' },
      { label: 'Teaching & Learning', href: '/academics/teaching-learning' },
      { label: 'Technology & Innovation', href: '/academics/technology-innovation' },
      { label: 'Academic Support', href: '/academics/support' },
      { label: 'Assessment & Progress', href: '/academics/assessment-progress' },
    ]
  },
  {
    label: 'Co-Curricular Activities',
    children: [
      { label: 'Student Life Overview', href: '/student-life', description: 'House system, leadership, clubs & vibrant daily life' },
      { label: 'Arts & Culture', href: '/student-life/arts', description: 'Visual arts, theatre productions, choir & instrumental music' },
      { label: 'Athletics & Sports', href: '/student-life/athletics', description: 'Olympic-standard coaching, fitness & championship teams' },
      { label: 'Innovation & Technology', href: '/student-life/innovation', description: 'Robotics, coding labs, AI incubator & maker spaces' },
      { label: 'Community & Service', href: '/student-life/community', description: 'Social impact, environmental sustainability & outreach' },
    ]
  },
  {
    label: 'Events',
    children: [
      { label: 'Events Overview', href: '/events' },
      { label: 'Upcoming Events', href: '/events/upcoming' },
      { label: 'Featured Events', href: '/events/featured' },
      { label: 'Academic Events', href: '/events/academic' },
      { label: 'Arts & Cultural', href: '/events/arts-cultural' },
      { label: 'Sports Events', href: '/events/sports' },
      { label: 'Community Events', href: '/events/community' },
      { label: 'Annual Calendar', href: '/events/calendar' },
      { label: 'Past Events & Highlights', href: '/events/past-highlights' },
    ]
  },
  {
    label: 'Achievements',
    children: [
      { label: 'All Achievements', href: '/achievements' },
      { label: 'Academic Excellence', href: '/achievements/academic' },
      { label: 'Sports', href: '/achievements/sports' },
      { label: 'Arts & Culture', href: '/achievements/arts-culture' },
      { label: 'Innovation', href: '/achievements/innovation' },
      { label: 'Leadership', href: '/achievements/leadership' },
      { label: 'Student Stories', href: '/achievements/student-stories' },
    ]
  },
  {
    label: 'Alumni',
    children: [
      { label: 'Alumni Network', href: '/alumni' },
    ]
  },
  {
    label: 'Journal',
    children: [
      { label: 'ABS Journal', href: '/journal' },
    ]
  },
];

export const schools = [
  {
    label: 'ABS Group Hub (All Schools)',
    href: null,
    isHub: true,
  },
  {
    label: 'ABS Global Smart School — Korattur (CBSE)',
    href: 'https://www.absglobalsmartschool.com',
  },
  {
    label: 'ABS Global Smart School — Avadi (CBSE)',
    href: 'https://www.absglobalsmartschoolavadi.com',
  },
  {
    label: 'ABS Global Smart School — J.N. Road (CBSE)',
    href: 'https://www.absglobalsmartschooljnroad.com',
  },
  {
    label: 'ABS Vidhya Mandhir — Thiruvallur (CBSE)',
    href: 'https://www.absvidhyamandhir.com',
  },
  {
    label: 'ABS Vidhyaalayaa — Thiruvallur (Matric)',
    href: 'https://www.absvidhyaalayaa.com',
  },
];

export const quickLinks = [
  { label: 'Parent Portal', href: '/portal/parent' },
  { label: 'Student Portal', href: '/portal/student' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Book a Visit', href: '/book-a-visit' },
  { label: 'Admission', href: '/admissions' },
];
