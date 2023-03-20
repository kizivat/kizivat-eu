<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { content, metadata } = data;
</script>

<article>
	<h1>{metadata?.title}</h1>
	<p>Published: {metadata?.published}</p>
	<svelte:component this={content} />
</article>
