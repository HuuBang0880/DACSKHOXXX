/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C6E49",
        content: "#EFF3F5",
        bgcontent: "#F2FFF8",
      },
      keyframes: {
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-in-left-0.5": "fade-in-left 0.5s ease-out",
        "fade-in-left-1.5": "fade-in-left 1.5s ease-out",
        "fade-in-left-2": "fade-in-left 2s ease-out",
        "fade-in-left-3": "fade-in-left 3s ease-out",
        "fade-in-left-4": "fade-in-left 4s ease-out",
      },
    },
  },
  plugins: [],
};
