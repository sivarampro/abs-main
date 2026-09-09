import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { Award, BarChart3, FileText, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Target } from 'lucide-react';

export const AssessmentProgress: React.FC = () => {
  const assessmentPillars = [
    {
      title: 'Continuous Formative Assessment',
      desc: 'Regular low-stakes diagnostic quizzes, Socratic participation checks, and hands-on lab experiments provide real-time insight into student understanding without anxiety.',
      icon: <Target className="w-6 h-6 text-amber-600" />
    },
    {
      title: 'Summative Rigor & Board Benchmark Exams',
      desc: 'Structured term-end examinations designed to rigorous national board and international standards, assessing multi-chapter conceptual synthesis and application.',
      icon: <Award className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Student Portfolios & Capstone Defenses',
      desc: 'Scholars curate authentic project portfolios, research dissertations, and artistic bodies of work which they defend orally before faculty and peer panels.',
      icon: <FileText className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Transparent Parent Analytics Portal',
      desc: 'Parents receive comprehensive digital progress reports with topic-by-topic competency heatmaps, growth trends, and actionable teacher feedback in real-time.',
      icon: <BarChart3 className="w-6 h-6 text-purple-600" />
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      <PageHeader
        badge="Academics • Evaluation"
        title="Assessment & Progress"
        tagline="Comprehensive, competency-based continuous evaluation that tracks conceptual mastery and personal growth."
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Assessment & Progress' }
        ]}
        actions={
          <Link
            to="/portal/parent"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <span>Parent Portal Login</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        }
      />

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Assessment Philosophy</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Evaluation as a Tool for Empowerment, Not Anxiety
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-light">
            We believe the purpose of assessment is not simply to assign a final letter grade, but to illuminate a student's learning pathway. Our multifaceted evaluation system measures critical thinking, creativity, empirical execution, and steady growth over time.
          </p>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {assessmentPillars.map((p, idx) => (
            <div key={idx} className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                {p.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-950">{p.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-950">Return to Academic Overview</h3>
            <p className="text-xs text-slate-600 mt-0.5">Explore the comprehensive academic philosophy and divisions from Early Years to Grade 12.</p>
          </div>
          <Link
            to="/academics"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Academic Overview</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </section>
    </div>
  );
};
