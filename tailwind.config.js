/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",                     //read files
  ],
  theme: {
    extend: {
      colors: {
        'primary':{
        "600":"#0f172a"
        }
      },
      fontFamily:{
        'display': ["Patua One","serif"],
        'body': ["Poppins","sans-serif"],
        'alternate': ["Amita","serif"]
      }
    },
  },
  plugins: [],
}

