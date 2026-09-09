import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, X, Search, Calendar, UserCircle, GraduationCap, ArrowRight, Building2, ExternalLink } from 'lucide-react';
import { navigationData, schools } from '../../data/navigation';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, onOpenSearch }) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const toggleSection = (label: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end animate-fade-in" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="relative w-full h-full max-w-md bg-white flex flex-col shadow-2xl ml-auto animate-slide-up z-10">
        
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white">
          <Link to="/" onClick={onClose} className="flex items-center gap-2.5">
            <img src="/logo.png" alt="ABS Logo" className="h-10 w-auto" />
            <span className="font-serif font-bold text-base text-slate-900">ABS</span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Quick Search Button */}
        <div className="p-4 border-b border-slate-100 bg-slate-50">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-500 hover:text-slate-800 transition-colors"
          >
            <span className="flex items-center gap-2.5">
              <Search className="w-4 h-4 text-slate-400" />
              <span>Search ABS website...</span>
            </span>
            <kbd className="px-2 py-0.5 text-[10px] font-semibold bg-slate-100 text-slate-500 rounded">⌘K</kbd>
          </button>
        </div>

        {/* School Selector */}
        <div className="px-4 pt-4 pb-2 border-b border-slate-100">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 px-1">Our Schools</p>
          <div className="space-y-1">
            {schools.map((school) => (
              <button
                key={school.label}
                onClick={() => {
                  if (school.href) {
                    window.open(school.href, '_blank', 'noopener,noreferrer');
                    onClose();
                  }
                }}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left transition-all ${
                  school.isHub
                    ? 'bg-amber-50 text-amber-800 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Building2 className={`w-3.5 h-3.5 flex-shrink-0 ${school.isHub ? 'text-amber-500' : 'text-slate-400'}`} />
                <span className="text-xs font-medium leading-snug flex-1">{school.label}</span>
                {!school.isHub && <ExternalLink className="w-3 h-3 text-slate-400 flex-shrink-0" />}
              </button>
            ))}
          </div>
        </div>

        {/* Nav Accordions */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 divide-y divide-slate-50">
          {navigationData.map((item) => {
            const isExpanded = !!expandedSections[item.label];

            // Home — direct link
            if (item.label === 'Home') {
              return (
                <div key={item.label} className="pt-2">
                  <Link
                    to="/"
                    onClick={onClose}
                    className="w-full flex items-center py-3 px-3 rounded-xl text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    Home
                  </Link>
                </div>
              );
            }

            return (
              <div key={item.label} className="pt-2">
                <button
                  type="button"
                  onClick={() => toggleSection(item.label)}
                  className="w-full flex items-center justify-between py-3 px-3 rounded-xl text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                  aria-expanded={isExpanded}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isExpanded && item.children && (
                  <div className="pl-4 pr-2 pb-2 space-y-1 animate-fade-in">
                    {item.children.map((child) => {
                      const hasSub = child.children && child.children.length > 0;
                      const isSubExpanded = !!expandedSections[child.label];

                      if (hasSub) {
                        return (
                          <div key={child.href} className="space-y-1">
                            <button
                              type="button"
                              onClick={() => toggleSection(child.label)}
                              className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm text-slate-800 font-medium hover:bg-slate-50 transition-colors"
                            >
                              <span>{child.label}</span>
                              <ChevronDown
                                className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                                  isSubExpanded ? 'rotate-180 text-amber-600' : ''
                                }`}
                              />
                            </button>

                            {isSubExpanded && (
                              <div className="pl-4 space-y-1 border-l-2 border-amber-200 ml-2">
                                {child.children!.map((subChild) => (
                                  <Link
                                    key={subChild.href}
                                    to={subChild.href}
                                    onClick={onClose}
                                    className="flex items-center justify-between py-2 px-3 rounded-lg text-xs font-medium text-slate-600 hover:text-amber-700 hover:bg-amber-50 transition-colors"
                                  >
                                    <span>{subChild.label}</span>
                                    <ArrowRight className="w-3 h-3 text-slate-300" />
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      }

                      return (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={onClose}
                          className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm text-slate-700 hover:text-amber-700 hover:bg-amber-50/60 transition-colors"
                        >
                          <span className="font-medium text-slate-800">{child.label}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* Quick Portal Links */}
          <div className="pt-4 space-y-2">
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Portals & Campus</p>
            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/portal/parent"
                onClick={onClose}
                className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-800 hover:bg-amber-50 transition-colors"
              >
                <UserCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Parent Portal</span>
              </Link>
              <Link
                to="/portal/student"
                onClick={onClose}
                className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-800 hover:bg-amber-50 transition-colors"
              >
                <GraduationCap className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Student Portal</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Action Footer CTAs */}
        <div className="p-4 border-t border-slate-100 bg-white space-y-2">
          <Link
            to="/admissions"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm uppercase tracking-wider rounded-xl shadow-sm transition-all"
          >
            <span>ADMISSION</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/book-a-visit"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-xl transition-all"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Book a Campus Tour</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
