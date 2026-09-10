import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { admissionSteps, admissionsFAQs } from '../../data/admissions';
import { GradeCalculator } from '../../components/widgets/GradeCalculator';
import { Sparkles, Calendar, FileText, CheckCircle2, ArrowRight, HelpCircle, Phone, Mail } from 'lucide-react';

export const AdmissionsOverview: React.FC = () => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      <PageHeader
        badge="Admissions 2026–2027"
        title="Your Pathway to an Exceptional Education"
        tagline="A transparent, step-by-step admissions journey designed to welcome curious and ambitious scholars."
        breadcrumbs={[{ label: 'Admissions Overview' }]}
        actions={
          <Link
            to="/apply"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <span>Admission Online</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        }
      />

      {/* 1. Interactive Grade Finder Widget */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <GradeCalculator />
      </section>

      {/* 2. Quick Links to Fees & Scholarships */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white space-y-4 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">Tuition & Inclusions</span>
              <h3 className="font-serif text-3xl font-bold text-white">Transparent Fee Structure</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Review complete tuition breakdowns across Early Years, Primary, Middle, Secondary, and Senior Secondary tiers, including all textbooks and lab resources.
              </p>
            </div>
            <div className="pt-4">
              <Link
                to="/admissions/fees"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
              >
                <span>View Fee Schedules</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-amber-50/70 text-slate-900 border border-amber-200 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-800 block">Merit & Endowments</span>
              <h3 className="font-serif text-3xl font-bold text-slate-950">Scholarships & Financial Aid</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                We award up to 100% tuition remission endowments for exceptional academic merit, STEM innovation, performing arts, and athletic excellence.
              </p>
            </div>
            <div className="pt-4">
              <Link
                to="/admissions/scholarships"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
              >
                <span>Explore Scholarships</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Admissions FAQs Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Questions & Answers</span>
          <h2 className="font-serif text-3xl font-bold text-slate-950">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card divide-y divide-slate-100">
          {admissionsFAQs.map((faq, idx) => (
            <div key={idx} className="p-6 space-y-2">
              <h4 className="font-serif text-lg font-bold text-slate-950 flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 pl-7 leading-relaxed font-light">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
