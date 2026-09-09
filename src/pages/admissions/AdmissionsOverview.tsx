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
            <span>Apply Online</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        }
      />

      {/* 1. Four-Step Admission Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Simple 4-Step Process</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
            How to Apply to ABS
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            We evaluate applicants holistically, seeking students who embody curiosity, character, and a passion for learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {admissionSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 font-serif font-bold text-xl flex items-center justify-center shadow-xs">
                  0{step.stepNumber}
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-950">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
                <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-900 font-medium">
                  <strong>Timeline:</strong> {step.timeline}
                </div>
              </div>

              <div className="space-y-1 pt-3 border-t border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Required Items</span>
                {step.requirements.map((req, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                    <span className="truncate">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Interactive Grade Finder Widget */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <GradeCalculator />
      </section>

      {/* 3. Quick Links to Fees & Scholarships */}
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
