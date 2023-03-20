import { error } from '@sveltejs/kit';
import type { ComponentType } from 'svelte';

interface PostMetadata {
	title: string;
	published: Date;
}

export const load = async ({ params }) => {
	try {
		const post = await import(`../../../../lib/content/articles/${params.slug}.md`);

		const content: ComponentType = post.default;
		const metadata: PostMetadata = post.metadata;

		if (post) {
			return {
				content,
				metadata
			};
		}
	} catch (e) {
		throw error(404, 'Article not found.');
	}
};
