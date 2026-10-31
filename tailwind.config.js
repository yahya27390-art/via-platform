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
        via: {
          dark: '#030712',
          card: '#0B0F19',
          border: '#1F293D',
          cyan: '#06B6D4',
          emerald: '#10B981',
          violet: '#8B5CF6'
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(6, 182, 212, 0.3)' },
          '100%': { boxShadow: '0 0 35px rgba(6, 182, 212, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}

