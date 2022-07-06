import adapter from "@sveltejs/adapter-static"; 

import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	adapter: adapter({
		pages: "docs",
		assets: "docs"
	}),
	preprocess: preprocess(),
	kit: {
		adapter: adapter()
	},
	paths: {
		base: dev ? '' : '/orillio.github.io',
	},
	target: "#svelte"
};

export default config;
