/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-primary": "#333333",
        "text-secondary": "#737373",
        "main-bg": "#FAFAFA",
        "surface-bg": "#FFF",
        accent: "#633CFF",
        "light-accent": "#EFEBFF",
        outline: "#D9D9D9",
        hover: "#BEADFF",
        hover2: "#EFEBFF",
        alert: "#FF3939",
        preview: "#EEE",
      },
      boxShadow: {
        focus: "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
