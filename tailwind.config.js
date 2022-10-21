/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0099ff',
        secondary: '#1c5480',
      },
      spacing: {
        90: '90vh',
      },
    },
  },
  plugins: [],
};
