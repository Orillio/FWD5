<script lang="ts">
import { base } from "$app/paths";


    export let linkName: string;
    export let link: string = "";
</script>

<a href="{base}/{link}" class="nav_link">{linkName}</a>