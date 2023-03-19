/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const post = await import(`../../articles/${params.slug}.md`);
	const { title, published } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		published
	};
}
