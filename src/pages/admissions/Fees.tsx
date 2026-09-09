import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { feeTiers } from '../../data/admissions';
import { FeeEstimator } from '../../components/widgets/FeeEstimator';
import { DollarSign, ShieldCheck, CheckCircle2, ArrowRight, HelpCircle, FileText } from 'lucide-react';

export const Fees: React.FC = () => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      <PageHeader
        badge="Financial Transparency"
        title="Fee Structure & Payment Schedule"
        tagline="Clear, transparent tuition schedules with all core textbooks, technology licenses, and laboratory consumables included."
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Fee Structure' }
        ]}
        actions={
          <Link
            to="/apply"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <span>Apply to ABS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        }
      />

      {/* 1. Comprehensive Fee Table by Grade */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Academic Year 2026–2027</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
            Tuition Schedule by Division
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Tuition fees are payable in three equal termly installments (Autumn, Spring, and Summer terms).
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse" role="table">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6">Division & Grades</th>
                  <th className="py-4 px-6">Term Tuition</th>
                  <th className="py-4 px-6">Annual Tuition</th>
                  <th className="py-4 px-6">One-Time Registration</th>
                  <th className="py-4 px-6">Core Inclusions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                {feeTiers.map((tier, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6">
                      <strong className="font-serif text-base text-slate-950 block">{tier.gradeRange}</strong>
                      <span className="text-xs text-slate-500">{tier.grades}</span>
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-900">
                      {tier.tuitionPerTerm}
                    </td>
                    <td className="py-4 px-6 font-bold text-amber-700 text-base">
                      {tier.annualTotal}
                    </td>
                    <td className="py-4 px-6 text-slate-500 font-mono">
                      {tier.developmentLevy}
                    </td>
                    <td className="py-4 px-6">
                      <ul className="space-y-1 text-xs text-slate-600">
                        {tier.inclusions.slice(0, 2).map((inc, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 2. Interactive Fee Estimator Widget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeeEstimator />
      </section>

      {/* 3. Scholarships & Financial Aid Promo */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-amber-50/80 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-900 block">Endowments</span>
            <h3 className="font-serif text-2xl font-bold text-slate-950">
              Need-Based & Merit Scholarships Available
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              We award up to 100% tuition coverage for students demonstrating exceptional academic merit, STEM, or arts distinction.
            </p>
          </div>
          <Link
            to="/admissions/scholarships"
            className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex-shrink-0"
          >
            Explore Scholarships
          </Link>
        </div>
      </section>

    </div>
  );
};
