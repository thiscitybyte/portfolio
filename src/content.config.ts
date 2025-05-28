import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

const caseStudiesDesign = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/caseStudiesDesign' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			cardImage: z.string(),
			greyImage: z.string(),
			heroImage: z.string(),
			roles: z.array(z.string()),
			introduction: z.string(),
			aboutProject: z.object({
				leftCol: z.string(),
				rightCol: z.string()
			}),
			whatWeDid: z.object({
				leftCol: z.string(),
				rightCol: z.string()
			}),
			images: z.array(z.string()),
			clientFeedback: z.array(
				z.object({
					blockquote: z.string(),
					figcaption: z.string(),
					cite: z.string()
				})
			)
		})
})

const caseStudiesCode = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/caseStudiesCode' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			cardImage: z.string(),
			greyImage: z.string(),
			heroImage: z.string(),
			roles: z.array(z.string()),
			introduction: z.string(),
			aboutProject: z.object({
				leftCol: z.string(),
				rightCol: z.string()
			}),
			whatWeDid: z.object({
				leftCol: z.string(),
				rightCol: z.string()
			}),
			images: z.array(z.string()),
			clientFeedback: z.array(
				z.object({
					blockquote: z.string(),
					figcaption: z.string(),
					cite: z.string()
				})
			)
		})
})

export const collections = {
	caseStudiesDesign,
	caseStudiesCode
}
