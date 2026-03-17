import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#242f66", // deep blue for headings
          light: "#3b4a8a",
          muted: "#6b7280"
        },
        parrot: {
          DEFAULT: "#7cd992", // light parrot green for active nav
          soft: "#c7f2d5"
        },
        background: {
          DEFAULT: "#ffffff",
          subtle: "#f3f4f6", // light grey sections
          elevated: "#e5e7eb"
        },
        neutral: {
          light: "#f9fafb",
          softer: "#f3f4f6"
        }
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"],
        display: ["system-ui", "ui-sans-serif", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;

