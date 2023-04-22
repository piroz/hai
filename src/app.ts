import { Hono } from 'hono'
import { handle } from './aws'

const app = new Hono()

app.get('/', (c) => c.text('Hello!'))


export default handle(app)
