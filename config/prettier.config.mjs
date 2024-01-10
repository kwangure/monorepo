/** @type {import("prettier").Config} */
const config = {
	proseWrap: 'always',
	useTabs: true,
	singleQuote: true,
	trailingComma: 'all',
	tabWidth: 4, // For YAML which strictly uses spaces instead of tabs
	plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.svelte',
			options: {
				parser: 'svelte',
			},
		},
	],
};

export default config;
