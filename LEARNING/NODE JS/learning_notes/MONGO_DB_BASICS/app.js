const mongoose = require("mongoose");

const user = mongoose
  .connect(
    "mongodb+srv://revanth3527:UY7ZN5iIbe3aYZ1Y@users.4kwu0vs.mongodb.net/"
  )
  .then(() => {
    console.log("database connected successfully...");
  })
  .catch((err) => log(err));
