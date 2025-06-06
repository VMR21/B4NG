module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Orbitron", "sans-serif"]
      },
      colors: {
        primary: "#3fffc0",
        dark: "#0e0e0e",
        accent: "#ff5ad4",
      },
      animation: {
        float: "float 4s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      }
    },
  },
  plugins: [],
};
