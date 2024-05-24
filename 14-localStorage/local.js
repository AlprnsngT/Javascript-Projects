// ? her şey string olarak kaydedilir
// ilk değişken kaydetme şeklimiz
// ikinci değişken verimiz
// set kaydeder
// get getirir

localStorage.setItem("name", "alperen");
localStorage.setItem("age", 35);

let ad = localStorage.getItem("name");
let age = localStorage.getItem("age");

console.log(ad + "\t" + age);
localStorage.setItem("name", "emre"); //update
localStorage.age = 30; // update

// değişkenlere get ile atama yapıyoruz

ad = localStorage.getItem("name");
age = localStorage.getItem("age");
console.log(ad, age);

//  ! veriler sayfa yenilendikçe durur
//  ! güvenlik zaafiyeti
//  * tek tek localden silebiliriz fakat
//    * bir çok veri var örneğin logout olduğu zaman
//    * bütün verilerin silinmesi lazım
//    * işte o zaman clear() kullanılır

localStorage.setItem("lastname", "songut");

localStorage.removeItem("name");
localStorage.clear();
let last = localStorage.getItem("lastname");
console.log(
  localStorage.getItem("lastname"),
  localStorage.getItem("age"),
  last,
  "lastname"
);

// şimdi bir diğer meselemiz locale string ifade dışında bir veri gönderme
//  local sadece string ifade alıyorsa biz string ifadeler dışında bir veriyi nasıl gönderebiliriz
// ?cevap:JSON.stringify ile stringe dönüştürüp göndeririz
// ?daha sonra bir değişkene alabilmek için de
// ?JSON.parse ile kullanabileceğimiz bir arraye dönüştürürüz

// !örnek
let family = [
  { name: "emre", job: "machine eng", age: 30 },
  { name: "enes", job: "teacher", age: 28 },
];

localStorage.setItem("family",JSON.stringify(family));

let getFamily = localStorage.getItem("family");
console.log(getFamily)
console.log(JSON.parse(getFamily));
