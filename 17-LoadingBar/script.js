const counter = document.querySelector(".counter");
const front = document.querySelector(".LoadingFrontRed");
let number = 0;
function update() {
  counter.textContent = number + "%";
  front.style.width = number + "%";
  number++;
  if (number <= 100) {
    setTimeout(() => {
      update();
    }, 15);
  }
}
update();
