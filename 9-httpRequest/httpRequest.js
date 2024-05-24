// httpRequest için fetch veya xmlHttpRequest kullanılabilir
// xmlHttpRequest ile servera istek atma cevap alma veya data gönderme yapılır

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  // bir diğer önemli konu ise XMLHttpRequest'te readyState durumu
  // readyState durumlar
  // 1:open()
  // 2:send()
  // 3:responseText
  // 4:operation complate
  // readyState ile biz istekleri kontrol edebiliriz
  if (request.readyState === 3) {
    console.log("request.responseText");
  }
});
// önce isteiği aç sonra gönder
request.open("GET", "https://jsonplaceholder.typicode.com/todoss");
request.send();
