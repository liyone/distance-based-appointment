import { APIGatewayProxyHandler, Context } from 'aws-lambda'
import { APIGatewayProxyEvent } from 'aws-lambda'

function getPathWithoutParams(path: string, pathParameters: { [name: string]: string } | null) {
  let result = path

  if (pathParameters) {
    for (const param in pathParameters) {
      result = result.replace(pathParameters[param], `{${param}}`)
    }
  }

  return result
}

export interface SSTAPIGatewayProxyEvent {
  rawPath: string
  pathParameters: { [name: string]: string } | null
  requestContext: {
    http: {
      method: string
    }
  }
  queryStringParameters: { [name: string]: string } | null // Add this line
  body: string | null
}

type SSTAPIGatewayProxyHandler = (
  event: SSTAPIGatewayProxyEvent,
  context: Context,
) => Promise<APIGatewayProxyEvent | { [key: string]: any }>

export const handler: SSTAPIGatewayProxyHandler = async (event: SSTAPIGatewayProxyEvent) => {
  const httpMethod = event.requestContext.http.method
  const path = getPathWithoutParams(event.rawPath, event.pathParameters)
  const queryParams = event.queryStringParameters
  console.log(httpMethod)
  console.log(path)
  if (httpMethod === 'GET' && path === '/appointment/{id}') {
    const appointmentId = event.pathParameters?.id
    console.log(appointmentId)
    if (appointmentId) {
      // TODO: Fetch the appointment with the given ID from your data store
      // The data store should be a DynamoDB table

      return {
        statusCode: 200,
        body: JSON.stringify({
          message: `Appointment with ID: ${appointmentId}`,
          // TODO: Return the fetched appointment
        }),
      }
    }
  } else if (httpMethod === 'GET' && path === '/appointments') {
    // Handle GET /appointments
    // Fetch all appointments, with optional filtering based on query parameters
    const date = queryParams?.date
    const address = queryParams?.address

    // Use date and address to filter appointments
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Appointment LIST HERE: ${date}-${address}}`,
        date: date,
        address: address,
        // TODO: Return the fetched appointment
      }),
    }
  } else if (httpMethod === 'POST' && path === '/appointment') {
    //TODO: This is untested, do it with postman
    // Handle POST /appointments
    const appointmentData = event.body ? JSON.parse(event.body) : {}
    return appointmentData
    // Use appointmentData to create a new appointment in your data store
  } else {
    // Return a 404 Not Found response
    return {
      statusCode: 404,
      body: 'Not Found',
    }
  }
}
