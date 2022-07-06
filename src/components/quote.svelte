<script lang="ts">
    export let quote: string;
    export let quoteElement: HTMLElement;
</script>

<h2 id="quote" bind:this={quoteElement} class="quote">{quote}</h2>