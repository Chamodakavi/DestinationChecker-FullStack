const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema(
  {
    data: { type: Object, required: true },
  },
  { timestamps: true }
); // This adds createdAt and updatedAt automatically

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;
