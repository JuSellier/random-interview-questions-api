const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
});

module.exports = mongoose.model("Question", questionSchema);
