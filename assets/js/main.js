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

const btns = document.querySelectorAll(".btn-container>button");
const [flexParent] = document.getElementsByClassName("flex-parent");
const numbers = document.querySelectorAll(".flex-child");
for (const btn of btns) {
  btn.setAttribute("")
  btn.addEventListener("click", (event) => {
    flexParent.style.flexDirection = event.target.dataset.flexDirection;
    event.target.style.color = "white";
    event.target.style.backgroundColor = "#4DA5FF";
    event.target.style.border = "2px solid #4DA5FF";
  });
}
