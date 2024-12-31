/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        '11xl': '6.956rem', // Custom font size
      },
      lineHeight:{
        'kapilan-45':'2.5rem'
      },
      colors:{
        'color-kapilan':"rgba(250,24,25,0.6)"
      }
    },
    fontFamily: {
      // here key is custom name and its value is existing one
      myNewFont: ["Playwrite US Modern Guides", "serif"],
      rubikVinyl: ["Rubik Vinyl", "serif"],
      kapilan: ["Sixtyfour", "serif"],
    },
  },
  plugins: [],
  darkMode:"selector"
};
