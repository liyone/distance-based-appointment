import { handler } from '../src/appointment';
import { APIGatewayProxyEvent } from 'aws-lambda';

describe('GET /appointment/{id}', () => {
  it('returns the correct response', async () => {
    const event: APIGatewayProxyEvent = {
      pathParameters: { id: '123' },
      body: null,
      headers: {},
      multiValueHeaders: {},
      httpMethod: 'GET',
      isBase64Encoded: false,
      path: '',
      queryStringParameters: null,
      multiValueQueryStringParameters: null,
      stageVariables: null,
      requestContext: {
        accountId: '',
        apiId: '',
        httpMethod: 'GET',
        identity: {
          accessKey: null,
          accountId: null,
          apiKey: null,
          apiKeyId: null,
          caller: null,
          cognitoAuthenticationProvider: null,
          cognitoAuthenticationType: null,
          cognitoIdentityId: null,
          cognitoIdentityPoolId: null,
          sourceIp: '',
          user: null,
          userAgent: null,
          userArn: null,
          clientCert: null, // Add this line
          principalOrgId: null, // Add this line
        },
        authorizer: null, // Add this line
        protocol: '', // Add this line
        path: '',
        stage: '',
        requestId: '',
        requestTimeEpoch: 0,
        resourceId: '',
        resourcePath: '',
      },
      resource: '',
    };

    const response = await handler(event as any, {} as any, {} as any);
    if (response) {
      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.message).toBe('Appointment with ID: 123');
    }

    
    // Add any other assertions needed for your test
  });
});