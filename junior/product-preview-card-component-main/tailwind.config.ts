/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-pattern": "url('./images/image-product-mobile.jpg')",
        "desktop-pattern": "url('./images/image-product-desktop.jpg')",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Fraunces", "serif"],
      },
      colors: {
        "dark-cyan-hover": "hsl(158, 36%, 27%)",
        "dark-cyan": "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
      },
    },
  },
  plugins: [],
};
