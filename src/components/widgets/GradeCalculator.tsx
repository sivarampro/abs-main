import React, { useState } from 'react';
import { Calculator, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GradeCalculator: React.FC = () => {
  const [birthYear, setBirthYear] = useState<number>(2018);
  const [birthMonth, setBirthMonth] = useState<number>(5);

  // Calculate age as of Sept 1, 2026
  const calcAge = 2026 - birthYear + (9 - birthMonth) / 12;

  let recommendedDivision = 'Primary School';
  let recommendedGrade = 'Grade 3';
  let route = '/academics/primary';

  if (calcAge < 3) {
    recommendedDivision = 'Toddler (Inquiry Playgroup)';
    recommendedGrade = 'Pre-Admissions Register';
    route = '/academics/early-years';
  } else if (calcAge >= 3 && calcAge < 4) {
    recommendedDivision = 'Early Years';
    recommendedGrade = 'Pre-Kindergarten (Pre-K)';
    route = '/academics/early-years';
  } else if (calcAge >= 4 && calcAge < 6) {
    recommendedDivision = 'Early Years';
    recommendedGrade = 'Kindergarten (KG)';
    route = '/academics/early-years';
  } else if (calcAge >= 6 && calcAge < 11) {
    recommendedDivision = 'Primary School';
    const g = Math.min(5, Math.max(1, Math.floor(calcAge - 5)));
    recommendedGrade = `Grade ${g}`;
    route = '/academics/primary';
  } else if (calcAge >= 11 && calcAge < 14) {
    recommendedDivision = 'Middle School';
    const g = Math.min(8, Math.max(6, Math.floor(calcAge - 5)));
    recommendedGrade = `Grade ${g}`;
    route = '/academics/middle-school';
  } else if (calcAge >= 14 && calcAge < 16) {
    recommendedDivision = 'Secondary School';
    const g = Math.min(10, Math.max(9, Math.floor(calcAge - 5)));
    recommendedGrade = `Grade ${g}`;
    route = '/academics/secondary';
  } else {
    recommendedDivision = 'Senior Secondary';
    const g = Math.min(12, Math.max(11, Math.floor(calcAge - 5)));
    recommendedGrade = `Grade ${g}`;
    route = '/academics/senior-secondary';
  }

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
        <Calculator className="w-4 h-4" />
        <span>Interactive Grade Eligibility Finder</span>
      </div>
      
      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
        Find Your Child&rsquo;s Eligible Grade
      </h3>
      
      <p className="text-sm text-slate-600 mb-6">
        Select the applicant&rsquo;s month and year of birth to see the recommended entry grade for the <strong>2026–2027 Academic Year</strong>.
      </p>

      {/* Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Birth Month
          </label>
          <select
            value={birthMonth}
            onChange={(e) => setBirthMonth(Number(e.target.value))}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:border-amber-400"
          >
            {months.map((m, idx) => (
              <option key={m} value={idx + 1}>{m}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Birth Year
          </label>
          <select
            value={birthYear}
            onChange={(e) => setBirthYear(Number(e.target.value))}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:border-amber-400"
          >
            {Array.from({ length: 17 }, (_, i) => 2024 - i).map((yr) => (
              <option key={yr} value={yr}>{yr}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Recommended Output Result Card */}
      <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Recommended Academic Placement</span>
          </div>
          <h4 className="font-serif text-2xl font-bold text-slate-950">
            {recommendedGrade}
          </h4>
          <p className="text-xs text-slate-600 mt-0.5">
            Division: <span className="font-semibold text-slate-900">{recommendedDivision}</span> (Age {calcAge.toFixed(1)} years by Sept 2026)
          </p>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            to={route}
            className="px-4 py-2.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-xs"
          >
            View Curriculum
          </Link>
          <Link
            to={`/apply?grade=${encodeURIComponent(recommendedGrade)}`}
            className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-xs flex items-center gap-1.5"
          >
            <span>Apply</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </div>
  );
};
