const mongoose = require('mongoose');


const Balance = new mongoose.Schema({
  date: String,
  totalBalance: String

});

module.exports = mongoose.model('Balance', Balance);
