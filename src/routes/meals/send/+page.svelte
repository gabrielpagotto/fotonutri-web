<script lang="ts">
    import { Button, Fileupload, Label, Spinner, Modal } from "flowbite-svelte";
    import { goto } from "$app/navigation";
    import { createApiUrl } from "$lib/utils/clients";
    import { ExclamationCircleOutline } from "flowbite-svelte-icons";
    import type { Meal } from "$lib/models/meal";

    const maxFileMB = 20;
    const fileMaxSize = maxFileMB * 1024 * 1024; // 5 MB

    let value: string | undefined;
    let files: FileList | undefined;
    let submiting = false;
    let error: string | undefined;
    let errorModalOpened = false;

    const submit = async () => {
        if ((files?.length ?? 0) <= 0) {
            return;
        }

        if (files![0].size > fileMaxSize) {
            error = `A imagem que você quer enviar é muito grande. Selecione uma imagem de no máximo ${maxFileMB}MB.`;
            errorModalOpened = true;
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
                errorModalOpened = true;
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
    <span class="font-light">
       A foto deve possuir no máximo {maxFileMB}MB de tamanho.
    </span>
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

<Modal bind:open={errorModalOpened} size="xs" autoclose color="primary">
    <div class="text-center">
        <ExclamationCircleOutline
            class="mx-auto mb-4 text-red-400 w-12 h-12 dark:text-red-200"
        />
        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {error}
        </h3>
        <Button color="primary">Continuar</Button>
    </div>
</Modal>
