<script lang="ts">
	import { onMount } from 'svelte';

	export let y = 0;
	export let x = 0;
	export let duration = 500;
	export let delay = 0;

	let mounted = false;
	onMount(() => (mounted = true));
</script>

<div class:mounted style="--x:{x}px;--y:{y}px;--duration:{duration}ms;--delay:{delay}ms">
	<slot />
</div>

<style lang="postcss">
	* {
		transition: all var(--duration) var(--delay) cubic-bezier(0.65, 0, 0.35, 1);
	}

	:not(.mounted) {
		opacity: 0;
		transform: translate(var(--x), var(--y));
	}

	.mounted {
		opacity: 100%;
		transform: translate(0, 0);
	}
</style>
