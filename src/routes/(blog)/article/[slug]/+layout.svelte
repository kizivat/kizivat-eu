<nav>
	<a
		href="/"
		class="
			flex items-center text-xl tracking-wide transition-all
			[&:hover>svg]:-translate-x-8 [&:hover>span]:-translate-x-4
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
