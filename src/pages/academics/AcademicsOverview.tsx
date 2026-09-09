import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { academicDivisions } from '../../data/academics';
import { Sparkles, GraduationCap, BookOpen, ArrowRight, CheckCircle2, Award, Clock, Layers } from 'lucide-react';
import { GradeCalculator } from '../../components/widgets/GradeCalculator';

export const AcademicsOverview: React.FC = () => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      <PageHeader
        badge="Academic Architecture"
        title="Inquiry-Led, Rigorous & Holistic Learning"
        tagline="From foundational sensory discovery at age 3 to collegiate research fellowships at age 18, discover the intellectual trajectory at ABS."
        breadcrumbs={[{ label: 'Academics Overview' }]}
        actions={
          <Link
            to="/apply"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <span>Enroll for 2026–27</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        }
      />

      {/* 1. Academic Pedagogy Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold">Inquiry-Led Mastery</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Students construct knowledge by formulating hypotheses, testing theories empirically in modern labs, and defending their findings.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-950">Subject Specialist Mentors</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every academic division features passionate master educators with advanced degrees and collegiate research backgrounds.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-950">Personalized Trajectory</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              With an 8:1 ratio, students receive diagnostic academic support, advanced placement honors tracks, and one-on-one advising.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Detailed 5-Division Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Educational Progression</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
            Our Five Academic Divisions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Click into any academic division to explore the day-to-day rhythm, subject syllabi, and co-curricular programs.
          </p>
        </div>

        <div className="space-y-8">
          {academicDivisions.map((div, idx) => (
            <div
              key={div.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto">
                  <img
                    src={div.heroImage}
                    alt={div.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950/80 text-white backdrop-blur-xs">
                      Division 0{idx + 1}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
                        {div.gradeRange}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">({div.ageRange})</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
                      {div.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-serif italic text-amber-800">
                      &ldquo;{div.tagline}&rdquo;
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {div.overview}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">Curriculum Pillars</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {div.curriculumHighlights.slice(0, 2).map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="font-semibold">{h.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-xs text-slate-500">
                      Faculty Lead: <strong className="text-slate-800">{div.facultyLead.name}</strong>
                    </div>
                    <Link
                      to={`/academics/${div.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
                    >
                      <span>Explore {div.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Interactive Grade Calculator */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <GradeCalculator />
      </section>

    </div>
  );
};
