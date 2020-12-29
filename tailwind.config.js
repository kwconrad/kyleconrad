const defaultTheme = require("tailwindcss/defaultTheme");
const range = require("lodash/range");

const spacing = {};

range(0, 10, 0.25).forEach(key => {
  spacing[key.toString()] = `${key * 8}px`;
});

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: "#272729",
      white: "#ffffff",
    },
    fontFamily: {
      headings: ["Gothic A1", ...defaultTheme.fontFamily.sans],
      sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      16: "16px",
      48: "48px",
      64: "64px",
    },
    lineHeight: {
      24: "24px",
      64: "64px",
      80: "80px",
    },
    spacing: spacing,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
