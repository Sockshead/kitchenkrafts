<script lang="ts">
	import { isPreviewing, RenderContent } from '@builder.io/sdk-svelte';
	import type { PageServerData } from './+page.server';
	
	export let data: PageServerData;
	const canShowContent = data.content || isPreviewing();
</script>

<svelte:head>
	<title>{data.content?.data?.title}</title>
</svelte:head>
<main>
	{#if canShowContent}
		<RenderContent model="page" content={data.content} apiKey={`${data.apiKey}`} />
		Test
	{:else}
		Content Not Found
	{/if}
	Test slug
</main>
