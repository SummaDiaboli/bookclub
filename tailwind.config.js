module.exports = {
  purge: ['./components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        '2.5': '2.5px',
        '3': '3px',
        '3.5': '3.5px'
      },
      fontFamily: {
        merriweather: ['Merriweather'],
        alegraya: ['Alegreya'],
      },
      colors: {
        bookclubnav: "#D2CBC6",
        bookclubbutton: "#A7A7A7",
        bookclubbody: "#ECE4E4",
        bookgray: "#888888"
      },
      height: {
        19: "4.8rem",
        84: "22rem"
      },
      width: {
        70: "17.75rem"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-debug-screens'), require('@tailwindcss/typography')],
  // important: true,
}
