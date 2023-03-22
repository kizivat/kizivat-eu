import type { ArticleMetadata } from '../../../../../../../Users/dkizivat/Developer/projects/kizivat-eu/src/routes/api/articles/types';

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/articles`);
	const posts: ArticleMetadata[] = await response.json();

	return {
		posts
	};
};
