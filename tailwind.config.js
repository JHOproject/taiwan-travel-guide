module.exports = {
  purge: [
    // './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    scale: {
      0: '0',
      25: '.25',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
      200: '2',
      250: '2.5',
      300: '3',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        dark: '#333333',
        deepDark: '#1F1F1F',
      }),
      backgroundImage: {
        'light-green':
          'linear-gradient(155.4deg, #78e389 0.2%, #1eb893 90.81%)',
      },
      textColor: {
        blue: '#0085FF',
        'light-grey': '#B2B2B2',
        'deep-grey': '#868686',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
