import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: import.meta.env.DEV === true ? { kind: "local" } : { kind: "cloud" },
  cloud: {
    project: "milo-astro-theme/milo-astro-theme",
  },
  ui: {
    brand: { name: "Milo Astro Theme" },
  },
  collections: {
    caseStudies: collection({
      label: "Case Studies",
      slugField: "title",
      path: "src/content/caseStudiesDesign/**",
      format: { contentField: "body" },
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            description: "The title of the case study",
            validation: { isRequired: true },
          },
          slug: {
            label: "SEO-friendly slug",
            description: "This will define the file/folder slug for this case study",
          },
        }),
        description: fields.text({
          label: "Description",
          validation: { isRequired: true },
        }),
        cardImage: fields.image({
          label: "Image URL",
          directory: "public/caseStudies",
          publicPath: "/caseStudies/",
        }),
        heroImage: fields.image({
          label: "Hero Image URL",
          directory: "public/caseStudies",
          publicPath: "/caseStudies/",
        }),
        roles: fields.array(
          fields.text({ label: "Role" }),

          {
            label: "Roles",
            itemLabel: (props) => props.value,
          }
        ),
        body: fields.markdoc({
          label: "Body",
          extension: "md",
          options: {
            image: {
              directory: "public/caseStudies/",
              publicPath: "/caseStudies/",
            },
          },
        }),
      },
    }),
  },
});
