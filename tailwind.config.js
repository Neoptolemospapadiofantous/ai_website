/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'teal': {
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
        'cyan': {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        'purple': {
          400: '#a855f7',
          500: '#9333ea',
          600: '#7c3aed',
        },
        'gray': {
          850: '#1f2937',
          900: '#111827',
          950: '#0f172a',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'teal': '0 0 30px rgba(45, 212, 191, 0.3)',
        'cyan': '0 0 30px rgba(34, 211, 238, 0.3)',
        'purple': '0 0 30px rgba(168, 85, 247, 0.3)',
        'glow-teal': '0 0 50px rgba(45, 212, 191, 0.4)',
        'glow-cyan': '0 0 50px rgba(34, 211, 238, 0.4)',
      },
    },
  },
  plugins: [],
};