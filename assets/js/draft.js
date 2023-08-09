"use scrict";

// const imagesDB = [
//   "https://upload.wikimedia.org/wikipedia/commons/2/27/Commander_%28Biden_dog%29_in_February_2022.jpg",
//   "https://hips.hearstapps.com/hmg-prod/images/best-guard-dogs-1588364974.jpg",
//   "https://dogtime.com/wp-content/uploads/sites/12/2023/07/GettyImages-157603003-e1690769397327.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzU9eNjsEXgiMUr1pFn2riqug-fle6gyJmcHtqSVOuGfXj472raQa8wD9H5a58H1ptsHs&usqp=CAU",
// ];
// const slider = new Slider(imagesDB);
// const img = document.querySelector(".slide>img");
// const [prevButton, nextButton] = document.querySelectorAll(
//   ".slider-container>button"
// );
// img.src = slider.currentSlide;

// const BtnHandler =
//   (direction = "next") =>
//   () => {
//     slider.currentIndex = slider[direction];
//     img.src = slider.currentSlide;
//   };
// prevButton.addEventListener("click", BtnHandler("prev"));
// nextButton.addEventListener("click", BtnHandler("next"));

// console.log(slider.currentIndex);

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