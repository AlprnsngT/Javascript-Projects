const count = 30;
const apiKey = "uhyVRq1jkq1P3hWqv249sEII9U3nhiHPTGvjVygU89o";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
const imageContainer = document.getElementById("imageDiv");
const loader = document.getElementById("#loading");

let imgArray = [];
getImages();
async function getImages() {
  try {
    const response = await fetch(apiURL);
    imgArray = await response.json();
    displayImages();
  } catch (error) {}
}

function displayImages() {
  imgArray.forEach((img) => {
    if(imgArray.length%30==0){
      loader.style.display=none;
    }
    else{
      loader.style.display="flex";
    }
    console.log(imgArray.length);
    // ! tekrar eden kodlar var onları düzeltw
    const link = document.createElement("a");
    link.setAttribute("href", img.urls.regular);

    const image = document.createElement("img");
    image.setAttribute("src", img.urls.regular);
    image.setAttribute("alt", img.alt_description);
    link.appendChild(image);
    imageContainer.appendChild(link);
  });
}
// infinite scroll yapalım
/* 
! bu üçünü kullancaz:
* window.innerHeight;
* window.scrollY;
* document.body.offsetHeight;
*/

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY > document.body.offsetHeight - 1000) {
    getImages();
  }
});
