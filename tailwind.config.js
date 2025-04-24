/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      screens: {
        'md': '834px', // Adjust to target iPad Mini/Air more precisely
        'lg': '1440px', // Avoid iPad Pro triggering `lg`
      },
    },
    extend: {},
  },
  plugins: [],
}

