import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'merriweather': ['merriweather']
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#2C3E50',
        secondary: '#34495E',
        accent: '#E74C3C',
        background: '#ECF0F1',
        text: '#2C3E50',
        highlight: '#3498DB',
        darkLine: '#34495E',
        lightLine: '#B8BDC2'
      },
      fontFamily: {
        'merriweather': ['merriweather']
      }
    },
  },
  plugins: [],
};
export default config;
