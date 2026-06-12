import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff1f0",
          100: "#ffe0dc",
          200: "#ffc2ba",
          300: "#ff998c",
          400: "#ff6147",
          500: "#f5391b",
          600: "#e11d0f",
          700: "#bd140d",
          800: "#9c1612",
          900: "#811816",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
