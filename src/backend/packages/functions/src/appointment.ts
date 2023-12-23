import { APIGatewayProxyHandler } from 'aws-lambda'

export const handler: APIGatewayProxyHandler = async (event) => {
  const appointmentId = event.pathParameters?.id

  // TODO: Fetch the appointment with the given ID from your data store

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Appointment with ID: ${appointmentId}`,
      // TODO: Return the fetched appointment
    }),
  }
}
