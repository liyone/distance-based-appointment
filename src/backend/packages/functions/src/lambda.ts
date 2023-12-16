import { request } from "http";
import { ApiHandler } from "sst/node/api";

export const handler = ApiHandler(async (event) => {
  const requestBody = JSON.parse(event.body || "{}");
  const pathParams = event.pathParameters || {};
  const queryParams = event.queryStringParameters || {};
  console.log(event)
  console.log(requestBody);
  console.log(pathParams);
  console.log(queryParams);
  
  // Use the requestBody variable to access the body of the request
  // Use the pathParams variable to access the path parameters
  // Use the queryParams variable to access the query parameters

  return {
    statusCode: 200,
    body: `Hello world. The time is ${new Date().toISOString()}`,
  };
});
