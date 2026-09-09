import React from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { leadershipTeam, boardOfGovernors } from '../../data/faculty';
import { ShieldCheck, Mail, Award, BookOpen, Quote } from 'lucide-react';

export const Leadership: React.FC = () => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      <PageHeader
        badge="Governance & Leadership"
        title="Visionary Educational Stewardship"
        tagline="Meet the distinguished educators, scholars, and trustees guiding ABS toward sustained academic excellence."
        breadcrumbs={[
          { label: 'About ABS', href: '/about' },
          { label: 'Leadership & Governance' }
        ]}
      />

      {/* Senior Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Executive Leadership</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
            The Senior Leadership Team
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Providing visionary pedagogical guidance, administrative precision, and empathetic pastoral care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipTeam.map((leader) => (
            <div
              key={leader.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between space-y-6"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-2 border-amber-400 shadow-md flex-shrink-0"
                />
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                    {leader.department}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-slate-950 mt-1">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-bold text-amber-700">{leader.role}</p>
                  <p className="text-xs text-slate-500 font-medium">{leader.qualifications}</p>
                  <p className="text-[11px] text-slate-400">{leader.experienceYears} Years International Pedagogy</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>{leader.bio}</p>
                {leader.quote && (
                  <div className="p-3.5 rounded-xl bg-slate-50 border-l-2 border-amber-500 text-slate-700 italic text-xs">
                    &ldquo;{leader.quote}&rdquo;
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Board of Governors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-14 space-y-10 border border-slate-900 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Trust & Oversight</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              The Board of Governors
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Upholding fiduciary integrity, long-term strategic vision, and uncompromised academic quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardOfGovernors.map((gov, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 hover:border-amber-400/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">{gov.name}</h4>
                <p className="text-xs text-amber-400 font-semibold">{gov.role}</p>
                <p className="text-[11px] text-slate-400 leading-relaxed">{gov.credentials}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
