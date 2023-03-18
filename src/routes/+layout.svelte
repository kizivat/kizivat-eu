<script>
	import '../app.css';
	import { page } from '$app/stores';
</script>

{#key $page.route}
	<slot />
{/key}
