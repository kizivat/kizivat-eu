<script lang="ts">
	import { onMount } from 'svelte';
	import NettleLink from './NettleLink.svelte';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<section>
	<h1 class="text-5xl font-bold mb-8 tracking-[0.3rem]" class:mounted>David Kizivat</h1>
	<p class="font-serif max-w-prose text-lg" class:mounted>
		Software developer at
		<NettleLink /> and coding educator. I enjoy studying
		<span class="text-zinc-400">(natural)</span> languages, CS and building stuff.
	</p>
</section>

<style lang="postcss">
	h1:not(.mounted),
	p:not(.mounted) {
		@apply opacity-0;
	}

	h1:not(.mounted) {
		@apply -translate-y-1/2;
	}

	p:not(.mounted) {
		@apply translate-y-1/2;
	}

	.mounted {
		@apply opacity-100 translate-y-0 transition-all duration-500;
	}
</style>
