import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

import { handleRequest } from './app';

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  // todo context?
  return handleRequest(event)
}
