import { ApplicationFormData } from '../types';

export interface ApplicationSubmissionResult {
  success: boolean;
  referenceNumber: string;
  submittedAt: string;
  message: string;
  data: ApplicationFormData;
}

export const admissionService = {
  async submitApplication(formData: ApplicationFormData): Promise<ApplicationSubmissionResult> {
    // Simulate real network request latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Generate official reference ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const year = new Date().getFullYear();
    const referenceNumber = `ABS-${year}-APP-${randomSuffix}`;
    const submittedAt = new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'short',
    });

    const result: ApplicationSubmissionResult = {
      success: true,
      referenceNumber,
      submittedAt,
      message: `Your admission enquiry for ${formData.studentFirstName} ${formData.studentLastName} has been successfully recorded under reference ${referenceNumber}. Our Admissions Office will contact you within 2 business days.`,
      data: formData,
    };

    // Store in localStorage for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('abs_applications') || '[]');
      existing.push(result);
      localStorage.setItem('abs_applications', JSON.stringify(existing));
    } catch {
      // Local storage fallback
    }

    return result;
  },

  getSavedApplications(): ApplicationSubmissionResult[] {
    try {
      return JSON.parse(localStorage.getItem('abs_applications') || '[]');
    } catch {
      return [];
    }
  }
};
