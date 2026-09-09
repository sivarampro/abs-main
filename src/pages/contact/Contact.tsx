import React, { useState } from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { contactService, ContactSubmissionResult } from '../../services/contactService';
import { ContactFormData } from '../../types';
import { useToast } from '../../components/common/ToastContext';
import { MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight, Building, Compass, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  const { showToast } = useToast();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    department: 'Admissions Office',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<ContactSubmissionResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Message content is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      showToast('Validation Error', 'Please complete all required fields.', 'error');
      return;
    }

    setLoading(true);
    try {
      const res = await contactService.submitContact(formData);
      setSubmissionResult(res);
      showToast('Message Sent', `Ticket #${res.ticketId} created! We will reply within 24 hours.`, 'success');
      window.scrollTo({ top: 150, behavior: 'smooth' });
    } catch {
      showToast('Error', 'Unable to send message. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      
      <PageHeader
        badge="Connect with ABS"
        title="Contact & Campus Directory"
        tagline="Our admissions officers, academic deans, and administrative teams are here to assist your family."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Contact Directory & Map Area */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Cards */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6 shadow-xl border border-slate-800">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">Headquarters</span>
              <h3 className="font-serif text-2xl font-bold text-white">Campus Information</h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Main Campus:</strong>
                    <span>[ABS CAMPUS ROAD, EDUCATION CORRIDOR, CITY, STATE - PIN CODE]</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Direct Telephone Lines:</strong>
                    <p>Admissions: [+1 (800) ABS-EDUCATE]</p>
                    <p>General Reception: [+91 (XX) XXXX-XXXX]</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Email Inquiries:</strong>
                    <p>Admissions: admissions@abs.edu</p>
                    <p>Principal&rsquo;s Office: principal@abs.edu</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Administrative Office Hours:</strong>
                    <p>Monday – Friday: 08:00 AM – 04:30 PM</p>
                    <p>Saturday (Admissions Only): 09:00 AM – 01:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Interactive Campus Map Area */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-amber-600" />
                  <span>Campus Location & Transit</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500">GATE 1 & GATE 2</span>
              </div>

              {/* Map Illustration Frame */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-200 border border-slate-300 flex items-center justify-center text-center p-4">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 mx-auto flex items-center justify-center shadow-lg animate-bounce">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <strong className="font-serif text-sm font-bold text-slate-900 block">ABS Main Campus</strong>
                  <p className="text-[11px] text-slate-600">25-Acre Eco-Campus • Free Visitor Parking</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800 flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  to="/book-a-visit"
                  className="text-xs font-semibold text-slate-700 hover:text-slate-900"
                >
                  Book In-Person Tour &rarr;
                </Link>
              </div>
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            {submissionResult ? (
              <div className="bg-white rounded-3xl border-2 border-emerald-300 p-8 sm:p-12 shadow-xl text-center space-y-6 animate-slide-up">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">Inquiry Received</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">{submissionResult.message}</p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 inline-block">
                  Reference Ticket: #{submissionResult.ticketId}
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmissionResult(null)}
                    className="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-card space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-1">Send a Message</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
                    How Can We Assist You?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Richard Vance"
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:outline-none ${
                        errors.name ? 'border-rose-400 ring-1 ring-rose-400' : 'border-slate-200 focus:border-amber-400'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. richard@example.com"
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:outline-none ${
                        errors.email ? 'border-rose-400 ring-1 ring-rose-400' : 'border-slate-200 focus:border-amber-400'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +1 (555) 012-3849"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Department</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-400"
                    >
                      <option value="Admissions Office">Admissions Office</option>
                      <option value="Principal & Leadership">Principal & Leadership Office</option>
                      <option value="Accounts & Fee Ledger">Accounts & Fee Ledger</option>
                      <option value="Careers & HR">Careers & Human Resources</option>
                      <option value="Student Wellbeing & Pastoral">Student Wellbeing & Pastoral</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Subject *</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Inquiry regarding Grade 9 Admissions & Lab Facilities"
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:outline-none ${
                        errors.subject ? 'border-rose-400 ring-1 ring-rose-400' : 'border-slate-200 focus:border-amber-400'
                      }`}
                    />
                    {errors.subject && <p className="text-xs text-rose-600 mt-1">{errors.subject}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Message *</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your detailed inquiry here..."
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:outline-none ${
                        errors.message ? 'border-rose-400 ring-1 ring-rose-400' : 'border-slate-200 focus:border-amber-400'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message}</p>}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500">We usually respond within 24 hours.</span>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center gap-2 disabled:opacity-50"
                  >
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
