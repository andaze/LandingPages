const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/**/*.{md}",
    "./themes/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
