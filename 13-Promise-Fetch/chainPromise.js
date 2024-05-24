// ? chainPromise kullanımı
// birden fazla Json için kullanılır
// her Json için return atılır
const getTodos = (resources) => {
  return new Promise((resolve, reject) => 
  {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status == 200) 
      {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) reject("Cevap alınamadı");
    });
    request.open("GET", resources);
    request.send();
  });
};

getTodos("../12-JSON/jsons/alperen.json")
  .then((resolve) => {
    console.log(resolve);
    return getTodos("../12-JSON/jsons/enes.json");//burada return ettiğin değeri bir sonraki then ile yakalayabiliriz
  })
  .then((resolve) => {
    console.log(resolve);
    return getTodos("../12-JSON/jsons/emre.json");//buradaki returnu then yazarak yakala
  })
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.log(reject);
  });
  
// function newPromise(resources) {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest(); // httpRequest async olduğu için readystate controlü yap
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4) {
//         const data = JSON.parse(request.responseText);
//         //console.log("Promise Çalışması Başarılı \n " + data);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("Url Hatalı");
//       }
//     });
//     request.open("GET", resources);
//     request.send();
//   });
// }
// newPromise("12-JSON/jsons/alperen.json")
//   .then((data) => {
//     console.log(data);
//     return newPromise("12-JSON/jsons/enes.json");
//   })
//   .then((data) => {
//     console.log(data);
//     return newPromise("12-JSON/jsons/emre.json");
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((reject) => console.log(reject));