/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#ffffff",
        dark: "#020302",
        "dark-2": "#323232",
        light: "#FEFEFE",
        "light-2": "#F8F8F8",
      },
    },
  },
  plugins: [],
};
