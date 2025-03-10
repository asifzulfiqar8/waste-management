/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#01B67A",
      },
      boxShadow: {
        'custom': '1px 2px 6px 0px #0000000A',
      },
    },
  },
  plugins: [],
}