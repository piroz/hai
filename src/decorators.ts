import { Hono, Context } from 'hono'

export const app = new Hono()

export function Get(path: string) {
    return function __decorator(originalMethod: any, _context: any) {
        app.get(path, (c: Context) => originalMethod(c))
    }
}

