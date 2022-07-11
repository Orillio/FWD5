<script lang="ts">
	export let mediaName: string;
	export let url: string;
</script>

<!-- svelte-ignore a11y-missing-content -->
<a target="_blank" href={url} class="sm_link {mediaName}" />

<style>
	.sm_link {
		border-radius: 100%;
		height: 40px;
		width: 40px;
		background-position: center;
		background-size: contain;
	}
	.sm_link:not(:last-child) {
		margin-right: 30px;
	}
	.tg {
		background-image: url('/media/telegram.png');
	}
	.vk {
		background-image: url('/media/vk.webp');
	}
	.gh {
		background-image: url('/media/gh.png');
		filter: invert(1);
	}
	.inst {
		background-image: url('/media/instagram.png');
	}
	.mask {
		background-size: cover;
		width: 150px;
		height: 150px;
		position: relative;
		border-radius: 100%;
		margin-bottom: 50px;
	}
</style>
