import React, { useState } from 'react';
import { X, Calendar, MapPin, CheckCircle2, Ticket, Download, ArrowRight } from 'lucide-react';
import { SchoolEvent } from '../../types';
import { eventService, EventRSVPResult } from '../../services/eventService';
import { useToast } from '../common/ToastContext';

interface EventRSVPModalProps {
  event: SchoolEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EventRSVPModal: React.FC<EventRSVPModalProps> = ({ event, isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [loading, setLoading] = useState(false);
  const [ticketResult, setTicketResult] = useState<EventRSVPResult | null>(null);
  const { showToast } = useToast();

  if (!isOpen || !event) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      showToast('Required Fields', 'Please enter your name and email address.', 'error');
      return;
    }
    setLoading(true);
    try {
      const res = await eventService.registerForEvent(event.id, name, email, guestCount);
      setTicketResult(res);
      showToast('RSVP Confirmed', `Your ticket #${res.ticketId} has been generated!`, 'success');
    } catch {
      showToast('Error', 'Unable to complete RSVP. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setTicketResult(null);
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs p-4 flex items-center justify-center animate-fade-in" role="dialog" aria-modal="true">
      <div
        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-slate-900 text-white flex items-start justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Event Registration & Pass
            </span>
            <h3 className="font-serif text-xl font-bold text-white line-clamp-2">
              {event.title}
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors ml-4 flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {ticketResult ? (
          /* Confirmation & Ticket View */
          <div className="p-6 sm:p-8 space-y-6 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="font-serif text-2xl font-bold text-slate-950">
                You&rsquo;re Registered!
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                A confirmation has been saved and your digital admission pass is ready below.
              </p>
            </div>

            {/* Stylized Digital Event Ticket */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-dashed border-amber-300 text-left space-y-3 shadow-inner">
              <div className="flex items-center justify-between border-b border-amber-200 pb-2">
                <div className="flex items-center gap-2">
                  <Ticket className="w-4 h-4 text-amber-600" />
                  <span className="font-serif font-bold text-slate-900 text-sm">ABS EVENT PASS</span>
                </div>
                <span className="font-mono text-xs font-bold text-amber-800 bg-amber-200/80 px-2 py-0.5 rounded">
                  #{ticketResult.ticketId}
                </span>
              </div>

              <div className="text-xs space-y-1 text-slate-700">
                <p><strong>Attendee:</strong> {ticketResult.attendeeName}</p>
                <p><strong>Guests:</strong> {ticketResult.guestCount} Person(s)</p>
                <p><strong>Date & Time:</strong> {event.formattedDate} • {event.time}</p>
                <p><strong>Location:</strong> {event.location}</p>
              </div>

              <div className="pt-2 text-[10px] text-slate-400 text-center uppercase tracking-wider">
                Present this ticket or reference number at campus security
              </div>
            </div>

            <div className="flex gap-2 justify-center">
              <button
                onClick={() => {
                  showToast('Downloaded', 'Ticket saved to downloads.', 'info');
                }}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Save Ticket</span>
              </button>
              <button
                onClick={handleReset}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* RSVP Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                <span>{event.formattedDate} ({event.time})</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>{event.location}</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Eleanor Vance"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. eleanor@example.com"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Number of Attendees
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-amber-400"
              >
                <option value={1}>1 Person</option>
                <option value={2}>2 Persons (Parent + Student)</option>
                <option value={3}>3 Persons (Family)</option>
                <option value={4}>4 Persons</option>
              </select>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <span>{loading ? 'Generating Ticket...' : 'Confirm RSVP & Get Ticket'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
