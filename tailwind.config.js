/** @type {import('tailwindcss').Config} */
export default {
  content: ['src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    fontFamily: {
      sans: ['Nunito Sans', 'Inter', 'sans-serif']
    },
    extend: {
      screens: {
        base: '0px'
      }
    }
  },
  plugins: []
}
