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
        yellow: '#FFD007',
        white: '#fff'
      },
      secondary: {
        light: '#E4F5D2',
        background: '#15280B',
        primary: '#4E8B21',
        hover: '#3E6D1E',
        disable: '#6AB32F',
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
    },
  },
  plugins: [],
}