import { StackContext, Api } from "sst/constructs";

export function AppointmentAPI({ stack }: StackContext) {

  const api = new Api(stack, "appointmentApi", {
    routes: {
      "GET /appointment/{id}": "packages/functions/src/appointment.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}