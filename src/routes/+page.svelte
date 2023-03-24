<script lang="ts">
	import FlyIn from '$lib/components/FlyIn.svelte';
	import { onMount } from 'svelte';
	import Bio from './Bio.svelte';

	export let data;

	const { posts } = data;

	let mounted = false;
	onMount(() => (mounted = true));
</script>

<div class="h-screen max-w-screen-lg flex flex-col gap-20 justify-center p-8">
	<Bio />
	{#if posts.length > 0}
		<section>
			<header>
				<h2>
					<span class="sr-only">Articles</span>
					<div
						aria-hidden
						class="text-6xl flex justify-between -mb-4 font-black text-zinc-200/60 dark:text-zinc-800 opacity-0 w-1 transition-all duration-[1200ms] delay-100"
						class:mounted
					>
						{#each 'articles' as char}
							<span class="inline-block">{char}</span>
						{/each}
					</div>
				</h2>
			</header>
			<ol class="flex flex-col gap-10">
				{#each posts as post, i}
					<li>
						<FlyIn y={60} duration={500} delay={(i + 2) * 300}>
							<article class="font-serif [&>a>div]:hover:h-3">
								<a
									class="
										relative inline-block text-3xl text-blue-600 dark:text-white font-sans font-bold tracking-widest outline-none
										focus-visible:ring-2 focus-visible:ring-offset-2 
										focus-visible:ring-offset-white focus-visible:ring-black
										dark:focus-visible:ring-offset-zinc-900 dark:focus-visible:ring-primary
										[&:focus-visible>div]:h-3 transition-all
									"
									href="/article/{post.slug}"
								>
									<h3 class="max-w-[30ch] overflow-hidden whitespace-nowrap text-ellipsis">
										{post.title}
									</h3>
									<div
										aria-hidden
										class="absolute bottom-1 z-10 w-full h-1 bg-primary ml-0 transition-all overflow-hidden"
									>
										<div
											class="max-w-[30ch] overflow-hidden whitespace-nowrap text-ellipsis absolute bottom-[-0.3rem] text-black translate-y-[-1px]"
										>
											{post.title}
										</div>
									</div>
								</a>
								<p class="p-1 text-zinc-800 dark:text-zinc-300">{post.perex}</p>
							</article>
						</FlyIn>
					</li>
				{/each}
			</ol>
		</section>
	{/if}
</div>

<style lang="postcss">
	.mounted {
		opacity: 1;
		width: 100%;
	}
</style>
