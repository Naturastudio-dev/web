import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5b5f51",
        secondary: "#7e8469",
        dark: "#030506",
        neutral: "#ebeadf",
        light: "#fefdf4",
      },
    },
  },
  plugins: [],
};
export default config;
