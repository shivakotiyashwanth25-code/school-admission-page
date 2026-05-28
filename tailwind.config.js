/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Nunito", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Nunito", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        sunshine: "#ffca3a",
        coral: "#ff6b6b",
        mint: "#2ec4b6",
        skybrand: "#4d96ff",
        plum: "#7c3aed"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};
