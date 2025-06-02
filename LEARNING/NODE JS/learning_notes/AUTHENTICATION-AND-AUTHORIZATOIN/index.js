const path = require("path");
const fs = require("fs");

const dirpath = path.dirname(__filename);

console.log(dirpath);

const filepath = path.join(dirpath, "servers.js");
fs.writeFile(filepath, "hello", (err) => {
  console.log(err);
});
