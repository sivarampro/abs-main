import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
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
      icon: <Globe className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'Global Benchmarking & Board Excellence',
      desc: 'Seamlessly aligning national board examination excellence with international Cambridge and pre-university standards.',
      icon: <Award className="w-5 h-5 text-emerald-600" />
    },
    {
      title: 'Ethics, Rhetoric & Critical Debate',
      desc: 'Developing students who can critically dissect arguments, analyze bias in large data sets, and articulate visionary ideas.',
      icon: <ShieldCheck className="w-5 h-5 text-purple-600" />
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      <PageHeader
        badge="Academics • Curriculum"
        title="Curriculum Framework"
        tagline="A rigorous, inquiry-led educational architecture designed to cultivate intellectual depth, ethical wisdom, and global readiness."
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Curriculum' }
        ]}
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

      {/* Main Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Holistic Academic Architecture</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
            Curriculum That Prepares Scholars for the 21st Century
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

      {/* Navigation Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-950">Next: Teaching & Learning</h3>
            <p className="text-xs text-slate-600 mt-0.5">Discover our pedagogical classroom methods and experiential labs.</p>
          </div>
          <Link
            to="/academics/teaching-learning"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Teaching & Learning</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </section>
    </div>
  );
};
