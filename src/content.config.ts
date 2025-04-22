import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.date(),
			image: z.string(),
			author: z.string(),
			badges: z.array(z.string())
		})
})

const eguides = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/eguides' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			image: z.string(),
			readingTime: z.string(),
			badges: z.array(z.string())
		})
})

export const collections = {
	blog,
	eguides
}
