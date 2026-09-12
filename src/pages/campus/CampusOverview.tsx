import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { InteractiveCampusMap } from '../../components/campus/InteractiveCampusMap';
import { campusStats } from '../../data/campus';
import { Sun, ArrowRight, Calendar } from 'lucide-react';
import { LearningSpaces } from './LearningSpaces';
import { ArtsCreativity } from './ArtsCreativity';
import { SportsRecreation } from './SportsRecreation';
import { StudentLifeSpaces } from './StudentLifeSpaces';
import { WellbeingSafety } from './WellbeingSafety';
import { TechnologyInnovation } from './TechnologyInnovation';

export const CampusOverview: React.FC = () => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      <PageHeader
        badge="25-Acre Masterplan"
        title="An Architectural Masterpiece for Modern Learning"
        tagline="Explore sustainable, light-filled educational pavilions, specialized research laboratories, and Olympic-grade athletic grounds."
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

      {/* Sticky Table of Contents Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-10">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-md p-2 sm:p-3">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth">
            {[
              { id: 'classrooms', number: '01', title: 'Classrooms & Learning Spaces' },
              { id: 'labs-library', number: '02', title: 'Labs & Library' },
              { id: 'sports', number: '03', title: 'Sports & Playgrounds' },
              { id: 'arts', number: '04', title: 'Arts & Activity Spaces' },
              { id: 'cafeteria', number: '05', title: 'Cafeteria & Dining' },
              { id: 'transport', number: '06', title: 'Transport Facilities' },
              { id: 'facilities', number: '07', title: 'Campus Facilities' },
            ].map((sec) => (
              <Link
                key={sec.id}
                to={`/campus#${sec.id}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-slate-50 hover:bg-amber-50 hover:text-amber-900 text-slate-700 transition-all border border-slate-200/80 hover:border-amber-300 flex-shrink-0"
              >
                <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-800 text-[10px] font-bold flex items-center justify-center">
                  {sec.number}
                </span>
                <span>{sec.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 1. Campus Stats Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {campusStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-card text-center space-y-2"
            >
              <div className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                {stat.label}
              </div>
              <p className="text-[11px] text-slate-500">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Interactive Hotspot Campus Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Interactive Tour</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
            Interactive Campus Masterplan
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Select any hotspot to view high-resolution photography, facility capacity, and laboratory specifications.
          </p>
        </div>

        <InteractiveCampusMap />
      </section>

      {/* 3. Sustainable Design & Green Grounds Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold uppercase tracking-wider">
              <span>Eco-Architecture</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 leading-tight">
              A Living Laboratory for Environmental Stewardship
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              Designed by award-winning architectural urbanists, the ABS campus is built around principles of biophilic design. Natural light fills 95% of all instructional spaces, while rooftop solar installations generate 65% of the campus power requirements.
            </p>

            <div className="space-y-3 pt-2">
              {[
                { title: 'Zero Net Carbon Strategy', desc: 'Solar arrays, geothermal ventilation, and 100% LED lighting.' },
                { title: 'Rainwater Harvesting & Micro-Forest', desc: 'Over 2.5 million liters of water recycled annually for botanic gardens.' },
                { title: 'Acoustically Engineered Glass Enclosures', desc: 'Double-glazed sound isolation providing serene study spaces.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900 block">{item.title}</strong>
                    <span className="text-slate-500 text-xs">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80"
                alt="ABS Knowledge Commons Library"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. Specialized Campus Domains Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Dedicated Zones</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
            Explore Campus by Domain
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Discover each specialized zone tailored for learning, arts, athletics, community, wellbeing, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Classrooms & Learning Spaces',
              href: '/campus/classrooms',
              desc: 'Smart classrooms designed for interactive and collaborative learning.',
              image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
              tag: 'Academics'
            },
            {
              title: 'Labs & Library',
              href: '/campus/labs-library',
              desc: 'State-of-the-art laboratories and a 45,000+ volume Central Library.',
              image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
              tag: 'Discovery'
            },
            {
              title: 'Sports & Playgrounds',
              href: '/campus/sports',
              desc: 'Olympic-standard facilities, FIFA AstroTurf, and multi-sport indoor arenas.',
              image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
              tag: 'Athletics'
            },
            {
              title: 'Arts & Activity Spaces',
              href: '/campus/arts',
              desc: 'Dedicated spaces for visual arts, performing arts, and creative expression.',
              image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80',
              tag: 'Creativity'
            },
            {
              title: 'Cafeteria & Dining',
              href: '/campus/cafeteria',
              desc: 'Spacious dining halls offering nutritious and diverse culinary options.',
              image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
              tag: 'Nutrition'
            },
            {
              title: 'Transport Facilities',
              href: '/campus/transport',
              desc: 'Safe, reliable, and extensive fleet of school buses covering major routes.',
              image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
              tag: 'Logistics'
            },
            {
              title: 'Campus Facilities',
              href: '/campus/facilities',
              desc: 'Medical rooms, security infrastructure, and core campus amenities.',
              image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
              tag: 'Infrastructure'
            }
          ].map((domain, i) => (
            <Link
              key={i}
              to={`/campus#${domain.href.split('/').pop()}`}
              className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={domain.image}
                  alt={domain.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 text-white backdrop-blur-xs">
                    {domain.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-950 group-hover:text-amber-700 transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    {domain.desc}
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-1 text-xs font-bold text-amber-700 group-hover:text-amber-800">
                  <span>Explore Facilities</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Render Subsections */}
      <LearningSpaces />
      <ArtsCreativity />
      <SportsRecreation />
      <StudentLifeSpaces />
      <WellbeingSafety />
      <TechnologyInnovation />

    </div>
  );
};
