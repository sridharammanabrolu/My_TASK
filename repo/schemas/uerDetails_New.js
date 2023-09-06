const mongoose = require("mongoose");

const userDetailsSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  Age: {
    type: String,
    required: true,
    trim: true,
  },
  Gender: {
    type: String,
    required: true,
    trim: true,
  },
  DOB: {
    type: String,
    required: true,
    trim: true,
  },
});
module.exports = mongoose.model("Assetuserdetails", userDetailsSchema);
