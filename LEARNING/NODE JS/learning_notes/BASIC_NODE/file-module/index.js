const fs = require("fs");
const path = require("path");

const dirpath = path.join(__dirname, "files");

if (!fs.existsSync(dirpath)) {
  fs.mkdirSync(dirpath);
}

const filepath = path.join(dirpath, "new-text.txt");

fs.writeFileSync(filepath, "home");

const read = fs.readFileSync(filepath, "utf8");

console.log(read);

fs.appendFileSync(filepath, "new home");

//asynchronous functions

const newfile = path.join(dirpath, "test.txt");

fs.writeFile(newfile, "hello my name is revanth", (err) => {
  if (err) throw err;

  console.log("created successfully");
});

fs.readFile(newfile, "utf-8", (err, data) => {
  if (err) throw err;

  console.log(data);
});

fs.appendFile(newfile, "hey my name is tiru", (err, result_data) => {
  if (err) throw err;
  console.log("updated data ");

  fs.readFile(newfile, "utf-8", (err, new_data) => {
    console.log(new_data);
  });
});
