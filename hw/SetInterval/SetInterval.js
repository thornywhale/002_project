const h1 = document.getElementById("text");
function counter() {
  let count = 10;
  const idInterval = setInterval(() => {
    console.log(count--);
    h1.textContent = count;
    if (count === 0) {
      clearInterval(idInterval);
    }
  }, 100);
}
counter();