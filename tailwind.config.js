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
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};
