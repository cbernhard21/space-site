<script>
	import {destinations} from '$lib/data/data.json';

	console.log(destinations);

	let currentDestination = 'Moon';

</script>

<div id="destination">
	<div class="content-container">
		<div class="heading">
			<h1 class="fs-300 ff-sans-cond text-center"><span class="text-dark-grey">01</span> Pick Your Destination</h1>
			{#each destinations as destination }
				{#if currentDestination === destination.name}
					<img src="{destination.images.png}" alt="{destination.name}">
					
				{/if}
				
			{/each}
			
		</div>
		<div class="content">
			<nav aria-label="secondary">
				{#each destinations as destination }
					<p>{destination.name}</p>
				{/each}
			</nav>
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

	.content-container {
		padding-top: 10rem;
		display: grid;
		grid-template-rows: repeat(2, max-content);
		height: 100%;
	}

	h1 {
		letter-spacing: 2.7px;
	}
</style>
