import { error } from '@sveltejs/kit';
import { getContent, getBuilderSearchParams } from '@builder.io/sdk-svelte';
import { BUILDER_PUBLIC_API_KEY } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	const content = await getContent({
		model: 'page',
		apiKey: BUILDER_PUBLIC_API_KEY,
		options: getBuilderSearchParams(event.url.searchParams),
		userAttributes: {
			urlPath: event.url.pathname || '/'
		}
	});

	if (content) return { content, apiKey: BUILDER_PUBLIC_API_KEY };

	throw error(404, 'Not Found');
}
