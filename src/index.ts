// entry point for the application
import { handle } from 'hono/aws-lambda'

import App from './app'

const _ = new App()
console.debug(_)

import { app } from "./decorators"

export const handler = handle(app)
