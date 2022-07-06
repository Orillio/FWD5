import adapter from '@sveltejs/adapter-auto';

import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter()
	},
	paths: {
		base: dev ? '' : '/',
	},
	appDir: 'internal',
};

export default config;
