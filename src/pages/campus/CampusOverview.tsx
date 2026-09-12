import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { Calendar } from 'lucide-react';
import { ScrollStackedImages } from '../../components/campus/ScrollStackedImages';

export const CampusOverview: React.FC = () => {
  const topics = [
    {
      id: 'classrooms',
      title: 'Classrooms & Learning Spaces',
      desc: 'Step into our vibrant classrooms and academic environments designed to foster collaboration, intellectual curiosity, and focused learning.',
      scrollGallery: [
        '/images/campus/classroom_1.jpg',
        '/images/campus/classroom_2.jpg',
        '/images/campus/classroom_3.jpg',
        '/images/campus/classroom_4.jpg',
        '/images/campus/classroom_5.jpg'
      ]
    },
    {
      id: 'labs-library',
      title: 'Labs & Library',
      desc: 'State-of-the-art laboratories and a 45,000+ volume Central Library that inspire discovery, research, and a lifelong love of reading.',
      scrollGallery: [
        'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    {
      id: 'sports',
      title: 'Sports & Playgrounds',
      desc: 'Olympic-standard facilities, FIFA AstroTurf, and multi-sport arenas that encourage physical fitness, teamwork, and healthy competition.',
      scrollGallery: [
        '/images/campus/sports_1.jpg',
        '/images/campus/sports_2.jpg',
        '/images/campus/sports_3.jpg',
        '/images/campus/sports_4.jpg',
        '/images/campus/sports_5.jpg'
      ]
    },
    {
      id: 'arts',
      title: 'Arts & Activity Spaces',
      desc: 'Dedicated spaces for visual arts, performing arts, and creative expression to nurture every student\'s artistic potential.',
      scrollGallery: [
        'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    {
      id: 'cafeteria',
      title: 'Cafeteria & Dining',
      desc: 'Spacious, hygienic dining halls offering nutritious and diverse culinary options in a comfortable communal setting.',
      scrollGallery: [
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    {
      id: 'transport',
      title: 'Transport Facilities',
      desc: 'A safe, reliable, and extensive fleet of GPS-enabled school buses providing seamless connectivity across major routes.',
      scrollGallery: [
        'https://images.unsplash.com/photo-1557223562-6c77ef161f58?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1629853965902-181180b7eef7?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    {
      id: 'facilities',
      title: 'Campus Facilities',
      desc: 'Comprehensive infrastructure including round-the-clock medical rooms, advanced security systems, and core amenities to ensure a safe environment.',
      scrollGallery: [
        'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1498075702571-ecb018f3752d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80'
      ]
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
                <ScrollStackedImages 
                  images={topic.scrollGallery} 
                  title={topic.title} 
                  desc={topic.desc} 
                />
              </div>
            </section>
          );
        })}
      </div>

    </div>
  );
};
