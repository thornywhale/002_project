"use scrict";

// function counter() {
//   let count = 0;
//   count++;
//   return count;
// }
// console.log(counter()); // output: 1
// console.log(counter()); // 1
// console.log(counter()); // 1

// function createCounter(start = 0) {
//   let count = start;
//   return () => {
//     count++;
//     return count;
//   };
// }
// const createCounter = (start = 0) => () => ++start; // simplefied

// const counter = createCounter();
// console.log(counter()); // output: 1
// console.log(counter()); // 2
// console.log(counter()); // 3

function createAdder(start = 0) {
  let count = start;
  return function (value) {
    count = count + value;
    return count;
  };
}
const adder = createAdder();
console.log(adder(10));
console.log(adder(-10));
console.log(adder(NaN));
const adder2 = createAdder(50);
console.log(adder2(-10));
console.log(adder2(10));
console.log(adder2("10"));