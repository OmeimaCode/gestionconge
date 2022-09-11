/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#14525F"
      },
      fontFamily:{
        "title":['Tomorrow', 'sans-serif']
      }
    },
  },
  plugins: [],
}
