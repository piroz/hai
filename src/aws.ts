import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Hono } from 'hono'


function convertEvent(event: APIGatewayProxyEvent): Request {
  return new Request(event.body, {
    method: event.httpMethod,
    headers: event.headers
  })
}

export function handle(
  app: Hono
): (event: APIGatewayProxyEvent) => Promise<APIGatewayProxyResult>{
  // todo context?
  return async(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> =>  {
      const request = convertEvent(event)
      const response = await app.fetch(request)
      const reader = response.body.getReader()
      const statusCode = response.status

      while (true) {
        const { done, value } = await reader.read()
        
        if (done) {

          const body = new TextDecoder().decode(value);

          return { statusCode, body}
        }
      }
  }
}
