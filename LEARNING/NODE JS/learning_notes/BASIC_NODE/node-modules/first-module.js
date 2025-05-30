function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
// Run this block only when this file is executed directly (not when imported)
if (require.main === module) {
  console.log("This file is executed directly");
}

console.log("__filename: ", __filename);
console.log("__dirname: ", __dirname);

console.log("first-module.js is loaded");

module.exports = {
  sum,
  multiply,
  subtract,
  divide,
};
