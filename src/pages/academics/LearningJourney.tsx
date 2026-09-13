import React from 'react';
import { Link } from 'react-router-dom';
import { academicDivisions } from '../../data/academics';
import { Sparkles, ArrowRight, CheckCircle2, GraduationCap, Compass, BookOpen } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  return (
    <section id="learning-journey" className="space-y-12 pt-16 scroll-mt-28 border-t border-slate-200">
      

      {/* Intro Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Developmental Continuum</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Learning Journey
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-light">
            Our learning journey is purposefully sequenced so that concepts introduced in the Early Years through experiential play evolve into rigorous empirical research, analytical rhetoric, and advanced pre-university mastery in Senior Secondary.
          </p>
        </div>
      </section>

      {/* 5 Stages Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {academicDivisions.map((div, idx) => (
          <div
            key={div.id}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              <div className={`lg:col-span-5 relative aspect-[4/3] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={div.heroImage}
                  alt={div.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950/80 text-white backdrop-blur-xs">
                    Phase 0{idx + 1} • {div.ageRange}
                  </span>
                </div>
              </div>

              <div className={`lg:col-span-7 p-8 sm:p-12 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-700 block">
                    {div.gradeRange}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
                    {div.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    {div.overview}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">Curriculum Highlights:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {div.curriculumHighlights.slice(0, 2).map((item, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                        <strong className="text-slate-900 block font-semibold">{item.title}</strong>
                        <span className="text-slate-500 text-[11px] leading-snug line-clamp-2 mt-0.5">{item.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to={`/academics#${div.slug}`}
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
      </section>

      
    </section>
  );
};
