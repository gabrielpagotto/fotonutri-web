<script lang="ts">
    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
    } from "flowbite-svelte";

    export let data;

    $: ({ meal } = data);

    $: image = {
        alt: meal.description,
        src: meal?.image_url,
    };

    $: foods = meal?.foods ?? [];
</script>

<svelte:head>
    <title>{meal.name}</title>
    <meta property="og:title" content="{meal.name}" />
    <meta property="og:description" content="{meal.description}" />
    <meta property="og:image" content="{meal.image_url}" />
    <meta property="og:image:width" content="600" />
    <meta property="og:image:height" content="315" />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{meal.name}" />
    <meta name="twitter:description" content="{meal.description}" />
    <meta name="twitter:image" content="{meal.image_url}" />
</svelte:head>

<div class="w-full flex justify-between">
    <h1
        class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-10"
    >
        {meal.name}
    </h1>
    <h1 class="text-2xl font-bold tracking-tight text-primary-500 mb-10">
        {meal?.total_calories ?? 0} Calorias
    </h1>
</div>

<h1
class="tracking-tight text-gray-900 dark:text-white mb-10"
>
{meal.description}
</h1>

<div class="flex w-full justify-center mb-10">
    <img src={image.src} alt={image.alt} class="h-auto max-w-96 rounded-lg" />
</div>

<h1
    class="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-5"
>
    Alimentos encontrados
</h1>
<Table striped>
    <TableHead>
        <TableHeadCell>Nome</TableHeadCell>
        <TableHeadCell>Calorias</TableHeadCell>
        <TableHeadCell>Quantidade</TableHeadCell>
        <TableHeadCell>Unidade</TableHeadCell>
        <TableHeadCell>Carboidratos</TableHeadCell>
        <TableHeadCell>Proteínas</TableHeadCell>
        <TableHeadCell>Gorduras</TableHeadCell>
        <TableHeadCell>Gorduras saturadas</TableHeadCell>
        <TableHeadCell>Sódio</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
        {#each foods as food}
            <TableBodyRow>
                <TableBodyCell>{food.name}</TableBodyCell>
                <TableBodyCell>{food.calories}</TableBodyCell>
                <TableBodyCell>{food.amount}</TableBodyCell>
                <TableBodyCell>{food.unit}</TableBodyCell>
                <TableBodyCell>{food.total_carbohydrates}</TableBodyCell>
                <TableBodyCell>{food.proteins}</TableBodyCell>
                <TableBodyCell>{food.total_fat}</TableBodyCell>
                <TableBodyCell>{food.saturated_fat}</TableBodyCell>
                <TableBodyCell>{food.sodium}</TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>
