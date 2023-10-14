/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./views/*.html`],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  // ...
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
module.exports = {
  // ...
  daisyui: {
    themes: ['cupcake'],
  },
};