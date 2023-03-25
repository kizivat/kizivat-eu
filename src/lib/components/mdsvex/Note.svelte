<script lang="ts">
	import { fly } from 'svelte/transition';

	let show = false;
</script>

<button
	type="button"
	class="
    bg-primary/30 outline-none
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
    absolute inline-block p-6 text-base rounded bg-zinc-200 shadow-sm
    dark:shadow-[0 1px 2px 0px #fff] dark:bg-zinc-700
  "
		transition:fly={{ x: 10 }}
	>
		<slot name="note" />
	</div>
{/if}

<style lang="postcss">
</style>
