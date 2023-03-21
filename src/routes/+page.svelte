<script lang="ts">
	import Bio from './Bio.svelte';

	export let data;

	const { posts } = data;
</script>

<Bio />
{#each posts as post}
	{#if post.published}
		<article class="font-serif">
			<a href="/article/{post.slug}">
				<h2>{post.title}</h2>
			</a>
			<p>{post.perex}</p>
		</article>
	{/if}
{/each}
