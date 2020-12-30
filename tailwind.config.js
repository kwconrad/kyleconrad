const defaultTheme = require("tailwindcss/defaultTheme");
const range = require("lodash/range");

const spacing = {};

range(0, 10, 0.25).forEach(key => {
  spacing[key.toString()] = `${key * 8}px`;
});

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // false, 'media', or 'class'
  theme: {
    colors: {
      black: "#272729",
      midGrey: "#6D6D73",
      lightGrey: "#E7E7E9",
      white: "#ffffff",
      transparent: "transparent",
    },
    container: {
      center: true,
    },
    fontFamily: {
      headings: ["Gothic A1", ...defaultTheme.fontFamily.sans],
      sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      16: "16px",
      32: "32px",
      40: "40px",
      56: "56px",
    },
    lineHeight: {
      24: "24px",
      40: "40px",
      72: "72px",
    },
    maxWidth: spacing,
    spacing: spacing,
    extend: {},
  },
  variants: {
    container: ["responsive"],
    fontSize: ["responsive"],
    extend: {},
  },
  plugins: [],
};
