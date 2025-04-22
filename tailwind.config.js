/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        steam: {
          blue: {
            light: '#66c0f4',
            DEFAULT: '#1a9fff',
            dark: '#417a9b'
          },
          dark: {
            lighter: '#2a475e',
            light: '#1b2838',
            DEFAULT: '#171a21',
            dark: '#0e131d'
          },
          green: {
            light: '#a4de26',
            DEFAULT: '#5c7e10',
            dark: '#4c6b10'
          },
          gray: {
            light: '#c7d5e0',
            DEFAULT: '#8f98a0',
            dark: '#66c0f4'
          }
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        }
      }
    },
  },
  plugins: [],
};