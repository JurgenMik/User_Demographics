const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ['Rubik', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}