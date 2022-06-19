const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const computeSchema = new Schema({
  user_identifier: {type: String, required: true, unique: true, trim: true, minlength: 2},
  sum: { type: Number, required: true, minlength: 1},
  year: { type: Number },
  month: { type: String }
}, {
  timestamps: true,
});

const Compute = mongoose.model('Compute', computeSchema);

module.exports = Compute;