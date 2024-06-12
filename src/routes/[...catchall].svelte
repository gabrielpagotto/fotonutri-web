<script lang="ts">
    export let status: number;
    export let error: Error;
</script>

<main>
    <h1 class="text-gray-900 dark:text-white">{status}</h1>
    <p class="text-gray-900 dark:text-white">{error.message}</p>
</main>
