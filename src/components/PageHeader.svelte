<script>
    export let stepNumber;
    export let step;
</script>

<h1 class="fs-500 ff-sans-cond"><span class="text-dark-grey number">{stepNumber}</span> {step}</h1>

<style>
    h1 {
		letter-spacing: 2.7px;
        margin-bottom: 3rem;
	}
    @media screen and (min-width: 1250px) {
        h1 {
            margin-bottom: 10rem;
            letter-spacing: 5px;
        }
        .number {
            margin-right: 2rem;
        }
    }
</style>