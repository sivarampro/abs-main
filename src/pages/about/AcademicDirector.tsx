import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { GraduationCap, BookOpen, Sparkles, Award, Target, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const AcademicDirector: React.FC = () => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      <PageHeader
        badge="About Us • 05"
        title="Academic Director"
        tagline="Pedagogical vision, inquiry-driven learning frameworks, and global academic excellence."
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Academic Director' }
        ]}
        actions={
          <div className="flex items-center gap-3">
            <Link
              to="/academics"
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5"
            >
              <span>Explore Academics</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        }
      />

      {/* Main Director Card */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          
          {/* Top Header Banner */}
          <div className="bg-slate-950 text-white p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="relative flex-shrink-0">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-4 border-amber-400 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                    alt="Academic Director"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-lg shadow-md border-2 border-slate-950">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Academic Leadership Desk</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  Dr. Elena Rostova, Ph.D.
                </h2>
                <p className="text-sm text-amber-300 font-medium">Academic Director & Dean of Pedagogy, ABS</p>
                <p className="text-xs text-slate-400 pt-1">
                  Ph.D. in Educational Leadership (Oxford), M.Ed. (Harvard) • 24+ Years in Global Pedagogy
                </p>
              </div>
            </div>
          </div>

          {/* Letter & Pedagogical Framework */}
          <div className="p-8 sm:p-14 space-y-10 text-slate-700 leading-relaxed font-light text-base sm:text-lg">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/70 border-l-4 border-amber-500 text-slate-900 font-serif italic text-lg sm:text-xl leading-relaxed">
              &ldquo;True academic excellence is not measured solely by exam percentiles, but by intellectual independence, the courage to question assumptions, and the lifelong thirst to discover.&rdquo;
            </div>

            <div className="space-y-6 text-slate-700">
              <p>
                <strong>Dear Students and Learning Community,</strong>
              </p>

              <p>
                At ABS, we have architected an academic curriculum that honors the profound curiosity innate in every child. We bridge classical foundations with cutting-edge 21st-century competencies, moving past passive rote learning to active, inquiry-based discovery.
              </p>

              <p>
                From our Early Years exploratory ateliers through to Senior Secondary research dissertations, our scholars engage in hands-on scientific investigation, Socratic seminars, algorithmic modeling, and deep literary analysis. We nurture thinkers who do not just remember facts, but understand how knowledge is created and applied to solve real-world problems.
              </p>

              <p>
                Our faculty members are more than instructors; they are world-class subject masters and compassionate mentors who inspire, challenge, and support each learner on their individualized pathway to collegiate and life success.
              </p>
            </div>

            {/* Academic Pillars */}
            <div className="pt-6 border-t border-slate-200">
              <h3 className="font-serif text-2xl font-bold text-slate-950 mb-6">Pillars of Pedagogical Excellence</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                    1
                  </div>
                  <h4 className="font-serif text-lg font-bold text-slate-950">Inquiry-Led Learning</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Problem-based learning, experimental labs, and interdisciplinary project research.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                    2
                  </div>
                  <h4 className="font-serif text-lg font-bold text-slate-950">Holistic Assessment</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Continuous feedback, portfolio reviews, and international benchmark evaluations.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
                    3
                  </div>
                  <h4 className="font-serif text-lg font-bold text-slate-950">Global University Pathways</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bespoke counseling, standardized testing prep, and Ivy League / Oxbridge placement.
                  </p>
                </div>
              </div>
            </div>

            {/* Signature Area */}
            <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="font-serif text-xl font-bold text-slate-950">Dr. Elena Rostova, Ph.D.</p>
                <p className="text-xs text-slate-500 font-medium">Academic Director & Dean of Pedagogy</p>
                <p className="text-[11px] text-amber-700 font-semibold tracking-wide uppercase mt-0.5">Academic Governance</p>
              </div>
              <div className="px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xs font-bold text-slate-900 block font-serif">Academic Directorate</span>
                <span className="text-[11px] text-slate-500">Pedagogical Distinction</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-950">Explore Academic Curriculum</h3>
            <p className="text-xs text-slate-600 mt-0.5">Discover our Early Years to Senior Secondary academic divisions.</p>
          </div>
          <Link
            to="/academics"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Academics Overview</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </section>
    </div>
  );
};
