/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Lato:['Lato', 'sans-serif'],
      },
      colors:{
        "primary": "#D8F3DC",
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'in-out': 'ease-in-out',
      },
    },
  },
  plugins: [],
}

