import { error } from "@sveltejs/kit";
import type { ServerLoad } from "@sveltejs/kit";
import type { Meal } from "$lib/models/meal";
import { createApiUrl } from "$lib/utils/clients";

export const load: ServerLoad = async ({ fetch }) => {
    const response = await fetch(createApiUrl(`/api/meals`))

    if (!response.ok) {
        throw error(response.status)
    }

    return { meals: await response.json() as Meal[] };
}