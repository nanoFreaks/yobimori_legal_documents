import { markdownParser } from '$lib/markdown';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) =>
	markdownParser(`./docs/${params.slug}.md`)
		.then((article) => ({ body: article }))
		.catch(() => ({ status: 404 }));
