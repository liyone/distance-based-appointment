import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';

export class LambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const helloLambda = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('../backend/dist'), // path to the compiled NestJS code
      handler: 'main.handler', // exported handler in your NestJS code
    });

    new apigateway.LambdaRestApi(this, 'Endpoint', {
      handler: helloLambda,
    });
  }
}
