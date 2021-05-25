import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs';
import { markdownParser } from '$lib/markdown';

const markdownFileRegex = /^([^_.].*)\.md$/i;

export const get: RequestHandler = () => {
  const docs = fs.readdirSync('./src/docs', { withFileTypes: true })
    .filter((ent) => ent.isFile())
    .map(({ name }) => name)
    .filter((name) => name.match(markdownFileRegex))
    .map((name) => {
      const { meta } = markdownParser(`./src/docs/${name}`);
      const filename = name.match(markdownFileRegex)[1];
      return {
        title: meta.title ?? filename,
        href: filename,
      };
    });
  return { body: docs };
};
