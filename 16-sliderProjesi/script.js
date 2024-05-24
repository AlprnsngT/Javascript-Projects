const nextImg = document.querySelector(".next");
const prevImg = document.querySelector(".previous");
const imageCount = document.querySelectorAll("img");
const imageContainer = document.querySelector(".imageContainer");

let counter = 1;
let timeout; // animasyon için

nextImg.addEventListener("click", () => {
  counter++;
  clearTimeout(timeout);
  updateImg();
});

prevImg.addEventListener("click", () => {
  counter--;
  clearTimeout(timeout);
  updateImg();
});

function updateImg() {
  console.log(imageCount.length);
  if (counter > imageCount.length) {
    counter = 1;
  } else if (counter < 1) {
    counter = imageCount.length;
  }
  //   imageContainer.classList.add("display");
  //   imageContainer.style.display = "flex";
  imageContainer.style.transform = `translateX(-${(counter - 1) * 700}px)`;

  // ? animation setTimeout ile yaparız
  //   * bunu yine update fonksiyonu içerisinde yapalım ki
  //   * geçiş için tekrar 27.satırı yazmayalım
  timeout = setTimeout(() => {
    counter++;
    updateImg();
  }, 1000);
  // resimlerin butonlara tıklandığı anda sürenin iptal olması lazım yoksa bir resim 2sn de görülebilir.
  // bu yüzden clearTimeout kullanıcaz
}
updateImg();

// ! bu fonksiyonda değişen sadece tek bir satır olduğu için fonksiyonları ortak yazalım
// function returnImg(){
//     if(counter<1){
//         counter = imageCount.length;
//     }
//     // if(counterimageCount)
//     imageContainer.style.transform = `translateX(${-((counter-1)*700)}px)`;
// }
