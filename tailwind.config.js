/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Readex Pro', 'Alexandria', 'Plus Jakarta Sans', 'sans-serif'],
        heading: ['Readex Pro', 'Alexandria', 'sans-serif'],
        readex: ['Readex Pro', 'sans-serif'],
        alexandria: ['Alexandria', 'sans-serif'],
        tajawal: ['Readex Pro', 'Alexandria', 'sans-serif'],
        cairo: ['Readex Pro', 'Alexandria', 'sans-serif'],
      },
      colors: {
        ga: {
          dark: '#060807',
          obsidian: '#090d0b',
          card: '#0d1310',
          cardHover: '#131c17',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(34, 197, 94, 0.45)',
          green: '#22c55e',
          neon: '#00ff88',
          emerald: '#10b981',
          lime: '#4ade80'
        },
        via: {
          dark: '#060807',
          card: '#0d1310',
          border: 'rgba(255, 255, 255, 0.08)',
          cyan: '#10b981',
          emerald: '#22c55e',
          violet: '#00ff88'
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(34, 197, 94, 0.25)' },
          '100%': { boxShadow: '0 0 35px rgba(34, 197, 94, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
