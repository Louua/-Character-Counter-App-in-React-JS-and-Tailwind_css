/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkBlack: "#12131A",
      lightBlack: "#21222C",
      DarkGray: "#2A2B37",
      lightGray: "#404254",

      Sliver: "#E4E4EF",
      lightSliver: "#F2F2F7",
      WhiteColor: "#FFFFFF",

      purpleColor: "#D3A0FA",
      darkPurple: "#C27CF8",

      yellowColor: "#FFF900",
      OrangeColor: "#FE8159",
      darkOrange: "#DA3701",
    },
    extend: {},
  },
  plugins: [],
};
