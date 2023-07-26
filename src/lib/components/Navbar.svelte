<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import type { NavBarData } from '../utils/linkUtils';
	export let data: NavBarData;
</script>

<Navbar
	navClass="px-2 sm:px-4 py-2.5 sticky w-full z-20 top-0 left-0 border-b"
	let:hidden
	let:toggle
>
	<NavBrand href={`${base}/`}>
		<img src={data.logoSrc} class="mr-3 h-6 sm:h-9" alt={data.altText} />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			{data.optionalLinkText}
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		{#each data.links as link}
			{#if link.displayInNav}
				<NavLi href={link.url} active={$page.url.pathname === link.url}>{link.linkText}</NavLi>
			{/if}
		{/each}
	</NavUl>
</Navbar>
