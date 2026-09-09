export interface StudentProfile {
  id: string;
  name: string;
  grade: string;
  rollNo: string;
  section: string;
  house: string;
  attendancePercent: number;
  gpa: string;
  advisor: string;
  avatar: string;
}

export const mockStudent: StudentProfile = {
  id: 'STU-2026-0842',
  name: 'Maya Ramanathan',
  grade: 'Grade 10 (Secondary)',
  rollNo: 'ABS-10-A-18',
  section: 'Section Alpha',
  house: 'Phoenix House (Gold)',
  attendancePercent: 96.8,
  gpa: '3.94 / 4.0 (A*)',
  advisor: 'Dr. Arthur Sterling',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
};

export const mockHomework = [
  {
    id: 'hw-1',
    subject: 'Advanced Physics',
    title: 'Electromagnetic Wave Propagation & Maxwell Equations Problem Set',
    dueDate: 'Tomorrow, 11:59 PM',
    status: 'Pending',
    teacher: 'Prof. Marcus Chen',
    points: '20 Pts'
  },
  {
    id: 'hw-2',
    subject: 'English Literature',
    title: 'Critical Essay on Socratic Irony in Plato’s Republic (1,200 words)',
    dueDate: 'Thursday, 05:00 PM',
    status: 'Submitted',
    teacher: 'Mr. David Mercer',
    points: '100 Pts'
  },
  {
    id: 'hw-3',
    subject: 'Cellular Biology',
    title: 'Microscopic Analysis Report on Mitosis in Plant Root Tips',
    dueDate: 'Friday, 11:59 PM',
    status: 'Pending',
    teacher: 'Dr. Ananya Sen',
    points: '50 Pts'
  },
  {
    id: 'hw-4',
    subject: 'Pure Mathematics',
    title: 'Differential Calculus & Rate of Change Chapter 7 Exercises',
    dueDate: 'Yesterday',
    status: 'Graded (98/100)',
    teacher: 'Dr. Arthur Sterling',
    points: '100 Pts'
  }
];

export const mockResults = [
  { subject: 'Pure & Applied Mathematics', term1: '96%', term2: '98%', grade: 'A*', remarks: 'Exceptional mathematical rigor and proof construction.' },
  { subject: 'Advanced Physics (Honors)', term1: '92%', term2: '95%', grade: 'A*', remarks: 'Outstanding experimental lab execution and conceptual clarity.' },
  { subject: 'Organic & Physical Chemistry', term1: '94%', term2: '96%', grade: 'A*', remarks: 'Precise quantitative analysis and thorough writeups.' },
  { subject: 'World Literature & Rhetoric', term1: '91%', term2: '94%', grade: 'A*', remarks: 'Insightful critical analysis and eloquent debate contributions.' },
  { subject: 'Computer Science & AI Algorithms', term1: '98%', term2: '99%', grade: 'A*', remarks: 'Pioneering work in neural network project assignment.' },
  { subject: 'French Language Immersion', term1: '89%', term2: '92%', grade: 'A', remarks: 'Strong oral fluency and expressive written comprehension.' },
];

export const mockTimetable = [
  { time: '08:00 - 09:00', mon: 'Mathematics', tue: 'Physics Lab', wed: 'English Lit', thu: 'Computer Sci', fri: 'Chemistry' },
  { time: '09:00 - 10:00', mon: 'Physics', tue: 'Mathematics', wed: 'Biology', thu: 'World History', fri: 'Mathematics' },
  { time: '10:00 - 10:30', mon: 'Break / Café', tue: 'Break / Café', wed: 'Break / Café', thu: 'Break / Café', fri: 'Break / Café' },
  { time: '10:30 - 11:30', mon: 'Chemistry', tue: 'English Lit', wed: 'French', thu: 'Mathematics', fri: 'Physics' },
  { time: '11:30 - 12:30', mon: 'Computer Sci', tue: 'French', wed: 'Physics', thu: 'Chemistry Lab', fri: 'French' },
  { time: '12:30 - 01:30', mon: 'Lunch & House', tue: 'Lunch & House', wed: 'Lunch & House', thu: 'Lunch & House', fri: 'Lunch & House' },
  { time: '01:30 - 02:30', mon: 'Biology Lab', tue: 'World History', wed: 'Mathematics', thu: 'Symphony / Arts', fri: 'Library Study' },
  { time: '02:30 - 03:30', mon: 'Orchestra', tue: 'Varsity Sports', wed: 'Robotics Club', thu: 'Varsity Sports', fri: 'House Assembly' },
];

export const mockCirculars = [
  {
    id: 'circ-1',
    date: 'October 14, 2026',
    title: 'Mid-Term Comprehensive Academic Progress Reports & Parent Consultation Schedule',
    category: 'Academics',
    urgent: true,
    fileSize: '1.4 MB PDF'
  },
  {
    id: 'circ-2',
    date: 'October 08, 2026',
    title: 'Arrangements for Annual Inter-School Science & AI Symposium and 48-Hour Hackathon',
    category: 'Events',
    urgent: false,
    fileSize: '820 KB PDF'
  },
  {
    id: 'circ-3',
    date: 'September 29, 2026',
    title: 'Term 2 Bus Transportation Route Optimization & Enhanced GPS Safety Notification',
    category: 'Logistics',
    urgent: false,
    fileSize: '650 KB PDF'
  },
  {
    id: 'circ-4',
    date: 'September 20, 2026',
    title: 'Senior Secondary Global University Admissions Fair: 45 Visiting Universities',
    category: 'University Guidance',
    urgent: true,
    fileSize: '2.1 MB PDF'
  }
];

export const mockFeeLedger = [
  { term: 'Term 1 (Autumn 2026)', amount: '$7,200', dueDate: 'Paid (Aug 15, 2026)', status: 'Paid', receiptId: 'ABS-REC-2026-8941' },
  { term: 'Term 2 (Spring 2027)', amount: '$7,200', dueDate: 'Dec 15, 2026', status: 'Due Soon', receiptId: 'ABS-INV-2026-9014' },
  { term: 'Term 3 (Summer 2027)', amount: '$7,200', dueDate: 'Apr 15, 2027', status: 'Upcoming', receiptId: 'ABS-INV-2027-1045' },
];

export const mockTeacherMessages = [
  {
    id: 'msg-1',
    from: 'Prof. Marcus Chen',
    subject: 'Feedback on Maya’s Electromagnetic Lab Report',
    date: 'Yesterday, 04:15 PM',
    unread: true,
    preview: 'Maya’s experimental apparatus setup and statistical error analysis were exemplary. I have encouraged her to consider submitting this to the youth journal...'
  },
  {
    id: 'msg-2',
    from: 'Dr. Arthur Sterling',
    subject: 'Tutor Advisory Monthly Check-in Summary',
    date: 'Oct 10, 2026',
    unread: false,
    preview: 'Maya continues to demonstrate remarkable intellectual maturity and is taking an active role in mentoring younger peers during mathematics clinics...'
  }
];
