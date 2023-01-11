/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        card: "0px 5px 5px 0px #00000013",
      },
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
    ],
}
