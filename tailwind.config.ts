import type { Config } from "tailwindcss";

const config: Config = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  content: [
    "./src/pages/*.{js,ts,jsx,tsx,mdx}",
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
      },
      fontSize : {
        'med-lg': '16px',
      },
      colors : {
        'mint': '#80ed99'
      }
    },
  },
  plugins: [],
};
export default config;
