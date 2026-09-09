import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { schoolEvents } from '../../data/events';
import { SchoolEvent } from '../../types';
import { EventRSVPModal } from '../../components/widgets/EventRSVPModal';
import { Calendar, MapPin, Clock, Ticket, ArrowRight, Filter, Sparkles } from 'lucide-react';

export const EventsList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedEvent, setSelectedEvent] = useState<SchoolEvent | null>(null);
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);

  const categories = ['All', 'Admissions', 'Academic', 'Arts', 'Sports', 'Community'];

  const filteredEvents = selectedCategory === 'All'
    ? schoolEvents
    : schoolEvents.filter(e => e.category === selectedCategory);

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      
      <PageHeader
        badge="School Calendar"
        title="Events, Exhibitions & Open Houses"
        tagline="Join our vibrant campus community for academic symposiums, orchestral concerts, sports championships, and prospective parent open houses."
        breadcrumbs={[{ label: 'Events & Calendar' }]}
        actions={
          <Link
            to="/book-a-visit"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Campus Visit</span>
          </Link>
        }
      />

      {/* Category Filter Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded-2xl max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-slate-900 shadow-xs">
                      {evt.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-700">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{evt.formattedDate}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-950 line-clamp-2 hover:text-amber-700 transition-colors">
                    <Link to={`/events/${evt.id}`}>
                      {evt.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {evt.excerpt}
                  </p>

                  <div className="space-y-1 pt-2 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span className="truncate">{evt.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <Link
                  to={`/events/${evt.id}`}
                  className="text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-amber-700"
                >
                  Event Details &rarr;
                </Link>

                {evt.registrationRequired ? (
                  <button
                    onClick={() => {
                      setSelectedEvent(evt);
                      setIsRSVPOpen(true);
                    }}
                    className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs flex items-center gap-1.5"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>RSVP Pass</span>
                  </button>
                ) : (
                  <span className="text-xs text-slate-400 font-medium">Free Entry</span>
                )}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* RSVP Modal */}
      <EventRSVPModal
        event={selectedEvent}
        isOpen={isRSVPOpen}
        onClose={() => {
          setIsRSVPOpen(false);
          setSelectedEvent(null);
        }}
      />

    </div>
  );
};
