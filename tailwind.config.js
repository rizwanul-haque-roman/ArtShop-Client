/** @type {import('tailwindcss').Config} */
import daisyui from "./node_modules/daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "plt-one": "#EDE3DC",
        "plt-two": "#CBC9C7",
        "plt-three": "#353334",
        "plt-four": "#886899",
        "plt-five": "#684D7A",
      },
      fontFamily: {
        zilla: ['"Zilla Slab", serif'],
      },
      backgroundImage: {
        login: "url('/src/assets/banner-3.webp')",
        error: "url('/src/assets/errorpage.png')",
        "slide-1": "url('/src/assets/banner-1.webp')",
        "slide-2": "url('/src/assets/banner-2.webp')",
        "slide-3": "url('/src/assets/banner-3.webp')",
        "slide-4": "url('/src/assets/banner-4.webp')",
        "slide-5": "url('/src/assets/banner-5.webp')",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};
