<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { navbarData } from '$lib/utils/linkUtils';
	import '../app.postcss';
</script>

<Navbar data={navbarData}/>
<slot />
<Footer data={navbarData} />
