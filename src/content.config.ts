import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

const caseStudies = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/caseStudies' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			cardImage: z.string(),
			heroImage: z.string(),
			roles: z.array(z.string())
		})
})

export const collections = {
	caseStudies
}
