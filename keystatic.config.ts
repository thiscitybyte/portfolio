import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: import.meta.env.DEV === true ? { kind: "local" } : { kind: "cloud" },
  cloud: {
    project: "astro-starter-pro-theme/astro-starter-pro-astro-theme",
  },
  ui: {
    brand: { name: "Oxygenna Themes" },
  },
  collections: {},
});
