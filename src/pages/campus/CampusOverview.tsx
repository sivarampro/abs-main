import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { Calendar } from 'lucide-react';

export const CampusOverview: React.FC = () => {
  const topics = [
    {
      id: 'classrooms',
      title: 'Classrooms & Learning Spaces',
      desc: 'Step into our vibrant classrooms and academic environments designed to foster collaboration, intellectual curiosity, and focused learning.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'labs-library',
      title: 'Labs & Library',
      desc: 'State-of-the-art laboratories and a 45,000+ volume Central Library that inspire discovery, research, and a lifelong love of reading.',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'sports',
      title: 'Sports & Playgrounds',
      desc: 'Olympic-standard facilities, FIFA AstroTurf, and multi-sport arenas that encourage physical fitness, teamwork, and healthy competition.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'arts',
      title: 'Arts & Activity Spaces',
      desc: 'Dedicated spaces for visual arts, performing arts, and creative expression to nurture every student\'s artistic potential.',
      image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'cafeteria',
      title: 'Cafeteria & Dining',
      desc: 'Spacious, hygienic dining halls offering nutritious and diverse culinary options in a comfortable communal setting.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'transport',
      title: 'Transport Facilities',
      desc: 'A safe, reliable, and extensive fleet of GPS-enabled school buses providing seamless connectivity across major routes.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'facilities',
      title: 'Campus Facilities',
      desc: 'Comprehensive infrastructure including round-the-clock medical rooms, advanced security systems, and core amenities to ensure a safe environment.',
      image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <div className="pb-24">
      
      <PageHeader
        badge="25-Acre Masterplan"
        title="Campus Overview"
        tagline="Explore our 25-acre sustainable, light-filled educational pavilions, specialized research laboratories, and Olympic-grade athletic grounds designed as an architectural masterpiece for modern learning."
        breadcrumbs={[{ label: 'Campus Overview' }]}
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

      {/* Topics */}
      <div className="flex flex-col">
        {topics.map((topic, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <section 
              key={idx} 
              id={topic.id} 
              className={`py-20 sm:py-28 ${isEven ? 'bg-white' : 'bg-slate-50 border-y border-slate-200'} scroll-mt-20`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                    {topic.title}
                  </h3>
                  <p className="text-slate-600 sm:text-lg leading-relaxed">
                    {topic.desc}
                  </p>
                </div>
                <div className="rounded-3xl overflow-hidden bg-slate-100 shadow-xl border border-slate-200">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="w-full h-auto max-h-[600px] sm:max-h-[700px] object-cover"
                  />
                </div>
              </div>
            </section>
          );
        })}
      </div>

    </div>
  );
};
