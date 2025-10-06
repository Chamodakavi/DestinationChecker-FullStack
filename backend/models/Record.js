const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  data: { type: Object, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;
