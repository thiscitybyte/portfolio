import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import lottie from "astro-integration-lottie";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://milo-theme.netlify.app/",
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    lottie(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    react(),
    markdoc(),
    keystatic(),
  ],
  adapter: netlify(),
});
