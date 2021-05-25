<script lang="ts">
	import { base } from '$app/paths';
	import webp from '$lib/assets/yobimori.webp';
	import png from '$lib/assets/yobimori.png';
</script>

<header>
	<h1>
		<a href="{base}/">
			<picture>
				<source srcset={webp} />
				<img src={png} alt="yobimoriのロゴ" />
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
		picture,
		img {
			height: 100%;
		}
	}
</style>
