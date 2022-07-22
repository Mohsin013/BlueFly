let mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  subscribe: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("user", UserSchema);
