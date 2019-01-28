const mongoose = require("mongoose");

const RateSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: true
  },
  MeetWay: {
    type: String,
    required: true
  },
  Phone: {
    type: String,
    required: true
  },
  Country: {
    type: String,
    required: true
  },
  Comment: {
    type: String,
    required: true
  },
  Accepted: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = mongoose.model("rate", RateSchema);