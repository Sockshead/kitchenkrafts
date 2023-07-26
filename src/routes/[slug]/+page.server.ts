import { error } from '@sveltejs/kit';
import { getContent, getBuilderSearchParams } from '@builder.io/sdk-svelte';
import { env } from '$env/dynamic/private';
import type { BuilderContent } from '@builder.io/sdk-svelte/package/types/builder-content.js';
import { base } from '$app/paths';

export type PageServerData = {
	content: BuilderContent | null;
	apiKey: string;
};

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	const content = await getContent({
		model: 'page',
		apiKey: env.BUILDER_PUBLIC_API_KEY,
		options: getBuilderSearchParams(event.params),
		userAttributes: {
			urlPath: event.url.pathname || base
		}
	});
	const pageData: PageServerData = { content, apiKey: env.BUILDER_PUBLIC_API_KEY };

	if (content) return pageData;

	throw error(404, 'Not Found');
}
