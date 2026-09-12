import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Stethoscope, Lock, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';

export const WellbeingSafety: React.FC = () => {
  const safetyPillars = [
    {
      title: 'Health & Medical Infirmary',
      tag: 'Medical Care',
      desc: 'A 6-bed modern medical observation ward staffed by registered nursing staff 24/7 with on-call pediatric physicians and emergency triage capabilities.',
      specs: ['24/7 Certified nursing staff on duty', 'Emergency AED defibrillators & oxygen', 'Confidential student health electronic records', 'Rapid response campus ambulance access'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Pastoral Care & Counseling Suites',
      tag: 'Mental Health & Guidance',
      desc: 'Tranquil, confidential consultation suites staffed by licensed child psychologists and pastoral guidance mentors for emotional and social support.',
      specs: ['Private, soundproof consultation rooms', 'Licensed child psychologists & mentors', 'Sensory calm-down reflection garden', 'Social-emotional learning advisory workshops'],
      image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Smart Campus Security & Surveillance Hub',
      tag: 'Safeguarding & Security',
      desc: 'Comprehensive multi-layered perimeter security with 250+ HD CCTV cameras, biometric RFID access control, and real-time GPS fleet tracking.',
      specs: ['250+ HD CCTV monitoring network', 'Biometric & RFID access control turnstiles', 'GPS real-time bus fleet tracking app', 'Background-vetted security personnel'],
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <section id="facilities" className="space-y-12 pt-16 scroll-mt-28 border-t border-slate-200">
      

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Pastoral Care & Safeguarding</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Unconditional Safety, Health & Emotional Wellbeing
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-light">
            Every child’s physical safety and emotional security are the foundational prerequisites for authentic learning. We operate with international safeguarding accreditations, full-time medical staff, and round-the-clock security infrastructure.
          </p>
        </div>
      </section>

      {/* Facilities List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {safetyPillars.map((facility, idx) => (
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
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">Protocols & Standards:</span>
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
