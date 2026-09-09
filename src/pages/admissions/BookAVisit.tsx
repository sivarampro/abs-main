import React, { useState } from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { visitService, VisitBookingResult } from '../../services/visitService';
import { VisitBookingFormData } from '../../types';
import { useToast } from '../../components/common/ToastContext';
import { Calendar, Clock, MapPin, CheckCircle2, ArrowRight, Download, Users, Compass, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BookAVisit: React.FC = () => {
  const { showToast } = useToast();

  const [formData, setFormData] = useState<VisitBookingFormData>({
    parentName: '',
    email: '',
    phone: '',
    studentGrade: 'Primary School (Grades 1–5)',
    preferredDate: '2026-10-24',
    preferredTime: '10:00 AM',
    visitorCount: 2,
    tourType: 'Private Campus Tour',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [bookingResult, setBookingResult] = useState<VisitBookingResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.parentName.trim()) errs.parentName = 'Parent Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 7) errs.phone = 'Valid phone is required';
    if (!formData.preferredDate) errs.preferredDate = 'Please select a preferred date';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      showToast('Validation Error', 'Please check all required fields.', 'error');
      return;
    }
    setLoading(true);
    try {
      const res = await visitService.bookVisit(formData);
      setBookingResult(res);
      showToast('Tour Reserved', `Your campus pass #${res.passId} is confirmed!`, 'success');
      window.scrollTo({ top: 150, behavior: 'smooth' });
    } catch {
      showToast('Booking Failed', 'Unable to schedule visit. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      
      <PageHeader
        badge="Campus Visit"
        title="Schedule a Private Guided Tour"
        tagline="Experience our world-class laboratories, athletic facilities, and vibrant learning atmosphere in person."
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Book a Visit' }
        ]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {bookingResult ? (
          /* Booking Pass Confirmation */
          <div className="bg-white rounded-3xl border-2 border-emerald-300 p-8 sm:p-12 shadow-xl text-center space-y-8 animate-slide-up">
            
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block">
                Visit Pass Confirmed
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
                We Look Forward to Welcoming You
              </h2>
              <p className="text-sm text-slate-600 max-w-lg mx-auto">
                A confirmation has been sent to your email. Please present your pass upon arrival at the ABS Main Gate.
              </p>
            </div>

            {/* Stylized Digital Campus Pass */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-50/90 to-orange-50/80 border-2 border-dashed border-amber-300 text-left space-y-4 max-w-lg mx-auto shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-amber-200">
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider block">Official Campus Pass</span>
                  <span className="font-mono text-lg font-bold text-slate-950">#{bookingResult.passId}</span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-200 text-amber-900">
                  {bookingResult.tourType}
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-700">
                <p><strong>Primary Visitor:</strong> {bookingResult.parentName}</p>
                <p><strong>Date & Time:</strong> {bookingResult.confirmedDate} at {bookingResult.confirmedTime}</p>
                <p><strong>Party Size:</strong> {bookingResult.visitorCount} Person(s)</p>
                <p><strong>Meeting Point:</strong> Admissions Welcome Lounge, Main Academic Rotunda</p>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 text-center uppercase tracking-wider">
                Free visitor parking is available at Gate 2
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => showToast('Pass Saved', 'Pass saved to your downloads.', 'info')}
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Save Digital Pass</span>
              </button>
              <Link
                to="/apply"
                className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-12 shadow-card space-y-8">
            
            {/* Tour Type Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                Select Tour Format
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { type: 'Private Campus Tour', desc: '1-on-1 personalized guided walk with an admissions officer' },
                  { type: 'Open House Morning', desc: 'Join other prospective families for live classroom demos' },
                  { type: 'Virtual 1-on-1 Consultation', desc: 'Live video tour & curriculum briefing for relocating families' },
                ].map((item) => (
                  <button
                    key={item.type}
                    type="button"
                    onClick={() => setFormData({ ...formData, tourType: item.type as any })}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      formData.tourType === item.type
                        ? 'border-amber-400 bg-amber-50/70 ring-1 ring-amber-400 text-slate-950'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="text-xs font-bold block mb-1">{item.type}</span>
                    <span className="text-[11px] text-slate-500 font-normal leading-tight block">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Parent / Visitor Full Name *
                </label>
                <input
                  type="text"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  placeholder="e.g. David Vance"
                  className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm font-medium focus:outline-none ${
                    errors.parentName ? 'border-rose-400 ring-1 ring-rose-400' : 'border-slate-200 focus:border-amber-400'
                  }`}
                />
                {errors.parentName && <p className="text-xs text-rose-600 mt-1">{errors.parentName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Student Grade of Interest
                </label>
                <select
                  value={formData.studentGrade}
                  onChange={(e) => setFormData({ ...formData, studentGrade: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-amber-400"
                >
                  <option value="Early Years (Pre-K to KG)">Early Years (Pre-K to KG)</option>
                  <option value="Primary School (Grades 1–5)">Primary School (Grades 1–5)</option>
                  <option value="Middle School (Grades 6–8)">Middle School (Grades 6–8)</option>
                  <option value="Secondary School (Grades 9–10)">Secondary School (Grades 9–10)</option>
                  <option value="Senior Secondary (Grades 11–12)">Senior Secondary (Grades 11–12)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. david.vance@example.com"
                  className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm font-medium focus:outline-none ${
                    errors.email ? 'border-rose-400 ring-1 ring-rose-400' : 'border-slate-200 focus:border-amber-400'
                  }`}
                />
                {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +1 (555) 012-4921"
                  className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm font-medium focus:outline-none ${
                    errors.phone ? 'border-rose-400 ring-1 ring-rose-400' : 'border-slate-200 focus:border-amber-400'
                  }`}
                />
                {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-amber-400"
                >
                  <option value="09:00 AM">09:00 AM (Morning Session)</option>
                  <option value="11:00 AM">11:00 AM (Mid-Day Session)</option>
                  <option value="02:00 PM">02:00 PM (Afternoon Session)</option>
                  <option value="04:00 PM">04:00 PM (Twilight Tour)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Number of Visitors
                </label>
                <select
                  value={formData.visitorCount}
                  onChange={(e) => setFormData({ ...formData, visitorCount: Number(e.target.value) })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-amber-400"
                >
                  <option value={1}>1 Visitor</option>
                  <option value={2}>2 Visitors (Parent + Student)</option>
                  <option value={3}>3 Visitors (Family)</option>
                  <option value={4}>4 Visitors</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Specific Areas of Interest (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. We would love to see the robotics maker space and meet the swim coach..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Private tours are conducted in compliance with child safety protocols.</span>
              </span>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-10 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <span>{loading ? 'Confirming Reservation...' : 'Reserve Tour Pass'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        )}

      </section>

    </div>
  );
};
