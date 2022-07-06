<script lang="ts">
    export let mediaName: string;
    export let url: string;

</script>

<!-- svelte-ignore a11y-missing-content -->
<a target="_blank" href="{url}" class="sm_link {mediaName}"></a>

<style>
    .tg {
        background-image: url({tg});
    }
    .vk {
        background-image: url({vk});

    }
    .gh {
        background-image: url({gh});
        filter: invert(1);
    }
    .inst {
        background-image: url({is});
    } 
</style>