const mongoose = require("mongoose");

const RateSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  meetWay: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  accepted: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = mongoose.model("rate", RateSchema);