<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { env } from '$env/dynamic/public';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id={env.PUBLIC_GTAG}"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-1YY8N0TT7M');
	</script>

	<title>David Kizivat</title>
</svelte:head>

<div class="grid grid-cols-1 grid-rows-1 [&>main]:col-start-1">
	{#key $page.url.pathname}
		<main class="mx-auto py-10" in:fade={{ duration: 150, delay: 200 }}>
			<slot />
		</main>
	{/key}
</div>
