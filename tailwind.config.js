/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Claude.ai color palette
        primary: {
          100: "#f5f3ff",
          200: "#ede9fe",
          300: "#ddd6fe",
          400: "#c4b5fd",
          500: "#a78bfa",
          600: "#7c3aed", // Primary purple color
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
