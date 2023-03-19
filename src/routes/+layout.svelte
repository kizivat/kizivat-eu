<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { env } from '$env/dynamic/public';
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

		gtag('config', env.PUBLIC_GTAG);
	</script>

	<title>David Kizivat</title>
</svelte:head>

{#key $page.route}
	<slot />
{/key}
