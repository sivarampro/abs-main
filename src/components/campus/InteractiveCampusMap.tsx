import React, { useState } from 'react';
import { Building2, Sparkles, Eye, X, ArrowRight, Layers } from 'lucide-react';
import { campusFacilities } from '../../data/campus';
import { Facility } from '../../types';
import { Link } from 'react-router-dom';

export const InteractiveCampusMap: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<Facility>(campusFacilities[0]);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'STEM', 'Academics', 'Arts', 'Athletics', 'Wellness'];

  const filteredFacilities = activeCategory === 'All'
    ? campusFacilities
    : campusFacilities.filter(f => f.category === activeCategory);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
      
      {/* Interactive Controls Header */}
      <div className="p-6 bg-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Campus Masterplan</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">
            Explore Campus Architecture & Facilities
          </h3>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat
                  ? 'bg-amber-400 text-slate-950 shadow-xs'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Interactive Map View + Facility Detail Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left Interactive Map Canvas */}
        <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] bg-slate-950 overflow-hidden flex items-center justify-center p-4">
          
          {/* Architectural Background Pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />
          
          {/* Stylized Campus Render Illustration */}
          <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-6 flex flex-col justify-between shadow-2xl">
            <div className="flex justify-between items-start text-slate-400 text-xs font-mono">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                LIVE ARCHITECTURAL GRID
              </span>
              <span>25 ACRE MASTERPLAN</span>
            </div>

            {/* Simulated Campus Zones Background */}
            <div className="grid grid-cols-3 gap-3 my-auto opacity-30 text-center">
              <div className="h-20 border border-dashed border-amber-400/40 rounded-xl flex items-center justify-center text-[10px] text-amber-300 font-mono">
                ACADEMIC COMMONS
              </div>
              <div className="h-20 border border-dashed border-blue-400/40 rounded-xl flex items-center justify-center text-[10px] text-blue-300 font-mono">
                STEM & AI WING
              </div>
              <div className="h-20 border border-dashed border-emerald-400/40 rounded-xl flex items-center justify-center text-[10px] text-emerald-300 font-mono">
                SPORTS ARENA
              </div>
            </div>

            <div className="flex justify-between items-end text-slate-500 text-[11px]">
              <span>ABS MAIN CAMPUS</span>
              <span>CLICK HOTSPOTS TO INSPECT</span>
            </div>

            {/* Interactive Hotspot Pins */}
            {campusFacilities.map((facility) => {
              const isSelected = selectedFacility.id === facility.id;
              return (
                <button
                  key={facility.id}
                  onClick={() => setSelectedFacility(facility)}
                  style={{ left: `${facility.hotspot.x}%`, top: `${facility.hotspot.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none`}
                  title={facility.name}
                  aria-label={`Select ${facility.name}`}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing ring when selected */}
                    {isSelected && (
                      <span className="absolute w-10 h-10 rounded-full bg-amber-400/30 animate-ping" />
                    )}
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-lg transition-all transform ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 scale-125 ring-4 ring-amber-400/40'
                          : 'bg-white text-slate-900 hover:scale-110 hover:bg-amber-100'
                      }`}
                    >
                      <Building2 className="w-4 h-4" />
                    </div>
                  </div>
                  
                  {/* Floating tooltip on hover */}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block whitespace-nowrap px-2.5 py-1 bg-slate-900 text-white text-[11px] font-semibold rounded-md shadow-xl border border-slate-700 pointer-events-none z-30">
                    {facility.name}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Right Facility Details Panel */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-200">
          
          <div className="space-y-4">
            {/* Category Badge & Name */}
            <div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
                  {selectedFacility.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  HOTSPOT #{selectedFacility.id.toUpperCase()}
                </span>
              </div>
              <h4 className="font-serif text-2xl font-bold text-slate-950 mt-2">
                {selectedFacility.name}
              </h4>
            </div>

            {/* Facility Image with Lazy Loading */}
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-video">
              <img
                src={selectedFacility.image}
                alt={selectedFacility.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-amber-400" />
                <span>On-Campus View</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {selectedFacility.fullDesc}
            </p>

            {/* Architectural Specs */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              {selectedFacility.specs.capacity && (
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Capacity</span>
                  <span className="text-xs font-semibold text-slate-900">{selectedFacility.specs.capacity}</span>
                </div>
              )}
              {selectedFacility.specs.size && (
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Floor Area</span>
                  <span className="text-xs font-semibold text-slate-900">{selectedFacility.specs.size}</span>
                </div>
              )}
            </div>

            {/* Key Features List */}
            <div className="space-y-1.5 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Key Features</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {selectedFacility.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <Sparkles className="w-3 h-3 text-amber-500 flex-shrink-0" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
            <Link
              to="/book-a-visit"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800 transition-colors"
            >
              <span>See this on a private tour</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/campus/facilities"
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors"
            >
              All Facilities
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};
