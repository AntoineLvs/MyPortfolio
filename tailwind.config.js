// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'just-me': ['Just Me Again Down Here', 'sans-serif'],
      },
    },
  },
  plugins: [],
};