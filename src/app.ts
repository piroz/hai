import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

const handleRequest = (request: APIGatewayProxyEvent): APIGatewayProxyResult => {
    return {"statusCode": 200, "body": "Hello World"}
}

export { handleRequest }
