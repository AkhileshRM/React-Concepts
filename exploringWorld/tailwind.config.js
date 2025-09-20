/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
    sm:"576px",
    lg:"992px",
    xlg:"1200px"
    },
    extend: {
      spacing:{
        13: "13px"
      }
    },
  },
  plugins: [],
}
