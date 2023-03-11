/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "black-dark": "#0A0A0A",
      "black-light": "#202123",
      "primary": "#fcfbfd",
      "secondary": "#111012",
      "tertiary": "#2f3032",
      "accent": "#2479db"
    },
    extend: {

    },
  },
  plugins: [],
}
