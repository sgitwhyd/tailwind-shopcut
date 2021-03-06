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
      },
      boxShadow: {
        primary: "0px 4px 20px rgba(151, 150, 150, 0.1)",
      },
    },
  },
  plugins: [],
};
