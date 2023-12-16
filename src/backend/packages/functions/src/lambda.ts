import { request } from "http";
import { ApiHandler } from "sst/node/api";

export const handler = ApiHandler(async (event) => {
  const requestBody = JSON.parse(event.body || "{}");
  const pathParams = event.pathParameters || {};
  const queryParams = event.queryStringParameters || {};
  console.log(event) // This is the request body
  //THese are all useless below
  //TODO: Figure out how to get the pathParams and queryParams
  console.log(requestBody);
  console.log(pathParams);
  console.log(queryParams);
  

  return {
    statusCode: 200,
    body: `Hello world. The time is ${new Date().toISOString()}`,
  };
});
