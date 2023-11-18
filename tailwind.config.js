/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        'main-font': ['Nunito'],
      },
      colors: {
        'primary-color': '#11175D',
      },
    },
  },
  plugins: [],
}