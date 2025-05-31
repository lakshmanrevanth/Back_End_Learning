const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://revanth3527:jm6hwij1s5VxsZ4V@cluster0.vlz9rii.mongodb.net/"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  Name: String,
  Age: Number,
});

const user = mongoose.model("students", userSchema);

// async function createnewrecord() {
//   try {
//     const newuser = await user.create({
//       Name: "revanth",
//       Age: 21,
//     });
//   } catch (e) {
//     console.log(e);
//   } finally {
//     await mongoose.connection.close();
//   }
// }

// alternative way to create the user document

async function alternatecreatenewrecord() {
  try {
    const alternatenewuser = new user({
      Name: "Mounika",
      Age: 20,
    });

    await alternatenewuser.save();
  } catch (e) {
    console.log(e);
  } finally {
    await mongoose.connection.close();
  }
}

// createnewrecord();
alternatecreatenewrecord();
