/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-inter)",
        alt: "var(--font-roboto)",
      },
      colors: {
        purple: { 500: "#8023f9", 600: "#5405bd" },
      },
      transitionProperty: {
        "max-height": "max-height",
      },
      screens: {
        md: "768px",
        lg: "992px",
        xl: "1240px",
      },
    },
  },
  plugins: [],
};
