import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Monitor, Layers, Users, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';

export const LearningSpaces: React.FC = () => {
  const spaces = [
    {
      title: 'Smart Collaborative Classrooms',
      tag: 'Interactive Pedagogy',
      desc: 'Modular learning studios equipped with 86-inch 4K interactive multi-touch displays, flexible acoustic seating, and natural circadian daylighting for deep inquiry.',
      specs: ['Capacity: 24 students max', '86-inch 4K Smart Panels', 'Modular acoustic movable furniture', 'High-fidelity audio distribution'],
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'The Knowledge Commons & Central Library',
      tag: 'Research & Scholarly Commons',
      desc: 'A dual-level architectural sanctuary housing 45,000+ print volumes, global subscriptions to JSTOR & Oxford Academic, and silent acoustic study pods.',
      specs: ['45,000+ Curated Print Volumes', 'JSTOR, Nature & EBSCO digital databases', 'Acoustic glass discussion rooms', 'Automated RFID checkout kiosks'],
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Advanced Science & Discovery Labs',
      tag: 'Experimental Sciences',
      desc: 'Four dedicated collegiate wet and computational laboratories for Physics, Chemistry, Biology, and Biotechnology research with digital sensors.',
      specs: ['Independent Bio, Chem & Physics wings', 'Digital Vernier sensor interface kits', 'Laminar air flow & automated fume hoods', 'Collegiate research microscope array'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <section id="learning-spaces" className="space-y-12 pt-16 scroll-mt-28 border-t border-slate-200">
      

      {/* Overview Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Architectural Philosophy</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Spaces Designed to Ignite Curiosity & Scholarly Focus
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-light">
            We believe the physical environment is an essential teacher. Our learning spaces are bathed in natural light, acoustically treated to eliminate distraction, and equipped with agile modular furniture that transitions effortlessly between Socratic seminars, hands-on lab experiments, and collaborative group research.
          </p>
        </div>
      </section>

      {/* Spaces Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {spaces.map((space, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              <div className={`lg:col-span-6 relative aspect-[4/3] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950/80 text-white backdrop-blur-xs">
                    {space.tag}
                  </span>
                </div>
              </div>

              <div className={`lg:col-span-6 p-8 sm:p-12 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
                    {space.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    {space.desc}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">Key Specifications:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {space.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      
    </section>
  );
};
