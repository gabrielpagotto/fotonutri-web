<script>
    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
    } from "flowbite-svelte";

    const image = {
        alt: "erbology",
        src: "http://sindcomjuazeiro.com.br/site/wp-content/uploads/2020/09/comida-700x445.jpg",
    };

    const foods = [
        {
            name: "Carne",
            calories: 240,
            amount: 150,
            unit: "g",
            total_carbohydrates: "0g",
            proteins: "30g",
            total_fat: "15g",
            saturated_fat: "6g",
            sodium: "100mg",
        },
        {
            name: "Arroz",
            calories: 200,
            amount: 150,
            unit: "g",
            total_carbohydrates: "44g",
            proteins: "4g",
            total_fat: "0.5g",
            saturated_fat: "0.1g",
            sodium: "1mg",
        },
        {
            name: "Feijão",
            calories: 180,
            amount: 150,
            unit: "g",
            total_carbohydrates: "40g",
            proteins: "15g",
            total_fat: "1g",
            saturated_fat: "0.2g",
            sodium: "4mg",
        },
        {
            name: "Alface",
            calories: 10,
            amount: 100,
            unit: "g",
            total_carbohydrates: "2g",
            proteins: "1g",
            total_fat: "0.2g",
            saturated_fat: "0g",
            sodium: "5mg",
        },
        {
            name: "Tomate",
            calories: 16,
            amount: 100,
            unit: "g",
            total_carbohydrates: "4g",
            proteins: "1g",
            total_fat: "0.2g",
            saturated_fat: "0g",
            sodium: "8mg",
        },
    ];
</script>

<div class="flex justify-center w-screen">
    <div class="max-w-96 w-full">
        <div class="w-full flex justify-between">
            <h1
                class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-10"
            >
                Detalhes
            </h1>
            <h1
                class="text-2xl font-bold tracking-tight text-orange-500 dark:text-white mb-10"
            >
                726 Calorias
            </h1>
        </div>

        <div class="flex w-full justify-center mb-10">
            <img
                src={image.src}
                alt={image.alt}
                class="h-auto max-w-14 rounded-lg"
            />
        </div>

        <Table striped={true}>
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
                        <TableBodyCell>{food.total_carbohydrates}</TableBodyCell
                        >
                        <TableBodyCell>{food.proteins}</TableBodyCell>
                        <TableBodyCell>{food.total_fat}</TableBodyCell>
                        <TableBodyCell>{food.saturated_fat}</TableBodyCell>
                        <TableBodyCell>{food.sodium}</TableBodyCell>
                    </TableBodyRow>
                {/each}
            </TableBody>
        </Table>
    </div>
</div>
