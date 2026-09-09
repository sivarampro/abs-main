/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        abs: {
          navy: {
            DEFAULT: '#0B1528',
            dark: '#060B15',
            deep: '#0F1E36',
            light: '#1B2C4E',
            muted: '#334E78',
          },
          gold: {
            DEFAULT: '#D97706',
            light: '#F59E0B',
            bright: '#FBBF24',
            subtle: '#FEF3C7',
            accent: '#B45309',
          },
          red: {
            DEFAULT: '#9B2C2C',
            light: '#DC2626',
            subtle: '#FEF2F2',
          },
          blue: {
            DEFAULT: '#0284C7',
            sky: '#38BDF8',
            light: '#E0F2FE',
          },
          green: {
            DEFAULT: '#16A34A',
            emerald: '#059669',
            subtle: '#F0FDF4',
          },
          orange: {
            DEFAULT: '#EA580C',
            warm: '#F97316',
            subtle: '#FFF7ED',
          },
          cream: '#FAF8F5',
          surface: '#F8FAFC',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(11, 21, 40, 0.04), 0 1px 2px rgba(11, 21, 40, 0.02)',
        'card': '0 4px 20px -2px rgba(11, 21, 40, 0.06), 0 2px 6px -1px rgba(11, 21, 40, 0.03)',
        'card-hover': '0 12px 30px -4px rgba(11, 21, 40, 0.12), 0 4px 12px -2px rgba(11, 21, 40, 0.06)',
        'gold-glow': '0 0 25px rgba(245, 158, 11, 0.25)',
        'nav': '0 4px 20px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-mesh': 'radial-gradient(circle at 10% 20%, rgba(245, 158, 11, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(2, 132, 199, 0.03) 0%, transparent 40%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
}
