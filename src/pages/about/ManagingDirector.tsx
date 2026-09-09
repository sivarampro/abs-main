import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { Building2, ShieldCheck, Sparkles, Target, Award, ArrowRight, CheckCircle2, Users } from 'lucide-react';

export const ManagingDirector: React.FC = () => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      <PageHeader
        badge="About Us • 04"
        title="Managing Director"
        tagline="Strategic leadership, world-class infrastructure development, and holistic school governance."
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Managing Director' }
        ]}
        actions={
          <div className="flex items-center gap-3">
            <Link
              to="/about/academic-director"
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5"
            >
              <span>Next: Academic Director</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        }
      />

      {/* Main Director Card */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          
          {/* Top Header Banner */}
          <div className="bg-slate-900 text-white p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="relative flex-shrink-0">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-4 border-amber-400 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
                    alt="Managing Director"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center font-bold text-lg shadow-md border-2 border-amber-400">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Executive Management Desk</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  Dr. S. K. Narayanan
                </h2>
                <p className="text-sm text-amber-300 font-medium">Managing Director & Executive Trustee, ABS</p>
                <p className="text-xs text-slate-400 pt-1">
                  MBA (Wharton), M.Ed. • 22+ Years in Educational Administration & Institutional Excellence
                </p>
              </div>
            </div>
          </div>

          {/* Letter & Focus Areas */}
          <div className="p-8 sm:p-14 space-y-10 text-slate-700 leading-relaxed font-light text-base sm:text-lg">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border-l-4 border-slate-900 text-slate-900 font-serif italic text-lg sm:text-xl leading-relaxed">
              &ldquo;Modern education demands an uncompromising alignment of cutting-edge infrastructure, safety protocols, passionate educators, and progressive technology to empower every learner.&rdquo;
            </div>

            <div className="space-y-6 text-slate-700">
              <p>
                <strong>Welcome to ABS,</strong>
              </p>

              <p>
                As Managing Director, my primary responsibility is ensuring that the noble vision of our founder is translated into an extraordinary everyday learning reality. We believe that an inspired environment shapes an inspired mind.
              </p>

              <p>
                Over the past decade, we have systematically invested in creating an architectural masterplan that is future-ready: from collaborative acoustic learning pods, collegiate STEM laboratories, and dedicated AI research centers to FIFA-standard sports arenas and green sustainable facilities.
              </p>

              <p>
                Equally central to our administrative philosophy is an uncompromising dedication to child safety, mental wellbeing, and parent partnership. We maintain strict safeguarding frameworks, comprehensive transport tracking, and responsive communication channels to ensure every family experiences peace of mind.
              </p>
            </div>

            {/* Strategic Pillars */}
            <div className="pt-6 border-t border-slate-200">
              <h3 className="font-serif text-2xl font-bold text-slate-950 mb-6">Strategic Management Pillars</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center font-bold">
                    1
                  </div>
                  <h4 className="font-serif text-lg font-bold text-slate-950">Next-Gen Campus</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Continuous upgrades to digital classrooms, labs, and sustainable eco-architecture.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-200 text-blue-900 flex items-center justify-center font-bold">
                    2
                  </div>
                  <h4 className="font-serif text-lg font-bold text-slate-950">Child Safeguarding</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Zero-compromise security, GPS transport fleet, medical infirmary, and pastoral care.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-200 text-emerald-900 flex items-center justify-center font-bold">
                    3
                  </div>
                  <h4 className="font-serif text-lg font-bold text-slate-950">Global Collaborations</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Institutional ties with international universities, exchange programs, and industry mentors.
                  </p>
                </div>
              </div>
            </div>

            {/* Signature Area */}
            <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="font-serif text-xl font-bold text-slate-950">Dr. S. K. Narayanan</p>
                <p className="text-xs text-slate-500 font-medium">Managing Director, ABS Group of Schools</p>
                <p className="text-[11px] text-amber-700 font-semibold tracking-wide uppercase mt-0.5">Management & Governance</p>
              </div>
              <div className="px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xs font-bold text-slate-900 block font-serif">Executive Directorate</span>
                <span className="text-[11px] text-slate-500">Operational & Strategic Excellence</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-950">Continue Exploring About Us</h3>
            <p className="text-xs text-slate-600 mt-0.5">Next chapter: Academic leadership and pedagogical standards.</p>
          </div>
          <Link
            to="/about/academic-director"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Academic Director</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </section>
    </div>
  );
};
