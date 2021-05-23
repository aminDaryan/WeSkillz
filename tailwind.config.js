module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      md: '0 4px 6px -1px rgba(78, 185, 144, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    extend: {},
  },
  variants: {
    extend: {
      textDecoration: ['focus-visible'],
    }
  },
  plugins: [],
}
