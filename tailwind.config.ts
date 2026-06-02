import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFCF8",
        surface: "#FFFFFF",
        "text-main": "#1A1A1A",
        "text-muted": "#4A4A4A",
        "golden-pollen": "#FFCC33",
        "golden-hover": "#E6B800",
      },
      fontFamily: {
        heading: ["var(--font-rubik)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(26, 26, 26, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
