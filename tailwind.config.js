/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#304FFF",
        background: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
