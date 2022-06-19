const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const computeSchema = new Schema({
  sum: { type: Number, required: true },
  year: { type: Number },
  month: { type: String }
}, {
  timestamps: true,
});

const Compute = mongoose.model('Compute', computeSchema);

module.exports = Compute;