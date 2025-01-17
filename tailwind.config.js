/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gordita', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0A1145',
          light: '#E6F4F1',
        },
        'imago-blue': '#00A7E1',
        'imago-green': '#96C93D',
        'imago-yellow': '#FFFF00',
      },
    },
  },
  plugins: [],
} 