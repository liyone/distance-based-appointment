import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";
import { MapsV2API } from "./stacks/MapsStack";
import { AppointmentAPI } from "./stacks/AppointmentStack";

export default {
  config(_input) {
    return {
      name: "backend",
      region: "us-east-1",
    };
  },
  stacks(app) {
    // app.stack(API);
    app.stack(MapsV2API)
    app.stack(AppointmentAPI)
  }
} satisfies SSTConfig;
