<script lang="ts">
	import { base } from '$app/paths';

	export let logoName: string;
</script>

<a href="{base}/" class="logo">{logoName}</a>

<style>
	.logo {
		color: inherit;
		font-family: 'Bebas Neue';
		font-size: 40px;
		letter-spacing: 4px;
	}
</style>
