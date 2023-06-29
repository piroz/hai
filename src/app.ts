import { Get } from "./decorators"
import { Context } from "hono"

export default class App {
    @Get("/")
    index(c: Context) {
        return c.body('Thank you for coming')
    }
}
