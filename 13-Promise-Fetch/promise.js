// ? Promise kullanımı
// Promise nedir:
// Bir işlem bittiğinde diğer işlemi yaptırmak için kullanılır.
// fakat önceki işlemin tamamlanmasını beklenen işlemlerde kullanılır.
//tanımlaması
// new Promise((resolve, reject) => {
//   resolve();
//   reject();
// });

// işlem bitmiş ve başarılı ise *RESOLVE*
// hata veya yanlış mesajlar için de *REJECT* kullanılır
// promise bir return içerisinde kullanılır.
// funciton çağrılırken de
// then başarılı dönen veri için yani resolve için
// catch ise reject için kullanılır

const getTodos = (resources) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status == 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) reject("Cevap alınamadı");
    });
    request.open("GET", resources);
    request.send();
  });
};
getTodos("12-JSON/jsons/alperen.json")
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.log(reject);
  });
// ! SORUN : SADECE TEK BİR JSON DÖNÜYOR DAHA FAZLA JSON İÇİN NE YAPACAĞIZ
//* CEVAP: CHAIN PROMISE
