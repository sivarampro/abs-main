export interface PortalUser {
  id: string;
  email: string;
  name: string;
  role: 'parent' | 'student';
  studentName?: string;
  grade?: string;
}

export const authService = {
  login(email: string, role: 'parent' | 'student'): PortalUser {
    const user: PortalUser = {
      id: role === 'parent' ? 'PAR-9042' : 'STU-0842',
      email: email || (role === 'parent' ? 'parent@abs.edu' : 'student@abs.edu'),
      name: role === 'parent' ? 'Dr. Sunita Ramanathan' : 'Maya Ramanathan',
      role,
      studentName: 'Maya Ramanathan',
      grade: 'Grade 10 (Secondary)'
    };
    localStorage.setItem(`abs_auth_${role}`, JSON.stringify(user));
    return user;
  },

  getCurrentUser(role: 'parent' | 'student'): PortalUser | null {
    try {
      const stored = localStorage.getItem(`abs_auth_${role}`);
      if (stored) {
        return JSON.parse(stored);
      }
      return null;
    } catch {
      return null;
    }
  },

  logout(role: 'parent' | 'student'): void {
    localStorage.removeItem(`abs_auth_${role}`);
  }
};
