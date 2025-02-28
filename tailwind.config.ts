import { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jaro: "var(--font-jaro)",
        "jetbrains-mono": "var(--font-jetbrains-mono)",
      },
    },
  },
} satisfies Config;
