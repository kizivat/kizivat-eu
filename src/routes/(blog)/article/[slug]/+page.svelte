<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { content, metadata } = data;
</script>

<svelte:head>
	<title>{metadata?.title}</title>
	<meta name="description" content={metadata?.perex} />
	<meta name="keywords" content={metadata?.keywords.join(', ')} />
</svelte:head>

<article class="py-10 font-serif max-w-prose text-justify leading-10 tracking-wide text-xl">
	<header class="mb-20">
		<h1 class="text-5xl tracking-widest font-sans text-left font-bold mb-5">{metadata?.title}</h1>

		{#if metadata?.published}
			<p class="font-mono text-sm">
				Published: <time datetime={metadata.published}
					>{Intl.DateTimeFormat().format(new Date(metadata.published))}</time
				>
			</p>
		{/if}
	</header>

	<section>
		<p class="italic mb-14">{metadata?.perex}</p>
	</section>

	<section>
		<svelte:component this={content} />
	</section>
</article>

<style lang="postcss">
	:global(article p) {
		margin-bottom: 2rem;
	}
</style>
