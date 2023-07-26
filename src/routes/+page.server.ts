import { getContent } from '@builder.io/sdk-svelte';
import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	const content = await getContent({
		model: 'page',
		apiKey: env.BUILDER_PUBLIC_API_KEY,
		//options: getBuilderSearchParams(event.params),
		userAttributes: {
			urlPath: event.url.pathname || `/`
		}
	});

	return { content, apiKey: env.BUILDER_PUBLIC_API_KEY };
}
