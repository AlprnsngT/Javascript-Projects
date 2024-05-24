// doğru cevapları tutalım

const correctAnswer = ["8", "10", "3", "25"];
const form = document.querySelector(".question-form");
const result = document.querySelector(".result");
const successMessage = document.querySelector("#successMessage");
const button = document.querySelector("#submitButton");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //başlangıç puanı
  let score = 0;
  // buradaki q1 değerleri cevaplardaki name taginden
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 25;
    }
  });
  if(score == 100){
    successMessage.classList.remove("d-none");
    button.classList.add("disabled");
  }

  result.classList.remove("d-none");
  result.querySelector("#percentage").textContent = `%${score}`;
});
