module.exports = {
  purge: [
    './pages/**/*.vue',
    './components/**/*.vue',
    './layouts/**/*.vue',
    './modules/**/*.{js,vue}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        border: '#ABABAB',
        surface: {
          input: '#575757',
          400: '#444444',
          500: '#383838',
          btn: '#2f3234',
          600: '#2e2e2e',
          700: '#1d1d1d',
          800: '#121212',
        },
        brand: {
          500: '#27AE60',
          600: '#1E8549',
          700: '#155B32',
        },
      },
      fontFamily: {
        // sans: ['"Mulish"', '"Inter"', 'sans-serif'],
        // serif: ['Garamond', 'Merriweather', 'serif'],
        body: ['"Mulish"', '"Inter"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  // plugins: [
  //   './components/**/*.{vue,js}',
  //   './layouts/**/*.vue',
  //   './pages/**/*.vue',
  //   './plugins/**/*.{js,ts}',
  //   './nuxt.config.{js,ts}',
  // ],
};
