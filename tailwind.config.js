/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor: {
        lightgray: "#dddddd",
      },
      borderRadius: {
        md: "5px",
        lg: "10px",
      },
      width: {
        "15px": "15px",
        "40px": "40px",
      },
      height: {
        "15px": "15px",
        "40px": "40px",
      },
      fontSize: {
        sm: "15px",
      },
      colors: {
        white: "#ffffff",
        "very-light-gray": "#f5f5f5",
        "dark-blue": "#194e84",
        "soft-yellow": "#fcf67b",
      },
    },
  },
  plugins: [],
};
