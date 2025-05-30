// function Delay(time) {
//   return new Promise((resolve) => setTimeout(resolve, time));
// }

// const { error } = require("console");
// const { reject } = require("lodash");

// Delay(2000).then(() => console.log("after 2 seconds"));
// console.log("end");

// function div_fun(num1, num2) {
//   return new Promise((resolve, reject) => {
//     if (num2 == 0) {
//       reject("can't divide with zero number");
//     } else {
//       resolve(num1 / num2);
//     }
//   });
// }

// div_fun(0, 5)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

//question

function squarefun(num) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(num * num), 2000);
    setTimeout(() => resolve(num * num), 2000);
    setTimeout(() => resolve(num * num), 2000);
  });
}

squarefun(4).then((result) => console.log(result));
