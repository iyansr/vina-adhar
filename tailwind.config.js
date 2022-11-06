/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js, ts}', './src/**/*'],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#a2d2ff',
          2: '#BDE0FE',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
