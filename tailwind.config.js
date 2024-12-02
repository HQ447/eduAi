/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "-2xl": { max: "1535px" },
        "-xl": { max: "1279px" },
        "-lg": { max: "1023px" },
        "-n": { max: "920px" },
        "-l": { max: "850px" },
        "-md": { max: "767px" },
        "-sm": { max: "639px" },
        "-xsm": { max: "500px" },
      },
      animation: {
        "pulse-scale": "pulseScale 1.3s ease-in-out infinite",
      },
      keyframes: {
        pulseScale: {
          "0%, 100%": { transform: "scale(.9)" },
          "50%": { transform: "scale(1.1)" }, // Adjust scale as needed
        },
      },
    },
  },
  plugins: [],
};
