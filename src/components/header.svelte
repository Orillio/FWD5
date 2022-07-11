<script lang="ts">
	import NavItem from './navItem.svelte';
	import Logo from './logo.svelte';
</script>

<header>
	<div class="container">
		<div class="bar">
			<Logo logoName="Yan Kozyrenko" />
			<nav class="nav_bar">
				<NavItem link="about" linkName="About" />
				<NavItem linkName="Photos" />
				<NavItem linkName="Portfolio" />
				<NavItem linkName="Contact me" />
			</nav>
		</div>
	</div>
</header>

<style>
	.container {
		max-width: 1020px;
		margin: 0 auto;
		display: block;
		height: 100%;
	}
	header {
		position: relative;
		height: 85px;
		box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
	}
	.nav_bar {
		display: flex;
		align-items: center;
		height: 100%;
	}
	.bar {
		height: 100%;
		color: #6e7789;
		display: flex;
		align-items: center;
		font-family: 'Baloo Tammudu 2', cursive;
		justify-content: space-between;
	}
</style>
