import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import smartypants from 'remark-smartypants';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.md', '.mdx'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.mdx'],
			remarkPlugins: [smartypants]
		})
	]
};

export default config;
