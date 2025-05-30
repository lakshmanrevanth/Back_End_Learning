const fs = require("fs");
const path = require("path");

const dirpath = path.dirname(__filename);

const filepath = path.join(dirpath, "example-middleware.js");

fs.writeFile(filepath, "hello", (err) => {
  if (err) throw err;
  console.log("successfully created the file.");
});
