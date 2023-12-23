import { SSTAPIGatewayProxyEvent, handler } from '../src/appointment'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

describe('GET /appointment/{id}', () => {
  it('returns the correct response', async () => {
    const event: SSTAPIGatewayProxyEvent = {
      rawPath: '/appointment/123',
      pathParameters: { id: '123' },
      requestContext: {
        http: {
          method: 'GET',
        },
      },
      queryStringParameters: null,
      body: null,
    }
    type CustomResponse = APIGatewayProxyResult | { [key: string]: any }

    const response: CustomResponse = await handler(event, {} as any)
    if (response) {
      expect(response.statusCode).toBe(200)
      const body = response.body ? JSON.parse(response.body) : {}
      expect(body.message).toBe('Appointment with ID: 123')
    }

    // Add any other assertions needed for your test
  })
})
