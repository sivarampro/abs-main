export interface NavChild {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

export interface AcademicDivision {
  id: string;
  name: string;
  slug: string;
  gradeRange: string;
  ageRange: string;
  tagline: string;
  overview: string;
  philosophy: string;
  curriculumHighlights: {
    title: string;
    description: string;
  }[];
  keySubjects: string[];
  coCurricular: string[];
  facultyLead: {
    name: string;
    role: string;
    qualifications: string;
    message: string;
  };
  dailyRhythm: {
    time: string;
    activity: string;
  }[];
  heroImage: string;
}

export interface Facility {
  id: string;
  name: string;
  category: 'Academics' | 'STEM' | 'Arts' | 'Athletics' | 'Community' | 'Wellness';
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  specs: {
    capacity?: string;
    size?: string;
    technology?: string;
  };
  hotspot: {
    x: number; // percentage from left
    y: number; // percentage from top
  };
}

export interface StudentLifePillar {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  category: 'arts' | 'athletics' | 'innovation' | 'community' | 'wellbeing';
  description: string;
  highlights: string[];
  programs: {
    name: string;
    description: string;
    frequency: string;
  }[];
  galleryImages: string[];
  heroImage: string;
}

export interface JournalArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: 'Academics' | 'Innovation' | 'Arts & Culture' | 'Campus Life' | 'Leadership';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  heroImage: string;
  tags: string[];
  featured?: boolean;
}

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  formattedDate: string;
  time: string;
  location: string;
  category: 'Academic' | 'Arts' | 'Sports' | 'Admissions' | 'Community';
  excerpt: string;
  description: string;
  image: string;
  isUpcoming: boolean;
  registrationRequired: boolean;
  seatsLeft?: number;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  department: 'Leadership' | 'STEM & Sciences' | 'Humanities & Languages' | 'Visual & Performing Arts' | 'Physical Education' | 'Student Wellbeing';
  qualifications: string;
  experienceYears: number;
  bio: string;
  image: string;
  quote?: string;
}

export interface AdmissionStep {
  stepNumber: number;
  title: string;
  description: string;
  timeline: string;
  requirements: string[];
}

export interface FeeTier {
  gradeRange: string;
  grades: string;
  tuitionPerTerm: string;
  annualTotal: string;
  developmentLevy: string;
  inclusions: string[];
}

export interface Scholarship {
  id: string;
  title: string;
  award: string;
  category: 'Merit' | 'STEM' | 'Arts' | 'Athletics' | 'Need-Based';
  criteria: string[];
  coverage: string;
  deadline: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  cohort: string;
  avatar: string;
  affiliation: 'Parent' | 'Student' | 'Alumni';
}

export interface ApplicationFormData {
  studentFirstName: string;
  studentLastName: string;
  dateOfBirth: string;
  gender: string;
  gradeApplyingFor: string;
  schoolApplyingFor: string;
  academicYear: string;
  currentSchool: string;
  parentName: string;
  parentRelationship: string;
  email: string;
  phone: string;
  city: string;
  statement: string;
  hasSpecialNeeds: boolean;
  specialNeedsDetail?: string;
  howHeard: string;
}

export interface VisitBookingFormData {
  parentName: string;
  email: string;
  phone: string;
  studentGrade: string;
  preferredDate: string;
  preferredTime: string;
  visitorCount: number;
  tourType: 'Private Campus Tour' | 'Open House Morning' | 'Virtual 1-on-1 Consultation';
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  department: string;
  subject: string;
  message: string;
}

export interface SearchItem {
  title: string;
  category: string;
  url: string;
  description: string;
  keywords: string[];
}
