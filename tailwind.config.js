/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0b1020'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 14px 40px rgba(0,0,0,0.35)'
      },
      screens: {
        laptop: '1280px'
      }
    }
  },
  plugins: []
};
