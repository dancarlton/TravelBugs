/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['DM Sans', 'sans-serif'],
        title2: ['Teko', 'sans-serif'],
        secondary: ['Manrope', 'sans-serif'],
        secondary2: ['Barlow', 'sans-serif'],
        spacegrotesk: ['Space Grotesk', 'sans-serif'],
      },
      fontWeight: {
        'boldest': 900,
      },
      letterSpacing: {
        tighter: '-0.05em',
        looser: '0.1em',
        'custom-spacing': '0.2em', // Custom letter-spacing
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
