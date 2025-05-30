const path = require("path");

console.log("directory name : ", path.dirname(__filename));

console.log("file name: ", path.basename(__filename));

console.log("file extension: ", path.extname(__filename));

const joinedpath = path.join("/users", "rev", "projects", "etc");

console.log("joined path: ", joinedpath);

const resolvedPath = path.resolve("users", "rev", "projects", "etc");
console.log("resolved path: ", resolvedPath);

const normalizedPath = path.normalize("/users/../rev/projects/./etc");
console.log("normalized path: ", normalizedPath);
