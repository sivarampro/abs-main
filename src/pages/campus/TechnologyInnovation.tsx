import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { Cpu, Bot, Sparkles, Terminal, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';

export const TechnologyInnovation: React.FC = () => {
  const techHubs = [
    {
      title: 'Robotics & AI Innovation Hub',
      tag: 'Robotics & Mechatronics',
      desc: 'An 8,000 sq.ft. industrial-grade maker laboratory with 3D printer arrays, CNC routers, laser engravers, automated testing arenas, and drone cages.',
      specs: ['Array of industrial 3D printers & CNC', 'Arduino, Raspberry Pi & ESP32 IoT stations', 'Dedicated indoor drone testing cage', 'VR/AR spatial simulation goggles'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Advanced Computer Science & Data Labs',
      tag: 'Computational Sciences',
      desc: 'Dual-boot GPU development workstations with high-speed 10Gbps campus fiber, supporting machine learning models, cybersecurity exercises, and software development.',
      specs: ['High-performance Nvidia GPU developer rigs', '10Gbps dedicated campus fiber connectivity', 'Multi-monitor coding workstations', 'Cloud sandbox development environments'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Digital Media & Virtual Reality Studio',
      tag: 'Immersive Media & VR',
      desc: 'Green screen broadcast studio, 4K digital cinematography equipment, podcast audio booths, and VR headsets for immersive spatial simulations.',
      specs: ['Chroma-key green screen studio', '4K cinematography cameras & teleprompters', 'Acoustic broadcast podcasting booths', 'Oculus & HTC Vive VR learning modules'],
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      <PageHeader
        badge="Campus • STEM"
        title="Technology & Innovation"
        tagline="Next-generation robotics maker spaces, AI development laboratories, and immersive media studios."
        breadcrumbs={[
          { label: 'Campus', href: '/campus' },
          { label: 'Technology & Innovation' }
        ]}
        actions={
          <Link
            to="/book-a-visit"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Campus Tour</span>
          </Link>
        }
      />

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Pioneering Frontier Tech</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Transforming Ideas into Real-World Breakthroughs
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-light">
            In our Innovation Hubs, students are not mere consumers of digital tools—they are creators, engineers, and researchers who build automated machines, analyze algorithmic accountability, and design solutions for real-world societal impact.
          </p>
        </div>
      </section>

      {/* Facilities List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {techHubs.map((facility, idx) => (
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

      {/* Navigation Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-950">Return to Campus Overview</h3>
            <p className="text-xs text-slate-600 mt-0.5">Explore the interactive campus map and complete architectural masterplan.</p>
          </div>
          <Link
            to="/campus"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Campus Masterplan</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </section>
    </div>
  );
};
