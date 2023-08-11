"use strict";

const heading = document.querySelector("h2");
console.log(heading);
const arrow = document.querySelector(".flex-child:last-child");
const btns = document.querySelectorAll(".btn-container>button");
const [flexParent] = document.getElementsByClassName("flex-parent");
for (const btn of btns) {
  btn.addEventListener("click", (event) => {
    heading.style.textAlign = event.target.dataset.textAlign;
    heading.style.transform = event.target.dataset.transform;
    arrow.textContent = event.target.dataset.textContent;
    flexParent.style.flexDirection = event.target.dataset.flexDirection;
    for (const btn of btns) {
      btn.style.color = "";
      btn.style.backgroundColor = "";
      btn.style.border = "";
    }
    event.target.style.color = "white";
    event.target.style.backgroundColor = "#4DA5FF";
    event.target.style.border = "2px solid #4DA5FF";
  });
}