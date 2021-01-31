import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class FridgeReading {
  readonly id: string;
  readonly temperature: number;
  readonly humidity: number;
  readonly datetime: string;
  readonly type?: string;
  constructor(init: ModelInit<FridgeReading>);
  static copyOf(source: FridgeReading, mutator: (draft: MutableModel<FridgeReading>) => MutableModel<FridgeReading> | void): FridgeReading;
}