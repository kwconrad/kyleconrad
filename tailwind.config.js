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
    container: theme => ({
      padding: {
        default: theme("spacing.8"),
        xs: theme("spacing.2"),
        sm: theme("spacing.2"),
        md: theme("spacing.6"),
        lg: theme("spacing.6"),
        xl: theme("spacing.8"),
      },
      center: true,
    }),
    fontFamily: {
      headings: ["Gothic A1", ...defaultTheme.fontFamily.sans],
      sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      16: "16px",
      32: "32px",
      48: "48px",
      64: "64px",
    },
    lineHeight: {
      24: "24px",
      40: "40px",
      64: "64px",
      80: "80px",
    },
    maxWidth: spacing,
    spacing: spacing,
    extend: {},
  },
  variants: {
    fontSize: ["responsive"],
    extend: {},
  },
  plugins: [],
};
