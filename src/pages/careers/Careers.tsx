import React, { useState } from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { useToast } from '../../components/common/ToastContext';
import { Briefcase, Sparkles, CheckCircle2, ArrowRight, Heart, Award, Users, BookOpen } from 'lucide-react';

export const Careers: React.FC = () => {
  const { showToast } = useToast();
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [positionApplied, setPositionApplied] = useState('Senior Physics & STEM Faculty');

  const openings = [
    {
      id: 'job-1',
      title: 'Senior Secondary Physics & Quantum Mechanics Faculty',
      department: 'STEM & Sciences',
      type: 'Full-Time',
      experience: '5+ Years in Cambridge / International Curricula',
      description: 'Lead advanced experimental physics laboratories and mentor student Olympiad research projects.'
    },
    {
      id: 'job-2',
      title: 'Head of Middle School Rhetoric & World Literature',
      department: 'Humanities & Languages',
      type: 'Full-Time',
      experience: '4+ Years Socratic Seminar Leadership',
      description: 'Inspire critical inquiry, essay writing rigor, and debate mastery across Grades 6 to 8.'
    },
    {
      id: 'job-3',
      title: 'Robotics, IoT & Maker Innovation Fellow',
      department: 'Innovation & Tech',
      type: 'Full-Time',
      experience: 'Prototyping & Arduino / CAD Mastery',
      description: 'Direct our 8,000 sq.ft. Innovation Hub and coach the FIRST LEGO League competitive squads.'
    },
    {
      id: 'job-4',
      title: 'Senior Pastoral Counselor & Adolescent Psychologist',
      department: 'Student Wellbeing',
      type: 'Full-Time',
      experience: 'Licensed Child / Adolescent Psychologist',
      description: 'Deliver compassionate mental health support, emotional resilience clinics, and advisory mentoring.'
    },
    {
      id: 'job-5',
      title: 'Varsity Aquatics & Swimming Head Coach',
      department: 'Physical Education',
      type: 'Full-Time',
      experience: 'National Level Swim Coaching Certification',
      description: 'Manage the 50m Olympic pool training programs from developmental swimmers to national qualifiers.'
    }
  ];

  const filteredJobs = selectedDept === 'All'
    ? openings
    : openings.filter(j => j.department === selectedDept);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) {
      showToast('Required Fields', 'Please enter your name and email.', 'error');
      return;
    }
    showToast('Application Received', `Thank you, ${applicantName}. Your application for "${positionApplied}" has been received by HR.`, 'success');
    setApplicantName('');
    setApplicantEmail('');
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      <PageHeader
        badge="Join Our Team"
        title="Careers in Transformative Pedagogy"
        tagline="Teach and mentor with intellectual freedom, world-class resources, and a deeply collaborative faculty culture."
        breadcrumbs={[{ label: 'Careers at ABS' }]}
      />

      {/* 1. Why Teach at ABS Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Faculty Experience</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
            Why Educators Flourish at ABS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Intellectual Autonomy', desc: 'Design inspiring inquiry-led units backed by generous research budgets.', icon: <BookOpen className="w-5 h-5 text-amber-600" /> },
            { title: '8:1 Student Ratio', desc: 'Deeply know every scholar; seminar classrooms capped at 16–18 students.', icon: <Users className="w-5 h-5 text-blue-600" /> },
            { title: 'Global Compensation', desc: 'Competitive international salary packages, housing allowances, and health coverage.', icon: <Award className="w-5 h-5 text-emerald-600" /> },
            { title: 'Continuous Sabbaticals', desc: 'Funded attendance at international pedagogy conferences and research fellowships.', icon: <Sparkles className="w-5 h-5 text-purple-600" /> },
          ].map((ben, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-card space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                {ben.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-950">{ben.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{ben.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Open Positions List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block">Current Vacancies</span>
            <h3 className="font-serif text-3xl font-bold text-slate-950">Open Academic Positions</h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['All', 'STEM & Sciences', 'Humanities & Languages', 'Innovation & Tech', 'Student Wellbeing', 'Physical Education'].map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDept(d)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedDept === d ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900">
                    {job.department}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{job.type}</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-slate-950">{job.title}</h4>
                <p className="text-xs text-slate-600 max-w-2xl">{job.description}</p>
                <p className="text-[11px] text-slate-400">Requirement: {job.experience}</p>
              </div>

              <button
                onClick={() => {
                  setPositionApplied(job.title);
                  document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex-shrink-0"
              >
                Apply for Role
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Quick Application Form */}
      <section id="application-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-card space-y-6">
          <div className="text-center max-w-md mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Submit Credentials</span>
            <h3 className="font-serif text-2xl font-bold text-slate-950">Faculty Application Form</h3>
          </div>

          <form onSubmit={handleApply} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
                placeholder="e.g. Dr. Jennifer Hayes"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Email Address *</label>
              <input
                type="email"
                required
                value={applicantEmail}
                onChange={(e) => setApplicantEmail(e.target.value)}
                placeholder="e.g. j.hayes@example.com"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Position of Interest</label>
              <input
                type="text"
                value={positionApplied}
                onChange={(e) => setPositionApplied(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Brief Cover Statement / Portfolio URL</label>
              <textarea
                rows={3}
                placeholder="Briefly describe your teaching philosophy and academic credentials..."
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="sm:col-span-2 pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs"
              >
                Submit Faculty Application
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
};
