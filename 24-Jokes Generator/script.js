const jokeButton = document.getElementById("jokeButton");
const joke = document.getElementById("joke");

const apiKey = "GYgmCBevJTtUIkkCOcaVqkucbc3vAvFXsZQPV6Hq";
const apiUrl = "https://api.api-ninjas.com/v1/jokes?limit=1";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

// fetch ve json methodlarını debugger ile yap pending uyarısını göreceksin
async function getJoke() {
  try {
    //ekranda updating yazısı gözükmesi lazım
    joke.textContent = "Updating...";
    //buttonu kitle seri tıklama olmasın
    jokeButton.disabled = true;
    jokeButton.textContent = "Loading...";
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    console.log(data);
    // debugger;
    joke.textContent = data[0].joke;
    jokeButton.disabled = false;
    jokeButton.textContent = "Tell me a joke";
  } catch (error) {
    joke.textContent = "Try again later";
    jokeButton.disabled = false;
    jokeButton.textContent = "Tell me a joke";
  }
}

jokeButton.addEventListener("click", getJoke);
