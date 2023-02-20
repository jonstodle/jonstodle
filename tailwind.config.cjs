/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{svelte,ts,html}'],
  theme: {
    extend: {
      fontFamily: {
        body: 'Atkinson Hyperlegible, sans-serif'
      },
      gridTemplateColumns:{
        fit: 'repeat(auto-fit, minmax(12em, 1fr))'
      }
    },
  },
  plugins: [],
}
