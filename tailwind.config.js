/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        atelier: {
          charcoal: '#0c0c0e',
          noir: '#080809',
          surface: '#141417',
          surfaceElevated: '#1a1a1f',
          surfaceBorder: 'rgba(255, 255, 255, 0.07)',
          ivory: '#F9F8F5',
          cream: '#EFECE6',
          sand: '#D9D5CC',
          stone: '#9E9B93',
          muted: '#6E6B65',
          burgundy: '#8B3A4A',
          burgundyMuted: '#A04D5E',
          bronze: '#B89065',
          bronzeLight: '#D4AC80',
          sage: '#4E6E5D',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'Menlo', 'monospace'],
        editorial: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
