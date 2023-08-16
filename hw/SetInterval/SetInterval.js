const h1 = document.getElementById("text");
const resetBtn = document.getElementById("reset");
const reverseBtn = document.getElementById("reverse");

function numberRunner() {
  resetBtn.addEventListener("click", () => {
    count = 10;
  });
  // reverseBtn.addEventListener("click", ()=> {

  // })
  let stopPoint = -1;
  let count = 101;
  const idInterval = setInterval(() => {
    count >= 0 ? (h1.textContent = count) : (h1.textContent = -count);
    let currentPoint = h1.textContent;
    count--;
    console.log("currentPoint = ", currentPoint);
    console.log("count = ", count);
    if (count === stopPoint) {
      if (confirm("Wanna reset?")) {
        (count = 101), alert("nice!");
      } else if (confirm("Wanna reverse?")) {
        count = currentPoint;
        count < 0 ? (stopPoint = 101) : (stopPoint = -101);
      } else {
        clearInterval(idInterval);
        resetBtn.disabled = true;
        reverseBtn.disabled = true;
      }
    }
  }, 25);
}
numberRunner();
