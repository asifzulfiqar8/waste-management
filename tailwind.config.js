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
      keyframes: {
        drive: {
          '0%': { transform: 'translateX(100px)' }, 
          '100%': { transform: 'translateX(-100px)' },
        },
      },
      animation: {
        drive: 'drive 0.9s linear infinite',
      },
    },
  },
  plugins: [],
}