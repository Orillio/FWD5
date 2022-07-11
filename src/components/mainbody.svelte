<script lang="ts">
	interface QuoteString {
		quote: {
			body: string;
		};
	}
	interface Image {
		url: string;
	}
	export let headerName: string;
	import DogImage from './dogImage.svelte';
	import Quote from './quote.svelte';
	import { get } from '$lib/get';

	let quoteMessage: HTMLElement;

	export const getNewQuote = async (): Promise<string> => {
		let json = (await get(new URL('https://favqs.com/api/qotd'))) as unknown as QuoteString;
		return json['quote']['body'];
	};

	export const getNewDogPicture = async (): Promise<string> => {
		let json = (await get(new URL('https://random.dog/woof.json'))) as unknown as Image;
		return json['url'];
	};

	let dogImagePromise = getNewDogPicture();
	let quotePromise = getNewQuote();
</script>

<section class="hello_section">
	<div class="container">
		<div class="info">
			{#await dogImagePromise}
				<DogImage dogPictureUrl="https://images.dog.ceo/breeds/bulldog-french/n02108915_38.jpg" />
			{:then data}
				<DogImage dogPictureUrl={data} />
			{/await}
			<h1 class="name">{headerName}</h1>
			<div class="separator">...</div>

			{#await quotePromise}
				<Quote quoteElement={quoteMessage} quote="Wait for quote..." />
			{:then data}
				<Quote quoteElement={quoteMessage} quote={data} />
			{/await}
		</div>
	</div>
</section>

<style>
	.hello_section {
		background-size: cover;
		background: linear-gradient(175deg, rgba(241, 0, 0, 1) 0%, rgba(240, 100, 87, 1) 100%);
	}
	.info {
		min-height: 80vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.name {
		text-transform: uppercase;
		color: #f7f7f7;
		font-size: 70px;
		letter-spacing: 19px;
		font-family: 'Bebas Neue';
	}
	.separator {
		font-size: 40px;
		display: block;
		font-family: serif;
		color: #eae4e4;
	}
</style>
