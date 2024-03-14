import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      colors: {
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
  plugins: [],
};
export default config;
