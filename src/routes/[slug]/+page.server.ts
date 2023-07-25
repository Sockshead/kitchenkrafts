import { error } from '@sveltejs/kit';
import { getContent, getBuilderSearchParams } from '@builder.io/sdk-svelte';
import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	const BUILDER_PUBLIC_API_KEY = env.BUILDER_PUBLIC_API_KEY;
	const content = await getContent({
		model: 'page',
		apiKey: BUILDER_PUBLIC_API_KEY as string,
		options: getBuilderSearchParams(event.url.searchParams),
		userAttributes: {
			urlPath: event.url.pathname || '/'
		}
	});

	if (content) return { content, apiKey: BUILDER_PUBLIC_API_KEY };

	throw error(404, 'Not Found');
}
