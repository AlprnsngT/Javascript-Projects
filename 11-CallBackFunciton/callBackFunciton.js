// callback() function
// tanımlanan methodu çağırırken
// parametre olarak bir fonksiyon da gönderilebilir veya
// fonksiyonda tanımlanabilir

// 1.yöntem
// aldığı argümanlardan 1.cisi normal bir string ifade iken
// aldığı argümanlardan 2.cisi bir funcition ifade
const getTodos1 = (name, callback) => {
  // getTodos içerisine loga alperen yaz yazdıralım
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status == 200) {
      console.log(name);
      callback();
    } else if (request.readyState === 4) callback();
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  request.send();
};
getTodos1("enes", () => console.log("songut"));

// 2.yöntem
const getTodos = (callback) => {
  // getTodos içerisine loga alperen yaz yazdıralım
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status == 200) {
      console.log(typeof callback);
      callback(undefined,request.responseText);
    } else if (request.readyState === 4) callback("Cevap alınamadı",undefined);
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  request.send();
};
getTodos((err, data) => { 
    //callback function kendi içinde parametre aldı
    // undefined bir null ifadedir ve bunu if ile kontrol ettik
    // callback() çağırırken bu parametrelere değerler atadık
  if (err) {
    console.log(err);
  } else if (data) {
    console.log(data);
  }
});
