/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui : {
    
    
      themes: [
        {
          mytheme: {
          
 primary: "#950740",
          
secondary: "#89025f",
          
 accent: "#1a1a1d",
          
 neutral: "#1E151E",
          
          
 info: "#A1E3F7",
          
 success: "#48D5A2",
          
 warning: "#FABE29",
          
 error: "#EA5339",
          },
        },
      ],
   
    
  },
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'autofit': 'repeat(auto-fit, minmax(160px, 1fr))',

      }
    },
    
  },
  plugins: [require("daisyui")],

}
