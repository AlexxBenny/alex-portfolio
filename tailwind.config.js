/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "SF Pro Text", "Inter", "ui-sans-serif", "sans-serif"]
      },
      colors: {
        background: "#020617",
        surface: "#020617",
        accent: "#38bdf8",
        accentSoft: "rgba(56, 189, 248, 0.15)"
      },
      boxShadow: {
        "soft-glow": "0 0 40px rgba(56, 189, 248, 0.35)"
      }
    }
  },
  plugins: []
};

