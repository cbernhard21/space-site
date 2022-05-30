<script>
	import {crew} from '$lib/data/data.json';
	import PageHeader from "../components/PageHeader.svelte";

	crew.forEach((member, i) => {
		member.id = i + 1
	})

	console.log(crew);

	let currentMember = 'Douglas Hurley';

</script>


<div id="crew">
	<div class="content-container top-padding">
		<div class="heading">
			<PageHeader stepNumber={'02'} step={'Meet Your Crew'} />
			{#each crew as member}
				{#if currentMember === member.name}
				<div class="crew-img-container">
					<img src="{member.images.webp}" alt="{member.name}" class="crew-img">
				</div>
				{/if}
			{/each}

			<hr class="line-break" />

			<div class="crew-content">
				<nav aria-label="secondary">
					{#each crew as member }
						<div 
							class="circle text-dark-grey"
							class:crew-active={currentMember === member.name}
							on:click={() => currentMember = member.name}
						><span class="hidden">{member.id}</span></div>
					{/each}
				</nav>

				<article class="crew-details">
					{#each crew as member }
						{#if currentMember === member.name}
							<h2 class="crew-role">{member.role}</h2>
							<h3 class="crew-name">{member.name}</h3>
							<p class="crew-bio">{member.bio}</p>
						{/if}
					{/each}
				</article>
			</div>
		</div>
	</div>
</div>

<style>
	#crew {
		background-image: url('/assets/crew/background-crew-mobile.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		min-height: 100vh;
	}
	@media screen and (min-width: 767px) {
		#crew {
			background-image: url('/assets/crew/background-crew-tablet.jpg');
		}
	}
	@media screen and (min-width: 1250px) {
		#crew {
			background-image: url('/assets/crew/background-crew-desktop.jpg');
		}
	}

	.heading {
		text-align: center;
	}

	.crew-img-container {
		width: 50%;
		margin: 0 auto;
	}

	hr {
		width: 100%;
		height: 2px;
		border: none;
		background-color: var(--clr-grey);
		margin-bottom: 3rem;
	}

	nav {
		width: 50%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}

	.circle {
		border-radius: 50%;
		background-color: var(--clr-grey);
		width: 10px;
		height: 10px;
	}

	.crew-active {
		background-color: var(--clr-white);
	}

	.hidden {
		display: none;
	}
</style>
