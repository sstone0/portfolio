module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#2a2c38",
        teal: "#29BDB7",
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      variants: {
        animation: ["motion-safe"],
      },
      spacing: {
        "5%": "5%",
        "10%": "10%",
        "20%": "20%",
      },
    },
  },
  plugins: [],
};
