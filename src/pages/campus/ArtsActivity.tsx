import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Music, Sparkles, Award, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';

export const ArtsActivity: React.FC = () => {
  const artsFacilities = [
    {
      title: 'The Grand Auditorium & Performing Arts Center',
      tag: '850-Seat Proscenium Theatre',
      desc: 'Engineered with professional acoustic damping and an expansive proscenium stage, hosting dramatic theatre productions, youth symphony concerts, and global conferences.',
      specs: ['850-Seat Tiered Auditorium', 'Motorized fly system & DMX lighting', '4K laser cinema projection', 'Orchestral pit & green rooms'],
      image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Fine Arts & Ceramics Ateliers',
      tag: 'Visual Arts & Sculpting',
      desc: 'Naturally lit north-facing creative studios with ceramic pottery wheels, electric kilns, printmaking presses, and professional digital drawing suites.',
      specs: ['Pottery wheels & electric ceramic kiln', 'Etching and lithography presses', 'Wacom Cintiq digital drawing stations', 'Exhibition gallery walkway'],
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Symphonic Music Suites & Recording Studios',
      tag: 'Orchestral & Vocal Music',
      desc: 'Sound-isolated acoustic practice pods, ensemble rehearsal halls, and an industry-standard digital DAW recording studio for orchestral and contemporary music.',
      specs: ['Sound-isolated acoustic practice rooms', 'Grand pianos & orchestral instruments', 'Multi-channel ProTools recording desk', 'Chamber choir rehearsal hall'],
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <section id="arts" className="space-y-12 pt-16 scroll-mt-28 border-t border-slate-200">
      

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Aesthetic Fluency</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Where Artistic Imagination Takes Center Stage
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-light">
            At ABS, the arts are not an extracurricular afterthought—they are central to human expression and intellectual depth. Our creative facilities offer students professional-grade materials, acoustic environments, and world-class performance venues.
          </p>
        </div>
      </section>

      {/* Facilities List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {artsFacilities.map((facility, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              <div className={`lg:col-span-6 relative aspect-[4/3] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950/80 text-white backdrop-blur-xs">
                    {facility.tag}
                  </span>
                </div>
              </div>

              <div className={`lg:col-span-6 p-8 sm:p-12 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    {facility.desc}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">Highlights:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {facility.specs.map((spec, i) => (
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
