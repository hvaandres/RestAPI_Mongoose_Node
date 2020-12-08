const mongoose = require("mongoose");

const disneyCharacter = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Disney", disneyCharacter);
