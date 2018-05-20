import * as mongoose from 'mongoose';

export const anySchema = new mongoose.Schema({any: {}}, {strict: false, timestamps: true});
anySchema.methods.toJSON = function () {
  var object = this.toObject();
  removeInternalFields(object);
  return object;
};

function removeInternalFields(object) {
  delete object.__v;
  delete object.updatedAt;
  // delete object.createdAt;
}
