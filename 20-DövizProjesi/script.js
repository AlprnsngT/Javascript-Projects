const currencyFirst = document.getElementById("currencyFirst");
const currencySecond = document.getElementById("currencySecond");
const count = document.getElementById("count");
const exchangeRate = document.getElementById("exchangeRate");
const equal = document.getElementById("equal");

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/f2059656ad5ebd69aa7656a2/latest/${currencyFirst.value}
    `
  )
    .then((response) => response.json())
    .then((response) => {
      // console.log(response.conversion_rates[currencySecond.value]);
      const rate = response.conversion_rates[currencySecond.value];
      equal.textContent = (rate * count.value).toFixed(2); // fixed yuvarlama
      exchangeRate.textContent = `1 ${currencyFirst.value} = ${rate.toFixed(
        2
      )} ${currencySecond.value}`;

      //  exchangerate.textContent = `1 ${currencyFirst.value} = ${response.conversion_rates[currencyFirst.value]}`;
    });
}
updateRate();
currencyFirst.addEventListener("change", updateRate);
currencySecond.addEventListener("change", updateRate);
count.addEventListener("input", updateRate);
