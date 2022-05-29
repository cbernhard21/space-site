<script>
	import {destinations} from '$lib/data/data.json';
	import PageHeader from '../components/PageHeader.svelte';

	let currentDestination = 'Moon';

</script>

<div id="destination">
	<div class="content-container">
		<div class="heading">
			<PageHeader stepNumber={'01'} step={'Pick Your Destination'}/>
			{#each destinations as destination }
				{#if currentDestination === destination.name}
					<img src="{destination.images.png}" alt="{destination.name}" class="planet-img" />
				{/if}
			{/each}
			
		</div>
		<div class="content">
			<nav aria-label="secondary">
				<ul class="destination-nav">
				{#each destinations as destination }
					<li 
						class="fs-300 text-light uppercase"
						class:active={currentDestination === destination.name}
						on:click={() => currentDestination = destination.name}
					>{destination.name}</li>
				{/each}
				</ul>
			</nav>
			{#each destinations as destination }
				{#if currentDestination === destination.name}
					<h2 class="fs-800">{destination.name}</h2>
					<p class="fs-400 text-light text">{destination.description}</p>
				{/if}
			{/each}
			<hr class="line-break">
			<p class="uppercase ff-sans-cond text-light text-center subheading-2">Avg. Distance</p>
			{#each destinations as destination }
				{#if currentDestination === destination.name}
					<p class="text-center uppercase distance subheading-1">{destination.distance}</p>
				{/if}
			{/each}
			<p class="uppercase ff-sans-cond text-light text-center subheading-2">Est. Travel Time</p>
			{#each destinations as destination }
				{#if currentDestination === destination.name}
					<p class="text-center uppercase subheading-1">{destination.travel}</p>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	#destination {
		background-image: url('/assets/destination/background-destination-mobile.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		height: 100vh;
	}
	@media screen and (min-width: 767px) {
		#destination {
			background-image: url('/assets/destination/background-destination-tablet.jpg');
		}
	}
	@media screen and (min-width: 1250px) {
		#destination {
			background-image: url('/assets/destination/background-destination-desktop.jpg');
		}
	}
	.content{padding-bottom: 10rem;}
	.planet-img {
		width: 50%;
		min-width: 17rem;
		margin: 0 auto;
	}

	.heading {
		margin-bottom: 3rem;
	}

	nav {
		margin-bottom: 2.7rem;
	}

	.destination-nav {
		width: 75%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	li {
		padding: 1rem 0;
	}

	h2 {
		text-align: center;
	}

	.text {
		text-align: center;
		line-height: 1.7;
		margin-bottom: 3.5rem;
	}

	hr {
		width: 100%;
		height: 2px;
		border: none;
		background-color: var(--clr-dark-grey);
		margin-bottom: 3rem;
	}

	.distance {
		margin-bottom: 4.5rem;
	}

	.subheading-2 {
		margin-bottom: 1.5rem;
	}

</style>
