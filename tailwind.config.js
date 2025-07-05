/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
        openSansHebrew: ['"Open Sans Hebrew"', 'sans-serif'],
        SegoeUISymbol: ['"Segoe UI Symbol"', 'sans-serif'],
        lexendDeca: ['"Lexend Deca"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
