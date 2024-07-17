/** @type {import('tailwindcss').Config} */
import {red} from 'tailwindcss/colors'
export default {
  content: [
    './index.html',
    './src/*.{js,jsx}',
    './src/components/**/*.jsx',
    './src/pages/**/*.jsx',
  ],
  theme: {
    colors: {
      'dark-blue': '#1B262F',
      blue: '#36536B',
      'light-blue': '#6C8294',
      'light-pink': '#DA6D97',
      pink: '#BA4270',
      white: '#FBFCFE',
      red: red,
      appBackground: '#EDF3F8',
    },
    fontFamily: {
      sans: ['Public Sans', 'sans-serif'],
      serif: ['DM Serif Display', 'serif'],
    },
    extend: {
      cursor: {
        mickey: 'url(/cursor/mickey.png), pointer',
      },
      screens: {
        xsm: '350px',
        '2xl': '1440px',
      },
    },
  },
}
