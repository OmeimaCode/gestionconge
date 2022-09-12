/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:false,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#14525F",
        Primary:"#14525F"
      },
      fontFamily:{
        "title":['Tomorrow', 'sans-serif']
      }
    },
  },

    plugins: [require("daisyui")],
    daisyui: {
      styled: true,
      themes: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
      darkTheme: "light",
    theme:{
      primary:"#14525F"
    }
    }
     
  
}
