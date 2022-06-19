const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const costSchema = new Schema({
  cost_id: { type: String},
  user_identifier: {type: String},
  description: { type: String},
  category: { type: String},
  sum: { type: Number},
  year: {type: Number},
  month: {type: String}
}, {
  timestamps: true,
});

const Cost = mongoose.model('Cost', costSchema);

module.exports = Cost;