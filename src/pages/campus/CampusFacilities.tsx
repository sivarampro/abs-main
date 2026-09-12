import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Stethoscope, Lock, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';

export const CampusFacilities: React.FC = () => {
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
      



      {/* Facilities List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {safetyPillars.map((facility, idx) => (
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
