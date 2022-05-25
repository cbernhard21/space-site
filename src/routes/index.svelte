<section id="home">
	<div class="main-container">
		<div class="content-container">
			<h5 class="fs-500 text-light ff-sans-cond">So, you want to travel to</h5>
			<h1 class="fs-900">Space</h1>
			<p class="text text-light fs-300">
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

	.main-container {
		padding-top: 10rem;
		border: 1px solid green;
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		height: 100%;
	}
	.content-container {
		width: 100%;
		border: 1px solid red;
		justify-self: center;
		text-align: center;
	}
	.large-button-container {
		border: 1px solid yellow;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		padding-bottom: 3rem;
	}

	.text {
		max-width: 38ch;
		margin: 0 auto;
		line-height: 25px;
	}
</style>
