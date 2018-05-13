const mongoose = require('mongoose');

const anySchema = new mongoose.Schema({any: {}}, {strict: false, timestamps: true});
  anySchema.methods.toJSON = function () {
    var object = this.toObject();
    // removeInternalFields(object);
    return object;
  };

exports.anySchema = anySchema;

function removeInternalFields(object) {
  delete object.__v;
  delete object.updatedAt;
  // delete object.createdAt;
}
