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
          <div key={idx} className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                {space.title}
              </h3>
              <p className="text-slate-600 sm:text-lg leading-relaxed">
                {space.desc}
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
              <img
                src={space.image}
                alt={space.title}
                className="w-full h-auto max-h-[600px] object-cover"
              />
            </div>
          </div>
        ))}
      </section>


      
    </section>
  );
};
