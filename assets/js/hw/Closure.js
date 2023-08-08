"use strict";
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
