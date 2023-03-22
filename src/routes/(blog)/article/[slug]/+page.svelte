<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { content, metadata } = data;
</script>

<article class="font-serif">
	<h1 class="text-3xl font-bold">{metadata?.title}</h1>

	{#if metadata?.published}
		<p>Published: {Intl.DateTimeFormat().format(new Date(metadata.published))}</p>
	{/if}

	<p class="italic">{metadata?.perex}</p>
	<svelte:component this={content} />
</article>
