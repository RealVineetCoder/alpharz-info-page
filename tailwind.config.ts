import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/bkgnd_main-pg_why_bl-pattern_01a.jpg')",
        "phone-pattern": "url('/bkgnd_main-pg_genz_01.jpg')",
        "orange-pattern": "url('/bkgnd_main-pg_advertise_03.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
