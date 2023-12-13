/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['DM Sans', 'sans-serif'],
        title2: ['Barlow', 'sans-serif'],
        secondary: ['"Manrope"', 'sans-serif'],
        spacegrotesk: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        green: '#98db2e',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
      themes: ['black', 'lofi'],
      darkTheme: 'black',
      base: true,
      styled: true,
      utils: true,
      prefix: '',
      logs: true,
      themeRoot: ':root',
    },
}