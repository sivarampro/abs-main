import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const LabsLibrary: React.FC = () => {
  const hubs = [
    {
      title: 'Advanced Science & Discovery Labs',
      tag: 'Experimental Sciences',
      desc: 'Four dedicated collegiate wet and computational laboratories for Physics, Chemistry, Biology, and Biotechnology research with digital sensors.',
      specs: ['Independent Bio, Chem & Physics wings', 'Digital Vernier sensor interface kits', 'Laminar air flow & automated fume hoods', 'Collegiate research microscope array'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'The Knowledge Commons & Central Library',
      tag: 'Research & Scholarly Commons',
      desc: 'A dual-level architectural sanctuary housing 45,000+ print volumes, global subscriptions to JSTOR & Oxford Academic, and silent acoustic study pods.',
      specs: ['45,000+ Curated Print Volumes', 'JSTOR, Nature & EBSCO digital databases', 'Acoustic glass discussion rooms', 'Automated RFID checkout kiosks'],
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Robotics & AI Innovation Hub',
      tag: 'Robotics & Mechatronics',
      desc: 'An 8,000 sq.ft. industrial-grade maker laboratory with 3D printer arrays, CNC routers, laser engravers, automated testing arenas, and drone cages.',
      specs: ['Array of industrial 3D printers & CNC', 'Arduino, Raspberry Pi & ESP32 IoT stations', 'Dedicated indoor drone testing cage', 'VR/AR spatial simulation goggles'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <section id="labs-library" className="space-y-12 pt-16 scroll-mt-28 border-t border-slate-200">
      
      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Discovery & Research</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Where Inquiry Meets Cutting-Edge Infrastructure
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-light">
            Our laboratories and libraries are designed to bridge the gap between theoretical knowledge and practical discovery. Students engage in high-level research, supported by comprehensive academic resources and industry-standard scientific equipment.
          </p>
        </div>
      </section>

      {/* Facilities List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {hubs.map((facility, idx) => (
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
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">Equipment & Infrastructure:</span>
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
