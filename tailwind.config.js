/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'olive-clair': '#DBD7CC',
        'olive-semi-clair': '#A2B18A',
        'olive-moyen': '#588159',
        'olive-foncer': '#3C5A42',
        'olive-dark': '#334D40',
      }
    },
  },
  plugins: [],
}
