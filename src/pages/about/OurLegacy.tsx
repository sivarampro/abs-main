import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { Sparkles, Calendar, Award, Building, GraduationCap, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const OurLegacy: React.FC = () => {
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

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      <PageHeader
        badge="About Us • 01"
        title="Our Legacy"
        tagline="A steadfast commitment to transformative scholarship, ethical character, and generational excellence."
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Our Legacy' }
        ]}
        actions={
          <div className="flex items-center gap-3">
            <Link
              to="/about/vision-mission-motto"
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5"
            >
              <span>Next: Vision, Mission & Motto</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        }
      />

      {/* Main Narrative Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Over 25 Years of Educational Tradition</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Rooted in Tradition, Leading into the Future
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              <p>
                When ABS was founded over two decades ago, our founders envisioned more than just an academic institution. They envisioned a transformative learning community where every student’s intellectual curiosity is nurtured with unconditional support, rigor, and moral purpose.
              </p>
              <p>
                Today, ABS stands as a distinguished hallmark of holistic education. Our graduates hold positions of leadership in research, entrepreneurship, humanities, and governance around the globe—united by an enduring commitment to educate, enlighten, and excel.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800">
              <div className="space-y-1">
                <span className="font-serif text-3xl font-bold text-amber-400">25+</span>
                <p className="text-xs text-slate-400 font-medium">Years of Distinction</p>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-3xl font-bold text-amber-400">15,000+</span>
                <p className="text-xs text-slate-400 font-medium">Global Alumni</p>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-3xl font-bold text-amber-400">100%</span>
                <p className="text-xs text-slate-400 font-medium">University Acceptance</p>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-3xl font-bold text-amber-400">25 Acres</span>
                <p className="text-xs text-slate-400 font-medium">Lush Green Campus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones of Excellence */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Chronicle of Growth</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
            Milestones in Our Journey
          </h2>
          <p className="text-slate-600 text-sm">
            How a visionary blueprint evolved into a nationally revered center of intellect and character.
          </p>
        </div>

        <div className="relative border-l-2 border-amber-300 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-amber-500 shadow-sm group-hover:scale-125 transition-transform" />
              
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card hover:shadow-card-hover transition-all space-y-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
                  {m.year}
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-950">
                  {m.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-950">Continue Exploring About Us</h3>
            <p className="text-xs text-slate-600 mt-0.5">Next chapter: Our foundational purpose, vision, mission and motto.</p>
          </div>
          <Link
            to="/about/vision-mission-motto"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Vision, Mission & Motto</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </section>
    </div>
  );
};
