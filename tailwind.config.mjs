/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'poppins': ['"Poppins"', 'sans-serif']
			}
		},
		colors:{
			'pred': 'hsl(0, 78%, 62%)',
			'pcyan': 'hsl(180, 62%, 55%)',
			'porange': 'hsl(34, 97%, 64%)',
			'pblue': 'hsl(212, 86%, 64%)',
			'pvdblue': 'hsl(234, 12%, 34%)',
			'pgblue': 'hsl(229, 6%, 66%)',
			'plgray': 'hsl(0, 0%, 98%)',
		}
	},
	plugins: [],
}
