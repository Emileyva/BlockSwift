z
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'c-primary-accent': '#7835FF',
        primary: {
          50: '#f3f1ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#7835FF',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        secondary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 20s linear infinite',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'orbit-1': 'orbit-1 8s ease-in-out infinite',
        'orbit-2': 'orbit-2 10s ease-in-out infinite reverse',
        'orbit-3': 'orbit-3 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotateX(0deg) rotateY(0deg)' },
          '25%': { transform: 'translateY(-20px) rotateX(10deg) rotateY(10deg)' },
          '50%': { transform: 'translateY(-30px) rotateX(20deg) rotateY(20deg)' },
          '75%': { transform: 'translateY(-15px) rotateX(15deg) rotateY(15deg)' },
        },
        sparkle: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100px)' },
        },
        'bounce-slow': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotateY(0deg)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': { 
            transform: 'translateY(-25px) rotateY(180deg)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        'orbit-1': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20px, -20px) scale(1.2)' },
          '50%': { transform: 'translate(40px, 0) scale(1)' },
          '75%': { transform: 'translate(20px, 20px) scale(0.8)' },
          '100%': { transform: 'translate(0, 0) scale(1)' }
        },
        'orbit-2': {
          '0%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(-30px, -15px) scale(1.3) rotate(120deg)' },
          '66%': { transform: 'translate(-15px, 30px) scale(0.7) rotate(240deg)' },
          '100%': { transform: 'translate(0, 0) scale(1) rotate(360deg)' }
        },
        'orbit-3': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '20%': { transform: 'translate(15px, -25px) scale(1.1)' },
          '40%': { transform: 'translate(-10px, -30px) scale(0.9)' },
          '60%': { transform: 'translate(-25px, 10px) scale(1.2)' },
          '80%': { transform: 'translate(10px, 25px) scale(0.8)' },
          '100%': { transform: 'translate(0, 0) scale(1)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
