const mongoose = require('mongoose');
const mongoDb = require('./schema/resource');

exports.scanResource = mongoose.model('scanResource', mongoDb.anySchema);
