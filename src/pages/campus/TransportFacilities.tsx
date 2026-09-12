import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const TransportFacilities: React.FC = () => {
  const transportFeatures = [
    {
      title: 'GPS-Tracked Safe Commute Fleet',
      tag: 'Transport & Logistics',
      desc: 'Our expansive fleet of air-conditioned buses ensures safe, comfortable, and timely commutes for students across all major city routes. Equipped with real-time GPS tracking for parents.',
      specs: ['Real-time GPS tracking app for parents', 'CCTV surveillance in all buses', 'Trained female attendants on board', 'Speed governors & seat belts'],
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <section id="transport" className="space-y-12 pt-16 scroll-mt-28 border-t border-slate-200">
      
      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Safe & Reliable</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Seamless Connectivity & Secure Transit
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-light">
            We prioritize the safety and comfort of our students from the moment they leave home until they return. Our dedicated transport network is managed by experienced professionals and features state-of-the-art security technology.
          </p>
        </div>
      </section>

      {/* Facilities List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {transportFeatures.map((facility, idx) => (
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
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">Safety & Features:</span>
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
