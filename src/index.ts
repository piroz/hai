// entry point for the application
import { handle } from 'hono/aws-lambda'

import App from './app'

new App()

import { app } from "./decorators"

export const handler = handle(app)
