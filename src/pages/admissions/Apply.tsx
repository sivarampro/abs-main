import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { admissionService, ApplicationSubmissionResult } from '../../services/admissionService';
import { ApplicationFormData } from '../../types';
import { useToast } from '../../components/common/ToastContext';
import { 
  GraduationCap, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Download, 
  FileText, 
  User, 
  Phone, 
  Mail, 
  Building, 
  Calendar,
  Sparkles
} from 'lucide-react';

export const Apply: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefilledGrade = searchParams.get('grade') || '';
  const prefilledScholarship = searchParams.get('scholarship') || '';
  const { showToast } = useToast();

  const [formData, setFormData] = useState<ApplicationFormData>({
    studentFirstName: '',
    studentLastName: '',
    dateOfBirth: '',
    gender: 'Female',
    gradeApplyingFor: prefilledGrade || 'Grade 1 (Primary)',
    academicYear: '2026–2027',
    currentSchool: '',
    parentName: '',
    parentRelationship: 'Mother',
    email: '',
    phone: '',
    city: '',
    statement: prefilledScholarship ? `Applying with consideration for ${prefilledScholarship}.` : '',
    hasSpecialNeeds: false,
    specialNeedsDetail: '',
    howHeard: 'Word of Mouth / Parent Recommendation'
  });

  const [loading, setLoading] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<ApplicationSubmissionResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (prefilledGrade) {
      setFormData(prev => ({ ...prev, gradeApplyingFor: prefilledGrade }));
    }
  }, [prefilledGrade]);

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.studentFirstName.trim()) errs.studentFirstName = 'Student First Name is required';
    if (!formData.studentLastName.trim()) errs.studentLastName = 'Student Last Name is required';
    if (!formData.dateOfBirth) errs.dateOfBirth = 'Date of birth is required';
    if (!formData.parentName.trim()) errs.parentName = 'Parent/Guardian full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'A valid email address is required';
    if (!formData.phone.trim() || formData.phone.length < 7) errs.phone = 'A valid contact phone number is required';
    if (!formData.currentSchool.trim()) errs.currentSchool = 'Current or previous school name is required';
    if (!formData.city.trim()) errs.city = 'City / Location is required';
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      showToast('Validation Error', 'Please check the highlighted fields and try again.', 'error');
      return;
    }

    setLoading(true);
    try {
      const res = await admissionService.submitApplication(formData);
      setSubmissionResult(res);
      showToast('Application Submitted', `Reference ID #${res.referenceNumber} has been generated!`, 'success');
      window.scrollTo({ top: 150, behavior: 'smooth' });
    } catch {
      showToast('Submission Failed', 'An error occurred during submission. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      
      <PageHeader
        badge="Online Application"
        title="Student Admission Enquiry & Application"
        tagline="Begin your application for the 2026–2027 academic session. All applications are reviewed holistically by our Admissions Committee."
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Apply Online' }
        ]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {submissionResult ? (
          /* Success Receipt Card */
          <div className="bg-white rounded-3xl border-2 border-emerald-300 p-8 sm:p-12 shadow-xl text-center space-y-8 animate-slide-up">
            
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block">
                Application Successfully Recorded
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
                Welcome to the ABS Admissions Process
              </h2>
              <p className="text-sm text-slate-600 max-w-lg mx-auto">
                {submissionResult.message}
              </p>
            </div>

            {/* Official Summary Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-4 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Official Application Ref</span>
                  <span className="font-mono text-xl font-bold text-slate-950">{submissionResult.referenceNumber}</span>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  Submitted: {submissionResult.submittedAt}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                <div>
                  <p><strong>Applicant:</strong> {submissionResult.data.studentFirstName} {submissionResult.data.studentLastName}</p>
                  <p><strong>Grade:</strong> {submissionResult.data.gradeApplyingFor}</p>
                  <p><strong>Session:</strong> {submissionResult.data.academicYear}</p>
                </div>
                <div>
                  <p><strong>Parent/Guardian:</strong> {submissionResult.data.parentName} ({submissionResult.data.parentRelationship})</p>
                  <p><strong>Email:</strong> {submissionResult.data.email}</p>
                  <p><strong>Phone:</strong> {submissionResult.data.phone}</p>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 bg-amber-50 p-3 rounded-xl border border-amber-200">
                <strong>Next Steps:</strong> You will receive an official email confirmation shortly. Our admissions officer will reach out within 2 business days to schedule the interactive diagnostic assessment.
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  showToast('Downloaded', 'Application summary saved to downloads.', 'info');
                }}
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Save Application PDF</span>
              </button>

              <Link
                to="/book-a-visit"
                className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2"
              >
                <span>Schedule Campus Visit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        ) : (
          /* Application Form */
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-12 shadow-card space-y-10">
            
            {/* Step 1: Student Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center">1</div>
                <h3 className="font-serif text-xl font-bold text-slate-950">Student Information</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Student First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.studentFirstName}
                    onChange={(e) => setFormData({ ...formData, studentFirstName: e.target.value })}
                    placeholder="e.g. Maya"
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm font-medium focus:outline-none ${
                      errors.studentFirstName ? 'border-rose-400 ring-1 ring-rose-400' : 'border-slate-200 focus:border-amber-400'
                    }`}
                  />
                  {errors.studentFirstName && <p className="text-xs text-rose-600 mt-1">{errors.studentFirstName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Student Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.studentLastName}
                    onChange={(e) => setFormData({ ...formData, studentLastName: e.target.value })}
                    placeholder="e.g. Ramanathan"
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm font-medium focus:outline-none ${
                      errors.studentLastName ? 'border-rose-400 ring-1 ring-rose-400' : 'border-slate-200 focus:border-amber-400'
                    }`}
                  />
                  {errors.studentLastName && <p className="text-xs text-rose-600 mt-1">{errors.studentLastName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm font-medium focus:outline-none ${
                      errors.dateOfBirth ? 'border-rose-400 ring-1 ring-rose-400' : 'border-slate-200 focus:border-amber-400'
                    }`}
                  />
                  {errors.dateOfBirth && <p className="text-xs text-rose-600 mt-1">{errors.dateOfBirth}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Gender
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-amber-400"
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Non-Binary / Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Academic Program & Previous School */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center">2</div>
                <h3 className="font-serif text-xl font-bold text-slate-950">Academic Placement</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Grade Applying For *
                  </label>
                  <select
                    value={formData.gradeApplyingFor}
                    onChange={(e) => setFormData({ ...formData, gradeApplyingFor: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-amber-400"
                  >
                    <optgroup label="Early Years">
                      <option value="Pre-Kindergarten (Pre-K)">Pre-Kindergarten (Pre-K)</option>
                      <option value="Kindergarten (KG)">Kindergarten (KG)</option>
                    </optgroup>
                    <optgroup label="Primary School">
                      <option value="Grade 1 (Primary)">Grade 1</option>
                      <option value="Grade 2 (Primary)">Grade 2</option>
                      <option value="Grade 3 (Primary)">Grade 3</option>
                      <option value="Grade 4 (Primary)">Grade 4</option>
                      <option value="Grade 5 (Primary)">Grade 5</option>
                    </optgroup>
                    <optgroup label="Middle School">
                      <option value="Grade 6 (Middle)">Grade 6</option>
                      <option value="Grade 7 (Middle)">Grade 7</option>
                      <option value="Grade 8 (Middle)">Grade 8</option>
                    </optgroup>
                    <optgroup label="Secondary School">
                      <option value="Grade 9 (Secondary)">Grade 9</option>
                      <option value="Grade 10 (Secondary)">Grade 10</option>
                    </optgroup>
                    <optgroup label="Senior Secondary">
                      <option value="Grade 11 - Science Stream">Grade 11 - Science Stream</option>
                      <option value="Grade 11 - Commerce Stream">Grade 11 - Commerce Stream</option>
                      <option value="Grade 11 - Humanities Stream">Grade 11 - Humanities Stream</option>
                      <option value="Grade 12 - Senior Year">Grade 12 - Senior Year</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Academic Session
                  </label>
                  <select
                    value={formData.academicYear}
                    onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-amber-400"
                  >
                    <option value="2026–2027">2026–2027 (Autumn Intake)</option>
                    <option value="2026–2027 Mid-Term">2026–2027 Mid-Term (Immediate)</option>
                    <option value="2027–2028">2027–2028 (Advance Registration)</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Current / Previous School *
                  </label>
                  <input
                    type="text"
                    value={formData.currentSchool}
                    onChange={(e) => setFormData({ ...formData, currentSchool: e.target.value })}
                    placeholder="e.g. St. Jude International Academy, Singapore"
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm font-medium focus:outline-none ${
                      errors.currentSchool ? 'border-rose-400 ring-1 ring-rose-400' : 'border-slate-200 focus:border-amber-400'
                    }`}
                  />
                  {errors.currentSchool && <p className="text-xs text-rose-600 mt-1">{errors.currentSchool}</p>}
                </div>
              </div>
            </div>

            {/* Step 3: Parent / Guardian Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center">3</div>
                <h3 className="font-serif text-xl font-bold text-slate-950">Parent / Guardian Contact</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Dr. Sunita Ramanathan"
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm font-medium focus:outline-none ${
                      errors.parentName ? 'border-rose-400 ring-1 ring-rose-400' : 'border-slate-200 focus:border-amber-400'
                    }`}
                  />
                  {errors.parentName && <p className="text-xs text-rose-600 mt-1">{errors.parentName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Relationship to Student
                  </label>
                  <select
                    value={formData.parentRelationship}
                    onChange={(e) => setFormData({ ...formData, parentRelationship: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-amber-400"
                  >
                    <option value="Mother">Mother</option>
                    <option value="Father">Father</option>
                    <option value="Legal Guardian">Legal Guardian</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. s.ramanathan@example.com"
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm font-medium focus:outline-none ${
                      errors.email ? 'border-rose-400 ring-1 ring-rose-400' : 'border-slate-200 focus:border-amber-400'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +1 (555) 019-2834"
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm font-medium focus:outline-none ${
                      errors.phone ? 'border-rose-400 ring-1 ring-rose-400' : 'border-slate-200 focus:border-amber-400'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    City / Country of Residence *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Chennai, India / London, UK"
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm font-medium focus:outline-none ${
                      errors.city ? 'border-rose-400 ring-1 ring-rose-400' : 'border-slate-200 focus:border-amber-400'
                    }`}
                  />
                  {errors.city && <p className="text-xs text-rose-600 mt-1">{errors.city}</p>}
                </div>
              </div>
            </div>

            {/* Step 4: Statement & Special Interests */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center">4</div>
                <h3 className="font-serif text-xl font-bold text-slate-950">Statement & Special Interests</h3>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Applicant Statement / Key Interests (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.statement}
                  onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                  placeholder="Tell us about the applicant’s academic interests, creative passions, athletic accomplishments, or scholarship intentions..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                By submitting, you agree to our admissions evaluation policies.
              </p>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-10 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <span>{loading ? 'Submitting Application...' : 'Submit Application'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        )}

      </section>

    </div>
  );
};
