<script lang="ts">
    export let status: number;
    export let error: Error;
</script>

<main>
    <h1>{status}</h1>
    <p>{error.message}</p>
</main>
