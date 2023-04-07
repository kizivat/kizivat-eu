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

<article
	class="
		py-10 font-serif max-w-prose text-justify tracking-wide leading-8 text-lg
		md:leading-10 md:text-xl
	"
>
	<header class="flex flex-col gap-4 mb-20">
		<h1 class="text-5xl tracking-widest font-sans text-left font-bold mb-5">{metadata?.title}</h1>

		{#if metadata?.published}
			<p class="font-mono text-sm">
				Published: <time datetime={metadata.published}
					>{Intl.DateTimeFormat().format(new Date(metadata.published))}</time
				>
			</p>
		{/if}
		{#if metadata?.updated}
			<p class="font-mono text-sm">
				Updated: <time datetime={metadata.updated}
					>{Intl.DateTimeFormat().format(new Date(metadata.updated))}</time
				>
			</p>
		{/if}
	</header>

	<section class="perex">
		<p class="italic mb-14">{metadata?.perex}</p>
	</section>

	<section class="content">
		<svelte:component this={content} />
	</section>
</article>

<style lang="postcss">
	:global(.content p) {
		margin-bottom: 2rem;
	}
</style>
