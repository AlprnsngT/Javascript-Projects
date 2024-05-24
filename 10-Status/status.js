const request = new XMLHttpRequest();
//   bir diğer durum ise hata kodları
//   yanlış bir istek atıldığı zaman veya url bulunamadığı zaman hata alınır
//   hata alınsa dahi readyState kendisini tamamlar
//   bu yüzden istekleri statusCode ile  birlikte atmalıyız

if (request.readyState === 4 && request.status == 200) {
  console.log(request.responseText);
} else if (request.readyState === 4) console.log("Veri çekilemedi");

request.open("GET", "https://jsonplaceholder.typicode.com/todoss");
request.send();
