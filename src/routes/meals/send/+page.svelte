<script lang="ts">
    import { Button, Fileupload, Label, Spinner, Toast } from "flowbite-svelte";
    import { goto } from "$app/navigation";
    import { createApiUrl } from "$lib/utils/clients";
    import { ExclamationCircleSolid } from "flowbite-svelte-icons";
    import type { Meal } from "$lib/models/meal";

    let value: string | undefined;
    let files: FileList | undefined;
    let submiting = false;
    let error: string | undefined;

    const submit = async () => {
        if ((files?.length ?? 0) <= 0) {
            return;
        }

        const formData = new FormData();
        formData.append("image", files![0]);
        submiting = true;
        const response = await fetch(createApiUrl("/api/meals"), {
            method: "POST",
            body: formData,
            mode: "cors",
        });

        if (!response.ok) {
            submiting = false;
            const data = await response.json();
            if (data.detail == "No food was found in the image") {
                error =
                    "Nenhum alimento foi encontrado na foto que você enviou.";
            }
            return;
        }

        const meal: Meal = await response.json();
        goto(`/meals/${meal.id}`);
    };
    $: toastErrorOpen = !!error;

    const title = "Enviar minha refeição";
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<h1
    class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-10"
>
    {title}
</h1>

<Label class="space-y-2 mb-10">
    <span>
        Selecione uma foto da sua refeição, para que seja identificado os
        alimentos presentes na foto e suas informações nutricionais.
    </span>
    <Fileupload bind:value bind:files size="sm" accept="image/*" />
</Label>

<div class="flex justify-center mb-10">
    <Button
        disabled={!value || submiting}
        loading={submiting}
        on:click={submit}
    >
        <div class="flex gap-4">
            {#if submiting}
                <div class="w-4 h-4">
                    <Spinner size="sm" currentColor="white" />
                </div>
                Enviando...
            {:else}
                Enviar foto
            {/if}
        </div>
    </Button>
</div>

<div class="flex justify-center mb-10">
    <Toast
        color="orange"
        bind:open={toastErrorOpen}
        on:close={() => (error = undefined)}
    >
        <svelte:fragment slot="icon">
            <ExclamationCircleSolid class="w-5 h-5" />
            <span class="sr-only">Warning icon</span>
        </svelte:fragment>
        {error}
    </Toast>
</div>
