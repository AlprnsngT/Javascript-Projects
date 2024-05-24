const button = document.querySelector("button");
const ulDOM = document.querySelector("ul");

const colorizeLi = () => {
  const liDOM = document.querySelectorAll("li");
  liDOM.forEach((element) => {
    element.addEventListener("click", (event) => {
      console.log(element.textContent + " tıklandı");
      event.stopPropagation();
      if (event.target.tagName === "LI") {
        element.style.backgroundColor = "red";
      }
    });
  });
};

colorizeLi();

button.addEventListener("click", (event) => {
  console.log("Buttona tıklandı");
  const li = document.createElement("li");
  li.textContent = "JavaScript";
  console.log(li);
  ulDOM.appendChild(li);
  event.stopPropagation();
  colorizeLi();
});

ulDOM.addEventListener("dblclick", (event) => {
  console.log(event);
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});

console.log(ulDOM.innerHTML);
