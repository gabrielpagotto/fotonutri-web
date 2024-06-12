<script lang="ts">
    import { Button } from "flowbite-svelte";
</script>

<svelte:head>
    <title>FotoNutri</title>
</svelte:head>

<h1
    class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-24"
>
    Bem-vindo ao FotoNutri!
</h1>

<h1
    class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-10"
>
    Tire uma foto da sua refeição e deixe-nos cuidar do resto. Identificaremos
    os alimentos e forneceremos informações nutricionais.
</h1>

<div class="flex max-md:flex-col gap-4 justify-center mt-32">
    <Button href="/meals" outline>Ver refeições que já foram enviadas</Button>
    <Button href="/meals/send">Quero enviar a minha refeição</Button>
</div>
