/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      fontFamily: {
        Archivo: ["Archivo", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        whitePrimary: "#ECEADD", //primary
        bluePrimary: "#183282", //secondary
        orangeButton: "#FF9A63", //oranged
        blueSecondary: "#0C185B", //blued
        blueBorder: "#202B67", //blue color used for border
        LinearBlue: "#7796FD", // Color used in gradient in the container of Services
        LinearBLue2: "#4958CC", // Color used in gradient in the container of Services
        PurplePrimary: "#322545", // Used in the body gradient
      },
    },
    container: {
      center: true,
      padding: "24px",

      screens: {
        xs: "540px",
        sm: "720px",
        md: "960px",
        lg: "1140px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
