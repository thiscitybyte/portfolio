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
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      cursor: {
        fancy: "url(https://www.svgrepo.com/show/269/color-picker.svg)",
      },
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        headings: ["IBM Plex Mono", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        dropdown: {
          "0%": { marginTop: "-1rem", opacity: 0 },
          "100%": { marginTop: "0", opacity: 1 },
        },
        fadeInShadowLight: {
          "100%": {
            boxShadow:
              "0 20px 25px -5px rgba(15, 23, 42, .025), 0 8px 10px -6px rgba(15, 23, 42, .025);",
          },
        },
        fadeInShadowDark: {
          "100%": {
            boxShadow:
              "0 20px 25px -5px rgba(2, 6, 23, .25), 0 8px 10px -6px rgba(2, 6, 23, .25);",
          },
        },
        fadeInColorTransparentLight: {
          "100%": {
            backdropFilter: "blur(4px)",
            background: "rgba(255, 255, 255, .9)",
          },
        },
        fadeInColorTransparentDark: {
          "100%": {
            backdropFilter: "blur(4px)",
            background: "rgba(15, 23, 42, 0.9)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueefollowup: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        dropdown: "dropdown 300ms ease-in-out forwards",
        fadeInShadowLight: "fadeInShadowLight 500ms ease-in-out forwards",
        fadeInShadowDark: "fadeInShadowDark 500ms ease-in-out forwards",
        fadeInColorTransparentLight:
          "fadeInColorTransparentLight 500ms ease-in-out forwards",
        fadeInColorTransparentDark:
          "fadeInColorTransparentDark 500ms ease-in-out forwards",
        marquee: "marquee 48s linear infinite",
        marqueefollowup: "marqueefollowup 48s linear infinite",
      },
    },
  },
  variants: {
    animation: ["responsive"],
  },
  plugins: [require("@tailwindcss/typography")],
};
