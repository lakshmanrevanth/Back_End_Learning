const mongoose = require("mongoose");

const authenticationSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "super-admin"],
      default: "user",
    },
  },
  { timestamp: true }
);

const databaseModel = mongoose.model("users", authenticationSchema);

module.exports = databaseModel;
