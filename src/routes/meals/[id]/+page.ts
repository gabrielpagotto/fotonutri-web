import { error } from "@sveltejs/kit";
import type { ServerLoad } from "@sveltejs/kit";
import type { Meal } from "$lib/models/meal";
import { createApiUrl } from "$lib/utils/clients";

export const load: ServerLoad = async ({ params, fetch }) => {
    const { id } = params;
    const response = await fetch(createApiUrl(`/api/meals/${id}`))

    if (!response.ok) {
        throw error(response.status)
    }

    return { meal: await response.json() as Meal };
}