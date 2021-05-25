import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs';
import { markdownParser } from '$lib/markdown';

const markdownFileRegex = /^([^_.].*)\.md$/i;

export const get: RequestHandler = async () => {
	const docs = await Promise.all(
		fs
			.readdirSync('./docs', { withFileTypes: true })
			.filter((ent) => ent.isFile())
			.map(({ name }) => name)
			.filter((name) => name.match(markdownFileRegex))
			.map(async (name) => {
				const { meta } = await markdownParser(`./docs/${name}`);
				const filename = name.match(markdownFileRegex)[1];
				return {
					title: meta.title ?? filename,
					href: filename
				};
			})
	);
	return { body: docs };
};
