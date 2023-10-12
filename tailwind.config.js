/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: ['8px', '12px'],
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        gray: {
          50: '#EEEEEE',
          200: '#D5D5D5',
          300: '#D9D9D9',
          600: '#747474',
          800: '#1D1D1D',
        },
        primary: {
          100: '#FEFAFA',
          200: '#f7d4be',
          300: '#f5b59a',
          400: '#DF8686',
          500: '#e40f0f',
          600: '#cc0c0c',
          700: '#ab0909',
          800: '#870505',
          900: '#660303',
        },
        secondary: {
          100: '#e8e8e8',
          200: '#c7c7c7',
          300: '#a3a3a3',
          400: '#616161',
          500: '#1d1d1d',
          600: '#1a1717',
          700: '#140f0f',
          800: '#120b0b',
          900: '#0d0606',
        },
      },
    },
  },
  plugins: [],
}
