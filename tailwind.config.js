module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    scale: {
      0: "0",
      25: ".25",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2",
      250: "2.5",
      300: "3",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      deepGray: "#DEDEDE",
      viridity: "#78e389",
    }),
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      viridity: "#78e389",
      turquoise: "#1EB893",
    }),
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        gloomy: "#F6F6F6",
        dark: "#333333",
        emerald: "#10CC9F",
        deepDark: "#1F1F1F",
        lightDark: "rgba(31, 31, 31, .9)",
      }),
      backgroundImage: {
        "gradient-green":
          "linear-gradient(155.4deg, rgba(120, 227, 137, .8) 0.2%, rgba(30, 184, 147, .8) 90.81%)",
        "gradient-black":
          "linear-gradient(155.4deg, rgba(51, 51, 51, .8) 0.2%, rgba(31, 31, 31, .8) 90.81%)",
        "gradient-white":
          "linear-gradient(155.4deg, rgba(255, 255, 255, .8) 0.2%, rgba(255, 255, 255, .8) 90.81%)",
      },
      textColor: {
        blue: "#0085FF",
        dark: "#333333",
        turquoise: "#1EB893",
        "light-grey": "#B2B2B2",
        "deep-grey": "#868686",
        "deep-dark": "#1F1F1F",
      },
      spacing: {
        200: "200%",
        300: "300%",
        400: "400%",
        144: "42rem",
      },
    },
  },
  variants: {
    extend: { backgroundImage: ["responsive", "hover"] },
  },
  plugins: [],
}
