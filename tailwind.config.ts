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
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    colors:{  // This is incorrectly nested or has a typo
      lamaSky: "#C3EBFA",
      LamaSkyLight: "#EDF9FD",
      lamaPurple: "#CFCEFF",
      lamaPurpleLight: "#F1F0FF",
      lamaYellow: "#FAE27C",
      lamaYellowLight: "#FEFCE8",
      lamaRed: "#ffb2b2",
      lamaBlue: "#9ad5ff",
    },
  },
},
  plugins: [],
};
export default config;
