/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  safelist: [
    // tamanhos usados no marquee via innerHTML
    "text-[20px]",
    "text-[30px]",
    "text-[40px]",
    "text-[50px]",
    "md:text-[20px]",
    "md:text-[30px]",
    "md:text-[40px]",
    "md:text-[50px]",

    // outras classes usadas
    "font-extrabold",
    "text-white",
    "uppercase",
    "px-10",
  ],

  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
    },
  },

  plugins: [],
};
