<script>
	import {crew} from '$lib/data/data.json';
	import PageHeader from "../components/PageHeader.svelte";

</script>


<div id="crew">
	<div class="content-container">
		<div class="header">
			<PageHeader stepNumber={'02'} step={'Meet Your Crew'} />
		</div>
	</div>
</div>

<style>
	#crew {
		background-image: url('/assets/crew/background-crew-mobile.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		height: 100vh;
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
</style>
