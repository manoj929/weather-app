let input = document.querySelector("#city-input");
const btn = document.querySelector("#add");
let city = document.querySelector("#city-output");
let description = document.querySelector("#description");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");

const apiKey = "e12fbca4dade4baef11d7d52ebf79424";

// kelvin to celcius convert, 1 Kelvin is equal to -272.15 Celsius
function convertion(val) {
  return (val - 273).toFixed(2);
}

btn.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${input.value}&APPID=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.name);
      city.innerHTML = `weather of: <span>${data.name}</span>`;
      temp.innerHTML = `temperature: <span>${convertion(
        data.main.temp
      )} °c</span>`;
      description.innerHTML = `sky conditions: <span>${data.weather["0"]["description"]}</span>`;
      wind.innerHTML = `wind speed: <span>${data.wind.speed} km/h</span>`;
      input.value = "";
    })
    .catch((err) => alert("you entered wrong city name"));
});
