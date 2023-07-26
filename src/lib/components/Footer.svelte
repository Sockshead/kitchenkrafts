<script lang="ts">
	import {
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterBrand,
		FooterLink
	} from 'flowbite-svelte';
	import type { NavBarData } from '../utils/linkUtils';
	import { base } from '$app/paths';
	export let data: NavBarData;
</script>

<Footer footerType="logo" class="mt-5">
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterBrand href={`${base}/`} src={data.logoSrc} alt={data.altText} name={data.optionalLinkText} />
		<FooterLinkGroup
			ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
		>
			{#each data.links as link}
				{#if link.displayInFooter}
					<FooterLink href={link.url}>{link.linkText}</FooterLink>
				{/if}
			{/each}
		</FooterLinkGroup>
	</div>
	<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<FooterCopyright href={`${base}/`} by="KitchenKrafts™" />
</Footer>
