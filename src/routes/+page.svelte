<script lang="ts">
	import { fade } from 'svelte/transition';
	import NettleLink from './NettleLink.svelte';
</script>

<main class="h-screen max-w-screen-lg flex flex-col justify-center p-8">
	<h1 class="text-5xl font-bold mb-8" in:fade>David Kizivat</h1>
	<p class="font-serif max-w-prose text-lg">
		Software engineer at
		<NettleLink /> and coding educator. I enjoy studying
		<span class="text-zinc-400">(natural)</span> languages, CS and building stuff.
	</p>
</main>

<style lang="postcss">
	:global(html) {
		@apply bg-white text-zinc-800
			dark:text-zinc-100 dark:bg-zinc-900;
	}

	:global(body) {
		@apply flex justify-center;
	}
</style>
