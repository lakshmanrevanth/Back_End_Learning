const first_module = require("./first-module");

console.log(first_module.sum(5, 3));

try {
  console.log("divide by zero : ");
  console.log(first_module.divide(0, 0));
} catch (error) {
  console.log(error.message);
}
