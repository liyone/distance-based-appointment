import { StackContext, Api, EventBus } from "sst/constructs";

export function MapsV2API({ stack }: StackContext) {

  const api = new Api(stack, "mapsApi", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
