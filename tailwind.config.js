/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    colors: {
      main: "#23155B",
      primary: "#8053FF",
      gray: "#817d8e",
      background: "#f4f4f4",
      white: "#ffffff",
      blue: "#1983F0",
      lightMode: "#CBd5E1",
      darkMode: "#4322C9A3",
      navbarLightMode: "",
      navbarDarkMode: "",
    },
    extend: {},
  },
  plugins: [],
};
