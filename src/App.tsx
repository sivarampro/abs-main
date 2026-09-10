import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastProvider } from './components/common/ToastContext';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/about/About';

import { AcademicsOverview } from './pages/academics/AcademicsOverview';

import { CampusOverview } from './pages/campus/CampusOverview';

import { StudentLifeOverview } from './pages/student-life/StudentLifeOverview';

import { AdmissionsOverview } from './pages/admissions/AdmissionsOverview';
import { Fees } from './pages/admissions/Fees';
import { Scholarships } from './pages/admissions/Scholarships';
import { Apply } from './pages/admissions/Apply';
import { BookAVisit } from './pages/admissions/BookAVisit';

import { JournalList } from './pages/journal/JournalList';
import { JournalArticleDetail } from './pages/journal/JournalArticleDetail';

import { EventsList } from './pages/events/EventsList';
import { EventDetail } from './pages/events/EventDetail';

import { AchievementsOverview } from './pages/achievements/AchievementsOverview';

import { Alumni } from './pages/alumni/Alumni';
import { Careers } from './pages/careers/Careers';
import { Contact } from './pages/contact/Contact';

import { ParentPortal } from './pages/portal/ParentPortal';
import { StudentPortal } from './pages/portal/StudentPortal';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <ToastProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-amber-100 selection:text-amber-900">
          <Navbar />
          
          <main className="flex-1">
            <Routes>
              {/* 1. Public Core Routes */}
              <Route path="/" element={<Home />} />
              
              {/* About Us Division - Exact Sequential Order */}
              <Route path="/about" element={<About />} />

              {/* Backward compatibility redirects */}
              <Route path="/about/legacy" element={<Navigate to="/about#about-abs" replace />} />
              <Route path="/about/vision-mission-motto" element={<Navigate to="/about#vision-mission" replace />} />
              <Route path="/about/founder-message" element={<Navigate to="/about#founders-message" replace />} />
              <Route path="/about/managing-director" element={<Navigate to="/about#managing-committee" replace />} />
              <Route path="/about/academic-director" element={<Navigate to="/about#academic-director" replace />} />

              <Route path="/about/story" element={<Navigate to="/about#about-abs" replace />} />
              <Route path="/about/leadership" element={<Navigate to="/about#founders-message" replace />} />
              <Route path="/about/faculty" element={<Navigate to="/about#academic-director" replace />} />

              {/* Academics Division */}
              <Route path="/academics" element={<AcademicsOverview />} />
              <Route path="/academics/learning-journey" element={<Navigate to="/academics#learning-journey" replace />} />
              <Route path="/academics/early-years" element={<Navigate to="/academics#early-years" replace />} />
              <Route path="/academics/primary" element={<Navigate to="/academics#primary" replace />} />
              <Route path="/academics/middle-school" element={<Navigate to="/academics#middle-school" replace />} />
              <Route path="/academics/secondary" element={<Navigate to="/academics#secondary" replace />} />
              <Route path="/academics/senior-secondary" element={<Navigate to="/academics#senior-secondary" replace />} />
              <Route path="/academics/curriculum" element={<Navigate to="/academics#curriculum" replace />} />
              <Route path="/academics/teaching-learning" element={<Navigate to="/academics#teaching-learning" replace />} />
              <Route path="/academics/technology-innovation" element={<Navigate to="/academics#technology-innovation" replace />} />
              <Route path="/academics/support" element={<Navigate to="/academics#support" replace />} />
              <Route path="/academics/assessment-progress" element={<Navigate to="/academics#assessment-progress" replace />} />

              {/* Campus Division */}
              <Route path="/campus" element={<CampusOverview />} />
              <Route path="/campus/learning-spaces" element={<Navigate to="/campus#learning-spaces" replace />} />
              <Route path="/campus/arts-creativity" element={<Navigate to="/campus#arts-creativity" replace />} />
              <Route path="/campus/sports-recreation" element={<Navigate to="/campus#sports-recreation" replace />} />
              <Route path="/campus/student-life-spaces" element={<Navigate to="/campus#student-life-wellbeing" replace />} />
              <Route path="/campus/wellbeing-safety" element={<Navigate to="/campus#student-life-wellbeing" replace />} />
              <Route path="/campus/technology-innovation" element={<Navigate to="/campus#technology-innovation" replace />} />
              <Route path="/campus/facilities" element={<Navigate to="/campus#learning-spaces" replace />} />

              {/* Student Life Division */}
              <Route path="/student-life" element={<StudentLifeOverview />} />
              <Route path="/student-life/arts" element={<Navigate to="/student-life#arts" replace />} />
              <Route path="/student-life/athletics" element={<Navigate to="/student-life#athletics" replace />} />
              <Route path="/student-life/innovation" element={<Navigate to="/student-life#innovation" replace />} />
              <Route path="/student-life/community" element={<Navigate to="/student-life#community" replace />} />
              <Route path="/student-life/wellbeing" element={<Navigate to="/student-life" replace />} />

              {/* Direct Route Aliases for Student Life */}
              <Route path="/arts" element={<Navigate to="/student-life/arts" replace />} />
              <Route path="/athletics" element={<Navigate to="/student-life/athletics" replace />} />
              <Route path="/innovation" element={<Navigate to="/student-life/innovation" replace />} />

              {/* Admissions Division */}
              <Route path="/admissions" element={<AdmissionsOverview />} />
              <Route path="/admissions/fees" element={<Fees />} />
              <Route path="/admissions/scholarships" element={<Scholarships />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/book-a-visit" element={<BookAVisit />} />

              {/* Journal & Editorial */}
              <Route path="/journal" element={<JournalList />} />
              <Route path="/journal/:slug" element={<JournalArticleDetail />} />

              {/* Events Division */}
              <Route path="/events" element={<EventsList />} />
              <Route path="/events/upcoming" element={<Navigate to="/events#upcoming" replace />} />
              <Route path="/events/featured" element={<Navigate to="/events#upcoming" replace />} />
              <Route path="/events/academic" element={<Navigate to="/events#academic" replace />} />
              <Route path="/events/arts-cultural" element={<Navigate to="/events#community" replace />} />
              <Route path="/events/sports" element={<Navigate to="/events#sports" replace />} />
              <Route path="/events/community" element={<Navigate to="/events#community" replace />} />
              <Route path="/events/calendar" element={<Navigate to="/events#annual" replace />} />
              <Route path="/events/past-highlights" element={<Navigate to="/events#annual" replace />} />
              <Route path="/events/:id" element={<EventDetail />} />

              {/* Achievements Division */}
              <Route path="/achievements" element={<AchievementsOverview />} />
              <Route path="/achievements/academic" element={<Navigate to="/achievements#academic" replace />} />
              <Route path="/achievements/sports" element={<Navigate to="/achievements#sports" replace />} />
              <Route path="/achievements/arts" element={<Navigate to="/achievements#arts-innovation-culture" replace />} />
              <Route path="/achievements/arts-culture" element={<Navigate to="/achievements#arts-innovation-culture" replace />} />
              <Route path="/achievements/innovation" element={<Navigate to="/achievements#arts-innovation-culture" replace />} />
              <Route path="/achievements/leadership" element={<Navigate to="/achievements" replace />} />
              <Route path="/achievements/alumni" element={<Navigate to="/achievements" replace />} />
              <Route path="/achievements/stories" element={<Navigate to="/achievements" replace />} />
              <Route path="/achievements/student-stories" element={<Navigate to="/achievements" replace />} />

              {/* Institutional & Connect */}
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />

              {/* Portals */}
              <Route path="/portal/parent" element={<ParentPortal />} />
              <Route path="/portal/student" element={<StudentPortal />} />

              {/* 404 Catch All */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </ToastProvider>
  );
};

export default App;
