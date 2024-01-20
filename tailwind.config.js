/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#378760",
        dark1: "#28293D",
        dark2: "#555770",
      },
    },
  },
  plugins: [],
};
