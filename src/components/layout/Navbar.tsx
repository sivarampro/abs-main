import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronDown, Menu, X, ArrowRight, Building2, ExternalLink, Check } from 'lucide-react';
import { navigationData, schools } from '../../data/navigation';
import { QuickSearchModal } from '../search/QuickSearchModal';
import { MobileNav } from './MobileNav';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSchoolOpen, setIsSchoolOpen] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState(schools[0]);
  const schoolRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Scroll listener for sticky navbar shrinking and styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    setIsSchoolOpen(false);
  }, [location.pathname]);

  // Close school dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (schoolRef.current && !schoolRef.current.contains(e.target as Node)) {
        setIsSchoolOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSchoolSelect = (school: typeof schools[0]) => {
    setSelectedSchool(school);
    setIsSchoolOpen(false);
    if (school.href) {
      window.open(school.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      {/* Top School Selector Bar */}
      <div className="w-full bg-slate-900 border-b border-slate-700/60 py-1.5 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium tracking-wide">
            ABS Group of Schools — Educate • Enlighten • Excel
          </span>

          {/* School Selector */}
          <div className="relative" ref={schoolRef}>
            <button
              type="button"
              onClick={() => setIsSchoolOpen(!isSchoolOpen)}
              className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600/60 text-xs font-semibold text-slate-100 transition-all focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-expanded={isSchoolOpen}
              aria-haspopup="listbox"
            >
              <Building2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span className="max-w-[180px] truncate">{selectedSchool.label}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${isSchoolOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isSchoolOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-80 bg-slate-800 border border-slate-600/80 rounded-2xl shadow-2xl z-50 overflow-hidden animate-fade-in"
                role="listbox"
                aria-label="Select school"
              >
                <div className="p-1.5 space-y-0.5">
                  {schools.map((school) => {
                    const isSelected = selectedSchool.label === school.label;
                    return (
                      <button
                        key={school.label}
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => handleSchoolSelect(school)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all group ${
                          isSelected
                            ? 'bg-amber-500/20 text-amber-300'
                            : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                        }`}
                      >
                        <span className="w-4 flex-shrink-0">
                          {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                        </span>
                        <span className="text-xs font-medium leading-snug flex-1">{school.label}</span>
                        {!school.isHub && (
                          <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-amber-400 flex-shrink-0 transition-colors" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-nav border-b border-slate-200/80 py-2'
            : 'bg-white border-b border-slate-100 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 xl:gap-4">

            {/* ABS Official Logo */}
            <Link
              to="/"
              className="flex-shrink-0 flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-0.5"
              aria-label="ABS Home — Educate • Enlighten • Excel"
            >
              <img
                src="/logo.png"
                alt="ABS Official Crest — Educate • Enlighten • Excel"
                className={`transition-all duration-300 object-contain w-auto ${
                  isScrolled ? 'h-11 sm:h-12' : 'h-12 sm:h-14'
                }`}
                style={{ imageRendering: 'auto' }}
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-0 flex-1 justify-center" aria-label="Main Navigation">
              {navigationData.map((item) => {
                const isOpen = activeDropdown === item.label;
                const isHome = item.label === 'Home';
                const isCurrentCategory = item.href
                  ? location.pathname === item.href
                  : item.children?.some(c => location.pathname === c.href);

                // Direct link (Home or single-child items with no dropdown needed)
                if (isHome) {
                  return (
                    <Link
                      key={item.label}
                      to={item.href!}
                      className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-amber-500 ${
                        location.pathname === '/'
                          ? 'text-slate-900 bg-slate-100/80'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-amber-500 ${
                        isCurrentCategory || isOpen
                          ? 'text-slate-900 bg-slate-100/80'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                      aria-expanded={isOpen}
                      onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                    >
                      <span>{item.label}</span>
                      {item.children && item.children.length > 1 && (
                        <ChevronDown
                          className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-amber-600' : ''
                          }`}
                        />
                      )}
                    </button>

                    {/* Mega Dropdown Menu */}
                    {isOpen && item.children && item.children.length > 1 && (
                      <div
                        className="absolute left-0 top-full pt-2 w-72 animate-fade-in z-50"
                        role="menu"
                      >
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-2 ring-1 ring-black/5">
                          <div className="space-y-0.5">
                            {item.children.map((child) => {
                              const hasSub = child.children && child.children.length > 0;

                              if (hasSub) {
                                return (
                                  <div key={child.href} className="relative group/sub">
                                    <Link
                                      to={child.href}
                                      className={`flex items-center justify-between p-2.5 rounded-xl transition-all ${
                                        location.pathname.startsWith(child.href)
                                          ? 'bg-amber-50 text-slate-900 font-semibold border-l-2 border-amber-500'
                                          : 'hover:bg-slate-50 text-slate-700'
                                      }`}
                                      role="menuitem"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      <span className="text-xs font-semibold text-slate-900 group-hover/sub:text-amber-700 transition-colors">
                                        {child.label}
                                      </span>
                                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/sub:text-amber-600 group-hover/sub:translate-x-0.5 transition-all" />
                                    </Link>

                                    {/* Flyout Submenu */}
                                    <div className="absolute left-full top-0 pl-1.5 hidden group-hover/sub:block z-50 w-64 animate-fade-in">
                                      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-2 ring-1 ring-black/5">
                                        <div className="space-y-0.5">
                                          {child.children!.map((subChild) => (
                                            <Link
                                              key={subChild.href}
                                              to={subChild.href}
                                              className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold transition-all ${
                                                location.pathname === subChild.href
                                                  ? 'bg-amber-50 text-amber-900 font-bold border-l-2 border-amber-500'
                                                  : 'hover:bg-slate-50 text-slate-700 hover:text-amber-700'
                                              }`}
                                              onClick={() => setActiveDropdown(null)}
                                            >
                                              <span>{subChild.label}</span>
                                              <ArrowRight className="w-3 h-3 text-slate-300" />
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              }

                              return (
                                <Link
                                  key={child.href}
                                  to={child.href}
                                  className={`group flex flex-col p-2.5 rounded-xl transition-all ${
                                    location.pathname === child.href
                                      ? 'bg-amber-50 text-slate-900 font-semibold border-l-2 border-amber-500'
                                      : 'hover:bg-slate-50 text-slate-700'
                                  }`}
                                  role="menuitem"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold text-slate-900 group-hover:text-amber-700 transition-colors">
                                      {child.label}
                                    </span>
                                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Single child — direct navigate on hover click */}
                    {isOpen && item.children && item.children.length === 1 && (
                      <div
                        className="absolute left-0 top-full pt-2 w-64 animate-fade-in z-50"
                        role="menu"
                      >
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-2 ring-1 ring-black/5">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="group flex flex-col p-2.5 rounded-xl hover:bg-slate-50 transition-all"
                              role="menuitem"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold text-slate-900 group-hover:text-amber-700 transition-colors">
                                  {child.label}
                                </span>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
                              </div>
                              {child.description && (
                                <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop Action Utilities & CTAs */}
            <div className="hidden xl:flex items-center gap-1.5 flex-shrink-0">

              {/* Quick Search Palette Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-500 bg-slate-50 border border-slate-200/80 rounded-lg hover:bg-slate-100 hover:text-slate-800 transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-amber-500"
                aria-label="Search website"
                title="Search website (Cmd+K)"
              >
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden 2xl:inline">Search</span>
                <kbd className="hidden 2xl:inline-block px-1 py-0.5 text-[9px] font-semibold bg-white border border-slate-200 rounded text-slate-400">
                  ⌘K
                </kbd>
              </button>

              {/* Admission CTA Button */}
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm hover:shadow active:scale-[0.98] transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <span>Admission</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Tablet Nav (lg but not xl) */}
            <nav className="hidden lg:flex xl:hidden items-center gap-0.5 flex-1 justify-center overflow-x-auto" aria-label="Main Navigation">
              {navigationData.map((item) => {
                const isOpen = activeDropdown === item.label;
                const isCurrentCategory = item.href
                  ? location.pathname === item.href
                  : item.children?.some(c => location.pathname === c.href);

                if (item.label === 'Home') {
                  return (
                    <Link
                      key={item.label}
                      to={item.href!}
                      className={`px-2 py-1.5 text-[11px] font-semibold rounded-lg transition-colors whitespace-nowrap ${
                        location.pathname === '/' ? 'text-slate-900 bg-slate-100/80' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className={`flex items-center gap-0.5 px-2 py-1.5 text-[11px] font-semibold rounded-lg transition-colors whitespace-nowrap ${
                        isCurrentCategory || isOpen ? 'text-slate-900 bg-slate-100/80' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span>{item.label}</span>
                      {item.children && item.children.length > 1 && (
                        <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      )}
                    </button>
                    {isOpen && item.children && (
                      <div className="absolute left-0 top-full pt-2 w-64 animate-fade-in z-50" role="menu">
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-2 ring-1 ring-black/5">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="group flex flex-col p-2.5 rounded-xl hover:bg-slate-50 transition-all"
                              role="menuitem"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="text-xs font-semibold text-slate-900 group-hover:text-amber-700 transition-colors">
                                {child.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Open search modal"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                to="/admissions"
                className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs"
              >
                Admission
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-amber-500"
                aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Quick Search Modal */}
      <QuickSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Drawer Menu */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => {
          setIsMobileMenuOpen(false);
          setIsSearchOpen(true);
        }}
      />
    </>
  );
};
