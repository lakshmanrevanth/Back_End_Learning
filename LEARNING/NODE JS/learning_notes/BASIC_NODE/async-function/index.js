// async function dividefun(num1, num2) {
//   try {
//     if (num2 == 0) throw new Error("can't divide zero");
//     return num1 / num2;
//   } catch (Error) {
//     console.log(Error);
//     return null;
//   }
// }

// async function mainfun() {
//   console.log(await dividefun(2, 5));
// }

// mainfun();

// practice questions

// async function squarefun(num) {
//   try {
//     return num * num;
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function mainfun() {
//   console.log(await squarefun(4));
// }

// mainfun();

// delay

async function delay(time) {
  return setTimeout(() => {}, time);
}

async function mainfun() {
  console.log(await delay(1000), "one");
  console.log(await delay(2000), "two");
  console.log(await delay(3000), "three");
}

mainfun();
