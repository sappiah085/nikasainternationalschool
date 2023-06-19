/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        displayFair: ["Playfair Display", "serif"],
        statosh: ["Satoshi", "sans-serif"],
      },
      screens: {
        large: "1512px",
        small: "500px",
      },
    },
  },
  plugins: [],
};
