<script>
	let isOpen = false;
	function slideNav() {
		isOpen = !isOpen;
	}
</script>

<div class="header">
	<img src="../assets/shared/logo.svg" alt="Space Travel Logo" class="logo" />

	<nav class:slide={isOpen}>
		<ul>
			<li>
				<a href="/" on:click={slideNav} class="text-white fs-300 uppercase"><span class="bold">00</span> Home</a>
			</li>
			<li>
				<a href="/crew" on:click={slideNav} class="text-white fs-300 uppercase"><span class="bold">01</span> Crew</a>
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
		<img src="../assets/shared/icon-close.svg" alt="Burger Menu" class="logo" on:click={slideNav} />
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
			position: static;
			transform: translateX(0) translateY(0);
			transition: none;
		}

		ul {
			flex-direction: row;
			margin-top: 0;
			margin-left: 0;
			padding: 0 5rem;
			gap: 4rem;
		}

		li {
			padding: 5rem 0;
			border-bottom: 2px solid transparent;
			transition: all 0.2s ease-in-out;
		}

		li:hover {
			border-bottom: 3px solid #979797;
		}
		.slide {
			transform: translateX(0) translateY(0);
		}
	}
</style>
