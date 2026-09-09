export interface AchievementItem {
  id: string;
  title: string;
  recipient: string;
  grade: string;
  category: 'Academic' | 'Sports' | 'Arts' | 'Innovation' | 'Leadership';
  year: string;
  award: string;
  description: string;
  image: string;
  featured?: boolean;
}

export interface StudentStoryItem {
  id: string;
  studentName: string;
  grade: string;
  title: string;
  category: string;
  story: string;
  quote: string;
  achievementBadge: string;
  image: string;
}

export const achievementsData: AchievementItem[] = [
  {
    id: 'imo-gold-2026',
    title: 'Gold Medal at International Mathematical Olympiad (IMO)',
    recipient: 'Rohan Venkatesh',
    grade: 'Grade 12',
    category: 'Academic',
    year: '2026',
    award: 'International Gold Medalist',
    description: 'Secured a perfect score in number theory and combinatorial geometry among competitors from 108 nations.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'national-swimming-record-2026',
    title: 'National Record & 3x Gold in 100m Butterfly & Freestyle',
    recipient: 'Ananya Sharma',
    grade: 'Grade 11',
    category: 'Sports',
    year: '2026',
    award: 'National High School Record Holder',
    description: 'Broke the 7-year-old national junior record in the 100m Butterfly at the National Aquatic Championships.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'mit-climate-hackathon-2026',
    title: 'First Place Winner: Global Climate Innovation Challenge',
    recipient: 'Arya Sen & Kabir Mehta',
    grade: 'Grade 10',
    category: 'Innovation',
    year: '2026',
    award: 'Global 1st Prize ($15,000 Seed Grant)',
    description: 'Developed an automated IoT low-cost micro-algae carbon capture device piloted across 5 campus buildings.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'carnegie-hall-concerto-2026',
    title: 'Solo Violin Performance Debut at Carnegie Hall',
    recipient: 'Maya Lin',
    grade: 'Grade 11',
    category: 'Arts',
    year: '2026',
    award: 'Young Concert Artists Laureate',
    description: 'Performed Mendelssohn’s Violin Concerto in E minor after winning the International Youth Strings competition.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'harvard-mun-best-delegate-2026',
    title: 'Best Delegate: Harvard World Model United Nations',
    recipient: 'Devansh Kulkarni',
    grade: 'Grade 12',
    category: 'Leadership',
    year: '2026',
    award: 'Gavel Winner (UN Security Council)',
    description: 'Chaired resolution drafts on artificial intelligence sovereignty and peace-keeping protocols with 800+ global delegates.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cbse-national-topper-2026',
    title: '100th Percentile All-India Board Examination Distinction',
    recipient: 'Siddharth Iyer',
    grade: 'Grade 12 (Science Stream)',
    category: 'Academic',
    year: '2026',
    award: 'National Academic Laureate',
    description: 'Achieved 499/500 aggregate with straight 100s in Advanced Mathematics, Physics, Chemistry, and Computer Science.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'state-football-champions-2026',
    title: 'State High School Varsity Football Championship Cup',
    recipient: 'ABS Varsity Football Team',
    grade: 'Grades 9–12',
    category: 'Sports',
    year: '2026',
    award: 'State Champions',
    description: 'Undefeated 14-game streak concluding with a 3-1 victory in the state finals.',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'unesco-young-leader-2026',
    title: 'UNESCO Global Youth Sustainability Ambassador',
    recipient: 'Tara Nambiar',
    grade: 'Grade 11',
    category: 'Leadership',
    year: '2026',
    award: 'UNESCO Youth Ambassador',
    description: 'Mobilized a community clean-river initiative collecting 12 tons of recyclable waste across the municipal river basin.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
  }
];

export const studentStoriesData: StudentStoryItem[] = [
  {
    id: 'rohan-venkatesh-story',
    studentName: 'Rohan Venkatesh',
    grade: 'Grade 12 • Class of 2026',
    title: 'From Solving Puzzles in Primary to the IMO Gold Podium',
    category: 'Academic Excellence & Mathematics',
    story: 'Rohan discovered his passion for proofs during Grade 4 math circles at ABS. Encouraged by faculty mentors who provided university-level problem sets, he spent 6 years researching combinatorial algorithms, culminating in a gold medal for the nation.',
    quote: 'ABS never told me to just follow the textbook syllabus. They gave me the freedom to explore advanced number theory and supported my wildest mathematical hypotheses.',
    achievementBadge: 'IMO Gold Medalist • Admitted to MIT',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ananya-sharma-story',
    studentName: 'Ananya Sharma',
    grade: 'Grade 11 • Varsity Swim Captain',
    title: 'Balancing Olympic Training with Academic Rigor',
    category: 'Sports & Scholar-Athlete',
    story: 'Waking up at 5:00 AM for 20km weekly swim sets in the ABS heated 50m pool, Ananya maintained a straight-A academic average through tailored flexible modular study schedules.',
    quote: 'Being an athlete at ABS doesn’t mean sacrificing scholarship. My teachers coordinated exam blocks around my national trials seamlessly.',
    achievementBadge: 'National Record Holder • 3x Gold',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'maya-lin-story',
    studentName: 'Maya Lin',
    grade: 'Grade 11 • Concertmaster',
    title: 'Finding Harmony: Orchestral Mastery and Visual Arts',
    category: 'Arts & Cultural Distinction',
    story: 'Leading the 80-member ABS Youth Symphony as concertmaster, Maya’s virtuoso violin concerto debut at Carnegie Hall marked a major milestone in her musical journey.',
    quote: 'The acoustics of the Grand Auditorium and the guidance of our music faculty gave me the stage courage to perform on the world’s greatest concert halls.',
    achievementBadge: 'Carnegie Hall Soloist • Juilliard Pre-College',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80'
  }
];
