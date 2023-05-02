/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateRows: {
        'site-layout': 'auto 1fr auto',
      },
    },
    fontFamily: {
      heading: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
};
