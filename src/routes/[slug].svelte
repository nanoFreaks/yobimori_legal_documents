<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  export const hydrate = false;
  export const router = false;
  export const load: Load = async ({ page, fetch }) => {
    const res = await fetch(`/${page.params.slug}.json`);
    const article = await res.json();
    return {
      props: {
        article,
      },
    };
  };
</script>

<script lang="ts">
  import type { ParsedMarkdown } from '$lib/markdown';

  export let article: ParsedMarkdown;
</script>

<svelte:head>
  <title>{article.meta.title}</title>
  <meta name=description content={article.meta.description} />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/github.min.css">
</svelte:head>

<main>
  {@html article.html}
</main>

<style lang="scss">
  main {
    font-size: 1rem;

    :global(h1, h2, h3, h4, h5, h6) {
      margin-top: 1em;
      margin-bottom: 0.1em;
    }
    :global(p) {
      margin-top: 0.5em;
      margin-bottom: 0.1em;
    }
    :global(p) :global(code) {
      margin: 0.2em 0;
      padding: 0.2em 0.5em;
      background-color: rgba(128, 128, 128, 0.2);
      border-radius: 0.2em;
    }
    :global(code) {
      font-family: Menlo, Consolas, 'Droid Sans', monospace;
    }
    :global(blockquote) {
      margin: 0.5em;
      padding: 0.1em 0 0.1em 0.8em;
      border-left: grey 3px solid;
      background-color: rgba(128, 128, 128, 0.1);
    }
    :global(ul, ol) {
      padding-left: 1.75em;
    }
    :global(table) {
      border-top: 1px solid rgba(128, 128, 128, 0.8);
      border-bottom: 1px solid rgba(128, 128, 128, 0.8);
    }
  }
</style>
