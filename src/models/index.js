// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { FridgeReading } = initSchema(schema);

export {
  FridgeReading
};