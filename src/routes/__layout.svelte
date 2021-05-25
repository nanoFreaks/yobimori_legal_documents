<script>
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
</script>

<Header />
<div class="wrapper">
  <slot />
</div>
<Footer />

<style lang="scss">
  .wrapper {
    font-family: "Helvetica Neue", "Helvetica", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif;

    display: flex;
    flex-direction: column;
    align-items: center;

    & > :global(*) {
      width: 900px;
      max-width: 95%;
    }
  }
</style>
