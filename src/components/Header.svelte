<script>
	let isOpen = false;
	function slideNav() {
		isOpen = !isOpen;
	}



	// let routes = [
	// 	{
	// 		route: 'home',
	// 		path: '/'
	// 	},
	// 	{
	// 		route: 'crew',
	// 		path: '/crew'
	// 	},
	// 	{
	// 		route: 'destination',
	// 		path: '/destination'
	// 	},
	// 	{
	// 		route: 'technology',
	// 		path: '/technology'
	// 	}
	// ]
	let current = 'home';



	function handleClick() {
		
		slideNav()
	}
</script>

<div class="header">
	<img src="../assets/shared/logo.svg" alt="Space Travel Logo" class="logo" />
	<h2>{current}</h2>
	<nav class:slide={isOpen}>
		<ul>

			<!-- {#each routes as route }
				<li><a 
						href="{route.path}" 
						on:click={slideNav} 
						on:click="{() => current === route.route}"
						class="text-white fs-300 uppercase {current === route.route ? 'active' : ''}"
					>{route.route}</a></li>
			{/each} -->

			<li>
				<a 
					href="/" 
					class="text-white fs-300 uppercase {current === 'home' ? 'active' : ''}"
					on:click={slideNav} 
					on:click="{() => current === 'home'}"
				><span class="bold">00</span> Home</a>
			</li>
			<li>
				<a 
					href="/crew" 
					class="text-white fs-300 uppercase {current === 'crew' ? 'active' : ''}"
					on:click={slideNav}
					on:click="{() => current === 'crew'}"
				><span class="bold">01</span> Crew</a>
			</li>
			<li>
				<a href="/destination" on:click={slideNav} class="text-white fs-300 uppercase"><span class="bold">02</span> Destination</a>
			</li>
			<li>
				<a href="/technology" on:click={slideNav} class="text-white fs-300 uppercase"><span class="bold">03</span> Technology</a>
			</li>
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
		<img src="../assets/shared/icon-close.svg" alt="Burger Menu" class="logo hidden" on:click={slideNav} />
	{/if}
</div>

<style>
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
			color: red;
		}
	}
</style>
