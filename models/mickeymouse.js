const mongoose = require("mongoose");

const mickemouseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Number,
    required: false,
  },

  addedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("mickeymouse", mickemouseSchema);
