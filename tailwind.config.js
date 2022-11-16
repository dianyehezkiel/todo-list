/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
      },
      colors: {
        'primary-black': '#111111',
        'secondary-black': '#888888'
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#16ABF8',
          'primary-content': '#FFFFFF',
          secondary: '#B01AFF',
          accent: '#fbbf24',
          neutral: '#F4F4F4',
          'neutral-content': '#4A4A4A',
          'base-100': '#FFFFFF',
          'base-content': '#111111',
          info: '#43C4E3',
          success: '#00A790',
          warning: '#FFCE31',
          error: '#ED4C5C',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
