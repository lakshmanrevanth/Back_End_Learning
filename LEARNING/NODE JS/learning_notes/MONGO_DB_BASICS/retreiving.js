const mongoose = require("mongoose");

const userConnection = mongoose
  .connect(
    "mongodb+srv://revanth3527:jm6hwij1s5VxsZ4V@cluster0.vlz9rii.mongodb.net/"
  )
  .then(() => {
    console.log("mongo db connected successfully...");
  })
  .catch((e) => {
    console.log(e);
  });

const userSchema = mongoose.Schema({
  Name: String,
  Age: Number,
});

const user = mongoose.model("students", userSchema);

async function queryfun() {
  try {
    const getalluserdata = await user.find({});
    console.log(getalluserdata);
  } catch (e) {
    console.log(e);
  } finally {
    await mongoose.connection.close();
  }
}
// queryfun();

async function queryfindspceficdata() {
  try {
    // const specificData = await user.find({ Name: "revanth" });
    // OR
    const specificData = await user.findOne({ Name: "revanth" }); // it will give the first one that matches the data.
    console.log(specificData);
  } catch (e) {
    console.log(e);
  } finally {
    await mongoose.connection.close();
  }
}
// queryfindspceficdata();

//find by id

async function queryFindById() {
  try {
    const createuser = await user.create({
      Name: "Vijay",
      Age: 21,
    });

    const finduserbyid = await user.findById(createuser._id);
    console.log(finduserbyid);
  } catch (e) {
    console.log(e);
  } finally {
    await mongoose.connection.close();
  }
}
// queryFindById();

// to get the selected user data

async function queryGetSelectedData() {
  try {
    const getuserspecificdata = await user.find().select({ Name: 1, _id: 0 });
    console.log(getuserspecificdata);
  } catch (e) {
    console.log(e);
  } finally {
    await mongoose.connection.close();
  }
}

// queryGetSelectedData();

async function queryGetlimitedData() {
  try {
    const getuserspecificlimiteddata = await user.find().limit(2).skip(1);
    console.log(getuserspecificlimiteddata);
  } catch (e) {
    console.log(e);
  } finally {
    await mongoose.connection.close();
  }
}
// queryGetlimitedData();

async function queryGetcountnoofusers() {
  try {
    // const getusercount = await user.countDocuments();

    // or

    const getusercount = await user.countDocuments({ Age: 21 });
    console.log(getusercount);
  } catch (e) {
    console.log(e);
  } finally {
    await mongoose.connection.close();
  }
}

// queryGetcountnoofusers();

// to delete the data in the document

async function deleteDataById() {
  try {
    const createuser = await user.create({
      Name: "Vijay",
      Age: 21,
    });
    const deletedata = await user.findByIdAndDelete(createuser._id);
    console.log(deletedata);
    console.log("data delted successfully...");
    const getuserdata = await user.find({});
    console.log(getuserdata);
  } catch (e) {
    console.log(e);
  } finally {
    await mongoose.connection.close();
  }
}
// deleteDataById();

// to update the data

async function updateDataById() {
  try {
    const createuser = await user.create({
      Name: "Vijay",
      Age: 21,
    });
    const updateuserdata = await user.findByIdAndUpdate(
      createuser._id,
      {
        $set: { Name: "Krishna", Age: 1000 },
      },
      { new: true }
    );

    console.log(updateuserdata);
  } catch (e) {
    console.log(e);
  } finally {
    await mongoose.connection.close();
  }
}
updateDataById();
