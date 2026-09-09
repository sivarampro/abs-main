import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { Cpu, Bot, Code, Sparkles, Terminal, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const AcademicTechInnovation: React.FC = () => {
  const techTracks = [
    {
      title: 'Coding, Algorithms & Computational Thinking',
      tag: 'Grades 1 to 12',
      desc: 'Progressive computing curriculum starting with visual logic and Scratch in Primary, advancing to Python, Java, C++, and data structures in Secondary.',
      specs: ['Python & Java core programming tracks', 'Algorithmic problem-solving challenges', 'Competitive coding olympiad coaching', 'Web & mobile app development']
    },
    {
      title: 'AI, Machine Learning & Data Literacy',
      tag: 'Middle & Senior Secondary',
      desc: 'Students learn how neural networks operate, analyze bias and ethics in algorithmic training sets, and train computer vision and NLP models for science projects.',
      specs: ['Introduction to Neural Networks & LLMs', 'Data science & statistical regression with Pandas', 'Ethical AI & algorithmic accountability', 'Real-world machine learning capstones']
    },
    {
      title: 'Robotics, IoT & Embedded Systems',
      tag: 'Makerspace Curriculum',
      desc: 'Hands-on hardware prototyping with Arduino, Raspberry Pi, microcontrollers, 3D CAD modeling, and industrial robotics competitions.',
      specs: ['FIRST LEGO League & VEX Robotics coaching', 'Microcontroller sensor programming (C++)', '3D CAD parametric modeling & rapid prototyping', 'Automated environmental IoT sensors']
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      <PageHeader
        badge="Academics • Ed-Tech"
        title="Technology & Innovation"
        tagline="Empowering students with algorithmic literacy, artificial intelligence mastery, and hands-on robotics prototyping."
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Technology & Innovation' }
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
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Computational Fluency</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Beyond Technology Consumption to Technological Creation
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-light">
            In an era shaped by artificial intelligence and automated systems, digital fluency is as foundational as literacy. We prepare our scholars to be the architects of tomorrow's technological breakthroughs through deep conceptual rigor and ethical awareness.
          </p>
        </div>
      </section>

      {/* Tracks Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techTracks.map((track, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 inline-block">
                  {track.tag}
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-950">{track.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">{track.desc}</p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 block">Core Modules:</span>
                {track.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-950">Next: Academic Support & Enrichment</h3>
            <p className="text-xs text-slate-600 mt-0.5">Explore our individualized tutoring, learning diversity, and university placement.</p>
          </div>
          <Link
            to="/academics/support"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Academic Support</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </section>
    </div>
  );
};
