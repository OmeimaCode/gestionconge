/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        //Naim: added color as primary
        primary:'#14525F'
        
      },
      fontFamily:{
        'title':['Tomorrow', 'sans-serif']
      }
    },
  },
  plugins: [],
}
