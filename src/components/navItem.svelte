<script lang="ts">
	import { base } from '$app/paths';

	export let linkName: string;
	export let link = '';
</script>

<a href="{base}/{link}" class="nav_link">{linkName}</a>

<style>
	a {
		outline: none !important;
		text-decoration: none !important;
	}
	.nav_link {
		color: inherit;
		text-transform: uppercase;
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 30px;
		transition: 0.5s;
		font-size: 18px;
	}
	.nav_link:hover {
		background-color: #f5e0dfb3;
		color: #ef6561;
	}
</style>
