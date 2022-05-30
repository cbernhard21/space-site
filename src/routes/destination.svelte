<script>
	import {destinations} from '$lib/data/data.json';
	import PageHeader from '../components/PageHeader.svelte';

	let currentDestination = 'Moon';

</script>

<div id="destination">
	<div class="content-container top-padding">
		<div class="heading">
			<PageHeader stepNumber={'01'} step={'Pick Your Destination'}/>
			{#each destinations as destination }
				{#if currentDestination === destination.name}
				<div class="planet-img-container">
					<img src="{destination.images.png}" alt="{destination.name}" class="planet-img" />
				</div>
					
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
			
			<div class="facts-container">
				<div class="distance-container">
					<p class="uppercase ff-sans-cond text-light subheading-2">Avg. Distance</p>
					{#each destinations as destination }
						{#if currentDestination === destination.name}
							<p class="uppercase distance subheading-1">{destination.distance}</p>
						{/if}
					{/each}
				</div>
				<div class="time-container">
					<p class="uppercase ff-sans-cond text-light subheading-2">Est. Travel Time</p>
					{#each destinations as destination }
						{#if currentDestination === destination.name}
							<p class="uppercase subheading-1">{destination.travel}</p>
						{/if}
					{/each}
				</div>

			</div>
			
		</div>
	</div>
</div>

<style>
	#destination {
		background-image: url('/assets/destination/background-destination-mobile.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		min-height: 100vh;
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
	.content{
		padding-bottom: 10rem;
		text-align: center;
	}
	.planet-img {
		width: 50%;
		min-width: 17rem;
		margin: 0 auto;
	}

	.heading {
		margin-bottom: 3rem;
		text-align: center;
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
		cursor: pointer;
	}

	.text {
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

	.facts-container {
		display: flex;
		flex-direction: column;

	}

	/* MEDIUM SCREENS */
	@media screen and (min-width: 767px) {
		.content-container {
			padding-top: 13.5rem;
		}
		.content {
			width: 75%;
			margin: 0 auto;
			padding-bottom: 0;
		}
		.heading {
			text-align: left;
		}
		.destination-nav {
			width: 65%;
		}
		.planet-img {
			max-width: 30rem;
			margin: 0 auto;
		}
		.facts-container {
			width: 100%;
			flex-direction: row;
			justify-content: space-evenly;
		}

	}

	/* LARGE SCREENS */
	@media screen and (min-width: 1250px) {
		.content-container {
			/* border: 2px solid red;
			height: 90vh; */
			overflow: hidden;
			padding-top: 20rem;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: auto;
		}

		.heading {
			padding: 0 5rem;
		}
		.planet-img-container {
			padding: 0 8rem;
		}
		.planet-img {
			width: 100%;
			max-width: 100%;
		}
		.content {
			/* height: 90vh; */
			text-align: left;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			padding-top: 10rem;
		}

		.destination-nav {
			margin-left: 0;
		}

		.text {
			margin-bottom: 6rem;
		}

		.facts-container {
			justify-content: flex-start;
			gap: 8rem;
		}
	}

</style>
