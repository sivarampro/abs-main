import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Award, Globe, Heart } from 'lucide-react';
import { useToast } from '../common/ToastContext';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { showToast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      showToast('Invalid Email', 'Please enter a valid email address.', 'error');
      return;
    }
    setIsSubscribing(true);
    setTimeout(() => {
      setIsSubscribing(false);
      showToast('Subscribed Successfully', `Thank you! Updates will be sent to ${newsletterEmail}`, 'success');
      setNewsletterEmail('');
    }, 600);
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-16 pb-12 overflow-hidden" aria-label="School Footer">
      {/* Rainbow gradient top border */}
      <div 
        className="absolute top-0 left-0 w-full h-1.5"
        style={{ background: 'linear-gradient(to right, #1d4ed8, #7e22ce, #e11d48, #ea580c, #eab308, #84cc16, #22c55e)' }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Main Footer Links Grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          {/* Brand & Address Column (Span 2 on desktop) */}
          <div className="col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="ABS Crest"
                className="h-14 w-auto bg-white p-1 rounded-xl shadow-xs"
              />
              <div>
                <span className="font-serif font-bold text-xl text-white tracking-wider block">ABS</span>
                <span className="text-xs text-amber-400 font-medium tracking-widest uppercase">Educate • Enlighten • Excel</span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              ABS is a premier international educational institution dedicated to cultivating intellectual rigor, ethical empathy, and global leadership from Early Childhood through Senior Secondary.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>[ABS CAMPUS ROAD, EDUCATION CORRIDOR, CITY, STATE - PIN CODE]</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>[+1 (800) ABS-EDUCATE / +91 (XX) XXXX-XXXX]</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>admissions@abs.edu | contact@abs.edu</span>
              </div>
            </div>
          </div>

          {/* Discover ABS */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Discover ABS</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-amber-400 transition-colors">Academics</Link></li>
              <li><Link to="/campus" className="hover:text-amber-400 transition-colors">Our Campuses</Link></li>
              <li><Link to="/student-life" className="hover:text-amber-400 transition-colors">Student Life</Link></li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Stay Connected</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/events" className="hover:text-amber-400 transition-colors">Events & Calendar</Link></li>
              <li><Link to="/achievements" className="hover:text-amber-400 transition-colors">Achievements</Link></li>
              <li><Link to="/journal" className="hover:text-amber-400 transition-colors">ABS Journal</Link></li>
              <li><Link to="/alumni" className="hover:text-amber-400 transition-colors">Alumni Network</Link></li>
            </ul>
          </div>

          {/* Admissions & Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Admissions & Info</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/admissions" className="hover:text-amber-400 transition-colors">Admissions Process</Link></li>
              <li><Link to="/apply" className="hover:text-amber-400 transition-colors font-medium text-amber-300">Apply Online</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/careers" className="hover:text-amber-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Trust Badges & Copyright */}
        <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col xl:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          
          <div className="flex items-center gap-4 whitespace-nowrap overflow-hidden">
            <div className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="hidden sm:inline">Accredited Global Curriculum</span>
              <span className="sm:hidden">Global Curriculum</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Globe className="w-4 h-4 text-blue-500" />
              <span className="hidden sm:inline">International Education Standards</span>
              <span className="sm:hidden">Intl Standards</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Heart className="w-4 h-4 text-rose-500" />
              <span className="hidden sm:inline">Child Safeguarding Certified</span>
              <span className="sm:hidden">Safeguarding</span>
            </div>
          </div>

          <div className="flex flex-col items-center xl:items-end gap-2">
            <div className="flex items-center gap-4 sm:gap-6 whitespace-nowrap">
              <span>&copy; {new Date().getFullYear()} ABS. All rights reserved.</span>
              <span className="hover:text-slate-300 cursor-pointer hidden md:inline">Privacy Policy</span>
              <span className="hover:text-slate-300 cursor-pointer hidden md:inline">Terms of Service</span>
              <span className="hover:text-slate-300 cursor-pointer hidden md:inline">Accessibility</span>
            </div>
            <span className="text-amber-400/80 hover:text-amber-400 transition-colors font-medium tracking-wide">Developed by Creinx</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
