<script lang="ts">
    import NavItem from "./navItem.svelte";
    import Logo from "./logo.svelte";
</script>

<header>
    <div class="container">
        <div class="bar">
            <Logo logoName="Yan Kozyrenko"/>
            <nav class="nav_bar">
                <NavItem link="about" linkName="About"/>
                <NavItem linkName="Photos"/>
                <NavItem linkName="Portfolio"/>
                <NavItem linkName="Contact me"/>
            </nav>
        </div>
    </div>
</header>