module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        celeste: '#32e0c4',
        dgreen: '#0d7377',
        plomo:'#eeeeee',
        nigga: '#212121'

      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  require('@tailwindcss/forms'),
  require('@tailwindcss/aspect-ratio'),],
}
