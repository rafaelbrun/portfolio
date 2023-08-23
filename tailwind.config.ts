import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkred: { DEFAULT: "#1A0000" },
      },
    },
  },
  plugins: [],
} satisfies Config;
