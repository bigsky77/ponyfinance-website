const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "landing-hero": "url('/landing-hero.png')",
        footer: "url('/footer.svg')",
      },
    },
  },
  plugins: [],
};
