import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Globe, Award, Sparkles, CheckCircle2, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

export const Curriculum: React.FC = () => {
  const pillars = [
    {
      title: 'Inquiry-Driven Conceptual Rigor',
      desc: 'Going beyond rote memorization to teach the underlying logic, scientific proofs, and rhetorical frameworks of each discipline.',
      icon: <Sparkles className="w-5 h-5 text-amber-600" />
    },
    {
      title: 'Interdisciplinary STEM & Humanities',
      desc: 'Connecting mathematics with physics, literature with historical context, and coding with environmental sustainability.',
      icon: <Globe className="w-5 h-5 text-amber-600" />
    },
    {
      title: 'Global Benchmarking & Board Excellence',
      desc: 'Seamlessly aligning national board examination excellence with international Cambridge and pre-university standards.',
      icon: <Award className="w-5 h-5 text-amber-600" />
    },
    {
      title: 'Ethics, Rhetoric & Critical Debate',
      desc: 'Developing students who can critically dissect arguments, analyze bias in large data sets, and articulate visionary ideas.',
      icon: <ShieldCheck className="w-5 h-5 text-amber-600" />
    }
  ];

  return (
    <section id="curriculum" className="space-y-12 pt-16 scroll-mt-28 border-t border-slate-200">
      

      {/* Main Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            <span>Holistic Academic Architecture</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
            Curriculum
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl font-light">
            At ABS, our curriculum is designed not as a static collection of textbooks, but as a vibrant intellectual journey. We synthesize the rigorous mastery of fundamental mathematics, natural sciences, languages, and humanities with modern competencies in algorithmic thinking, empirical research, and artistic creation.
          </p>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Foundational Pillars</span>
          <h3 className="font-serif text-3xl font-bold text-slate-950">
            Core Principles of Our Academic Framework
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((p, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                {p.icon}
              </div>
              <h4 className="font-serif text-2xl font-bold text-slate-950">{p.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed font-light">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
    </section>
  );
};
