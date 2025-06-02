require("dotenv").config();
const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(
      process.env.mongooseURL ||
        "mongodb+srv://revanth3527:zwP535YDIBEp1qr6@cluster0.kqbxshl.mongodb.net/"
    );

    console.log("database connection is successfully");
  } catch (e) {
    console.log("database connection failed");
  }
};

module.exports = connection;
