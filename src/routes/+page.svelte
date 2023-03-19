<script lang="ts">
	import Bio from './Bio.svelte';
</script>

<Bio />

<style lang="postcss">
	:global(html) {
		@apply bg-white text-zinc-800
			dark:text-zinc-100 dark:bg-zinc-900;
	}

	:global(body) {
		@apply flex justify-center;
	}
</style>
