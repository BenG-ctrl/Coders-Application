/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    colors: {
      main: "var(--main)",
      primary: "var(--primary)",
      gray: "var(--gray)",
      background: "var(--background)",
      white: "var(--white)",
      blue: "var(--blue)",
      lightMode: "var(--lighMode)",
      darkMode: "var(--darkMode)",
      green: "var(--green)",
      red: "var(--red)",
      orange: "var(--orange)",
    },
    extend: {},
  },
  plugins: [],
};
