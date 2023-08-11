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


"use strict";

// const unique = document.getElementById("unique");
// unique.addEventListener("click", log44);
// unique.addEventListener(
//   "click",
//   () => {
//     console.log("qwewqe");
//   },
//   { once: true }
// );
// unique.dispatchEvent(new MouseEvent("click"));

// const ownEvent = new Event("myEventType");
// unique.addEventListener("myEventType", () => {
//   console.log("myEvent");
// });

// if (Math.random() > 0.5) {
//   unique.dispatchEvent(ownEvent);
// }

//---------------

// const unique = document.getElementById('unique');
// const section = unique.parentElement;

// const log45 = (event) => {
//   event.preventDefault();
//   event.stopPropagation();
//   console.group();
//   console.log(event.target); //на кому згенерувалася подія
//   console.log(event.currentTarget); //чий обробник працює
//   console.groupEnd();
//   event.target.removeEventListener('click', log45);
// };

// unique.addEventListener('click', log45);
// section.addEventListener('click', log45);
// document.body.addEventListener('click', log45, false);
// // document.addEventListener('click', log45);
// window.addEventListener('click', log45, { capture: false, once: true });

// // unique.addEventListener(
// //   'click',
// //   (event) => {
// //     console.log('event');
// //   },
// //   { once: true }
// // );

// // attr creation
// const unique = document.getElementById("unique");
// // variant 1
// unique.setAttribute("title", "new text");
// //variant 2
// const attrTitle01 = document.createAttribute("title01");
// attrTitle01.value = "new text";
// unique.setAttributeNode(attrTitle01);

// if (unique.hasAttribute('ref')) {
//   unique.removeAttribute('ref');
// }

//---------------

// const btns = document.querySelectorAll('section>button');

// for (const btn of btns) {
//   btn.addEventListener('click', (event) => {
//     // console.log(event.target.textContent);
//     // console.log(event.target.innerText);
//     // console.log(event.target.innerHTML);
//     // console.dir(event.target.attributes);
//     // console.log(event.target.dataset.color);
//     //console.log(event.target.style);
//     //прописати фоной колір секції
//     event.target.parentElement.style.backgroundColor =
//       event.target.dataset.color;
//   });
// }

// for (const btn of btns) {
//   btn.addEventListener(
//     'click',
//     ({
//       target: {
//         parentElement,
//         dataset: { color },
//       },
//     }) => {
//       parentElement.style.backgroundColor = color;
//     }
//   );
// }

//---------------