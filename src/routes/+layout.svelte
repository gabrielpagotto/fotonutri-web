<script>
    import "../app.css";
    import {
        HomeSolid,
        PlusOutline,
        ReceiptSolid,
    } from "flowbite-svelte-icons";
    import {
        Navbar,
        NavBrand,
        BottomNav,
        BottomNavItem,
        Tooltip,
        NavUl,
        NavLi,
        DarkMode,
    } from "flowbite-svelte";
    import { page } from "$app/stores";

    $: activeUrl = $page.url.pathname;
</script>

<div class="relative">
    <Navbar
        color="primary"
        class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b"
    >
        <NavBrand href="/">
            <img src="favicon.png" class="me-3 h-6 sm:h-9" alt="FotoNutri Logo" />
        </NavBrand>
        <div class="flex justify-end max-md:hidden">
            <NavUl {activeUrl}>
                <NavLi href="/meals">Refeições já adicionadas</NavLi>
                <NavLi href="/meals/send">Envie uma foto</NavLi>
            </NavUl>
        </div>
        <DarkMode
            class="text-primary-500 dark:text-primary-600 border dark:border-gray-800"
        />
    </Navbar>
</div>

<div
    class="max-md:py-28 md:py-24 md:max-w-[60rem] max-md:max-w-max self-center w-full px-10"
>
    <slot />
</div>

<div class="md:hidden">
    <BottomNav
        {activeUrl}
        position="fixed"
        classInner="grid-cols-3"
        navType="application"
    >
        <BottomNavItem btnName="Início" href="/">
            <HomeSolid
                class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
            />
        </BottomNavItem>
        <div class="flex items-center justify-center">
            <BottomNavItem
                btnName="Realizar novo calculo"
                appBtnPosition="middle"
                btnClass="inline-flex items-center justify-center w-10 h-10 font-medium bg-primary-600 rounded-full hover:bg-primary-700 group focus:ring-4 focus:ring-primary-300 focus:outline-none dark:focus:ring-primary-800"
                href="/meals/send"
            >
                <PlusOutline class="text-white" />
                <Tooltip arrow={false}>Realizar novo calculo</Tooltip>
            </BottomNavItem>
        </div>
        <BottomNavItem btnName="Refeições" href="/meals">
            <ReceiptSolid
                class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
            />
        </BottomNavItem>
    </BottomNav>
</div>
