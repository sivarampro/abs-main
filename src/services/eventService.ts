export interface EventRSVPResult {
  success: boolean;
  ticketId: string;
  eventId: string;
  attendeeName: string;
  guestCount: number;
}

export const eventService = {
  async registerForEvent(eventId: string, attendeeName: string, email: string, guestCount: number): Promise<EventRSVPResult> {
    await new Promise((resolve) => setTimeout(resolve, 600));

    const ticketId = `TKT-${Math.floor(100000 + Math.random() * 900000)}`;

    const result = {
      success: true,
      ticketId,
      eventId,
      attendeeName,
      guestCount
    };

    try {
      const existing = JSON.parse(localStorage.getItem('abs_event_tickets') || '[]');
      existing.push({ ...result, email, registeredAt: new Date().toISOString() });
      localStorage.setItem('abs_event_tickets', JSON.stringify(existing));
    } catch {
      // fallback
    }

    return result;
  }
};
