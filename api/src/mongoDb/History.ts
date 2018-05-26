import * as mongoose from 'mongoose';
import {anySchema} from "./schema/resource";

export const History = mongoose.model('History', anySchema);
