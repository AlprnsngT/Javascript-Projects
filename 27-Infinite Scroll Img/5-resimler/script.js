const count = 30;
const apiKey = 'vbufOxmotuLehfPRRlRFvBV2T5tv1SFUQWRaBjWBops';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
const imageContainer = document.getElementById('imageDiv');

let imagesArray = [];

getImages();
async function getImages() {
  try {
    const response = await fetch(apiUrl);
    imagesArray = await response.json();

    displayImages();
  } catch (error) {}
}

function displayImages() {
  imagesArray.forEach((image) => {
    const item = document.createElement('a');
    setAttributes(item, { href: image.urls.regular });
    // item.setAttribute('href', image.urls.regular);
    const img = document.createElement('img');
    // img.setAttribute('src', image.urls.regular);
    // img.setAttribute('alt', image.alt_description);
    setAttributes(img, {
      src: image.urls.regular,
      alt: image.alt_description,
    });
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
