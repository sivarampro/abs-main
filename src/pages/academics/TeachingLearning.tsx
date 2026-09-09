import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { BookOpen, Users, Sparkles, Award, ArrowRight, CheckCircle2, MessageSquare, Lightbulb } from 'lucide-react';

export const TeachingLearning: React.FC = () => {
  const methods = [
    {
      title: 'Socratic Seminars & Dialogic Inquiry',
      desc: 'Students sit in dialogue circles to question premises, analyze classical literature, debate ethics, and co-construct deeper understanding under the guidance of expert mentors.',
      icon: <MessageSquare className="w-6 h-6 text-amber-600" />
    },
    {
      title: 'Experimental Laboratory & Empirical Research',
      desc: 'Science is learned at the laboratory bench. Students design original experiments, test scientific hypotheses with Vernier digital probes, and write formal research papers.',
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Differentiated & Personalized Learning',
      desc: 'Recognizing that each scholar learns uniquely, our educators craft tailored scaffolding and enrichment modules ensuring every child is appropriately challenged.',
      icon: <Users className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Project-Based Interdisciplinary Capstones',
      desc: 'Real-world challenges where students combine mathematics, coding, ecological research, and rhetoric to propose actionable solutions to community problems.',
      icon: <Sparkles className="w-6 h-6 text-purple-600" />
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      <PageHeader
        badge="Academics • Pedagogy"
        title="Teaching & Learning"
        tagline="How our world-class educators transform classrooms into vibrant communities of inquiry and discovery."
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Teaching & Learning' }
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

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Pedagogical Philosophy</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Active Minds, Deep Engagement, Lifelong Mastery
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-light">
            We move beyond passive listening. Our classrooms are energetic workshops of thought where teachers serve as intellectual mentors, challenging students to formulate hypotheses, defend arguments with empirical evidence, and iterate with confidence.
          </p>
        </div>
      </section>

      {/* Methods Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {methods.map((method, idx) => (
            <div key={idx} className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                {method.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-950">{method.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">{method.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-950">Next: Technology & Innovation in Academics</h3>
            <p className="text-xs text-slate-600 mt-0.5">Learn how digital tools, AI labs, and computational thinking are embedded in everyday learning.</p>
          </div>
          <Link
            to="/academics/technology-innovation"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Technology & Innovation</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </section>
    </div>
  );
};
