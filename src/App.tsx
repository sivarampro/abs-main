import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastProvider } from './components/common/ToastContext';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/about/About';
import { OurLegacy } from './pages/about/OurLegacy';
import { VisionMissionMotto } from './pages/about/VisionMissionMotto';
import { FounderMessage } from './pages/about/FounderMessage';
import { ManagingDirector } from './pages/about/ManagingDirector';
import { AcademicDirector } from './pages/about/AcademicDirector';

import { AcademicsOverview } from './pages/academics/AcademicsOverview';
import { LearningJourney } from './pages/academics/LearningJourney';
import { EarlyYears, Primary, MiddleSchool, Secondary, SeniorSecondary } from './pages/academics/DivisionDetailPage';
import { Curriculum } from './pages/academics/Curriculum';
import { TeachingLearning } from './pages/academics/TeachingLearning';
import { AcademicTechInnovation } from './pages/academics/AcademicTechInnovation';
import { AcademicSupport } from './pages/academics/AcademicSupport';
import { AssessmentProgress } from './pages/academics/AssessmentProgress';

import { CampusOverview } from './pages/campus/CampusOverview';
import { LearningSpaces } from './pages/campus/LearningSpaces';
import { ArtsCreativity } from './pages/campus/ArtsCreativity';
import { SportsRecreation } from './pages/campus/SportsRecreation';
import { StudentLifeSpaces } from './pages/campus/StudentLifeSpaces';
import { WellbeingSafety } from './pages/campus/WellbeingSafety';
import { TechnologyInnovation } from './pages/campus/TechnologyInnovation';

import { StudentLifeOverview } from './pages/student-life/StudentLifeOverview';
import { Arts, Athletics, Innovation, Community, Wellbeing } from './pages/student-life/PillarDetailPage';

import { AdmissionsOverview } from './pages/admissions/AdmissionsOverview';
import { Fees } from './pages/admissions/Fees';
import { Scholarships } from './pages/admissions/Scholarships';
import { Apply } from './pages/admissions/Apply';
import { BookAVisit } from './pages/admissions/BookAVisit';

import { JournalList } from './pages/journal/JournalList';
import { JournalArticleDetail } from './pages/journal/JournalArticleDetail';

import { EventsList } from './pages/events/EventsList';
import { EventsCategoryPage } from './pages/events/EventsCategoryPage';
import { AnnualCalendar } from './pages/events/AnnualCalendar';
import { PastEventsHighlights } from './pages/events/PastEventsHighlights';
import { EventDetail } from './pages/events/EventDetail';

import { AchievementsOverview } from './pages/achievements/AchievementsOverview';
import { AchievementCategoryPage } from './pages/achievements/AchievementCategoryPage';
import { StudentStories } from './pages/achievements/StudentStories';

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
              <Route path="/about/legacy" element={<OurLegacy />} />
              <Route path="/about/vision-mission-motto" element={<VisionMissionMotto />} />
              <Route path="/about/founder-message" element={<FounderMessage />} />
              <Route path="/about/managing-director" element={<ManagingDirector />} />
              <Route path="/about/academic-director" element={<AcademicDirector />} />

              {/* Backward compatibility redirects */}
              <Route path="/about/story" element={<Navigate to="/about/legacy" replace />} />
              <Route path="/about/leadership" element={<Navigate to="/about/managing-director" replace />} />
              <Route path="/about/faculty" element={<Navigate to="/about/academic-director" replace />} />

              {/* Academics Division */}
              <Route path="/academics" element={<AcademicsOverview />} />
              <Route path="/academics/learning-journey" element={<LearningJourney />} />
              <Route path="/academics/early-years" element={<EarlyYears />} />
              <Route path="/academics/primary" element={<Primary />} />
              <Route path="/academics/middle-school" element={<MiddleSchool />} />
              <Route path="/academics/secondary" element={<Secondary />} />
              <Route path="/academics/senior-secondary" element={<SeniorSecondary />} />
              <Route path="/academics/curriculum" element={<Curriculum />} />
              <Route path="/academics/teaching-learning" element={<TeachingLearning />} />
              <Route path="/academics/technology-innovation" element={<AcademicTechInnovation />} />
              <Route path="/academics/support" element={<AcademicSupport />} />
              <Route path="/academics/assessment-progress" element={<AssessmentProgress />} />

              {/* Campus Division */}
              <Route path="/campus" element={<CampusOverview />} />
              <Route path="/campus/learning-spaces" element={<LearningSpaces />} />
              <Route path="/campus/arts-creativity" element={<ArtsCreativity />} />
              <Route path="/campus/sports-recreation" element={<SportsRecreation />} />
              <Route path="/campus/student-life-spaces" element={<StudentLifeSpaces />} />
              <Route path="/campus/wellbeing-safety" element={<WellbeingSafety />} />
              <Route path="/campus/technology-innovation" element={<TechnologyInnovation />} />
              <Route path="/campus/facilities" element={<Navigate to="/campus/learning-spaces" replace />} />

              {/* Student Life Division */}
              <Route path="/student-life" element={<StudentLifeOverview />} />
              <Route path="/student-life/arts" element={<Arts />} />
              <Route path="/student-life/athletics" element={<Athletics />} />
              <Route path="/student-life/innovation" element={<Innovation />} />
              <Route path="/student-life/community" element={<Community />} />
              <Route path="/student-life/wellbeing" element={<Wellbeing />} />

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
              <Route path="/events/upcoming" element={<EventsCategoryPage category="Upcoming" title="Upcoming Events" badge="Calendar • Upcoming" tagline="Discover upcoming conferences, open houses, athletic meets, and concerts across ABS." />} />
              <Route path="/events/featured" element={<EventsCategoryPage category="Featured" title="Featured Events" badge="Spotlight" tagline="Flagship annual symposiums, galas, and landmark celebrations." />} />
              <Route path="/events/academic" element={<EventsCategoryPage category="Academic" title="Academic Events" badge="Academics • Events" tagline="STEM symposiums, Socratic debate tournaments, and science fairs." />} />
              <Route path="/events/arts-cultural" element={<EventsCategoryPage category="Arts" title="Arts & Cultural Events" badge="Arts • Culture" tagline="Symphonic galas, theatrical productions, and fine arts exhibitions." />} />
              <Route path="/events/sports" element={<EventsCategoryPage category="Sports" title="Sports Events" badge="Athletics • Competitions" tagline="Interscholastic championships, swim meets, and track & field tournaments." />} />
              <Route path="/events/community" element={<EventsCategoryPage category="Community" title="Community Events" badge="Community • Outreach" tagline="Charity fairs, alumni homecomings, and eco-sustainability drives." />} />
              <Route path="/events/calendar" element={<AnnualCalendar />} />
              <Route path="/events/past-highlights" element={<PastEventsHighlights />} />
              <Route path="/events/:id" element={<EventDetail />} />

              {/* Achievements Division */}
              <Route path="/achievements" element={<AchievementsOverview />} />
              <Route path="/achievements/academic" element={<AchievementCategoryPage category="Academic" title="Academic Excellence" badge="Laurels • Academics" tagline="International Olympiad medals, board examination toppers, and scholarly honors." />} />
              <Route path="/achievements/sports" element={<AchievementCategoryPage category="Sports" title="Sports Achievements" badge="Laurels • Athletics" tagline="National records, championship trophies, and athletic excellence." />} />
              <Route path="/achievements/arts-culture" element={<AchievementCategoryPage category="Arts" title="Arts & Culture" badge="Laurels • Creative Arts" tagline="Carnegie Hall debuts, youth symphony laurels, and theatrical honors." />} />
              <Route path="/achievements/innovation" element={<AchievementCategoryPage category="Innovation" title="Innovation & STEM" badge="Laurels • Prototyping" tagline="Global climate hackathons, robotics awards, and student AI grants." />} />
              <Route path="/achievements/leadership" element={<AchievementCategoryPage category="Leadership" title="Leadership & Service" badge="Laurels • Global Citizenship" tagline="Harvard MUN best delegates, UNESCO ambassadors, and civic impact." />} />
              <Route path="/achievements/student-stories" element={<StudentStories />} />

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
