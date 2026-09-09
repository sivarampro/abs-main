import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { testimonialsData } from '../../data/testimonials';
import { useToast } from '../../components/common/ToastContext';
import { Globe, Award, GraduationCap, Users, ArrowRight, CheckCircle2, Building } from 'lucide-react';

export const Alumni: React.FC = () => {
  const { showToast } = useToast();
  const [alumniName, setAlumniName] = useState('');
  const [alumniEmail, setAlumniEmail] = useState('');
  const [gradYear, setGradYear] = useState('2024');
  const [currentOrg, setCurrentOrg] = useState('');

  const handleAlumniRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!alumniName || !alumniEmail) {
      showToast('Required', 'Please provide your name and email.', 'error');
      return;
    }
    showToast('Alumni Registered', `Welcome back, ${alumniName}! Your details are updated in the global network.`, 'success');
    setAlumniName('');
    setAlumniEmail('');
    setCurrentOrg('');
  };

  const universityPlacements = [
    { uni: 'University of Oxford', count: '14 Scholars', flag: 'UK' },
    { uni: 'Harvard University', count: '9 Scholars', flag: 'USA' },
    { uni: 'Stanford University', count: '12 Scholars', flag: 'USA' },
    { uni: 'Imperial College London', count: '18 Scholars', flag: 'UK' },
    { uni: 'Massachusetts Institute of Technology (MIT)', count: '7 Scholars', flag: 'USA' },
    { uni: 'National University of Singapore (NUS)', count: '21 Scholars', flag: 'SG' },
    { uni: 'University of Cambridge', count: '11 Scholars', flag: 'UK' },
    { uni: 'ETH Zurich', count: '8 Scholars', flag: 'CH' },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      <PageHeader
        badge="Global Network"
        title="ABS Alumni Worldwide Community"
        tagline="Empowered scholars leading research breakthroughs, entrepreneurial ventures, and policy initiatives across the globe."
        breadcrumbs={[{ label: 'Alumni Network' }]}
      />

      {/* 1. University Placements Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Placements & Destinations</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
            Global University Placements
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Our graduates matriculate to premier research universities and selective colleges internationally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {universityPlacements.map((u, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover transition-all space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <GraduationCap className="w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                  {u.flag}
                </span>
              </div>
              <h4 className="font-serif text-lg font-bold text-slate-950">{u.uni}</h4>
              <p className="text-xs text-amber-700 font-semibold">{u.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Notable Alumni Voices */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Graduate Spotlight</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
            Alumni Stories of Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.filter(t => t.affiliation === 'Alumni' || t.affiliation === 'Student').map((al) => (
            <div
              key={al.id}
              className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6 flex flex-col justify-between"
            >
              <p className="text-sm sm:text-base font-light italic leading-relaxed text-slate-200">
                &ldquo;{al.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-800">
                <img
                  src={al.avatar}
                  alt={al.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-400"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{al.author}</h4>
                  <p className="text-xs text-amber-400 font-medium">{al.role}</p>
                  <span className="text-[10px] text-slate-400">{al.cohort}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Alumni Registration / Mentorship Sign-Up */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-card space-y-6">
          <div className="text-center max-w-lg mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Stay in Touch</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
              Join the Global Alumni Registry
            </h3>
            <p className="text-xs text-slate-600">
              Re-connect with classmates, offer student mentorship, and receive invitations to alumni reunions.
            </p>
          </div>

          <form onSubmit={handleAlumniRegister} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={alumniName}
                onChange={(e) => setAlumniName(e.target.value)}
                placeholder="e.g. Kavya Singhania"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Email Address *</label>
              <input
                type="email"
                required
                value={alumniEmail}
                onChange={(e) => setAlumniEmail(e.target.value)}
                placeholder="e.g. kavya@example.com"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Graduation Cohort</label>
              <select
                value={gradYear}
                onChange={(e) => setGradYear(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-400"
              >
                {Array.from({ length: 15 }, (_, i) => 2026 - i).map((yr) => (
                  <option key={yr} value={yr}>Class of {yr}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Current University / Company</label>
              <input
                type="text"
                value={currentOrg}
                onChange={(e) => setCurrentOrg(e.target.value)}
                placeholder="e.g. Oxford University / Google"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="sm:col-span-2 pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs"
              >
                Register with Alumni Association
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
};
