const form = document.querySelector(".signupForm");
const message = document.querySelector(".message");
const userNamePattern = /^[a-zA-Z]{8,16}$/;

form.addEventListener("submit", () => {
  event.preventDefault();
  const userName = form.userName.value;
  console.log(userName);

  if (userNamePattern.test(userName)) {
    message.textContent = "Başarılı";
  } else {
    message.textContent = "Yanlış girdin";
  }
});
/*
 * ekranda Regexi sağladığında border green
 * sağlamadığında kırmızı olsun
 * border ne içerisindeyse o yere class ataması yap
 * border input id userName içerisinde
 */
form.userName.addEventListener("keyup", (e) => {
  // console.log(e.target.value);
  if (userNamePattern.test(e.target.value)) {
    userName.classList.remove("error");
    userName.classList.add("success");
  } else {
    userName.classList.add("error");
  }
});
