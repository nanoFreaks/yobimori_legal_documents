<script lang="ts">
  import { base } from '$app/paths';
</script>

<header>
  <h1>
    <a href="{base}/">
      <picture>
        <source srcset="{base}/yobimori.webp" />
        <img src="{base}/yobimori.png" alt="yobimoriのロゴ" />
      </picture>
    </a>
  </h1>
</header>

<style lang="scss">
  header {
    height: 3em;

    h1 {
      height: 100%;
      padding: 0 2vw;
    }
    picture, img {
      height: 100%;
    }
  }
</style>
