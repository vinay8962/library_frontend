/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // cream: "rgba(239,237,225,255)", // Define custom color
        cream: "#A1D6E2", // Define custom color
        // Button: "rgba(51,61,46,255)",
        Button: "#1995AD",
        textColor: "rgba(51,61,46,255)",
        primary: "#1995AD",
        secondPrimary: "#A1D6E2",
        thirdPrimary: "#F1F1F2",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
