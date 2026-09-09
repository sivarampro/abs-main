import { VisitBookingFormData } from '../types';

export interface VisitBookingResult {
  success: boolean;
  passId: string;
  confirmedDate: string;
  confirmedTime: string;
  visitorCount: number;
  tourType: string;
  parentName: string;
  qrCodeMock: string;
}

export const visitService = {
  async bookVisit(formData: VisitBookingFormData): Promise<VisitBookingResult> {
    await new Promise((resolve) => setTimeout(resolve, 700));

    const passId = `ABS-VISIT-${Math.floor(100000 + Math.random() * 900000)}`;

    const result: VisitBookingResult = {
      success: true,
      passId,
      confirmedDate: formData.preferredDate,
      confirmedTime: formData.preferredTime,
      visitorCount: formData.visitorCount,
      tourType: formData.tourType,
      parentName: formData.parentName,
      qrCodeMock: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${passId}`
    };

    try {
      const existing = JSON.parse(localStorage.getItem('abs_visit_bookings') || '[]');
      existing.push({ ...result, email: formData.email, phone: formData.phone, studentGrade: formData.studentGrade });
      localStorage.setItem('abs_visit_bookings', JSON.stringify(existing));
    } catch {
      // fallback
    }

    return result;
  }
};
