/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '12': '-12deg', 
      },
      colors: {
        javaBlack: "#242424",
        javaGray: "#9F9F9F",
        javaRed: {
          light: "#b85865",
          medium: "#b32e2e",
          dark: "#990000"
        },
        javaTeal: {
          light: "#28fcc7",
          medium: "#1cb08b",
          dark: "#0f5241"
        }
      }
    },
  },
  plugins: [],
}

