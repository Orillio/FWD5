<script lang="ts">
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	import '../style.css';
</script>

<Header />
<main>
	<slot />
	<Footer />
</main>
