/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f6fa',
          100: '#dbe9f4',
          500: '#1b63a6',
          800: '#0b3d6e', // Primary deep navy blue
          900: '#072a4d',
        },
        emergency: {
          500: '#e52c3c',
          600: '#c0202e', // Accent red for emergency/CTA
          700: '#9e1823',
        },
        gold: {
          400: '#f7c333',
          500: '#f5b301', // Secondary gold accent
          600: '#d99e00',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(192, 32, 46, 0.6)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 0 14px rgba(192, 32, 46, 0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s infinite',
        'float': 'floatSlow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
