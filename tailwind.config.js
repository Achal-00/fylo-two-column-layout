/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        portrait: { raw: "(max-aspect-ratio: 3/2)" },
        landscape: { raw: "(min-aspect-ratio: 3/2)" },
      },
      fontSize: {
        "custom-font": "clamp(0.875rem, min(2dvw, 2dvh), 5rem)",
      },
      fontFamily: {
        headings: ["Raleway", "sans-serif"],
        others: ["Open Sans", "sans-serif"],
      },
      colors: {
        "very-dark-blue": "hsl(243, 87%, 12%)",
        "desaturated-blue": "hsl(238, 22%, 44%)",
        "bright-blue": "hsl(224, 93%, 58%)",
        "moderate-cyan": "hsl(170, 45%, 43%)",
        "light-greyish-blue": "hsl(240, 75%, 98%)",
        "light-grey": "hsl(0, 0%, 75%)",
      },
    },
  },
  plugins: [],
};
