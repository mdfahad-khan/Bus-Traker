/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    keyframes: {},
    animation: {'fade-in': 'from{margin-left:100%} ',},
  },
  },
  plugins: [],
};
