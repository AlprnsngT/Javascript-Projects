// api kullanıcaz
// apimiz free dictionary api : https://api.dictionaryapi.dev/api/v2/entries/en/hello

const wordInput = document.getElementById("word");
const button = document.querySelector("button");
const translateDiv = document.querySelector(".translateDiv");
const title = document.getElementById("title");
const meaning = document.getElementById("meaning");
const audio = document.getElementById("audio");


async function fetchApi() {
  //tekrar kullanımda kapanması için sıfırlama işlemi
  translateDiv.style.display = "none";
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput.value}`;
  // !const result = fetch(url).then(response => response.json()); // bu işlem uzun sürebilir o yüzden senkronizasyonu sağlamak gerekli
  const result = await fetch(url).then((response) => response.json());
  console.log(result);
  if (result.title) {
    // apide title sadece olmayan bir kelimeyi aratmada var
  } else {
    //kelime var se word meaning kısmı açılacak
    translateDiv.style.display = "block";
    title.textContent = result[0].word;
    meaning.textContent = result[0].meanings[0].definitions[0].definition;
    audio.src = result[0].phonetics[0].audio;
  }
}

button.addEventListener("click", fetchApi);
