<script lang="ts">
	import { RenderContent } from '@builder.io/sdk-svelte';
	export let data;
	$: console.log('client', data);
</script>

<svelte:head>
	<title>{data.content?.data?.title}</title>
</svelte:head>
<main>
	{#if data.content}
		<RenderContent model="page" content={data.content} apiKey={`${data.apiKey}`} />
	{/if}
	Test
</main>
