import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { Eye, Target, Sparkles, Award, ShieldCheck, HeartHandshake, Compass, Users, ArrowRight } from 'lucide-react';

export const VisionMissionMotto: React.FC = () => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      <PageHeader
        badge="About Us • 02"
        title="Vision, Mission & Motto"
        tagline="The fundamental ethos, guiding philosophy, and timeless ideals that inspire the ABS community every day."
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Vision, Mission, Motto' }
        ]}
        actions={
          <div className="flex items-center gap-3">
            <Link
              to="/about/founder-message"
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5"
            >
              <span>Next: Founder's Message</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        }
      />

      {/* 1. School Motto Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white p-8 sm:p-14 border border-amber-400/30 shadow-2xl text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/20 text-amber-400 border border-amber-400/40 flex items-center justify-center mx-auto shadow-inner">
              <Award className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">Our Timeless Motto</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-wide">
              Educate • Enlighten • Excel
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto pt-2 font-light">
              Three sacred pillars that define our educational philosophy: to impart comprehensive knowledge (<strong>Educate</strong>), to awaken wisdom and moral clarity (<strong>Enlighten</strong>), and to reach the pinnacle of personal and collective mastery (<strong>Excel</strong>).
            </p>
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center border border-amber-400/30">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">Our Vision</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                A Beacon of World-Class Intellect & Character
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                To be an internationally distinguished center of holistic learning where curiosity is ignited, individual passions are mastered, and scholars are prepared to lead with wisdom, resilience, and compassion on the global stage.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 text-xs text-amber-300/80 font-medium">
              ★ Cultivating global citizens grounded in ethical leadership.
            </div>
          </div>

          {/* Mission */}
          <div className="p-8 sm:p-12 rounded-3xl bg-amber-50/80 text-slate-900 border border-amber-200 space-y-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-200 text-amber-900 flex items-center justify-center border border-amber-300">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-900 block">Our Mission</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
                Nurturing Curious Minds into Ethical Leaders
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                We empower every child through rigorous inquiry-driven academics, state-of-the-art technological innovation, majestic cultural arts, and compassionate pastoral mentorship—nurturing curious minds into confident, ethical leaders.
              </p>
            </div>
            <div className="pt-4 border-t border-amber-200 text-xs text-amber-900 font-semibold">
              ★ Fostering critical thinking, empirical research, and human empathy.
            </div>
          </div>

        </div>
      </section>

      {/* 3. Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Guiding Pillars</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
            The Core Values That Define ABS
          </h2>
          <p className="text-slate-600 text-sm">
            Six foundational pillars that guide every classroom lesson, athletic contest, and community initiative.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Intellectual Rigor', desc: 'Uncompromising dedication to deep conceptual understanding, critical reasoning, and empirical inquiry.', icon: <Sparkles className="w-5 h-5 text-amber-600" /> },
            { title: 'Moral Integrity & Honor', desc: 'Leading with honesty, humility, and steadfast personal accountability in all human endeavors.', icon: <ShieldCheck className="w-5 h-5 text-emerald-600" /> },
            { title: 'Empathetic Global Citizenship', desc: 'Deep respect for diverse cultures, active social responsibility, and compassionate community service.', icon: <HeartHandshake className="w-5 h-5 text-blue-600" /> },
            { title: 'Courageous Innovation', desc: 'The bravery to take creative risks, embrace iterative failure, and pioneer novel technological solutions.', icon: <Compass className="w-5 h-5 text-orange-600" /> },
            { title: 'Aesthetic Fluency', desc: 'Appreciation and active practice of orchestral music, fine visual arts, and dramatic performance.', icon: <Award className="w-5 h-5 text-purple-600" /> },
            { title: 'Unwavering Collaboration', desc: 'Fostering collective joy, mutual support, and lifelong bonds through our House system and team athletics.', icon: <Users className="w-5 h-5 text-rose-600" /> }
          ].map((val, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                {val.icon}
              </div>
              <h4 className="font-serif text-xl font-bold text-slate-950">{val.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-950">Continue Exploring About Us</h3>
            <p className="text-xs text-slate-600 mt-0.5">Next chapter: Words of inspiration from the Founder & Chairman.</p>
          </div>
          <Link
            to="/about/founder-message"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Founder's Message</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </section>
    </div>
  );
};
