import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        paper: "#FFFFFF",
        surface: "#F7F6F2",
        line: "#E6E3DC",
        ink: {
          DEFAULT: "#0B1220",
          soft: "#48516B",
          muted: "#7C8398",
        },
        gold: {
          DEFAULT: "#C7A24A",
          soft: "#E8DCB8",
          dark: "#9C7E33",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        lg: "10px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,18,32,0.04), 0 8px 24px rgba(11,18,32,0.04)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slide: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(200%)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease forwards",
        slide: "slide 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
