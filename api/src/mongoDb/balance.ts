import * as mongoose from 'mongoose';
import {anySchema} from "./schema/resource";

export const Balance = mongoose.model('Balance', anySchema);
