module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#fef9f4", 100: "#f6f6f6", 500: "#8f8f8f", "50_01": "#f8f8f8", "50_a3": "#f8f8f8a3" },
        white: { A700: "#ffffff" },
        yellow: { 100: "#fee3ca" },
        blue_gray: { 100: "#d9d9d9", "900_01": "#23292e" },
        black: { 900: "#000201", "900_3f": "#0000003f" },
        red: { A200: "#ff4f4f" },
        orange: { 50: "#feefe0" },
        gray_200: "#ededed",
      },
      boxShadow: { xs: "10px 20px  60px 0px #0000003f" },
      fontFamily: { raleway: "Raleway", rubik: "Rubik", pollerone: "Poller One" },
      // backgroundImage: { gradient: "linear-gradient(135deg, #273032,#274b53)" },
      backgroundImage: { 
        gradient: "linear-gradient(135deg, #273032,#274b53)",
        'hero': "url(https://images.unsplash.com/photo-1639921884918-8d28ab2e39a4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800)"
      },
      opacity: { 0.81: 0.81 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
