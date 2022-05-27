<script>
	import { page } from '$app/stores';

	let isOpen = false;
	function slideNav() {
		isOpen = !isOpen;
	}

	let routes = [
		{
			name: 'home',
			href: '/',
			id: '00'
		},
		{
			name: 'crew',
			href: '/crew',
			id: '01'
		},
		{
			name: 'destination',
			href: '/destination',
			id: '02'
		},
		{
			name: 'technology',
			href: '/technology',
			id: '03'
		}
	];
</script>

<div class="header">
	<img src="../assets/shared/logo.svg" alt="Space Travel Logo" class="logo main-logo" />
	<div class="line" />
	<nav class:slide={isOpen}>
		<ul>
			{#each routes as route}
				<li>
					<a
						href={route.href}
						class:active={route.href === $page.url.pathname}
						class="text-white fs-300 uppercase"
						on:click={slideNav}><span class="bold">{route.id}</span> {route.name}</a
					>
				</li>
			{/each}
		</ul>
	</nav>

	{#if !isOpen}
		<img
			src="../assets/shared/icon-hamburger.svg"
			alt="Burger Menu"
			class="logo menu"
			on:click={slideNav}
		/>
	{:else}
		<img
			src="../assets/shared/icon-close.svg"
			alt="Burger Menu"
			class="logo hidden"
			on:click={slideNav}
		/>
	{/if}
</div>

<style>
	.line {
		display: hidden;
	}
	.header {
		margin: 0 auto;
		width: 100%;
		display: flex;
		justify-content: space-between;
		position: fixed;
		top: 0;
		left: 0;
		padding: 3rem 2rem;
	}
	.logo {
		align-self: center;
		z-index: 999;
		cursor: pointer;
	}
	nav {
		width: 100vw;
		height: calc(100vh + 2rem);
		font-family: var(--ff-sans-cond);
		font-size: var(--fs-300);
		letter-spacing: 2.7px;
		position: absolute;
		top: 0;
		transform: translateX(100%) translateY(-1.5rem);
		transition: transform 0.3s ease-in-out;
		z-index: 100;
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		margin-top: 10rem;
		margin-left: 3rem;
	}
	.slide {
		transform: translateX(27%) translateY(-1.5rem);
	}
	.bold {
		font-weight: 700;
	}

	@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
		nav {
			-webkit-backdrop-filter: blur(50px);
			backdrop-filter: blur(50px);
		}
	}

	/* slightly transparent fallback for Firefox (not supporting backdrop-filter) */
	@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
		nav {
			background-color: rgba(0, 0, 0, 0.9);
		}
	}

	/* MEDIUM SCREENS */
	@media screen and (min-width: 767px) {
		.menu,
		.bold {
			display: none;
		}

		.header {
			padding: 0 0 0 4rem;
		}

		nav {
			background-color: var(--clr-grey);
			width: auto;
			height: auto;
			padding: 4.4rem 0;
			position: static;
			transform: translateX(0) translateY(0);
			transition: none;
		}

		ul {
			height: 100%;
			position: relative;
			flex-direction: row;
			align-items: center;
			margin-top: 0;
			margin-left: 0;
			padding: 0rem 5rem;
			gap: 4rem;
		}

		a {
			padding: 4rem 0;
			border-bottom: 3px solid transparent;
			transition: all 0.3s ease-in-out;
		}

		a:hover {
			border-bottom: 3px solid #979797;
		}
		.slide {
			transform: none;
		}
		.hidden {
			display: none;
		}
		.active {
			border-bottom: 3px solid var(--clr-white);
		}
	}

	/* LARGE SCREENS */
	@media screen and (min-width: 1250px) {
		.header {
			top: 5rem;
		}
		.bold {
			display: inline;
		}
		ul {
			padding: 0 16.5rem 0 18.5rem;
		}
		.line {
			display: block;
			position: absolute;
			top: 5.5rem;
			left: 15rem;
			width: 33vw;
			height: 1px;
			background-color: var(--clr-dark-grey);
			z-index: 9999;
			flex-shrink: 1;
		}
	}

	@media screen and (min-width: 1450px) {
		.line {
			width: 43vw;
		}
	}

	@media screen and (min-width: 1800px) {
		.line {
			width: 50vw;
		}
	}
</style>
