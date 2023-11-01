/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        250: "2.5",
      },
      boxShadow: {
        submenu: "0px 1px 20px rgba(147, 110, 89, 0.2)",
        banner: "0px 0px 6px inset rgb(210, 192, 181)",
        button:
          "3px 3px 0px rgba(0, 0, 0, 0.08), 0px -4px 0px inset rgba(233, 84, 95, 0.2), 0px 3px 0px inset rgba(255, 255, 255, 0.3)",
        introbox: "2px 4px rgba(147, 110, 89, 0.42) ",
        textbox:
          "0px 4px rgba(0, 0, 0, 0.08), 0px 0px 10px rgba(244, 232, 216, 0.41) ",
        cardContainer: "4px 4px rgb(249, 227, 196)",
        alert: "2px 4px 0px rgb(207, 187, 231)",
        bigImage:
          "4px 4px rgba(0, 0, 0, 0.08) ,0px 0px 10px rgba(240, 220, 192, 0.09) ",
        search: "0px 0px 5px rgba(0, 0, 0, 0.2) ",
      },
      animation: {
        slide: "slideIn 500ms linear",
        slideOut: "slideOut 500ms linear",
      },
      keyframes: {
        slideIn: {
          "0%": { left: "-600px" },
          "50%": { left: "-200px" },
          "100%": { left: "0" },
        },
        slideOut: {
          "0%": { left: "0" },
          "100%": { left: "-600px" },
        },
      },
      colors: {
        yellowButton: "#FADA5E",
        pink: "#FF6060",
        introOuter: "#F0DCC0",
        introInner: "#FFF0DC",
        introTitle: "#936e59",
        introText: "#5b463a",
        grey: "#3a3a3a",
        greypale: "#757575",
        greylight: "#eeeeee",
      },
    },
  },
  plugins: [require("daisyui")],
};
