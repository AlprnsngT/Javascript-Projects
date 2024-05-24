// ES6 ile gelen bir fonksiyondur
// apilerden dönen değerleri promise ile döndüren bir fonksiyondur
// yani biz özellikle promise tanımlamak zorunda değiliz.

// !fetch API'si veri alma işlemleri için tasarlanmıştır
// ! ve bu kodda olduğu gibi DOM manipülasyonu için
// ! direkt olarak kullanılmaya uygun değildir.

let fetchDeneme = (link) => {
  fetch(link[0])
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return fetch(link[1]);
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return fetch(link[2]);
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .finally(() => {
      setTimeout(() => {
        console.log("fetch başarılı");
      }, 5000);
    });
};
let resources = [
  "../12-JSON/jsons/alperen.json",
  "../12-JSON/jsons/enes.json",
  "../12-JSON/jsons/emre.json",
];
fetchDeneme(resources);
// return kaldırmayı denesene

let fetch1 = (resources) => {
  fetch1(resources[0])
    .then(async (response) => {
      console.log(await response.json());
      return fetch1(resources[1]);
    })
    .then(async (response) => {
      console.log(await response.json());
      return fetch1(resources[2]);
    })
    .then(async (response) => {
      console.log(await response.json());
    })
    .finally(() => {
      setTimeout(() => {
        console.log("fetch başarılı");
      }, 5000);
    });
};
