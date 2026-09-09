import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { HeartHandshake, UserCheck, Sparkles, GraduationCap, ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';

export const AcademicSupport: React.FC = () => {
  const supportPrograms = [
    {
      title: 'Individualized Mentorship & Learning Clinic',
      desc: 'One-on-one and small group subject clinics after school where faculty mentors provide conceptual clarification, homework guidance, and study strategy coaching.',
      tag: 'After-School Clinics'
    },
    {
      title: 'Scholastic Enrichment & Olympiad Prep',
      desc: 'Advanced honors tracks for gifted students preparing for national and international Math, Physics, Chemistry, Linguistics, and Informatics Olympiads.',
      tag: 'Honors & Olympiads'
    },
    {
      title: 'Global University Placement Counseling',
      desc: 'Dedicated collegiate counselors guide high school students through standardized testing (SAT/ACT/IELTS), portfolio development, essay writing, and Ivy League/Oxbridge applications.',
      tag: 'College Counseling'
    },
    {
      title: 'Learning Diversity & Multi-Sensory Support',
      desc: 'Specialized learning strategists who assist neurodiverse learners with differentiated sensory tools, executive functioning coaching, and personalized accommodations.',
      tag: 'Learning Diversity'
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      <PageHeader
        badge="Academics • Mentorship"
        title="Academic Support & Guidance"
        tagline="Personalized tutoring, gifted enrichment, learning diversity support, and world-class college counseling."
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Academic Support' }
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
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Every Student Known & Supported</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Targeted Guidance for Every Individual Learner
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-light">
            No two students follow the exact same path. Our comprehensive academic support system provides both remedial clinics for conceptual gaps and advanced enrichment honors tracks to push scholars to their maximum potential.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supportPrograms.map((program, idx) => (
            <div key={idx} className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-all space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 inline-block">
                {program.tag}
              </span>
              <h3 className="font-serif text-2xl font-bold text-slate-950">{program.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">{program.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-950">Next: Assessment & Progress</h3>
            <p className="text-xs text-slate-600 mt-0.5">Understand our continuous competency-based evaluation and analytics reporting.</p>
          </div>
          <Link
            to="/academics/assessment-progress"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Assessment & Progress</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </section>
    </div>
  );
};
