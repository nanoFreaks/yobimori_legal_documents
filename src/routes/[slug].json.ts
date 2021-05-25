import { markdownParser } from "$lib/markdown";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = ({ params }) => {
  const article = markdownParser(`./src/docs/${params.slug}.md`);
  return {
    body: JSON.stringify(article),
  };
};
