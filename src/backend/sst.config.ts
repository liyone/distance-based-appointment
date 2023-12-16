import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";
import { MapsV2API } from "./stacks/MapsStack";

export default {
  config(_input) {
    return {
      name: "backend",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(API);
    app.stack(MapsV2API)
  }
} satisfies SSTConfig;
