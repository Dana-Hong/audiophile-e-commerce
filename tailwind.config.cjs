/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#191919",
        orange: "#D87D4A",
        activeOrange: "#fbaf85",
        gray: "#F1F1F1",
        backgroundWhite: "#F2F2F2",
        almostWhite: "#FAFAFA",
        almostBlack: "#101010",
        white: "#FFFFFF",
        black: "#000000",
        green: "#13a313",
      },
      backgroundImage: {
        "pattern-circles": "url('/assets/home/desktop/pattern-circles.svg')",
        "hero-mobile": "url('/assets/home/mobile/image-header.jpg')",
        "hero-tablet": "url('/assets/home/tablet/image-header.jpg')",
        "hero-desktop": "url('/assets/home/desktop/image-hero.jpg')",
        "home-mobile-preview-zx7": "url('/assets/home/mobile/image-speaker-zx7.jpg')",
        "home-tablet-preview-zx7": "url('/assets/home/tablet/image-speaker-zx7.jpg')",
        "home-desktop-preview-zx7": "url('/assets/home/desktop/image-speaker-zx7.jpg')",
      },
    },
  },
  plugins: [],
};
