/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './content/**/*.{md,html,js}',
    './themes/**/*.{md,html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
    "./node_modules/flowbite/**/*.js",
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
    require('flowbite/plugin'),
    function({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0px 2px 3px darkgrey"
        },
        ".text-shadow-md": {
          textShadow: "0px 3px 3px darkgrey"
        },
        ".text-shadow-lg": {
          textShadow: "0px 5px 3px darkgrey"
        },
        ".text-shadow-xl": {
          textShadow: "0px 7px 3px darkgrey"
        },
        ".text-shadow-2xl": {
          textShadow: "0px 10px 3px darkgrey"
        },
        ".text-shadow-none": {
          textShadow: "none"
        }
      };

      addUtilities(newUtilities);
    }
  ],
}
