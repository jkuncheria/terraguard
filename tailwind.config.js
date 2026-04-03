/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#005698',
          800: '#0066b3',
          700: '#0077cc',
        },
        green: {
          600: '#009933',
          500: '#00aa3a',
        },
      },
      fontFamily: {
        'sans': ['Eurostile', 'Arial Black', 'Helvetica Neue', 'sans-serif'],
        'eurostile': ['Eurostile', 'Arial Black', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
