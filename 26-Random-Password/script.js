const passwordButton = document.querySelector('.passwordButton');
const input = document.querySelector('input');
const faCopy = document.querySelector('.fa-copy');
const alertContainer = document.querySelector('.alertContainer');

passwordButton.addEventListener('click', createPassword);
faCopy.addEventListener('click', copyPassword);

function createPassword() {
  const passwordLength = 14;
  const characters =
    '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //   console.log(characters[13]);
  let password = '';
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * characters.length);
    password += characters[randomNum];
  }
  input.value = password;
  alertContainer.textContent = password + ' kopyalandı!';
  //   console.log(password);
}

function copyPassword() {
  if (input.value) {
    input.select(); // input label içerisindeki her şeyi seç
    navigator.clipboard.writeText(input.value); // label içerisindeki metni kopyalama
    alertContainer.classList.remove('active');
    setTimeout(() => {
      alertContainer.classList.add('active');
    }, 2000);
  }
}
