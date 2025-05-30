const temp = require("lodash");

const names = ["Alice", "Bob", "Charlie", "David"];
const upperCaseNames = temp.map(names, (name) => name.toUpperCase());
console.log(upperCaseNames);
