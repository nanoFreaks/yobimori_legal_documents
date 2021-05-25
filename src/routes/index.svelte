<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ fetch }) => {
    const res = await fetch('/getDocuments');
    const json = await res.json();
    return {
      props: {
        articles: json,
      }
    };
  };
</script>

<script lang="ts">
  import { base } from '$app/paths';
  export let articles: { title: string; href: string; }[];
</script>

<main>
  {#each articles as article}
    <h3><a href="{base}/{article.href}">{article.title}</a></h3>
  {/each}
</main>
