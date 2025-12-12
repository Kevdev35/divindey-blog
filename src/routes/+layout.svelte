<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';

	import HomeNavbar from '$lib/components/HomeNavbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900" >
	
	<Navbar />
	{@render children()}
</div>