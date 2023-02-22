/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: 'var(--primary-black)'
      }
    },
    screens: {
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px'
    },
  },
  plugins: [],
}
