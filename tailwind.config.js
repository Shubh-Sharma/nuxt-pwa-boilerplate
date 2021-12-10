module.exports = {
  purge: ['./pages/**/*.vue', './components/**/*.vue', './layouts/**/*.vue'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#27AE60',
          600: '#1E8549',
          700: '#155B32',
        },
      },
      fontFamily: {
        sans: ['Mulish', 'Inter', 'sans-serif'],
        serif: ['Garamond', 'Merriweather', 'serif'],
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
