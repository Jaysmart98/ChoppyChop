/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#00A859', // Your primary action color
          dark: '#0f172a',  // Slate-900
          light: '#f8fafc', // Slate-50
        },
      },
    },
  },
  plugins: [],
};
