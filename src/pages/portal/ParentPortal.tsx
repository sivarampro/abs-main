import React, { useState } from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { authService, PortalUser } from '../../services/authService';
import { 
  mockStudent, 
  mockHomework, 
  mockResults, 
  mockTimetable, 
  mockCirculars, 
  mockFeeLedger, 
  mockTeacherMessages 
} from '../../data/portalData';
import { useToast } from '../../components/common/ToastContext';
import { 
  UserCircle, 
  Lock, 
  LogOut, 
  CheckCircle2, 
  Calendar, 
  BookOpen, 
  Award, 
  DollarSign, 
  FileText, 
  MessageSquare, 
  Clock, 
  Download, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck,
  Send
} from 'lucide-react';

export const ParentPortal: React.FC = () => {
  const { showToast } = useToast();
  const [user, setUser] = useState<PortalUser | null>(() => authService.getCurrentUser('parent'));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'attendance' | 'results' | 'homework' | 'fees' | 'circulars' | 'messages' | 'timetable'>('overview');

  // Teacher message reply state
  const [replyText, setReplyText] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const loggedInUser = authService.login(email || 'parent@abs.edu', 'parent');
    setUser(loggedInUser);
    showToast('Signed In', `Welcome back, ${loggedInUser.name}!`, 'success');
  };

  const handleDemoLogin = () => {
    const loggedInUser = authService.login('parent@abs.edu', 'parent');
    setUser(loggedInUser);
    showToast('Demo Access Granted', 'Logged into Parent Portal as Dr. Sunita Ramanathan.', 'success');
  };

  const handleLogout = () => {
    authService.logout('parent');
    setUser(null);
    showToast('Signed Out', 'You have been securely logged out.', 'info');
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    showToast('Message Dispatched', 'Your note has been transmitted to Prof. Marcus Chen.', 'success');
    setReplyText('');
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-24">
      
      <PageHeader
        badge="Parent Portal"
        title="ABS Parent Engagement & Academic Portal"
        tagline="Monitor real-time student attendance, examination results, fee ledgers, school circulars, and direct teacher communications."
        breadcrumbs={[
          { label: 'Portals' },
          { label: 'Parent Portal' }
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
          /* Login View */
          <div className="max-w-md mx-auto bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xl space-y-6">
            
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 mx-auto flex items-center justify-center border border-amber-200">
                <UserCircle className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-slate-950">Parent Secure Sign In</h2>
              <p className="text-xs text-slate-500">Enter your registered parent credentials or use instant 1-click demo access.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Email / Parent ID
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="parent@abs.edu"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Password
                  </label>
                  <button type="button" onClick={() => showToast('Password Reset', 'Password reset instructions sent to parent email.', 'info')} className="text-[11px] text-amber-700 hover:underline">
                    Forgot?
                  </button>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" defaultChecked className="w-4 h-4 text-amber-500 rounded" />
                <label htmlFor="remember" className="text-xs text-slate-600">Remember credentials on this browser</label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs"
              >
                Sign In to Parent Portal
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
              <span>1-Click Parent Demo Sign In</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center">
              <p className="text-[11px] text-slate-400">
                Demo Credentials: <code className="text-slate-700 bg-slate-100 px-1 py-0.5 rounded">parent@abs.edu</code>
              </p>
            </div>

          </div>
        ) : (
          /* Logged In Dashboard View */
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
                  <p className="text-[11px] text-amber-400 font-semibold">{mockStudent.house} • Advisor: {mockStudent.advisor}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-center border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Attendance</span>
                  <span className="font-serif text-2xl font-bold text-emerald-400">{mockStudent.attendancePercent}%</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Current GPA</span>
                  <span className="font-serif text-2xl font-bold text-amber-400">{mockStudent.gpa}</span>
                </div>
              </div>
            </div>

            {/* Dashboard Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
              {[
                { id: 'overview', label: 'Overview', icon: <FileText className="w-4 h-4" /> },
                { id: 'results', label: 'Gradebook & Results', icon: <Award className="w-4 h-4" /> },
                { id: 'homework', label: 'Homework & Tasks', icon: <BookOpen className="w-4 h-4" /> },
                { id: 'timetable', label: 'Weekly Timetable', icon: <Calendar className="w-4 h-4" /> },
                { id: 'fees', label: 'Fee Invoices', icon: <DollarSign className="w-4 h-4" /> },
                { id: 'circulars', label: 'School Notices', icon: <AlertCircle className="w-4 h-4" /> },
                { id: 'messages', label: 'Teacher Messaging', icon: <MessageSquare className="w-4 h-4" /> }
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

            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Recent Results Preview */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-card space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-lg font-bold text-slate-950">Academic Progress</h4>
                    <button onClick={() => setActiveTab('results')} className="text-xs text-amber-700 font-bold hover:underline">View All &rarr;</button>
                  </div>
                  <div className="space-y-3">
                    {mockResults.slice(0, 3).map((res, i) => (
                      <div key={i} className="flex justify-between items-center text-xs pb-2 border-b border-slate-100">
                        <span className="font-medium text-slate-800">{res.subject}</span>
                        <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">{res.grade} ({res.term2})</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pending Homework Preview */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-card space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-lg font-bold text-slate-950">Pending Homework</h4>
                    <button onClick={() => setActiveTab('homework')} className="text-xs text-amber-700 font-bold hover:underline">View All &rarr;</button>
                  </div>
                  <div className="space-y-3">
                    {mockHomework.slice(0, 3).map((hw) => (
                      <div key={hw.id} className="text-xs space-y-1 pb-2 border-b border-slate-100">
                        <div className="flex justify-between font-semibold text-slate-900">
                          <span>{hw.subject}</span>
                          <span className="text-amber-700">{hw.dueDate}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 truncate">{hw.title}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Urgent Circulars Preview */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-card space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-lg font-bold text-slate-950">Latest Notices</h4>
                    <button onClick={() => setActiveTab('circulars')} className="text-xs text-amber-700 font-bold hover:underline">View All &rarr;</button>
                  </div>
                  <div className="space-y-3">
                    {mockCirculars.slice(0, 2).map((circ) => (
                      <div key={circ.id} className="text-xs space-y-1 pb-2 border-b border-slate-100">
                        <div className="flex items-center gap-1.5">
                          {circ.urgent && <span className="px-1.5 py-0.5 bg-rose-100 text-rose-700 rounded text-[9px] font-bold">URGENT</span>}
                          <span className="text-slate-400 text-[10px]">{circ.date}</span>
                        </div>
                        <p className="font-semibold text-slate-800 line-clamp-2">{circ.title}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* Tab 2: Gradebook & Results */}
            {activeTab === 'results' && (
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-950">Term 2 Academic Examination Report</h3>
                    <p className="text-xs text-slate-500">Cumulative GPA: 3.94 / 4.0 (Top 2 Percentile)</p>
                  </div>
                  <button
                    onClick={() => showToast('Report Card Downloaded', 'Term 2 Official PDF report card saved.', 'info')}
                    className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                  >
                    <Download className="w-4 h-4 text-amber-400" />
                    <span>Download Official Report</span>
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-slate-700 font-bold uppercase text-[11px] border-b border-slate-200">
                        <th className="py-3 px-4">Subject</th>
                        <th className="py-3 px-4">Term 1</th>
                        <th className="py-3 px-4">Term 2</th>
                        <th className="py-3 px-4">Grade</th>
                        <th className="py-3 px-4">Faculty Remarks</th>
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

            {/* Tab 3: Homework & Tasks */}
            {activeTab === 'homework' && (
              <div className="space-y-4">
                {mockHomework.map((hw) => (
                  <div key={hw.id} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800">
                          {hw.subject}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">{hw.teacher}</span>
                      </div>
                      <h4 className="font-serif text-lg font-bold text-slate-950">{hw.title}</h4>
                      <p className="text-xs text-slate-500">Weightage: {hw.points}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        hw.status.includes('Graded')
                          ? 'bg-emerald-100 text-emerald-800'
                          : hw.status === 'Submitted'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-900'
                      }`}>
                        {hw.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 4: Timetable */}
            {activeTab === 'timetable' && (
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card space-y-4">
                <h3 className="font-serif text-2xl font-bold text-slate-950">Grade 10 Section Alpha Weekly Schedule</h3>
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

            {/* Tab 5: Fees */}
            {activeTab === 'fees' && (
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-950">Fee Ledger & Payment Receipts</h3>
                    <p className="text-xs text-slate-500">Termly Tuition Invoicing for Maya Ramanathan</p>
                  </div>
                  <button
                    onClick={() => showToast('Payment Gateway', 'Connecting to secure fee portal...', 'info')}
                    className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs"
                  >
                    Pay Next Term Online
                  </button>
                </div>

                <div className="space-y-4">
                  {mockFeeLedger.map((fee, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <strong className="text-sm font-bold text-slate-950 block">{fee.term}</strong>
                        <span className="text-xs text-slate-500 font-mono">Invoice #{fee.receiptId} • {fee.dueDate}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-serif text-xl font-bold text-slate-900">{fee.amount}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          fee.status === 'Paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900'
                        }`}>
                          {fee.status}
                        </span>
                        <button
                          onClick={() => showToast('Receipt Downloaded', `Receipt #${fee.receiptId} saved.`, 'info')}
                          className="p-2 text-slate-500 hover:text-slate-800 bg-white border border-slate-200 rounded-lg"
                          title="Download Receipt"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 6: Circulars */}
            {activeTab === 'circulars' && (
              <div className="space-y-4">
                {mockCirculars.map((c) => (
                  <div key={c.id} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        {c.urgent && <span className="px-2 py-0.5 bg-rose-100 text-rose-700 rounded text-[10px] font-bold">URGENT NOTICE</span>}
                        <span className="text-xs text-slate-400">{c.date}</span>
                        <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">{c.category}</span>
                      </div>
                      <h4 className="font-serif text-lg font-bold text-slate-950">{c.title}</h4>
                      <p className="text-xs text-slate-400 font-mono">File attachment: {c.fileSize}</p>
                    </div>

                    <button
                      onClick={() => showToast('Circular Downloaded', `Saved ${c.title}`, 'info')}
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5 flex-shrink-0"
                    >
                      <Download className="w-4 h-4 text-amber-400" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 7: Messages */}
            {activeTab === 'messages' && (
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card space-y-6">
                <h3 className="font-serif text-2xl font-bold text-slate-950">Direct Educator Communications</h3>

                <div className="space-y-4">
                  {mockTeacherMessages.map((msg) => (
                    <div key={msg.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <strong className="text-sm font-bold text-slate-900">{msg.from}</strong>
                        <span className="text-xs text-slate-400">{msg.date}</span>
                      </div>
                      <p className="text-xs font-semibold text-amber-800">{msg.subject}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{msg.preview}</p>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="pt-4 border-t border-slate-200 space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Send Direct Note to Faculty Advisor
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Type a message to Dr. Arthur Sterling or Prof. Marcus Chen..."
                      className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-400"
                    />
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5"
                    >
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>Send</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        )}
      </div>

    </div>
  );
};
