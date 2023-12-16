import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';
import path = require('path');

export class LambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const helloLambda = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_16_X,
      // code: lambda.Code.fromAsset('../../../src/backend/NestJS/dist'), // path to the compiled NestJS code
      code: lambda.Code.fromAsset(path.join(__dirname, '../../../backend/NestJS/dist')), // path to the compiled NestJS code
      handler: 'main.handler', // exported handler in your NestJS code
      //handler: 'healthTest.handler', // exported handler in your NestJS code
    });

    const api = new apigateway.RestApi(this, 'Endpoint');

    const healthResource = api.root.addResource('health');

    healthResource.addMethod('GET', new apigateway.LambdaIntegration(helloLambda));

    // Output the API Gateway URL to the console during deployment
    new cdk.CfnOutput(this, 'ApiUrl', {
      value: api.url,
    });
  }
}
