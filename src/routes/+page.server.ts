import { getContent } from '@builder.io/sdk-svelte';
import { env } from '$env/dynamic/private';

export async function load(event) {
	const content = await getContent({
		model: 'page',
		apiKey: env.BUILDER_PUBLIC_API_KEY,
		userAttributes: {
			urlPath: event.url.pathname || `/`
		}
	});
	console.log('server', event, content);

	return { content, apiKey: env.BUILDER_PUBLIC_API_KEY };
}
