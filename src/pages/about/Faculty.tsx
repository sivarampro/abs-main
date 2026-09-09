import React, { useState } from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { facultyDirectory } from '../../data/faculty';
import { Sparkles, Mail, BookOpen, GraduationCap, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Faculty: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');

  const departments = [
    'All',
    'Leadership',
    'STEM & Sciences',
    'Humanities & Languages',
    'Visual & Performing Arts',
    'Physical Education'
  ];

  const filteredFaculty = selectedDepartment === 'All'
    ? facultyDirectory
    : facultyDirectory.filter(f => f.department === selectedDepartment);

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      
      <PageHeader
        badge="Faculty Directory"
        title="Distinguished Educators & Research Mentors"
        tagline="Meet the master teachers, scholars, and scientists guiding ABS scholars across every academic discipline."
        breadcrumbs={[
          { label: 'About ABS', href: '/about' },
          { label: 'Faculty Directory' }
        ]}
      />

      {/* Department Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded-2xl max-w-4xl mx-auto">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                selectedDepartment === dept
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </section>

      {/* Faculty Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFaculty.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-slate-900 shadow-xs backdrop-blur-xs">
                      {member.department}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-xl font-bold text-slate-950">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-amber-700">{member.role}</p>
                  <p className="text-xs text-slate-500 font-medium">{member.qualifications}</p>
                  <p className="text-xs text-slate-600 pt-2 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{member.experienceYears}+ Years Teaching</span>
                <span className="text-amber-700 font-semibold cursor-pointer hover:underline">
                  Consultation Info
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Our Faculty CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 block">Teach with Us</span>
            <h3 className="font-serif text-2xl font-bold text-slate-950">
              Passionate About Transformative Pedagogy?
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Explore open faculty and research fellow vacancies across STEM, Arts, and Humanities.
            </p>
          </div>
          <Link
            to="/careers"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex-shrink-0"
          >
            View Open Positions
          </Link>
        </div>
      </section>

    </div>
  );
};
