import React from 'react';
import { Link } from 'react-router-dom';
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
      icon: <Award className="w-6 h-6 text-amber-600" />
    },
    {
      title: 'Student Portfolios & Capstone Defenses',
      desc: 'Scholars curate authentic project portfolios, research dissertations, and artistic bodies of work which they defend orally before faculty and peer panels.',
      icon: <FileText className="w-6 h-6 text-amber-600" />
    },
    {
      title: 'Transparent Parent Analytics Portal',
      desc: 'Parents receive comprehensive digital progress reports with topic-by-topic competency heatmaps, growth trends, and actionable teacher feedback in real-time.',
      icon: <BarChart3 className="w-6 h-6 text-amber-600" />
    }
  ];

  return (
    <section id="assessment-progress" className="space-y-12 pt-16 scroll-mt-28 border-t border-slate-200">
      

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Assessment Philosophy</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Assessment & Progress
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

      
    </section>
  );
};
