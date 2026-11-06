import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"Fira Code"', 'mono'],
      },
      colors: {
        lms: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d5d4',
          400: '#a8a5a2',
          500: '#787572',
          600: '#575350',
          700: '#403d3c',
          800: '#2f2e2d',
          900: '#1c1918',
          950: '#0a0a09',
        },
      },
    },
  },
  plugins: [],
} as Config;