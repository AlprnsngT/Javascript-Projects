const getTodos = (resources, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status == 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4)
      callback("Cevap alınamadı", request.responseText);
  });

  request.open("GET", resources);
  request.send();
};

// fonksiyon çalışıyor fakat iç içe aynı fonksiyonu çağırmak kötü kullanım
getTodos("jsons/alperen.json", (err, data) => {
  console.log(data);
  getTodos("jsons/enes.json", (err, data) => {
    console.log(data);
  });
  getTodos("jsons/emre.json", (err, data) => {
    console.log(data);
  });
});
