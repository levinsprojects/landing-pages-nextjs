/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx,json}",
  ],
  theme: {
    extend: {
      colors:{
        'brand':{
          50:'#FFEAF2',
          100:'#FFD6E6',
          400:'#ED639A',
          600: '#F5488D',
        },
        'accent':{
          600:'#A450C7',
          700:'#9B3AB4',
        },
        'secondary':{
          600:'#BD2864',
          700:'#B11B58',
        },
        'card-btn':{
          200: '#E2E8F0',
        },
        'footer-bg':{
          900:'#0F1729',
        }
      },
      boxShadow:{
        'xl': 'rgba(0, 0, 0, 0) 0px Opx 0px 0px, rgba(0, 0, 0, 0) 0px Opx 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ],
}
