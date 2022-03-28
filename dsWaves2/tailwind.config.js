module.exports = {
  prefix: 'dsw-',
  mode: 'jit',
  content:['./src/**/*.{js,jsx,ts,tsx,vue,css}'],
  theme: {
      /*
    fontSize: {
        'base': '1.25rem',
        'lg': '2rem',
        'xl': '2.5rem',
        '2xl': '3rem'
    },  */
    extend: {

        colors: {
            /*'light-gray': '#F7F8FA',
            'dark-gray': '#707070',
            'black': '#2B2B2B',
            'dark-blue': '#022E60',
            'bright-blue': '#0D70E3',
            'red': '#FF2300',
            'green': '#119900' */
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
