import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/pol-ui/lib/esm/**/*.js",
    "./components/**/_.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#030506",
        },
        neutral: {
          DEFAULT: "#ebeadf",
        },
        light: {
          DEFAULT: "#fefdf4",
        },
        primary: {
          DEFAULT: "#5b5f51",
          50: "#e9ffd7",
          100: "#ebf7d1",
          200: "#c7d1b1",
          300: "#a3ab91",
          400: "#7f8571",
          500: "#5b5f51",
          600: "#474b3d",
          700: "#333527",
          800: "#1f2113",
          900: "#0b0b00",
        },
        secondary: {
          DEFAULT: "#7e8469",
          50: "#f9f9f2",
          100: "#f6f7e6",
          200: "#ebebd1",
          300: "#e0e0bc",
          400: "#d5d5a7",
          500: "#7e8469",
          600: "#c9ca92",
          700: "#b1b37c",
          800: "#999a66",
          900: "#81824f",
        },
        error: {
          DEFAULT: "#F44336",
          50: "#FEF5F5",
          100: "#FEEEEE",
          200: "#FCD6D6",
          300: "#FBBCBC",
          400: "#F9A2A2",
          500: "#F44336",
          600: "#D23C30",
          700: "#A83228",
          800: "#7E281F",
          900: "#651E18",
        },
        success: {
          DEFAULT: "#4CAF50",
          50: "#F5FDF6",
          100: "#ECFAED",
          200: "#D8F5D5",
          300: "#C4F0BC",
          400: "#B0EBA4",
          500: "#4CAF50",
          600: "#42A347",
          700: "#378B3B",
          800: "#2C7230",
          900: "#225926",
        },
        warning: {
          DEFAULT: "#FFC107",
          50: "#FFFDF6",
          100: "#FFFCEC",
          200: "#FFF9D4",
          300: "#FFF6BB",
          400: "#FFF3A2",
          500: "#FFC107",
          600: "#DBA006",
          700: "#B78A05",
          800: "#936404",
          900: "#784F03",
        },
        info: {
          DEFAULT: "#2196F3",
          50: "#F5F9FE",
          100: "#EBF3FD",
          200: "#CDE1FA",
          300: "#AFCFF7",
          400: "#71ABF1",
          500: "#2196F3",
          600: "#1E87DA",
          700: "#196FA9",
          800: "#145678",
          900: "#0F4251",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        hand: ["var(--font-hand)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 200ms ease-in-out",
        rotate: "rotate 1s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
};

export default config;
