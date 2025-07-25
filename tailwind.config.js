/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    theme: {
      screens: {
        md: '834px', // Adjust to target iPad Mini/Air more precisely
        lg: '1440px', // Avoid iPad Pro triggering `lg`
      },
    },
    extend: {
      colors: {
        golden: '#E7A647', // base gold
        goldenDark: '#CFA647', // richer gold
        goldenDeep: '#855B1F', // brownish-gold
        emerald: '#1cb67c', // green
      },
      backgroundImage: {
        'gradient-golden': 'linear-gradient(to right, #E7A647, #CFA647)',
        'gradient-golden-dark': 'linear-gradient(to right, #E7A647, #A78430)',
        'gradient-golden-deep': 'linear-gradient(to right, #E7A647, #855B1F)',
      },
    },
  },
  plugins: [],
}
