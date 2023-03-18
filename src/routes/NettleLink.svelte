<script lang="ts">
	import { crossfade, fly, scale } from 'svelte/transition';

	let hovered = false;

	let textSpan: HTMLSpanElement;
	$: width = textSpan?.getBoundingClientRect().width;
	$: height = textSpan?.getBoundingClientRect().height;
</script>

<a
	href="https://nettle.ai/"
	target="_blank"
	referrerpolicy="no-referrer"
	class="
		relative inline-block w-[var(--width)] h-[var(--height)] align-bottom outline-none
		focus:outline-none focus:ring-2 focus:ring-zinc-800 dark:focus:ring-[#fff600]
	"
	style="--width: {width}px; --height: {height}px;"
	on:focus={() => (hovered = true)}
	on:blur={() => (hovered = false)}
	on:mouseenter={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
>
	{#if hovered}
		<img
			src="nettle.svg"
			alt="nettle.ai"
			class="absolute bottom-1 h-5 inline-block align-baseline transform translate-y-1 -rotate-[2deg]"
			transition:fly={{ y: -10 }}
		/>
	{:else}
		<span
			class="
				bottom-0 text-black font-sans
				after:block after:absolute after:w-full after:h-1/2 after:bg-[#fff600] after:bottom-1 after:-z-10 after:transform after:-rotate-3
			"
			class:absolute={textSpan}
			transition:fly={{ y: 10 }}
			bind:this={textSpan}
		>
			nettle.ai
		</span>
	{/if}
</a>
