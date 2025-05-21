/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["selector"],
  safelist: [
    {
      pattern: /col-span-(\d+)/,
      variants: ["lg"],
    },
    // Height
    {
      pattern: /h-(0|2|3|4|6|8|12|16|24|32)/,
      variants: ["lg"],
    },
    // Text sizes for all screen sizes
    {
      pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
      variants: ["lg"],
    },
    // Font weights
    {
      pattern:
        /font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/,
    },
    // Alignments
    {
      pattern: /text-(left|center|right)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: {
          50: "#fefde8",
          100: "#fffdc2",
          200: "#fff987",
          300: "#ffee43",
          400: "#ffdf20",
          500: "#efc403",
          600: "#ce9800",
          700: "#a46c04",
          800: "#88540b",
          900: "#734510",
          950: "#432405",
        },
        secondary: {
          50: "#f5f2ff",
          100: "#ede8ff",
          200: "#ddd4ff",
          300: "#c4b2ff",
          400: "#a684ff",
          500: "#8c55fd",
          600: "#7f32f5",
          700: "#7020e1",
          800: "#5e1abd",
          900: "#4e189a",
          950: "#2f0c69",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#a3a3a3",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
      },
      cursor: {
        fancy: "url(https://www.svgrepo.com/show/269/color-picker.svg)",
      },
      fontFamily: {
        headingsPrimary: ["Playfair Display", ...defaultTheme.fontFamily.sans],
        bodyPrimary: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
        headingsSecondary: ["Ubuntu", ...defaultTheme.fontFamily.sans],
        bodySecondary: ["Roboto Mono", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        dropdown: {
          "0%": { marginTop: "-1rem", opacity: 0 },
          "100%": { marginTop: "0", opacity: 1 },
        },
        growLine: {
          "0%": {
            transform: "scaleX(0)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        dropdown: "dropdown 300ms ease-in-out forwards",
        growLine: "growLine 300ms ease forwards",
        fadeIn: "fadeIn 300ms ease forwards",
      },
    },
  },
  variants: {
    animation: ["responsive"],
  },
  plugins: [require("@tailwindcss/typography")],
};
