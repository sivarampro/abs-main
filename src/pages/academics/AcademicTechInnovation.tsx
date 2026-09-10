import React from 'react';
import { Link } from 'react-router-dom';
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
    <section id="technology-innovation" className="space-y-12 pt-16 scroll-mt-28 border-t border-slate-200">
      

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

      
    </section>
  );
};
