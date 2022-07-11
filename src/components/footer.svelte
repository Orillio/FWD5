<script lang="ts">
	import MediaLink from './mediaLink.svelte';
</script>

<section class="links">
	<h2 class="sm_caption">Social Media links</h2>
	<div class="sm_links">
		<MediaLink mediaName="tg" url="https://t.me/y_kozyrenko" />
		<MediaLink mediaName="vk" url="https://vk.com/yan.kozyrenko" />
		<MediaLink mediaName="gh" url="https://github.com/Orillio" />
		<MediaLink mediaName="inst" url="https://instagram.com/yankozyrenko" />
	</div>
</section>

<style>
	.links {
		background-color: #2b313d;
		height: 500px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.sm_caption {
		color: #f7f7f7;
		font-size: 40px;
	}
	.sm_links {
		display: flex;
	}
</style>
