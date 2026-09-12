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
      



      {/* Facilities List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {artsFacilities.map((facility, idx) => (
          <div key={idx} className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                {facility.title}
              </h3>
              <p className="text-slate-600 sm:text-lg leading-relaxed">
                {facility.desc}
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-auto max-h-[600px] object-cover"
              />
            </div>
          </div>
        ))}
      </section>

      
    </section>
  );
};
