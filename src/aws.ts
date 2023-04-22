import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Hono } from 'hono'

export function handle(
  app: Hono
): (event: APIGatewayProxyEvent) => Promise<APIGatewayProxyResult>{
  // todo context?
  return async(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> =>  {
    return new Promise((resolve, reject) => {

      // app.fire()
      
      resolve({"statusCode": 200, "body": "Hello!"})
    })
  }
}
