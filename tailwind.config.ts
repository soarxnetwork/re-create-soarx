import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'custom-sm': '350px',
        'custom-md': '500px',
        'custom-lg': '1200px',
      },
      colors: {
        custom: "rgb(144, 0, 255)",
        primary: "#0061FF",
        textColor: "#545759",
        dsaPrimary: "#6674CC",
        dsaSecondary: "#f8f8fd",
        primaryPurple: "#9241D4",
        // ! Second DSA
        secondDsaPrimary: "#2F89FC",
        secondDsaBlack: "#2C3454",
        secondDsaWhite: "#FDFDFE",
        secondDsaSecondary: "#293F88",
        secondDsaBg: "#F7F8FA",
        advantageDsa: "#FAF0F1",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
