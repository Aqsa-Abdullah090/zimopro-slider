import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enables theme toggling with 'dark' class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        golden: "#BE9F56",
        danger: "#b00000",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1900px", // 1920
        "4xl": "2500px", // 2560
      }
    },
  },
  plugins: [],
};

export default config;

