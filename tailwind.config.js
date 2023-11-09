/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-green': '#8eb904',
        'custom-green-light': '#a5d606',
      },
      colors: {
        'custom-green': '#8eb904',
      },
    },
    // screens: {
    //   xs: '375px',
    // },
  },
  plugins: [],
};
