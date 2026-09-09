import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { scholarshipsData } from '../../data/admissions';
import { Award, Sparkles, Calendar, CheckCircle2, ArrowRight, FileText } from 'lucide-react';

export const Scholarships: React.FC = () => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      <PageHeader
        badge="Endowments & Awards"
        title="Scholarships & Financial Aid Endowments"
        tagline="Rewarding exceptional academic tenacity, scientific innovation, musical artistry, and athletic excellence."
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Scholarships & Aid' }
        ]}
        actions={
          <Link
            to="/apply"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <span>Apply for Scholarship</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        }
      />

      {/* 1. Scholarships Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Endowment Categories</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
            Available Scholarship Fellowships
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Scholarships are renewable annually based on sustained scholastic and behavioral distinction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scholarshipsData.map((sch) => (
            <div
              key={sch.id}
              className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
                    {sch.category}
                  </span>
                  <span className="text-xs font-bold text-amber-700 font-mono">
                    {sch.award}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-950">
                  {sch.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {sch.description}
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1 text-xs text-slate-700">
                  <p><strong>Coverage:</strong> {sch.coverage}</p>
                  <p className="text-amber-700 font-semibold flex items-center gap-1.5 pt-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Application Deadline: {sch.deadline}</span>
                  </p>
                </div>

                <div className="space-y-1.5 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">Eligibility Criteria</span>
                  {sch.criteria.map((crit, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{crit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  to={`/apply?scholarship=${encodeURIComponent(sch.title)}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                >
                  <span>Apply for this Award</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
