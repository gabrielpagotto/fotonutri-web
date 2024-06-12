<script lang="ts">
    import { Card, Spinner } from "flowbite-svelte";
    import { onMount } from "svelte";
    import { createApiUrl } from "$lib/utils/clients";
    import type { Meal } from "$lib/models/meal";

    export let data;

    let loading = false;
    let page = 1;
    let isEnd = false;

    $: ({ meals } = data);

    const title = "Refeições já adicionadas";

    const fetchMoreMeals = async () => {
        loading = true;
        page++;
        const response = await fetch(
            createApiUrl(
                `/api/meals?=page${page}&last_visible=${meals[meals.length - 1].id}`,
            ),
        );
        if (response.ok) {
            const responseMeals: Meal[] = await response.json();
            data.meals = [...meals, ...responseMeals];
            if (responseMeals.length == 0) {
                isEnd = true;
            }
        }
        loading = false;
    };

    onMount(() => {
        window.addEventListener("scroll", () => {
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight
            ) {
                if (!isEnd && !loading) fetchMoreMeals();
            }
        });
    });
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<h1
    class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-10"
>
    {title}
</h1>

<div class="grid md:grid-cols-3 max-md:grid-cols-1 gap-4">
    {#each meals as meal}
        <Card href="/meals/{meal.id}" size="md" padding="none">
            <img
                src={meal.image_url}
                alt={meal.name}
                class="w-full h-48 object-cover rounded-t"
            />
            <div class="p-5">
                <h5
                    class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                    {meal.name}
                </h5>
                <p
                    class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight"
                >
                    {meal.description}
                </p>
            </div>
        </Card>
    {/each}
</div>

{#if loading}
    <div class="flex justify-center mt-10">
        <Spinner />
    </div>
{/if}
