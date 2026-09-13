import React from 'react';
import { Link } from 'react-router-dom';
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
      icon: <Lightbulb className="w-6 h-6 text-amber-600" />
    },
    {
      title: 'Differentiated & Personalized Learning',
      desc: 'Recognizing that each scholar learns uniquely, our educators craft tailored scaffolding and enrichment modules ensuring every child is appropriately challenged.',
      icon: <Users className="w-6 h-6 text-amber-600" />
    },
    {
      title: 'Project-Based Interdisciplinary Capstones',
      desc: 'Real-world challenges where students combine mathematics, coding, ecological research, and rhetoric to propose actionable solutions to community problems.',
      icon: <Sparkles className="w-6 h-6 text-amber-600" />
    }
  ];

  return (
    <section id="teaching-learning" className="space-y-12 pt-16 scroll-mt-28 border-t border-slate-200">
      

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Pedagogical Philosophy</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Teaching & Learning
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

      
    </section>
  );
};
