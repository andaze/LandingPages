/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './content/**/*.{md,html,js}',
    './themes/**/*.{md,html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        'over-size': '1921px',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/forms'),
  ],
}
