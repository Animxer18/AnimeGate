/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'autofit': 'repeat(auto-fit, minmax(160px, 1fr))',

      }
    },
    
  },
  plugins: [
    require('daisyui')
],
daisyui: {
  themes: [
    {
      mytheme: {
        primary: "#950740",
        secondary: "#f6d860",
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      },
    },
    
  ],
},
}
