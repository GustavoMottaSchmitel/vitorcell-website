/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.07' },
          '50%': { transform: 'scale(1.1)', opacity: '0.1' },
        },
        'pulse-slow-reverse': {
          '0%, 100%': { transform: 'scale(1.1)', opacity: '0.05' },
          '50%': { transform: 'scale(1)', opacity: '0.08' },
        },
        'pulse-light': {
            '0%, 100%': { opacity: '0.2' },
            '50%': { opacity: '0.4' },
        },
        'light-pulse-small': {
            '0%, 100%': { transform: 'scale(1)', opacity: '0.1' },
            '50%': { transform: 'scale(1.2)', opacity: '0.15' },
        },
        'light-pulse-medium': {
            '0%, 100%': { transform: 'scale(1.1)', opacity: '0.08' },
            '50%': { transform: 'scale(1)', opacity: '0.12' },
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 8s infinite ease-in-out',
        'pulse-slow-reverse': 'pulse-slow-reverse 10s infinite ease-in-out',
        'pulse-light': 'pulse-light 4s infinite ease-in-out', 
        'light-pulse-small': 'light-pulse-small 5s infinite ease-in-out',
        'light-pulse-medium': 'light-pulse-medium 7s infinite ease-in-out', 
      },
    },
  },
}