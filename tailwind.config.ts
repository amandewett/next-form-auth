import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        aTextColor: "#252525",
        aBgColor: "#FFFFFF",
        aPrimaryColor: "#FF6600",
      },
      fontFamily: {
        mRoboto: [`var(--font-roboto)`],
      },
    },
  },
  plugins: [],
};
export default config;
