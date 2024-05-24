const textarea = document.querySelector("textarea");
const remainingChar =document.querySelector(".remainingChar");
const totalChar = document.querySelector(".totalChar");

textarea.addEventListener("keyup",updateText);
function updateText(){
    totalChar.textContent = textarea.value.length;
    remainingChar.textContent = textarea.getAttribute("maxlength") - textarea.value.length;
}
updateText();