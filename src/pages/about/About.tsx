import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { 
  Sparkles, 
  Eye, 
  Target, 
  Award, 
  ShieldCheck, 
  HeartHandshake, 
  Compass, 
  Users, 
  Building2, 
  GraduationCap, 
  ArrowRight,
  ChevronRight,
  BookOpen,
  Calendar
} from 'lucide-react';

export const About: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const milestones = [
    {
      year: '1998',
      title: 'The Founding Conviction',
      description: 'Founded by visionary educators and philanthropists with a singular mission: to establish a sanctuary of academic rigor, character building, and holistic education.'
    },
    {
      year: '2005',
      title: 'Inauguration of the 25-Acre Eco Campus',
      description: 'Expansion to our flagship architectural campus featuring digital smart classrooms, Olympic-standard athletic tracks, and acoustically tuned amphitheatre.'
    },
    {
      year: '2014',
      title: 'Pioneering STEM & AI Research Hub',
      description: 'Establishment of collegiate-grade wet science laboratories, industrial robotics maker spaces, and the dedicated AI Innovation incubator.'
    },
    {
      year: '2019',
      title: 'Global University Placement Milestone',
      description: 'Graduating cohorts achieve landmark admissions with full scholarships across Ivy League, Oxford, Cambridge, and world-renowned institutions.'
    },
    {
      year: 'Present Day',
      title: 'Educate • Enlighten • Excel',
      description: 'Ranked among the premier national international schools, nurturing thousands of confident, compassionate global leaders for tomorrow.'
    }
  ];

  const sectionsNav = [
    { id: 'our-legacy', number: '01', title: 'Our Legacy' },
    { id: 'vision-mission-motto', number: '02', title: 'Vision, Mission & Motto' },
    { id: 'founders-message', number: '03', title: "Founder's Message" },
    { id: 'managing-director', number: '04', title: 'Managing Director' },
    { id: 'academic-director', number: '05', title: 'Academic Director' },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      {/* Page Header */}
      <PageHeader
        badge="About Us"
        title="About ABS"
        tagline="Our Legacy, Core Ethos & Leadership: Cultivating transformative scholarship, ethical character, and lifelong mastery."
        breadcrumbs={[{ label: 'About Us' }]}
        actions={
          <Link
            to="/apply"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <span>Apply for Admission</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        }
      />

      {/* Sticky Table of Contents Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-md p-2 sm:p-3">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth">
            {sectionsNav.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-slate-50 hover:bg-amber-50 hover:text-amber-900 text-slate-700 transition-all border border-slate-200/80 hover:border-amber-300 flex-shrink-0"
              >
                <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-800 text-[10px] font-bold flex items-center justify-center">
                  {sec.number}
                </span>
                <span>{sec.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. OUR LEGACY */}
      {/* ========================================================================= */}
      <section id="our-legacy" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Section 01</span>
              <span>•</span>
              <span>Heritage & Foundation</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
              Our Legacy
            </h2>
          </div>
          <Link
            to="/about/legacy"
            className="text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800 flex items-center gap-1.5"
          >
            <span>View Dedicated Legacy Page</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Legacy Narrative Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              A Generational Heritage of Transformative Education
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl font-light">
              Founded over 25 years ago, ABS was created to break away from rigid standardized instruction and pioneer a holistic learning sanctuary where curiosity is ignited, individual talents are mastered, and scholars are prepared to lead with wisdom and compassion on the world stage.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
              <div>
                <span className="font-serif text-3xl font-bold text-amber-400">25+</span>
                <p className="text-xs text-slate-400 font-medium">Years of Distinction</p>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-amber-400">15,000+</span>
                <p className="text-xs text-slate-400 font-medium">Global Alumni</p>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-amber-400">100%</span>
                <p className="text-xs text-slate-400 font-medium">University Acceptance</p>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-amber-400">25 Acres</span>
                <p className="text-xs text-slate-400 font-medium">Lush Green Campus</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-amber-300 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-10">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-amber-500 shadow-sm" />
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-card-hover transition-all space-y-1.5">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
                  {m.year}
                </span>
                <h4 className="font-serif text-xl font-bold text-slate-950">
                  {m.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. VISION, MISSION & MOTTO */}
      {/* ========================================================================= */}
      <section id="vision-mission-motto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Section 02</span>
              <span>•</span>
              <span>Core Philosophy</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
              Vision, Mission & Motto
            </h2>
          </div>
          <Link
            to="/about/vision-mission-motto"
            className="text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800 flex items-center gap-1.5"
          >
            <span>View Dedicated Vision & Mission Page</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Motto Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white p-8 sm:p-12 border border-amber-400/30 shadow-xl text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">Our Motto</span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-wide">
            Educate • Enlighten • Excel
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            To provide comprehensive knowledge, awaken moral discernment, and strive relentlessly for the pinnacle of character and scholarly distinction.
          </p>
        </div>

        {/* Vision & Mission Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center border border-amber-400/30">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">Our Vision</span>
              <h3 className="font-serif text-2xl font-bold text-white">
                To Be a Beacon of World-Class Intellect & Character
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                An internationally distinguished center of holistic learning where curiosity is ignited, individual passions are mastered, and scholars are prepared to lead with wisdom, resilience, and compassion on the global stage.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 text-xs text-amber-300 font-medium">
              ★ Cultivating ethical leadership for tomorrow.
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-amber-50/70 text-slate-900 border border-amber-200 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-200 text-amber-900 flex items-center justify-center border border-amber-300">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-900 block">Our Mission</span>
              <h3 className="font-serif text-2xl font-bold text-slate-950">
                Nurturing Curious Minds into Confident Leaders
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                We empower every child through rigorous inquiry-driven academics, state-of-the-art technological innovation, majestic cultural arts, and compassionate pastoral mentorship.
              </p>
            </div>
            <div className="pt-4 border-t border-amber-200 text-xs text-amber-900 font-semibold">
              ★ Fostering inquiry, research, and empathy.
            </div>
          </div>
        </div>

        {/* 6 Guiding Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {[
            { title: 'Intellectual Rigor', desc: 'Uncompromising dedication to conceptual understanding, critical reasoning, and empirical inquiry.', icon: <Sparkles className="w-5 h-5 text-amber-600" /> },
            { title: 'Moral Integrity & Honor', desc: 'Leading with honesty, humility, and steadfast personal accountability in all human endeavors.', icon: <ShieldCheck className="w-5 h-5 text-emerald-600" /> },
            { title: 'Empathetic Global Citizenship', desc: 'Deep respect for diverse cultures, active social responsibility, and compassionate community service.', icon: <HeartHandshake className="w-5 h-5 text-blue-600" /> },
            { title: 'Courageous Innovation', desc: 'The bravery to take creative risks, embrace iterative failure, and pioneer novel solutions.', icon: <Compass className="w-5 h-5 text-orange-600" /> },
            { title: 'Aesthetic Fluency', desc: 'Appreciation and active practice of orchestral music, fine visual arts, and dramatic performance.', icon: <Award className="w-5 h-5 text-purple-600" /> },
            { title: 'Unwavering Collaboration', desc: 'Fostering collective joy, mutual support, and lifelong bonds through our House system and athletics.', icon: <Users className="w-5 h-5 text-rose-600" /> }
          ].map((val, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-all space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                {val.icon}
              </div>
              <h4 className="font-serif text-lg font-bold text-slate-950">{val.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FOUNDER'S MESSAGE */}
      {/* ========================================================================= */}
      <section id="founders-message" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Section 03</span>
              <span>•</span>
              <span>Founder's Desk</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
              Founder's Message
            </h2>
          </div>
          <Link
            to="/about/founder-message"
            className="text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800 flex items-center gap-1.5"
          >
            <span>View Dedicated Founder's Desk</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Message Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="bg-slate-950 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
              alt="Founder & Chairman"
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-4 border-amber-400/80 shadow-lg flex-shrink-0"
            />
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Founder & Chairman</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Shri A. B. Subramanian
              </h3>
              <p className="text-xs text-amber-300 font-medium">Founder & Chairman, ABS Educational Trust</p>
              <p className="text-[11px] text-slate-400">Lifelong Patron of Holistic Learning and Educational Philanthropy</p>
            </div>
          </div>

          <div className="p-8 sm:p-12 space-y-6 text-slate-700 font-light leading-relaxed text-sm sm:text-base">
            <div className="p-5 rounded-2xl bg-amber-50/70 border-l-4 border-amber-500 font-serif italic text-base sm:text-lg text-slate-900">
              &ldquo;Education is not the filling of a pail, but the lighting of a fire. When we founded ABS, we sought to build an institution where every child is empowered to discover their highest intellectual and moral calling.&rdquo;
            </div>

            <p>
              When ABS was founded over two decades ago, we made a solemn commitment: that our institution would stand for uncompromising academic quality combined with profound human values. Every child who enters our halls brings unique gifts and boundless potential.
            </p>
            <p>
              We nurture our students to become courageous thinkers, compassionate leaders, and ethical innovators prepared to address the complex challenges of tomorrow's world.
            </p>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <div>
                <p className="font-serif font-bold text-slate-950">Shri A. B. Subramanian</p>
                <p className="text-xs text-slate-500">Founder & Chairman</p>
              </div>
              <Link
                to="/about/founder-message"
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                Read Full Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. MANAGING DIRECTOR */}
      {/* ========================================================================= */}
      <section id="managing-director" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Section 04</span>
              <span>•</span>
              <span>Executive Management</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
              Managing Director
            </h2>
          </div>
          <Link
            to="/about/managing-director"
            className="text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800 flex items-center gap-1.5"
          >
            <span>View Dedicated MD Page</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Managing Director Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="bg-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
              alt="Managing Director"
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-4 border-amber-400 shadow-lg flex-shrink-0"
            />
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Managing Director</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Dr. S. K. Narayanan
              </h3>
              <p className="text-xs text-amber-300 font-medium">Managing Director & Executive Trustee, ABS</p>
              <p className="text-[11px] text-slate-400">MBA (Wharton), M.Ed. • 22+ Years in Educational Administration</p>
            </div>
          </div>

          <div className="p-8 sm:p-12 space-y-6 text-slate-700 font-light leading-relaxed text-sm sm:text-base">
            <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-slate-900 font-serif italic text-base sm:text-lg text-slate-900">
              &ldquo;Modern education demands an uncompromising alignment of cutting-edge infrastructure, safety protocols, passionate educators, and progressive technology.&rdquo;
            </div>

            <p>
              Our leadership vision focuses on creating a 21st-century educational environment that empowers every child. From state-of-the-art STEM laboratories and AI incubation hubs to Olympic-grade athletic facilities, we continuously invest in resources that elevate the student experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs">
                <span className="font-bold text-slate-950 block mb-1">Campus Architecture</span>
                <span className="text-slate-600">Smart digital classrooms and sustainable green infrastructure.</span>
              </div>
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs">
                <span className="font-bold text-slate-950 block mb-1">Safety & Pastoral Care</span>
                <span className="text-slate-600">Strict safeguarding protocols and dedicated student counseling.</span>
              </div>
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs">
                <span className="font-bold text-slate-950 block mb-1">Global Benchmarks</span>
                <span className="text-slate-600">Collaborations with top universities and international forums.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <div>
                <p className="font-serif font-bold text-slate-950">Dr. S. K. Narayanan</p>
                <p className="text-xs text-slate-500">Managing Director</p>
              </div>
              <Link
                to="/about/managing-director"
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                Read Full MD Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ACADEMIC DIRECTOR */}
      {/* ========================================================================= */}
      <section id="academic-director" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Section 05</span>
              <span>•</span>
              <span>Academic Pedagogy</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
              Academic Director
            </h2>
          </div>
          <Link
            to="/about/academic-director"
            className="text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800 flex items-center gap-1.5"
          >
            <span>View Dedicated Academic Director Page</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Academic Director Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="bg-slate-950 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="Academic Director"
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-4 border-amber-400 shadow-lg flex-shrink-0"
            />
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Academic Director</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Dr. Elena Rostova, Ph.D.
              </h3>
              <p className="text-xs text-amber-300 font-medium">Academic Director & Dean of Pedagogy, ABS</p>
              <p className="text-[11px] text-slate-400">Ph.D. in Educational Leadership (Oxford), M.Ed. (Harvard)</p>
            </div>
          </div>

          <div className="p-8 sm:p-12 space-y-6 text-slate-700 font-light leading-relaxed text-sm sm:text-base">
            <div className="p-5 rounded-2xl bg-amber-50/70 border-l-4 border-amber-500 font-serif italic text-base sm:text-lg text-slate-900">
              &ldquo;Academic excellence at ABS is defined by inquiry, interdisciplinary research, and deep conceptual mastery rather than rote memorization.&rdquo;
            </div>

            <p>
              Our academic framework bridges world-class curricular standards with individualized learning pathways. We foster critical reasoning, scientific experimentation, and articulate rhetorical skills from Early Childhood through Pre-University.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <span className="font-bold text-slate-950 block mb-1">Inquiry Pedagogy</span>
                <span className="text-slate-600">Socratic discussion, hands-on laboratories, and project-based research.</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <span className="font-bold text-slate-950 block mb-1">Faculty Excellence</span>
                <span className="text-slate-600">Distinguished international educators with ongoing pedagogical training.</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <span className="font-bold text-slate-950 block mb-1">Global Admissions</span>
                <span className="text-slate-600">Track record of placements across premier world universities.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <div>
                <p className="font-serif font-bold text-slate-950">Dr. Elena Rostova, Ph.D.</p>
                <p className="text-xs text-slate-500">Academic Director</p>
              </div>
              <Link
                to="/about/academic-director"
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                Read Full Academic Director Message
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
