const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const costSchema = new Schema({
  cost_id: { type: String, required: true, minlength: 9},
  user_identifier: {type: String, required: true, unique: true, trim: true, minlength: 2},
  description: { type: String, required: true },
  category: { type: String, required: true },
  sum: { type: Number, required: true },
  year: {type: Number, required: true},
  month: {type: String, required: true}
}, {
  timestamps: true,
});

const Cost = mongoose.model('Cost', costSchema);

module.exports = Cost;