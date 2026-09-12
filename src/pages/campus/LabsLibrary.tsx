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
      


      {/* Facilities List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {hubs.map((facility, idx) => (
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
