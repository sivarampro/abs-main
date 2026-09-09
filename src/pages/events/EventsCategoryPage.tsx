import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { schoolEvents } from '../../data/events';
import { SchoolEvent } from '../../types';
import { EventRSVPModal } from '../../components/widgets/EventRSVPModal';
import { Calendar, MapPin, Clock, Ticket, ArrowRight, Sparkles, Filter } from 'lucide-react';

interface EventsCategoryPageProps {
  category: 'All' | 'Upcoming' | 'Featured' | 'Academic' | 'Arts' | 'Sports' | 'Community';
  title: string;
  badge: string;
  tagline: string;
}

export const EventsCategoryPage: React.FC<EventsCategoryPageProps> = ({
  category,
  title,
  badge,
  tagline
}) => {
  const [selectedEvent, setSelectedEvent] = useState<SchoolEvent | null>(null);
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);

  let filteredEvents = schoolEvents;

  if (category === 'Upcoming') {
    filteredEvents = schoolEvents.filter(e => e.isUpcoming);
  } else if (category === 'Featured') {
    filteredEvents = schoolEvents.slice(0, 3);
  } else if (category !== 'All') {
    filteredEvents = schoolEvents.filter(e => e.category.toLowerCase() === category.toLowerCase());
  }

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      <PageHeader
        badge={badge}
        title={title}
        tagline={tagline}
        breadcrumbs={[
          { label: 'Events', href: '/events' },
          { label: title }
        ]}
        actions={
          <Link
            to="/events/calendar"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Annual Calendar</span>
          </Link>
        }
      />

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200 space-y-3">
            <p className="font-serif text-xl font-bold text-slate-800">No events found in this category.</p>
            <p className="text-xs text-slate-500">Check our Annual Calendar for upcoming academic dates and symposiums.</p>
            <Link
              to="/events"
              className="inline-block px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
            >
              View All Events
            </Link>
          </div>
        ) : (
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

                <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
                  {evt.registrationRequired ? (
                    <button
                      onClick={() => {
                        setSelectedEvent(evt);
                        setIsRSVPOpen(true);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 bg-amber-100 hover:bg-amber-200 px-4 py-2 rounded-xl transition-colors"
                    >
                      <Ticket className="w-3.5 h-3.5 text-amber-800" />
                      <span>Reserve Seat</span>
                    </button>
                  ) : (
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                      Open to All Families
                    </span>
                  )}

                  <Link
                    to={`/events/${evt.id}`}
                    className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* RSVP Modal */}
      {selectedEvent && (
        <EventRSVPModal
          isOpen={isRSVPOpen}
          onClose={() => {
            setIsRSVPOpen(false);
            setSelectedEvent(null);
          }}
          event={selectedEvent}
        />
      )}
    </div>
  );
};
