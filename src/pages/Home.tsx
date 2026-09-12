import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  Building2, 
  Award, 
  Users, 
  Calendar, 
  CheckCircle2, 
  ChevronRight,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  Globe,
  Quote,
  Palette,
  Trophy,
  Cpu,
  Phone,
  Mail,
  ExternalLink,
  Compass,
  Heart,
  Lightbulb,
  Target
} from 'lucide-react';
import { academicDivisions } from '../data/academics';
import { journalArticles } from '../data/journal';
import { schoolEvents } from '../data/events';
import { testimonialsData } from '../data/testimonials';
import { fiveSchoolsData, whatToExpectData } from '../data/schoolsData';
import { EventRSVPModal } from '../components/widgets/EventRSVPModal';
import { ScrollStackedSchools } from '../components/home/ScrollStackedSchools';
import { MovingTickerStrip } from '../components/home/MovingTickerStrip';
import { Typewriter } from '../components/common/Typewriter';
import { FadeIn } from '../components/common/FadeIn';
import { SchoolEvent } from '../types';
import studentJumping from '../assets/images/about/student_jumping.png';
import studentJumpingBoy from '../assets/images/about/student_jumping_boy.png';

export const Home: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<SchoolEvent | null>(null);
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);
  const [activeSchoolId, setActiveSchoolId] = useState<string>('global-korattur');
  const [activeDimension, setActiveDimension] = useState<number>(0);

  const featuredArticle = journalArticles.find(a => a.featured) || journalArticles[0];
  const upcomingEvents = schoolEvents.filter(e => e.isUpcoming).slice(0, 3);

  const activeCampus = fiveSchoolsData.find(s => s.id === activeSchoolId) || fiveSchoolsData[0];

  const fourPillars = [
    {
      number: '01',
      title: 'Holistic Education',
      tagline: 'Intellect & Character in Balance',
      description: 'A comprehensive curriculum integrating rigorous academics with co-scholastic arts, sports, and life skills to develop the whole child.',
      icon: <GraduationCap className="w-6 h-6 text-amber-600" />,
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      number: '02',
      title: 'All-Round Development',
      tagline: 'Physical, Emotional & Social Growth',
      description: 'Cultivating well-rounded personalities through diverse athletic competitions, stage performances, public discourse, and collaborative team endeavors.',
      icon: <Trophy className="w-6 h-6 text-blue-600" />,
      badgeColor: 'bg-blue-100 text-blue-900 border-blue-300'
    },
    {
      number: '03',
      title: 'Value-Driven Education',
      tagline: 'Empathy, Ethics & Indian Heritage',
      description: 'Embedding core moral values and universal ethics into daily pedagogy, shaping responsible, compassionate leaders rooted in cultural values.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    },
    {
      number: '04',
      title: 'Competency-Focused Learning',
      tagline: 'Critical Thinking & Innovation',
      description: 'Fostering problem-solving, digital fluency, scientific inquiry, and creative thinking to empower students for competitive exams and future leadership.',
      icon: <Cpu className="w-6 h-6 text-purple-600" />,
      badgeColor: 'bg-purple-100 text-purple-900 border-purple-300'
    }
  ];

  const dimensions = [
    {
      title: 'Sports',
      subtitle: 'Athletic Discipline & Championship Spirit',
      description: 'Expansive playgrounds, indoor badminton courts, swimming pools, basketball courts, and professional training in 14 competitive sports.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
      highlights: ['Olympic-Standard Swimming Pools', 'FIFA-Grade Football Turf & Cricket Nets', 'Annual Interschool Sports Meet', 'National Athletic Medalists'],
      link: '/achievements/sports'
    },
    {
      title: 'Arts & Culture',
      subtitle: 'Creative Courage & Aesthetic Fluency',
      description: 'Acoustically engineered auditoriums, visual art ateliers, music studios, and classical dance academies celebrating creativity and cultural traditions.',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80',
      highlights: ['Grand Tiered Auditoriums', 'Classical Carnatic & Western Music Suites', 'Pottery, Painting & Sculpting Studios', 'Annual Cultural Fest & Theatricals'],
      link: '/achievements/arts-culture'
    },
    {
      title: 'Innovation',
      subtitle: 'Robotics, Coding & Future Technologies',
      description: 'Dedicated AI & Robotics Maker Labs equipped with 3D printers, IoT microcontrollers, drone arenas, and competitive coding clubs.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80',
      highlights: ['Next-Gen Robotics & STEM Incubators', 'Arduino, Raspberry Pi & Microcontroller Labs', 'National Climate Hackathon Champions', 'AI & App Prototyping Workshops'],
      link: '/achievements/innovation'
    },
    {
      title: 'Leadership',
      subtitle: 'Student Governance & Global Citizenship',
      description: 'Active Student Council bodies, Model United Nations delegations, inter-house debates, and youth leadership symposiums.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80',
      highlights: ['Democratically Elected Student Council', 'Harvard Model UN Top Delegates', 'Public Speaking & Socratic Debates', 'Eco-Club Sustainability Initiatives'],
      link: '/achievements/leadership'
    },
    {
      title: 'Community',
      subtitle: 'Social Impact & Purposeful Service',
      description: 'Cultivating deep social responsibility through village outreach programs, literacy drives, environmental tree planting, and disaster relief.',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80',
      highlights: ['Community Literacy & Book Donation Drives', 'Pure Vegetarian & Eco-Conscious Campuses', 'Blood Donation & Health Camps', 'Solar-Powered Campus Initiatives'],
      link: '/campus/student-life-spaces'
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      {/* ========================================================
          01. HERO SECTION: EDUCATE. ENLIGHTEN. EXCEL.
          ======================================================== */}
      <div className="relative">
        <section className="relative flex items-center justify-center bg-gradient-to-b from-amber-50/50 via-white to-slate-50 pt-10 pb-10 sm:pb-12 overflow-hidden" aria-label="Hero">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-subtle-mesh opacity-80 pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* 3 Floating Schools on the Left Side */}
          {/* School 01 - Korattur (Top Left) */}
          <div 
            className="hidden lg:block absolute left-4 xl:left-16 2xl:left-32 top-8 xl:top-12 w-40 xl:w-48 2xl:w-56 z-20 animate-float-slow pointer-events-auto"
            style={{ ['--photo-rot' as string]: '-6deg' }}
          >
            <a 
              href="#five-schools"
              className="block bg-white p-2 pb-3 rounded-2xl shadow-2xl border border-slate-200/90 transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 mb-1.5 border border-slate-100">
                <img 
                  src="/images/schools/korattur_official.jpg" 
                  alt="ABS Korattur Campus" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-slate-900/85 backdrop-blur-xs text-[9px] xl:text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                  Korattur
                </div>
              </div>
              <div className="flex items-center justify-between px-1">
                <span className="text-[10px] xl:text-[11px] font-bold text-slate-800 tracking-tight">ABS Global Smart</span>
                <span className="text-[9px] xl:text-[10px] font-semibold text-amber-600 uppercase tracking-wider">CBSE</span>
              </div>
            </a>
          </div>

          {/* School 02 - JN Road (Middle Left) */}
          <div 
            className="hidden lg:block absolute left-2 xl:left-8 2xl:left-16 top-[32%] w-36 xl:w-44 2xl:w-52 z-20 animate-float-reverse pointer-events-auto"
            style={{ ['--photo-rot' as string]: '4deg' }}
          >
            <a 
              href="#five-schools"
              className="block bg-white p-2 pb-3 rounded-2xl shadow-2xl border border-slate-200/90 transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 mb-1.5 border border-slate-100">
                <img 
                  src="/images/schools/jnroad_official.jpg" 
                  alt="ABS JN Road Campus" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-slate-900/85 backdrop-blur-xs text-[9px] xl:text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                  JN Road
                </div>
              </div>
              <div className="flex items-center justify-between px-1">
                <span className="text-[10px] xl:text-[11px] font-bold text-slate-800 tracking-tight">ABS Global Smart</span>
                <span className="text-[9px] xl:text-[10px] font-semibold text-amber-600 uppercase tracking-wider">CBSE</span>
              </div>
            </a>
          </div>

          {/* School 03 - Avadi (Bottom Left) */}
          <div 
            className="hidden lg:block absolute left-4 xl:left-20 2xl:left-36 top-[58%] w-40 xl:w-48 2xl:w-56 z-20 animate-float-delay pointer-events-auto"
            style={{ ['--photo-rot' as string]: '-4deg' }}
          >
            <a 
              href="#five-schools"
              className="block bg-white p-2 pb-3 rounded-2xl shadow-2xl border border-slate-200/90 transform -rotate-4 hover:rotate-0 hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 mb-1.5 border border-slate-100">
                <img 
                  src="/images/schools/avadi_official.jpg" 
                  alt="ABS Avadi Campus" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-slate-900/85 backdrop-blur-xs text-[9px] xl:text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                  Avadi
                </div>
              </div>
              <div className="flex items-center justify-between px-1">
                <span className="text-[10px] xl:text-[11px] font-bold text-slate-800 tracking-tight">ABS Global Smart</span>
                <span className="text-[9px] xl:text-[10px] font-semibold text-amber-600 uppercase tracking-wider">CBSE</span>
              </div>
            </a>
          </div>

          {/* 2 Floating Schools on the Right Side */}
          {/* School 04 - Vidhya Mandhir (Top Right) */}
          <div 
            className="hidden lg:block absolute right-4 xl:right-16 2xl:right-32 top-12 xl:top-20 w-44 xl:w-52 2xl:w-60 z-20 animate-float-delay pointer-events-auto"
            style={{ ['--photo-rot' as string]: '5deg' }}
          >
            <a 
              href="#five-schools"
              className="block bg-white p-2 pb-3 rounded-2xl shadow-2xl border border-slate-200/90 transform rotate-5 hover:rotate-0 hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 mb-1.5 border border-slate-100">
                <img 
                  src="/images/schools/vidhyamandhir_official.jpg" 
                  alt="ABS Vidhya Mandhir Campus" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-slate-900/85 backdrop-blur-xs text-[9px] xl:text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                  Vidhya Mandhir
                </div>
              </div>
              <div className="flex items-center justify-between px-1">
                <span className="text-[10px] xl:text-[11px] font-bold text-slate-800 tracking-tight">ABS Vidhya Mandhir</span>
                <span className="text-[9px] xl:text-[10px] font-semibold text-amber-600 uppercase tracking-wider">CBSE</span>
              </div>
            </a>
          </div>

          {/* School 05 - ABS Vidhyaalayaa (Bottom Right) */}
          <div 
            className="hidden lg:block absolute right-6 xl:right-24 2xl:right-40 top-[40%] xl:top-[44%] w-44 xl:w-52 2xl:w-60 z-20 animate-float-slow pointer-events-auto"
            style={{ ['--photo-rot' as string]: '-5deg' }}
          >
            <a 
              href="#five-schools"
              className="block bg-white p-2 pb-3 rounded-2xl shadow-2xl border border-slate-200/90 transform -rotate-5 hover:rotate-0 hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 mb-1.5 border border-slate-100">
                <img 
                  src="/images/schools/vidhyaalayaa_official.jpg" 
                  alt="ABS Vidhyaalayaa Campus" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-slate-900/85 backdrop-blur-xs text-[9px] xl:text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                  ABS Vidhyaalayaa
                </div>
              </div>
              <div className="flex items-center justify-between px-1">
                <span className="text-[10px] xl:text-[11px] font-bold text-slate-800 tracking-tight">ABS Vidhyaalayaa</span>
                <span className="text-[9px] xl:text-[10px] font-semibold text-amber-600 uppercase tracking-wider">Matric</span>
              </div>
            </a>
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            
            {/* Top Heritage & 17 Years Badge */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-300 shadow-xs text-amber-950 text-xs font-bold uppercase tracking-widest mb-6 sm:mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span>Celebrating 17 Years of Academic Excellence</span>
              <span className="text-slate-300">|</span>
              <span className="text-amber-800 font-semibold">Legacy Since 1936</span>
            </div>

            {/* Core Motto */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-950 leading-[1.05] mb-6">
              <span className="block text-slate-900">EDUCATE.</span>
              <span className="block text-amber-500">ENLIGHTEN.</span>
              <span className="block text-slate-900">EXCEL.</span>
            </h1>

            {/* Subtitle Statement */}
            <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 sm:mb-10 font-normal">
              Five premier campuses across Chennai and Thiruvallur united by a shared mission to nurture over 
              <strong className="text-slate-900 font-semibold"> 5,000+ students </strong> 
              with 
              <strong className="text-slate-900 font-semibold"> 450+ dedicated educators</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-12">
              <a
                href="#five-schools"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <span>Explore Our 5 Schools</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/admissions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                <span>Admission Online 2026-27</span>
              </Link>

            </div>

            {/* Group Key Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
              <div className="bg-white/80 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-amber-200/80 shadow-xs text-center flex flex-col items-center justify-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-600 block">17+</span>
                <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mt-1">Years Excellence</span>
              </div>
              <div className="bg-white/80 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-amber-200/80 shadow-xs text-center flex flex-col items-center justify-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-600 block">5</span>
                <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mt-1">Campuses</span>
              </div>
              <div className="bg-white/80 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-amber-200/80 shadow-xs text-center flex flex-col items-center justify-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-600 block">5,000+</span>
                <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mt-1">Students</span>
              </div>
              <div className="bg-white/80 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-amber-200/80 shadow-xs text-center flex flex-col items-center justify-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-600 block">450+</span>
                <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mt-1">Educators</span>
              </div>
              <div className="col-span-2 md:col-span-1 bg-white/80 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-amber-200/80 shadow-xs text-center flex flex-col items-center justify-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-600 block">100%</span>
                <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mt-1">CCTV & Safety</span>
              </div>
            </div>

            {/* Animated Peeking Students in Hero */}
            <div className="absolute left-0 bottom-0 w-full h-0 pointer-events-none z-10">
              <img 
                src={studentJumpingBoy} 
                alt="" 
                className="absolute z-10 w-24 sm:w-32 h-auto animate-peek-boy opacity-90" 
                style={{ transformOrigin: 'bottom center', bottom: '-10px' }}
              />
              <img 
                src={studentJumping} 
                alt="" 
                className="absolute z-10 w-24 sm:w-32 h-auto animate-peek-girl opacity-90" 
                style={{ transformOrigin: 'bottom center', bottom: '-10px' }}
              />
            </div>
          </div>
        </section>

        {/* Elegant Golden Moving Ticker Ribbon attached flush */}
        <MovingTickerStrip />
      </div>

      {/* ========================================================
          02. OUR FIVE SCHOOLS ⭐: Five Schools. One Vision.
          (Scroll-Driven Stacked Cards Experience)
          ======================================================== */}
      <div id="five-schools">
        <ScrollStackedSchools />
      </div>

      {/* ========================================================
          03. ABOUT US: About ABS Group of Schools & Educational Pillars
          ======================================================== */}
      <section className="bg-slate-900 text-white py-20 rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-12" aria-label="About Us">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30 text-xs font-bold uppercase tracking-widest">
              <span>About Us</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              About ABS Group of Schools
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Founded over 17 years ago on the bedrock of <span className="text-amber-400 font-semibold">Educate • Enlighten • Excel</span>, ABS Group of Schools has grown into five premier institutions dedicated to academic rigor, moral character, and lifelong leadership.
            </p>
          </div>



          {/* Founder & Chairman Message Callout Banner */}
          <div className="bg-gradient-to-r from-amber-500/20 via-slate-800 to-amber-500/10 border border-amber-400/30 rounded-3xl p-8 sm:p-10 mt-8 sm:mt-16 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8 space-y-4">
                <Quote className="w-10 h-10 text-amber-400 opacity-60" />
                <blockquote className="font-serif text-xl sm:text-2xl text-white font-medium italic leading-relaxed">
                  "Education should create not just achievers, but empathetic human beings."
                </blockquote>
                <div className="pt-2">
                  <span className="font-serif font-bold text-amber-400 text-lg block">Dr. S. Subramanian</span>
                  <span className="text-xs text-slate-300 uppercase tracking-widest block font-medium">
                    Founder & Chairman • ABS Group of Schools
                  </span>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col items-end justify-end relative">
                {/* Chairman Cutout Image - Breaks out of the banner slightly on desktop and touches the right border */}
                <div className="w-48 sm:w-56 lg:w-72 mt-4 lg:-mt-48 -mr-8 sm:-mr-10 drop-shadow-2xl z-10 pointer-events-none">
                  <img 
                    src="/images/about/chairman.png" 
                    alt="Dr. S. Subramanian" 
                    className="w-full h-auto object-contain object-bottom"
                    style={{ filter: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.3)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.4))' }}
                  />
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 mt-4 w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xl hover:shadow-amber-400/20 z-20"
                >
                  <span>Read Our Legacy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          04. THE LEARNING JOURNEY: Early Years → Senior Secondary
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="The Learning Journey">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-widest">
            <span>The Learning Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            <Typewriter text="Early Years → Senior Secondary" speed={60} />
          </h2>

        </div>

        {/* 5 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {academicDivisions.map((division, idx) => (
            <FadeIn key={division.id} delay={idx * 150} className="h-full">
              <Link
                to={`/academics/${division.slug}`}
                className="h-full bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-4 hover:border-amber-400 hover:shadow-card-hover transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 group-hover:bg-amber-100 group-hover:text-amber-900 transition-colors">
                      Stage 0{idx + 1}
                    </span>
                    <span className="text-[11px] font-semibold text-amber-700">{division.ageRange}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {division.name}
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 block">
                    {division.gradeRange}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {division.overview}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/academics"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-amber-600 transition-colors"
          >
            <span>View Full Learning Journey Curriculum & Pedagogy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Learning & Academic Spaces Gallery */}
        <div className="mt-16 sm:mt-24 border-t border-slate-200/60 pt-16 sm:pt-24">
          <div className="text-center space-y-4 mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Learning & Academic Spaces
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              Step into our vibrant classrooms and academic environments designed to foster collaboration, intellectual curiosity, and focused learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px] sm:auto-rows-[250px]">
            {/* Image 1: Large Feature */}
            <div className="md:col-span-8 md:row-span-2 rounded-2xl overflow-hidden group relative bg-slate-100">
              <img src="/images/learning-spaces/space-1.jpg" alt="Classroom learning environment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Image 2 */}
            <div className="md:col-span-4 rounded-2xl overflow-hidden group relative bg-slate-100">
              <img src="/images/learning-spaces/space-2.jpg" alt="Interactive learning space" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Image 3 */}
            <div className="md:col-span-4 rounded-2xl overflow-hidden group relative bg-slate-100">
              <img src="/images/learning-spaces/space-3.jpg" alt="Academic engagement" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Image 4 */}
            <div className="md:col-span-6 rounded-2xl overflow-hidden group relative bg-slate-100">
              <img src="/images/learning-spaces/space-4.jpg" alt="Digital classroom presentation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Image 5 */}
            <div className="md:col-span-6 rounded-2xl overflow-hidden group relative bg-slate-100">
              <img src="/images/learning-spaces/space-5.jpg" alt="Smart classroom learning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>

        {/* Sports & Recreation Gallery */}
        <div className="mt-16 sm:mt-24 border-t border-slate-200/60 pt-16 sm:pt-24">
          <div className="text-center space-y-4 mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Sports & Recreation
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              State-of-the-art sporting facilities that encourage physical fitness, teamwork, and healthy competition across multiple disciplines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px] sm:auto-rows-[250px]">
            {/* Image 1: Large Feature */}
            <div className="md:col-span-8 md:row-span-2 rounded-2xl overflow-hidden group relative bg-slate-100">
              <img src="/images/sports/sport-1.jpg" alt="Sports and recreation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Image 2 */}
            <div className="md:col-span-4 rounded-2xl overflow-hidden group relative bg-slate-100">
              <img src="/images/sports/sport-2.jpg" alt="Indoor sports facilities" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Image 3 */}
            <div className="md:col-span-4 rounded-2xl overflow-hidden group relative bg-slate-100">
              <img src="/images/sports/sport-3.jpg" alt="Outdoor sports ground" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Image 4 */}
            <div className="md:col-span-6 rounded-2xl overflow-hidden group relative bg-slate-100">
              <img src="/images/sports/sport-4.jpg" alt="Volleyball court" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Image 5 */}
            <div className="md:col-span-6 rounded-2xl overflow-hidden group relative bg-slate-100">
              <img src="/images/sports/sport-5.jpg" alt="Recreation and play area" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          05. MORE THAN A CLASSROOM: 6 Holistic Dimensions
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="More Than A Classroom">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-widest">
            <span>More Than A Classroom</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Sports / Arts / Innovation / Leadership / Community
          </h2>
        </div>

        {/* Interactive 6 Dimensions Tabs */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card p-6 sm:p-10">
          <div className="flex flex-wrap items-center justify-center gap-2 pb-8 border-b border-slate-100">
            {dimensions.map((dim, idx) => (
              <button
                key={dim.title}
                onClick={() => setActiveDimension(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeDimension === idx
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {dim.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
            <div className="lg:col-span-6 relative aspect-video sm:aspect-4/3 rounded-2xl overflow-hidden bg-slate-100">
              <img
                src={dimensions[activeDimension].image}
                alt={dimensions[activeDimension].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950/80 text-white backdrop-blur-xs">
                  {dimensions[activeDimension].title} Spotlight
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                  {dimensions[activeDimension].subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
                  {dimensions[activeDimension].title} at ABS
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {dimensions[activeDimension].description}
                </p>
              </div>

              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                  Key Distinctives:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {dimensions[activeDimension].highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/student-life"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-amber-600 transition-colors"
          >
            <span>Explore All Co-Curricular Activities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ========================================================
          06. OUR CAMPUSES: Five Schools / Five Environments
          ======================================================== */}
      <section className="bg-slate-50 py-20 border-y border-slate-200" aria-label="Our Campuses">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-widest">
              <span>Our Campuses</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              Five Schools / Five Environments
            </h2>

          </div>

          {/* Campus Selector Buttons */}
          <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-2 pb-4 mb-4 sm:grid sm:grid-cols-3 lg:grid-cols-5 sm:gap-3 sm:pb-0">
            {fiveSchoolsData.map((school) => (
              <button
                key={school.id}
                onClick={() => setActiveSchoolId(school.id)}
                className={`snap-center flex-shrink-0 w-[160px] sm:w-auto p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all flex flex-col justify-center sm:justify-between ${
                  activeSchoolId === school.id
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-amber-400'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider block whitespace-nowrap overflow-hidden text-ellipsis ${
                  activeSchoolId === school.id ? 'text-amber-400' : 'text-slate-500'
                }`}>
                  {school.location}
                </span>
                <span className="font-serif font-bold text-sm sm:text-base block mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                  {school.shortName}
                </span>
                <span className={`text-[10px] sm:text-[11px] block mt-0.5 sm:mt-1 ${
                  activeSchoolId === school.id ? 'text-slate-300' : 'text-slate-500'
                }`}>
                  {school.category}
                </span>
              </button>
            ))}
          </div>

          {/* Active Campus Preview Card */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 bg-slate-50 flex flex-col justify-center p-4 sm:p-6 lg:p-0">
                <img
                  src={activeCampus.image}
                  alt={activeCampus.name}
                  className="w-full h-auto object-contain rounded-xl lg:rounded-none lg:rounded-l-3xl shadow-sm lg:shadow-none"
                />
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">
                      {activeCampus.location}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 mt-1">
                      {activeCampus.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">{activeCampus.address}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeCampus.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                      Campus Features:
                    </span>
                    <div className="space-y-1.5">
                      {activeCampus.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                  <a
                    href={activeCampus.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Visit Campus Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* "What to Expect at ABS Group of Schools" Standardized 12 Commitments Grid */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                What to Expect at ABS Group of Schools
              </h3>
              <p className="text-xs text-slate-500">
                Guaranteed educational standards across all five of our campuses
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              {whatToExpectData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-800"
                >
                  <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-4">
            <Link
              to="/campus"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-amber-600 transition-colors"
            >
              <span>View Full Overview of Our Campuses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          07. EVENTS: What's Happening Across ABS
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Events">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-widest">
              <span>Events</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              What's Happening Across ABS
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed">
              From flagship symposiums and theatrical galas to inter-campus athletic meets and parent open houses.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/events/calendar"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Annual Calendar</span>
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>View All Events</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Upcoming Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950">
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1 text-amber-700 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {event.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-600">
                      <MapPin className="w-3.5 h-3.5" />
                      {event.location}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    setSelectedEvent(event);
                    setIsRSVPOpen(true);
                  }}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-amber-400 hover:text-slate-950 text-slate-800 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  RSVP & Reserve Seat
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          08. ACHIEVEMENTS: Excellence Across the Group
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Achievements">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-widest">
            <span>Achievements</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Excellence Across the Group
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-card hover:shadow-card-hover transition-all">
            <div className="p-3 rounded-xl bg-amber-50 text-amber-700 w-fit">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900">Academic Honors</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              100% Board Exam distinction rate with top percentiles in CBSE and Tamil Nadu State Matriculation examinations, plus International Math Olympiad medals.
            </p>
            <Link to="/achievements/academic" className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800">
              <span>View Academic Honors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-card hover:shadow-card-hover transition-all">
            <div className="p-3 rounded-xl bg-blue-50 text-blue-700 w-fit">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900">Athletic Championships</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              State and national swimming records, Interschool Football Cup champions, and district track-and-field gold medals across junior and senior divisions.
            </p>
            <Link to="/achievements/sports" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800">
              <span>View Sports Laurels</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-card hover:shadow-card-hover transition-all">
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 w-fit">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900">Innovation & Maker Awards</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Winners of the Global Youth Climate AI Hackathon, IoT Agri-Tech patents filed by secondary students, and MIT Beaver Works robotics finalists.
            </p>
            <Link to="/achievements/innovation" className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800">
              <span>View Innovation Awards</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/achievements"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>Explore All Achievements & Student Stories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ========================================================
          09. ALUMNI: The Journey Continues
          ======================================================== */}
      <section className="bg-slate-50 py-16 border-y border-slate-200" aria-label="Alumni">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-widest">
              <span>Alumni Network</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              The Journey Continues
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              ABS graduates excel in premier universities worldwide—from IITs, AIIMS, and NITs to Oxford, Stanford, and NUS. Our global alumni network provides mentorship, career insights, and lifelong connection.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="p-4 bg-white rounded-xl border border-slate-200 min-w-[140px]">
                <span className="font-serif text-2xl font-bold text-slate-900 block">50+</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">Top Universities</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 min-w-[140px]">
                <span className="font-serif text-2xl font-bold text-slate-900 block">1,500+</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">Alumni Members</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 min-w-[140px]">
                <span className="font-serif text-2xl font-bold text-slate-900 block">100%</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">Global Support</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          10. COMMUNITY VOICES: Parents / Students / Alumni
          ======================================================== */}
      <section className="bg-slate-900 text-white py-20 rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-12" aria-label="Community Voices">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30 text-xs font-bold uppercase tracking-widest">
              <span>Community Voices</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Parents / Students / Alumni
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Hear authentic experiences from the families, scholars, and graduates who make up the vibrant ABS community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-slate-800/80 border border-slate-700/80 p-8 rounded-2xl flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-amber-400 opacity-60" />
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-700/60">
                  <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 font-serif font-bold flex items-center justify-center text-sm">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <span className="font-bold text-sm text-white block">{item.author}</span>
                    <span className="text-xs text-amber-400 block">{item.role} • {item.cohort}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          11. ABS JOURNAL: Stories & Insights
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="ABS Journal">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-widest">
              <span>ABS Journal</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              Stories & Insights
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed">
              Thought leadership essays on modern pedagogy, student scientific breakthroughs, and the future of school education.
            </p>
          </div>
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>Read ABS Journal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Journal Banner */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            <div className="lg:col-span-7 relative aspect-video lg:aspect-auto h-full min-h-[340px]">
              <img
                src={featuredArticle.heroImage}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-slate-950">
                  Featured Editorial
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="font-semibold text-amber-700 uppercase tracking-wider">{featuredArticle.category}</span>
                <span>•</span>
                <span>{featuredArticle.publishedAt}</span>
                <span>•</span>
                <span>{featuredArticle.readTime}</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-slate-950 leading-snug">
                {featuredArticle.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-2">
                <Link
                  to={`/journal/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-amber-600 transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          12. ADMISSIONS: Find Your Place at ABS
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Admissions">
        <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-slate-950 rounded-3xl p-8 sm:p-14 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-xs">
                <span>Admissions Open 2026-27</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Find Your Place at ABS
              </h2>
              <p className="text-sm sm:text-base text-amber-50 max-w-xl leading-relaxed">
                Admissions are now open across all five ABS campuses for Pre-KG through Class XII. Begin your child's journey toward academic distinction and ethical leadership.
              </p>

              {/* Direct Campus Hotlines */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-950 bg-white/90 p-4 rounded-2xl backdrop-blur-xs">
                <div>
                  <span className="font-bold block text-slate-900">Vidhya Mandhir (CBSE):</span>
                  <span>96000 47651 / 96000 53511</span>
                </div>
                <div>
                  <span className="font-bold block text-slate-900">Vidhyaalayaa (Matric):</span>
                  <span>78679 47651 / 99400 62555</span>
                </div>
                <div>
                  <span className="font-bold block text-slate-900">Korattur Campus (CBSE):</span>
                  <span>96001 00011 / 96001 00033</span>
                </div>
                <div>
                  <span className="font-bold block text-slate-900">Avadi Campus (CBSE):</span>
                  <span>96000 44447 / 96001 00055</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="font-bold block text-slate-900">JN Road Campus (CBSE):</span>
                  <span>95000 63055 / 95000 58400</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3.5">
              <Link
                to="/admissions"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-950 hover:bg-slate-900 text-white rounded-2xl font-bold text-sm uppercase tracking-wider shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Complete Online Application</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex gap-3">
                <Link
                  to="/admissions/fees"
                  className="flex-1 text-center py-2.5 bg-black/15 hover:bg-black/25 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Fee Schedule
                </Link>
                <Link
                  to="/admissions/scholarships"
                  className="flex-1 text-center py-2.5 bg-black/15 hover:bg-black/25 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Scholarships
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RSVP Modal */}
      {selectedEvent && (
        <EventRSVPModal
          isOpen={isRSVPOpen}
          onClose={() => {
            setIsRSVPOpen(false);
            setSelectedEvent(null);
          }}
          event={selectedEvent}
        />
      )}

    </div>
  );
};
