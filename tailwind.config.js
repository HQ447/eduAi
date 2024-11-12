/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "-2xl": { max: "1535px" },
        "-xl": { max: "1279px" },
        "-lg": { max: "1023px" },
        "-md": { max: "767px" },
        "-sm": { max: "639px" },
        "-xsm": { max: "500px" },
      },
      animation: {
        "pulse-scale": "pulseScale 1s ease-in-out infinite",
      },
      keyframes: {
        pulseScale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" }, // Adjust scale as needed
        },
      },
    },
  },
  plugins: [],
};
