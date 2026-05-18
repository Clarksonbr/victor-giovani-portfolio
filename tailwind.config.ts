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
        surface: "#0f172a",
        panel: "#111827",
        line: "rgba(148, 163, 184, 0.22)"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(2, 6, 23, 0.38)"
      }
    }
  },
  plugins: []
};

export default config;
