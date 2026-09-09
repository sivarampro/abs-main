import { ContactFormData } from '../types';

export interface ContactSubmissionResult {
  success: boolean;
  ticketId: string;
  submittedAt: string;
  message: string;
}

export const contactService = {
  async submitContact(formData: ContactFormData): Promise<ContactSubmissionResult> {
    await new Promise((resolve) => setTimeout(resolve, 600));

    const ticketId = `ABS-INQ-${Math.floor(10000 + Math.random() * 90000)}`;
    const submittedAt = new Date().toLocaleString();

    const result = {
      success: true,
      ticketId,
      submittedAt,
      message: `Thank you, ${formData.name}. Your inquiry has been routed to the ${formData.department || 'General'} department under ticket #${ticketId}. We will respond to ${formData.email} within 24 hours.`
    };

    try {
      const existing = JSON.parse(localStorage.getItem('abs_contact_inquiries') || '[]');
      existing.push({ ...formData, ticketId, submittedAt });
      localStorage.setItem('abs_contact_inquiries', JSON.stringify(existing));
    } catch {
      // fallback
    }

    return result;
  }
};
