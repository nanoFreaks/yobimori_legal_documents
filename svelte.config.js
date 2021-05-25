import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

console.log(process.env.NODE_ENV);
const path = process.env.NODE_ENV === 'development' ? '' : '/yobimori_legal_documents';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		paths: {
			base: path,
			assets: path
		}
	}
};

export default config;
