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
      


      {/* Facilities List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {transportFeatures.map((facility, idx) => (
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
