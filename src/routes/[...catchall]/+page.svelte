<script>
	import { isPreviewing, RenderContent } from '@builder.io/sdk-svelte';
	export let data;
	const canShowContent = data.content || isPreviewing();
</script>

<svelte:head>
	<title>{data.content.data?.title}</title>
</svelte:head>
<main>
	{#if canShowContent}
		<RenderContent model="page" content={data.content} apiKey={data.apiKey} />
	{:else}
		Content Not Found
	{/if}
</main>