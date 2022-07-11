<script lang="ts">
	export let quote: string;
	export let quoteElement: HTMLElement;
</script>

<h2 id="quote" bind:this={quoteElement} class="quote">{quote}</h2>

<style>
	.quote {
		font-family: 'Baloo Tammudu 2', cursive;
		color: #f7f7f7;
		margin-top: 10px;
		line-height: 30px;
	}
</style>
