import { env } from '$env/dynamic/public'

export function createApiUrl(path: string) {
    return env.PUBLIC_API_HOST + path;
}