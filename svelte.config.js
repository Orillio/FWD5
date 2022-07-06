import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			default: false
		},
		paths: {
			base: dev ? '' : '/your-repo-name',
		},
		appDir: 'internal',
	}
};
export default config;
