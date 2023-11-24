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
        "sidebar-image": "url('/illustration-sign-up-desktop.svg')",
        "mobile-image": "url('/illustration-sign-up-mobile.svg')",
      },
      gridTemplateColumns: {
        "side-by-side": "450px 400px",
      },
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        "dark-slate-grey": "hsl(234, 29%, 20%)",
        "charcoal-grey": "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
