let input = document.querySelector("#city-input");
const btn = document.querySelector("#add");
let city = document.querySelector("city-output");
let description = document.querySelector("#description");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");

// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e12fbca4dade4baef11d7d52ebf79424
const apiKey = "e12fbca4dade4baef11d7d52ebf79424";

// kelvin to celcius convert, 1 Kelvin is equal to -272.15 Celsius
function convertion(val) {
  return (val - 273).toFixed(2);
}

btn.addEventListener("click", function () {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${input.value},uk&APPID=${apiKey}`
  ).then((res) => res.json());
});
