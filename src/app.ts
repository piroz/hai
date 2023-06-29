import { Get } from "./decorators"
import { Context } from "hono"

export default class App {
    @Get("/next")
    n(c: Context) {
        return c.body('this is next page')
    }
    @Get("/")
    index(c: Context) {
        return c.body('Thank you for coming')
    }
}
