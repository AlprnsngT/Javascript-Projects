// ! Json formatı ile object formatı arasındaki fark:
/* 
 * obje tanımlanırker key value ilişkisi vardır
 * [{name:"alperen",point:100},{name:"emre",point:50}]
 *
 * Json tanımlanırken her bir property "" içersisine yazılır
 * [{"name":"alperen","point":"200"},{"name":"enes","point":"100"}]
 */

//!API den gelen veriler JSON formatında gelir
// request.responseText ile biz ekrana Json objeleerinden ouşan bir String Array yazdırıyoruz
// her bir Json objesine erişebilmek için bunu Jsona parse etmemiz gerekiyor
const getTodos = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status == 200) {
      console.log(typeof request.responseText);
      const data = JSON.parse(request.responseText); // string ifadeyi arraye çeviriyor kullanabilmemiz için
      console.log(typeof data);
      callback(undefined, data);
    } else if (request.readyState === 4)
      callback("Cevap alınamadı", request.responseText);
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  request.send();
};
getTodos((err, data) => {
  if (err) {
    console.log(err);
  } else if (data) {
    console.log(data);
  }
});
