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
        background: {
          DEFAULT: '#070B12',
          secondary: '#0C121E',
          card: 'rgba(15, 23, 42, 0.55)',
        },
        aurora: {
          emerald: '#10B981',
          teal: '#14B8A6',
          cyan: '#06B6D4',
          indigo: '#6366F1',
          violet: '#8B5CF6',
          purple: '#A855F7',
          pink: '#EC4899',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'aurora-glow-1': 'aurora1 18s ease-in-out infinite alternate',
        'aurora-glow-2': 'aurora2 22s ease-in-out infinite alternate',
        'aurora-glow-3': 'aurora3 16s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        aurora1: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(60px, 40px) scale(1.15)' },
          '100%': { transform: 'translate(-40px, 80px) scale(0.95)' },
        },
        aurora2: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-50px, -30px) scale(1.2)' },
          '100%': { transform: 'translate(30px, -60px) scale(0.9)' },
        },
        aurora3: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(40px, -50px) scale(1.1)' },
          '100%': { transform: 'translate(-30px, 20px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-hover': '0 12px 40px 0 rgba(16, 185, 129, 0.15)',
        'glow-emerald': '0 0 35px -5px rgba(16, 185, 129, 0.25)',
        'glow-indigo': '0 0 35px -5px rgba(99, 102, 241, 0.25)',
      },
    },
  },
  plugins: [],
}
