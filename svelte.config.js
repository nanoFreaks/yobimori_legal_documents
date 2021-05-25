import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		paths: {
			base: '/yobimori_legal_documents',
			assets: '/yobimori_legal_documents'
		},
		hydrate: false,
		router: false
	}
};

export default config;
