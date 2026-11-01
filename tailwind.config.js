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
        tajawal: ['Tajawal', 'Cairo', 'sans-serif'],
        cairo: ['Cairo', 'Tajawal', 'sans-serif'],
      },
      colors: {
        ga: {
          dark: '#050806',
          obsidian: '#080d0a',
          card: '#0c130f',
          cardHover: '#121d17',
          border: 'rgba(34, 197, 94, 0.2)',
          borderHover: 'rgba(34, 197, 94, 0.45)',
          green: '#22c55e',
          neon: '#00ff88',
          emerald: '#10b981',
          lime: '#4ade80'
        },
        via: {
          dark: '#050806',
          card: '#0c130f',
          border: 'rgba(34, 197, 94, 0.2)',
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
          '0%': { boxShadow: '0 0 15px rgba(34, 197, 94, 0.3)' },
          '100%': { boxShadow: '0 0 35px rgba(34, 197, 94, 0.7)' },
        }
      }
    },
  },
  plugins: [],
}
