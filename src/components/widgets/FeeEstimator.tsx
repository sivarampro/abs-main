import React, { useState } from 'react';
import { DollarSign, ShieldCheck, Check, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeeEstimator: React.FC = () => {
  const [gradeTier, setGradeTier] = useState<string>('primary');
  const [transportZone, setTransportZone] = useState<string>('zone1');
  const [mealPlan, setMealPlan] = useState<boolean>(true);
  const [languageLab, setLanguageLab] = useState<boolean>(true);

  // Fee calculation engine
  const baseTuitions: Record<string, { label: string; term: number; annual: number }> = {
    early: { label: 'Early Years (Pre-K to KG)', term: 4200, annual: 12600 },
    primary: { label: 'Primary School (Grades 1–5)', term: 5400, annual: 16200 },
    middle: { label: 'Middle School (Grades 6–8)', term: 6300, annual: 18900 },
    secondary: { label: 'Secondary School (Grades 9–10)', term: 7200, annual: 21600 },
    senior: { label: 'Senior Secondary (Grades 11–12)', term: 8100, annual: 24300 }
  };

  const transportRates: Record<string, number> = {
    none: 0,
    zone1: 1800, // 0-5 km
    zone2: 2400, // 5-15 km
    zone3: 3100  // 15+ km
  };

  const currentBase = baseTuitions[gradeTier];
  const transportCost = transportRates[transportZone];
  const mealCost = mealPlan ? 1500 : 0;
  const labCost = languageLab ? 600 : 0;

  const totalAnnual = currentBase.annual + transportCost + mealCost + labCost;
  const termEstimate = Math.round(totalAnnual / 3);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Header */}
      <div className="p-6 sm:p-8 bg-slate-900 text-white">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
          <DollarSign className="w-4 h-4" />
          <span>Transparent Tuition Estimator</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
          Interactive Annual Fee Estimator
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
          Customize options to calculate estimated annual tuition, bus transportation, dining, and specialized lab fees.
        </p>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Options Controls */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Grade Tier Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
              Academic Division
            </label>
            <select
              value={gradeTier}
              onChange={(e) => setGradeTier(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-amber-400"
            >
              <option value="early">Early Years (Pre-K to Kindergarten)</option>
              <option value="primary">Primary School (Grades 1 to 5)</option>
              <option value="middle">Middle School (Grades 6 to 8)</option>
              <option value="secondary">Secondary School (Grades 9 to 10)</option>
              <option value="senior">Senior Secondary (Grades 11 to 12)</option>
            </select>
          </div>

          {/* Transport Route Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
              School Bus Transportation
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'none', label: 'Self Drop', sub: '$0' },
                { id: 'zone1', label: 'Zone 1 (0–5 km)', sub: '+$1,800/yr' },
                { id: 'zone2', label: 'Zone 2 (5–15 km)', sub: '+$2,400/yr' },
                { id: 'zone3', label: 'Zone 3 (15+ km)', sub: '+$3,100/yr' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setTransportZone(opt.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    transportZone === opt.id
                      ? 'border-amber-400 bg-amber-50/70 text-slate-950 font-bold ring-1 ring-amber-400'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 font-medium'
                  }`}
                >
                  <span className="text-xs block">{opt.label}</span>
                  <span className="text-[10px] text-slate-500 font-normal">{opt.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Optional Ancillary Add-ons */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
              Ancillary Services
            </label>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={mealPlan}
                    onChange={(e) => setMealPlan(e.target.checked)}
                    className="w-4 h-4 text-amber-500 rounded focus:ring-amber-400"
                  />
                  <div>
                    <span className="text-xs font-semibold text-slate-900 block">Chef-Crafted Wholesome Hot Dining & Snacks</span>
                    <span className="text-[11px] text-slate-500">Organic breakfast snack & 3-course balanced lunch daily</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-700">+$1,500/yr</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={languageLab}
                    onChange={(e) => setLanguageLab(e.target.checked)}
                    className="w-4 h-4 text-amber-500 rounded focus:ring-amber-400"
                  />
                  <div>
                    <span className="text-xs font-semibold text-slate-900 block">Foreign Language Immersion & Digital Software</span>
                    <span className="text-[11px] text-slate-500">French/Spanish native speaker labs & audio software licenses</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-700">+$600/yr</span>
              </label>
            </div>
          </div>

        </div>

        {/* Right Calculation Summary Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-amber-50/80 via-white to-slate-50 p-6 rounded-2xl border border-amber-200/90 flex flex-col justify-between shadow-sm">
          
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">
              Estimated Total Breakdown
            </span>

            <div className="space-y-2 text-xs divide-y divide-amber-100">
              <div className="flex justify-between py-1.5 text-slate-700">
                <span>Core Academic Tuition ({currentBase.label.split('(')[0].trim()})</span>
                <span className="font-semibold text-slate-900">${currentBase.annual.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1.5 text-slate-700">
                <span>Transportation Plan</span>
                <span className="font-semibold text-slate-900">${transportCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1.5 text-slate-700">
                <span>Cafeteria Dining Plan</span>
                <span className="font-semibold text-slate-900">${mealCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1.5 text-slate-700">
                <span>Language & Digital Software Licenses</span>
                <span className="font-semibold text-slate-900">${labCost.toLocaleString()}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 text-white mt-4">
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-xs text-slate-400 uppercase font-medium">Estimated Annual Total</span>
                <span className="font-serif text-3xl font-bold text-amber-400">
                  ${totalAnnual.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                <span>Payable in 3 equal terms:</span>
                <span className="font-semibold text-white">~${termEstimate.toLocaleString()} / term</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Includes all standard textbooks, laboratory consumables, and sports coaching.</span>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-amber-200">
            <Link
              to="/apply"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all"
            >
              <span>Proceed to Apply</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};
