import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { schoolEvents } from '../../data/events';
import { EventRSVPModal } from '../../components/widgets/EventRSVPModal';
import { Calendar, Clock, MapPin, Ticket, ArrowRight, Share2, ShieldCheck, Users } from 'lucide-react';
import { useToast } from '../../components/common/ToastContext';

export const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);
  const { showToast } = useToast();

  const event = schoolEvents.find(e => e.id === id);

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link Copied', 'Event link copied to clipboard!', 'info');
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      
      <PageHeader
        badge={event.category}
        title={event.title}
        tagline={`${event.formattedDate} • ${event.time}`}
        breadcrumbs={[
          { label: 'Events', href: '/events' },
          { label: event.title }
        ]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Event Banner Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-video">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Event Logistics Summary Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
              <Calendar className="w-4 h-4" />
              <span>{event.formattedDate}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>{event.location}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {event.registrationRequired ? (
              <button
                onClick={() => setIsRSVPOpen(true)}
                className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Ticket className="w-4 h-4" />
                <span>Reserve Free Pass</span>
              </button>
            ) : (
              <span className="px-4 py-2.5 bg-slate-800 text-slate-300 text-xs font-semibold rounded-xl text-center">
                Open Campus Entry
              </span>
            )}
            <button
              onClick={handleShare}
              className="p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors flex items-center justify-center"
              title="Share Event"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Detailed Event Narrative */}
        <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg font-light">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
            About This Event
          </h3>
          <p>{event.description}</p>
          <p>
            All visitors, students, and prospective parents are invited to participate. Campus parking is available via Gate 2, and student ambassadors will be stationed at the Admissions Rotunda to guide guests.
          </p>
        </div>

        {/* Security & Access Protocols */}
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-slate-700">
          <ShieldCheck className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-950 block">Campus Security Protocol:</strong>
            All non-registered guests must present government photo ID at the main security kiosk. Pre-registered ticket holders may use the fast-track QR scanner lane.
          </div>
        </div>

      </section>

      {/* RSVP Modal */}
      <EventRSVPModal
        event={event}
        isOpen={isRSVPOpen}
        onClose={() => setIsRSVPOpen(false)}
      />

    </div>
  );
};
