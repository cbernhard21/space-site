<script>
	import PageHeader from "../components/PageHeader.svelte";
	import {technology} from '$lib/data/data.json';
</script>


<div id="technology">
	<div class="content-container">
		<div class="header">
			<PageHeader stepNumber={'03'} step={'Space Launch 101'} />
		</div>
	</div>
</div>

<style>
	#technology {
		background-image: url('/assets/technology/background-technology-mobile.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		min-height: 100vh;
	}
	@media screen and (min-width: 767px) {
		#technology {
			background-image: url('/assets/technology/background-technology-tablet.jpg');
		}
	}
	@media screen and (min-width: 1250px) {
		#technology {
			background-image: url('/assets/technology/background-technology-desktop.jpg');
		}
	}
</style>
