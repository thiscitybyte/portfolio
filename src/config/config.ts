// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Milo. Tailwind CSS Milo Kit by Oxygenna',
	siteDescription:
		'Milo is a design and development agency that specializes in creating beautiful and functional websites.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Milo. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'dark',
	scrollAnimations: true
}
