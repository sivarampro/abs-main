import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Monitor, Layers, Users, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';

export const Classrooms: React.FC = () => {
  const spaces = [
    {
      title: 'Harkness Socratic Seminar Rooms',
      tag: 'Interactive Classrooms',
      desc: 'Oval-table seminar rooms designed to eliminate hierarchy and foster dialogue-driven learning, modeled after elite university tutorial spaces.',
      specs: ['Capacity: 16 students max', 'Central oval oak Harkness table', '360-degree whiteboard walls', 'Acoustic sound dampening'],
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Next-Gen Smart Classrooms',
      tag: 'Digital Learning',
      desc: 'Flexible seating environments equipped with interactive 4K smart panels and high-speed gigabit connectivity to support blended and flipped classroom pedagogies.',
      specs: ['Capacity: 24 students max', '86-inch 4K Smart Panels', 'Modular acoustic movable furniture', 'High-fidelity audio distribution'],
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <section id="classrooms" className="space-y-12 pt-16 scroll-mt-28 border-t border-slate-200">
      



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

      {/* Learning & Academic Spaces Masonry Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="text-center space-y-4 mb-10">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Learning Environments in Action
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Step into our vibrant classrooms and academic environments designed to foster collaboration, intellectual curiosity, and focused learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px] sm:auto-rows-[250px]">
          {/* Image 1: Large Feature */}
          <div className="md:col-span-8 md:row-span-2 rounded-2xl overflow-hidden group relative bg-slate-100">
            <img src="/images/learning-spaces/space-1.jpg" alt="Classroom learning environment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          {/* Image 2 */}
          <div className="md:col-span-4 rounded-2xl overflow-hidden group relative bg-slate-100">
            <img src="/images/learning-spaces/space-2.jpg" alt="Interactive learning space" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          {/* Image 3 */}
          <div className="md:col-span-4 rounded-2xl overflow-hidden group relative bg-slate-100">
            <img src="/images/learning-spaces/space-3.jpg" alt="Academic engagement" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          {/* Image 4 */}
          <div className="md:col-span-6 rounded-2xl overflow-hidden group relative bg-slate-100">
            <img src="/images/learning-spaces/space-4.jpg" alt="Digital classroom presentation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          {/* Image 5 */}
          <div className="md:col-span-6 rounded-2xl overflow-hidden group relative bg-slate-100">
            <img src="/images/learning-spaces/space-5.jpg" alt="Smart classroom learning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </section>
      
    </section>
  );
};
