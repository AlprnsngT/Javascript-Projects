const button = document.querySelector("button");
let ulDOM = document.querySelector("ul");


let color = function () {
let liDOM = document.querySelectorAll("li");
  liDOM.forEach((element) => {
    element.addEventListener("click", () => {
      console.log(element);
      event.stopPropagation();
      console.log(`${element.textContent}'e tıklandı`);
      if (event.target.tagName === "LI") {
        element.style.backgroundColor = "red";
      }
    });
  });
};
color();
button.addEventListener("click", () => {
  console.log("Tıklandı");
  const li = document.createElement("li");
  li.textContent = "JavaScript";
  console.log(li);

  ulDOM.appendChild(li); // sona ekleme

  //ulDOM.prepend(li);
  // console.log(ulDOM.innerHTML);

  event.stopPropagation();
  // liDOM.forEach((element) => {
  //   console.log(`deneme:\n${element.innerText}`);
  // });
  color();
});
//let liDOM1 = document.querySelectorAll("li");

ulDOM.addEventListener("dblclick", () => {
  console.log(event);
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});

console.log(ulDOM.innerHTML);
