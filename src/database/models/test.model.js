const mongoose = require("mongoose");

// DEFINNG USERSCHEMA
const testSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// CREATING A MODEL FOR THE SCHEMA
const Test = mongoose.model("TEST", testSchema);

module.exports = Test;
