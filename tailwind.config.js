/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      // sm: { min: "640px", max: "767px" },
      // md: { min: "768px", max: "1023px" },
      // lg: { min: "1024px", max: "1279px" },
      // xl: { min: "1380px", max: "1440px" },
      med: { min: "150px", max: "1440px" },
      xl: { min: "1350px" },
      axl: { max: "1350px" },
      "2xl": { min: "1536px" },
    },
    fontFamily: {
      Metropolis: ["Metropolis"],
      Poppins: ["Poppins"],
    },
    extend: {
      maxWidth: {
        screen: "1440px",
        nav: "1280px",
        326: "1304px",
        336: "1344px",
      },
      spacing: {
        "6px": "-6px",
        3.5: "14px",
        4.5: "18px",
        5.5: "22px",
        6.25: "25px",
        7.5: "30px",
        8.5: "34px",
        9.5: "38px",
        10.5: "42px",
        11.5: "46px",
        12.5: "50px",
        13.75: "55px",
        14.5: "58px",
        17: "68px",
        19.5: "78px",
        25.5: "102px",
        31: "124px",
        45.5: "182px",
        49: "196px",
        55: "220px",
        57: "228px",
        58: "232px",
        65: "260px",
        68.5: "274px",
        81: "324px",
        91: "364px",
        96: "384px",
        103.5: "414px",
        104: "416px",
        106.75: "427px",
        112: "448px",
        145.25: "581px",
        148.25: "593px",
        223.5: "894px",
        326: "1304px",
        360: "1440px",
        "44per": "44%",
        "77per": "77%",
        "89per": "89%",
        "90per": "90%",
        "92per": "92%",
        "96per": "96%",
      },
      borderWidth: {
        0.5: "0.5px",
      },
      borderRadius: {
        3.5: "14px",
        9.5: "38px",
      },
      colors: {
        lightPink: "#FFF1F7",
        pink: "#FF1472",
        green: "#27AE60",
        purple: "#6300DF",
        gray: "#FCFCFC",
        darkGray: "#C4C4C4",
        dusk: "#6B7280",
        yellow: "#FFBF00",
        111928: "#111928",
        717171: "#717171",
        border: "#E5E7EB",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(0deg, rgba(255, 188, 0, 0.20) 0%, rgba(255, 188, 0, 0.33) 100%)",
        divGradient:
          "linear-gradient(0deg, rgba(255, 188, 0, 0.30) 0%, rgba(255, 188, 0, 0.30) 100%)",
      },
      boxShadow: {
        "md-custom":
          "0px 2px 4px -2px rgba(0, 0, 0, 0.05), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [require("tailwindcss-gradients")],
};
