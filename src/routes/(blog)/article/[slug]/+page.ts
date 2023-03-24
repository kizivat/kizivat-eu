import { error } from '@sveltejs/kit';
import type { ComponentType } from 'svelte';
import type { ArticleMetadata } from '../../../api/articles/types';

export const load = async ({ params }) => {
	try {
		const post = await import(`../../../../lib/content/articles/${params.slug}.md`);

		const content: ComponentType = post.default;
		const metadata: ArticleMetadata = post.metadata;

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
