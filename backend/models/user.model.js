const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String},
  user_id: {type: String},
  first_name: { type: String},
  last_name: { type: String},
  birthday: { type: String},
  marital_status: { type: String},
  user_identifier: { type: String }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;