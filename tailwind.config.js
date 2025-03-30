/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens : {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl' : '1440px',
    },
    backgroundImage: {
        'custom-gradient': 'linear-gradient(85.211deg, rgb(81, 0, 136) 0%, rgb(184, 39, 187) 33.3333%, rgb(255, 72, 170) 50.5208%, rgb(233, 28, 135) 76.0417%, rgb(140, 0, 72) 100%)',
      },
      textColor: {
        'gradient-text': 'transparent',
      },
  },
  plugins: [],
}