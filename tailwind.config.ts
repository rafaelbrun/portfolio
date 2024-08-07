import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkred: {
          DEFAULT: "#120000",
          "600": "#7C3626",
          "700": "#2D080A",
        },
        palered: { DEFAULT: "#FFCDBC" },
        pumpkin: { DEFAULT: "#F5853F" },
      },
      spacing: {
        "0.25": "0.063rem",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      fontSize: {
        xxl: "12rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
