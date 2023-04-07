<nav>
	<a
		href="/"
		class="
			flex items-center text-xl tracking-wide outline-none transition-all
			focus-visible:ring-2 focus-visible:ring-offset-2 
			focus-visible:ring-offset-white focus-visible:ring-black
			dark:focus-visible:ring-offset-zinc-900 dark:focus-visible:ring-primary
		"
	>
		<svg
			class="w-12 h-12 dark:text-primary text-blue-600 transition-all"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
		</svg>
		<span class="transition-all dark:text-zinc-700 text-gray-300 font-bold">Home</span>
	</a>
</nav>
<slot />

<style lang="postcss">
	a {
		&:focus-visible > svg {
			transform: translateX(calc(-1 * theme(spacing.10)));
		}
		&:focus-visible > span {
			transform: translateX(calc(-1 * theme(spacing.8)));
		}
		&:hover > svg {
			transform: translateX(calc(-1 * theme(spacing.10)));
		}
		&:hover > span {
			transform: translateX(calc(-1 * theme(spacing.8)));
		}
	}
</style>
