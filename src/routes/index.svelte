<section id="home">
	<div class="main-container">
		<div class="content-container">
			<h5 class="fs-500 text-light ff-sans-cond">So, you want to travel to</h5>
			<h1 class="fs-900">Space</h1>
			<p class="text text-light fs-400">
				Let’s face it; if you want to go to space, you might as well genuinely go to outer space and
				not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly
				out of this world experience!
			</p>
		</div>

		<div class="large-button-container">
			<a href="/" class="fs-600 uppercase large-btn">Explore</a>
		</div>
	</div>
</section>

<style>
	#home {
		background-image: url('../assets/home/background-home-mobile.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		height: 100vh;
	}
	@media screen and (min-width: 767px) {
		#home {
			background-image: url('../assets/home/background-home-tablet.jpg');
		}
	}
	@media screen and (min-width: 1250px) {
		#home {
			background-image: url('../assets/home/background-home-desktop.jpg');
		}
	}

	.main-container {
		padding-top: 10rem;
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		height: 100%;
	}

	/* LARGE SCREEN */
	@media screen and (min-width: 1250px) {
		.main-container {
			/* margin: 0 16.5rem 0 15rem; */
			margin: 0 auto;
			max-width: 1200px;
			/* border: 1px solid green; */
			height: 100vh;
			grid-template-rows: auto;
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.content-container {
		width: 100%;
		/* border: 1px solid red; */
		justify-self: center;
		text-align: center;
	}
	.large-button-container {
		/* border: 1px solid yellow; */
		height: 100%;
		text-align: center;
		align-self: flex-end;
		padding-top: 7rem;
	}

	.large-btn {
		z-index: 1;
		display: inline-grid;
		place-items: center;
		padding: 1px 2em;
		border-radius: 50%;
		aspect-ratio: 1;
		text-decoration: none;
		background-color: var(--clr-white);
		color: var(--clr-dark);
	}

	.text {
		max-width: 38ch;
		margin: 0 auto;
		line-height: 25px;
	}
	@media screen and (min-width: 1250px){
		.text {
			margin: 0;
		}
	}

	@media screen and (min-width: 767px) {
		.main-container {
			padding-top: 20rem;
		}
		.text {
			max-width: 50ch;
		}
	}
	/* LARGE SCREEN */
	@media screen and (min-width: 1250px) {
		.content-container,
		.large-button-container {
			align-self: end;
		}
		.content-container {
			text-align: left;
			padding: 0 0 14rem 0;
		}
		.large-button-container {
			padding: 0 0 14rem 0;
			height: auto;
			text-align: right;
		}
		.content-container h5 {
			margin-bottom: 3rem;
		}
		.content-container h1 {
			margin-bottom: 5rem;
		}
		.text {
			max-width: 45ch;
			line-height: 1.8;
		}
	}
</style>
