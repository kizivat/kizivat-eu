<script lang="ts">
	import { fly } from 'svelte/transition';

	let show = false;
</script>

<button
	type="button"
	class="
    h-min leading-none p-1 relative bg-primary/10 outline-none
		after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-full
    focus:ring-2 focus:ring-zinc-800 dark:focus:ring-primary
  "
	on:mouseenter={() => (show = true)}
	on:mouseleave={() => (show = false)}
	on:focus={() => (show = true)}
	on:blur={() => (show = false)}
>
	<slot />
</button>

{#if show}
	<div
		class="
    z-10 max-w-[30ch] mr-5 text-left absolute inline-block p-6 text-base rounded bg-zinc-200 shadow-sm
    dark:shadow-[0 1px 2px 0px #fff] dark:bg-zinc-700
  "
		transition:fly={{ x: 10 }}
	>
		<slot name="note" />
	</div>
{/if}

<style lang="postcss">
</style>
