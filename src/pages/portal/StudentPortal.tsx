import React, { useState } from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { authService, PortalUser } from '../../services/authService';
import { 
  mockStudent, 
  mockHomework, 
  mockResults, 
  mockTimetable 
} from '../../data/portalData';
import { useToast } from '../../components/common/ToastContext';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Calendar, 
  Upload, 
  CheckCircle2, 
  FileText, 
  LogOut, 
  ArrowRight, 
  Clock, 
  Sparkles,
  Zap,
  Globe
} from 'lucide-react';

export const StudentPortal: React.FC = () => {
  const { showToast } = useToast();
  const [user, setUser] = useState<PortalUser | null>(() => authService.getCurrentUser('student'));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'schedule' | 'assignments' | 'results' | 'library' | 'clubs'>('schedule');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const loggedInUser = authService.login(email || 'student@abs.edu', 'student');
    setUser(loggedInUser);
    showToast('Student Sign In', `Welcome back, ${loggedInUser.name}!`, 'success');
  };

  const handleDemoLogin = () => {
    const loggedInUser = authService.login('student@abs.edu', 'student');
    setUser(loggedInUser);
    showToast('Demo Access Granted', 'Logged in as Maya Ramanathan (Grade 10).', 'success');
  };

  const handleLogout = () => {
    authService.logout('student');
    setUser(null);
    showToast('Signed Out', 'You have securely signed out.', 'info');
  };

  const handleFileUpload = (hwTitle: string) => {
    showToast('Assignment Submitted', `File uploaded successfully for "${hwTitle}"!`, 'success');
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-24">
      
      <PageHeader
        badge="Student Portal"
        title="ABS Scholar Workspace & Digital Commons"
        tagline="Access your daily timetable, submit assignments, track examination trends, and explore digital library resources."
        breadcrumbs={[
          { label: 'Portals' },
          { label: 'Student Portal' }
        ]}
        actions={
          user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5 border border-slate-200"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          ) : undefined
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!user ? (
          /* Student Login View */
          <div className="max-w-md mx-auto bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xl space-y-6">
            
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center border border-blue-200">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-slate-950">Student Portal Sign In</h2>
              <p className="text-xs text-slate-500">Access assignments, digital library books, and class schedules.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Student Email / ID
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@abs.edu"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs"
              >
                Sign In to Scholar Hub
              </button>
            </form>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-slate-200 w-full" />
              <span className="bg-white px-3 text-xs text-slate-400 uppercase font-semibold">Demo Evaluation</span>
            </div>

            <button
              onClick={handleDemoLogin}
              className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <span>1-Click Student Demo Sign In</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center">
              <p className="text-[11px] text-slate-400">
                Demo Credentials: <code className="text-slate-700 bg-slate-100 px-1 py-0.5 rounded">student@abs.edu</code>
              </p>
            </div>

          </div>
        ) : (
          /* Student Dashboard */
          <div className="space-y-8 animate-fade-in">
            
            {/* Student Header Bar */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl border border-slate-800">
              <div className="flex items-center gap-4">
                <img
                  src={mockStudent.avatar}
                  alt={mockStudent.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-400 shadow-md"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-2xl font-bold text-white">{mockStudent.name}</h3>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950">
                      {mockStudent.rollNo}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">{mockStudent.grade} • {mockStudent.section}</p>
                  <p className="text-[11px] text-amber-400 font-semibold">{mockStudent.house}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-center border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">House Points</span>
                  <span className="font-serif text-2xl font-bold text-amber-400">1,420 Pts</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Term GPA</span>
                  <span className="font-serif text-2xl font-bold text-emerald-400">{mockStudent.gpa}</span>
                </div>
              </div>
            </div>

            {/* Dashboard Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
              {[
                { id: 'schedule', label: "Today's Schedule", icon: <Calendar className="w-4 h-4" /> },
                { id: 'assignments', label: 'Pending Assignments', icon: <BookOpen className="w-4 h-4" /> },
                { id: 'results', label: 'My Gradebook', icon: <Award className="w-4 h-4" /> },
                { id: 'library', label: 'Digital Library & JSTOR', icon: <Globe className="w-4 h-4" /> },
                { id: 'clubs', label: 'My Clubs & House', icon: <Zap className="w-4 h-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    activeTab === tab.id
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab 1: Today's Schedule */}
            {activeTab === 'schedule' && (
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-950">Daily Class Timetable</h3>
                    <p className="text-xs text-slate-500">Grade 10 • Section Alpha</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Active Term
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold uppercase text-[11px]">
                        <th className="py-3 px-3">Time</th>
                        <th className="py-3 px-3">Monday</th>
                        <th className="py-3 px-3">Tuesday</th>
                        <th className="py-3 px-3">Wednesday</th>
                        <th className="py-3 px-3">Thursday</th>
                        <th className="py-3 px-3">Friday</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {mockTimetable.map((t, idx) => (
                        <tr key={idx} className={t.mon.includes('Break') || t.mon.includes('Lunch') ? 'bg-amber-50/50 font-semibold' : 'hover:bg-slate-50'}>
                          <td className="py-3 px-3 font-mono font-bold text-slate-700">{t.time}</td>
                          <td className="py-3 px-3 text-slate-800">{t.mon}</td>
                          <td className="py-3 px-3 text-slate-800">{t.tue}</td>
                          <td className="py-3 px-3 text-slate-800">{t.wed}</td>
                          <td className="py-3 px-3 text-slate-800">{t.thu}</td>
                          <td className="py-3 px-3 text-slate-800">{t.fri}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab 2: Assignments & Submissions */}
            {activeTab === 'assignments' && (
              <div className="space-y-4">
                {mockHomework.map((hw) => (
                  <div key={hw.id} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800">
                          {hw.subject}
                        </span>
                        <span className="text-xs text-amber-700 font-semibold">Due: {hw.dueDate}</span>
                      </div>
                      <h4 className="font-serif text-lg font-bold text-slate-950">{hw.title}</h4>
                      <p className="text-xs text-slate-500">Educator: {hw.teacher} • Max Points: {hw.points}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      {hw.status === 'Submitted' ? (
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-200">
                          Submitted (Under Review)
                        </span>
                      ) : hw.status.includes('Graded') ? (
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-200">
                          {hw.status}
                        </span>
                      ) : (
                        <button
                          onClick={() => handleFileUpload(hw.title)}
                          className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs flex items-center gap-1.5"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          <span>Submit Work</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Results */}
            {activeTab === 'results' && (
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card space-y-6">
                <h3 className="font-serif text-2xl font-bold text-slate-950">Term 2 Academic Performance</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-slate-700 font-bold uppercase text-[11px] border-b border-slate-200">
                        <th className="py-3 px-4">Subject</th>
                        <th className="py-3 px-4">Term 1</th>
                        <th className="py-3 px-4">Term 2</th>
                        <th className="py-3 px-4">Grade</th>
                        <th className="py-3 px-4">Remarks</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {mockResults.map((r, i) => (
                        <tr key={i} className="hover:bg-slate-50/60">
                          <td className="py-3 px-4 font-semibold text-slate-900">{r.subject}</td>
                          <td className="py-3 px-4 text-slate-600">{r.term1}</td>
                          <td className="py-3 px-4 font-bold text-slate-900">{r.term2}</td>
                          <td className="py-3 px-4 font-bold text-emerald-700">{r.grade}</td>
                          <td className="py-3 px-4 text-xs text-slate-500 italic">{r.remarks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab 4: Library */}
            {activeTab === 'library' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'JSTOR Academic Database', desc: 'Full institutional access to 12M+ academic journal articles and books.', linkText: 'Launch JSTOR Gateway' },
                  { title: 'Oxford English & Classical Lexicon', desc: 'Complete etymological dictionary and literary concordances.', linkText: 'Access Lexicon' },
                  { title: 'MIT OpenCourseWare Physics Notes', desc: 'Curated university extension problem sets for AP Physics Honors.', linkText: 'Open Physics Archive' },
                ].map((lib, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif text-lg font-bold text-slate-950">{lib.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{lib.desc}</p>
                    </div>
                    <button
                      onClick={() => showToast('Connecting', `Connecting to ${lib.title}...`, 'info')}
                      className="text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800 text-left"
                    >
                      {lib.linkText} &rarr;
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 5: Clubs */}
            {activeTab === 'clubs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-card space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">House Allocation</span>
                  <h3 className="font-serif text-2xl font-bold text-slate-950">Phoenix House (Gold)</h3>
                  <p className="text-xs text-slate-600">Current House Standing: <strong>1st Place</strong> (1,420 Total Points)</p>
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                    Next House Debate Assembly: Friday, 02:30 PM in Grand Auditorium
                  </div>
                </div>

                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-card space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block">Active Memberships</span>
                  <h3 className="font-serif text-2xl font-bold text-slate-950">Student Clubs</h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between p-2 bg-slate-50 rounded-lg">
                      <span className="font-semibold text-slate-900">ABS FIRST LEGO Robotics Squad</span>
                      <span className="text-slate-500">Lead Coder</span>
                    </div>
                    <div className="flex justify-between p-2 bg-slate-50 rounded-lg">
                      <span className="font-semibold text-slate-900">Youth Symphony Orchestra</span>
                      <span className="text-slate-500">First Violin</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}
      </div>

    </div>
  );
};
