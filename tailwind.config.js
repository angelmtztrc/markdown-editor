/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        jet: '#2C2D31',
        onyx: '#35383F',
        'raisin-black': '#1E1F23',
        'eerie-black': '#15161A',
        'burnt-sienna': '#e66b4b'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
