/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif']
      },
      screens: {
        'mmd': '850px',  // Custom breakpoint at 850px
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
