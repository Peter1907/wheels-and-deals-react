/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('../public/background.jpg')",
      },
      colors: {
        orange: '#ffb400',
        green: '#98be0f',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        ibm: ['IBM Plex Serif', 'serif'],
      },
    },
  },
  plugins: [],
};