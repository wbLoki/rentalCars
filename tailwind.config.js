/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3563E9",
        text: "#1A202C",
        secondary: "#90A3BF",
        information: "#54A6FF",
        liked: "#ED3F3F",
      },
    },
  },
  plugins: [],
};
