<script>
	import Header from '../components/Header.svelte';
	import '$lib/css/global.css';
</script>

<svelte:head>
	<!-- Google Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Bellefair&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<header>
	<Header />
</header>

<main>
	<slot />
</main>

<style>
	header {
		position: relative;
	}
</style>
