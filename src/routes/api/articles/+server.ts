import { json } from '@sveltejs/kit';
import type { ArticleMetadata } from './types';

type Resolver = () => Promise<{ metadata: ArticleMetadata }>;

const fetchMarkdownArticles = async () => {
	const allArticleFiles = import.meta.glob<true, string, Resolver>(
		'/src/lib/content/articles/*.md'
	);
	const iterableArticleFiles = Object.entries(allArticleFiles);

	const allArticles = await Promise.all(
		iterableArticleFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slugMatches = path.match(/\/articles\/(.*)\.md$/);

			if (!slugMatches) throw new Error('Slug could not be parsed.');

			return {
				...metadata,
				slug: encodeURI(slugMatches[1])
			};
		})
	);

	return allArticles;
};

export const GET = async () => {
	const allArticles = await fetchMarkdownArticles();
	const sortedArticles = allArticles.sort((a, b) => (a.published > b.published ? -1 : 1));
	const publishedArticles = sortedArticles.filter(
		(article) => import.meta.env.DEV || article.published
	);
	return json(publishedArticles);
};
