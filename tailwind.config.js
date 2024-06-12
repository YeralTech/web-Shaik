/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
    },
    colors: {
      primary: {
        light: '#EFF9FF', 
        background: '#052F4C',
        primary: '#074D77',
        hover: '#006AA9',
        disable: '#76d4ff',
        secondary: '#4E8B21',
        bg: '#def2ff',
        
        white: '#fff'
      },
      secondary: {
        light: '#fffbeb',
        default: '#ffc020',
        background: '#461a02',
        primary: '#ffd961',
        hover: '#f99d07',
        disable: '#ffe688',
      }
    },
    extend: {
      screens: {
        'mobile-sm': '320px',
        'mobile-lg': '480px',
        'tablet': '768px',
        'desktop': '1024px',
        'desktop-lg': '1280px',
      },
      boxShadow: {
        'blur-lg': '0 4px 20px rgba(0, 0, 0, 0.8)',
      },
    },
  },
   variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [],
}