module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#944E6C",
        "gray-primary": "#BDBDBD",
        "gray-input": "#F6F6F6",
        orange: "#FF2929",
        "item-list": "#FAFAFA",
        price: "#83A95C",
        "out-of-stock": "#FF2929",
        "inactive-text": "#979797",
      },
      fontSize: {
        tinyXs: "7px",
        tiny: "10px",
      },
      padding: {
        "2px": "2px",
      },
      margin: {
        "50%": "50%",
      },
      borderRadius: {
        primary: "20px",
        secondary: "10px",
      },
      boxShadow: {
        primary: "0px 4px 20px rgba(151, 150, 150, 0.1)",
        secondary: "0px 4px 30px rgba(172, 180, 188, 0.15)",
      },
    },
  },
  plugins: [],
};
