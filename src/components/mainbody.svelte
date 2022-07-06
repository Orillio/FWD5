<script lang="ts">
    export let headerName: string;
    import DogImage from "./dogImage.svelte";
    import Quote from "./quote.svelte";
    import { get } from "$lib/get"

    let quoteMessage : HTMLElement;

    export const getNewQuote = async () : Promise<string> => {
        
        let json = await get(new URL("https://favqs.com/api/qotd")) as JSON;
        return json["quote"]["body"];
    }

    export const getNewDogPicture = async () : Promise<string> => {
        let json = await get(new URL("https://random.dog/woof.json")) as JSON;
        return json["url"];
    }

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
                <Quote quoteElement={quoteMessage} quote="Wait for quote..."/>
            {:then data} 
                <Quote quoteElement={quoteMessage} quote={data}/>
            {/await}
        </div>
    </div>
</section>
