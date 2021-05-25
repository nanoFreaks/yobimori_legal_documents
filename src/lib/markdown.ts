import fs from 'fs';
import unified from 'unified';
import parse from 'remark-parse';
import gfm from 'remark-gfm';
import remark2rehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import frontmatter from 'remark-frontmatter';
import highlight from 'rehype-highlight';
import { load } from 'js-yaml';

const parser = unified().use(parse).use(frontmatter, ['yaml']).freeze();

const processor = unified()
	.use(parse)
	.use(gfm)
	.use(frontmatter, ['yaml'])
	.use(remark2rehype)
	.use(highlight)
	.use(rehypeStringify)
	.freeze();

export type ParsedMarkdown = {
	meta: {
		title?: string;
		description?: string;
	};
	html: string;
};

export const markdownParser = async (filename: string): Promise<ParsedMarkdown> => {
	const content = fs.readFileSync(filename);
	const parsed = parser.parse(content);

	const meta = Array.isArray(parsed.children)
		? parsed.children
				.filter(
					(node) =>
						typeof node !== 'undefined' && node.type === 'yaml' && typeof node.value === 'string'
				)
				.map(({ value }) => load(value))
				.reduce(Object.assign, {})
		: {};

	const processed = await processor.process(content);

	return { meta, html: processed.contents.toString() };
};
