const mongoose = require('mongoose');

// account schema
const accountSchema = new mongoose.Schema({
  name: String,
  balance: Number,
});

// exports the account model
module.exports = mongoose.model('Account', accountSchema);
