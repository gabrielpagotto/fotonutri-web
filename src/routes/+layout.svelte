<script>
    import "../app.css";
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        Card,
    } from "flowbite-svelte";
</script>

<Navbar>
    <NavBrand href="/">
        <span
            class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
            >Foto Nutri</span
        >
    </NavBrand>
    <NavHamburger />
    <NavUl>
        <NavLi href="/">Home</NavLi>
        <NavLi href="/about">About</NavLi>
        <NavLi href="/docs/components/navbar">Navbar</NavLi>
        <NavLi href="/pricing">Pricing</NavLi>
        <NavLi href="/contact">Contact</NavLi>
    </NavUl>
</Navbar>
<slot />
