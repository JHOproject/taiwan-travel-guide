module.exports = {
  purge: [
    // './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        'light-green':
          'linear-gradient(155.4deg, #78e389 0.2%, #1eb893 90.81%)',
      },
      textColor: {
        blue: '#0085FF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
