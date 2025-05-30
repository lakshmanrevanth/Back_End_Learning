//simple example to show the call back

function shownamef(callback) {
  callback();
}

function namef() {
  console.log("revanth");
}

shownamef(namef);

//file example 

const fs = require("fs");
const path = require("path");

const dirpath = path.dirname(__filename);

filepath = path.join(dirpath, "newtext.txt");

//call back

fs.writeFile(filepath, "nothing", (err) => {
  if (err) throw err;
});

//callback hell
fs.readFile(filepath, "utf-8", (err, data) => {
  if (err) throw err;

  console.log(data);

  fs.appendFile(filepath, "new data", (err, updated_data) => {
    if (err) throw err;
    console.log("data is updated");

    fs.readFile(filepath, "utf-8", (err, new_data) => {
      if (err) throw err;
      console.log(new_data);
    });
  });
});
