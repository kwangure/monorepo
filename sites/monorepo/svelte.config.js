import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$collections: './.collections/collections/',
			$routes: './src/routes/',
		},
		typescript: {
			config(config) {
				config.extends = '../../../config/tsconfig.base.json';
			},
		},
	},
	compilerOptions: {
		runes: true,
	},
};

export default config;
