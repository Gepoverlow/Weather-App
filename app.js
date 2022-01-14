const country = document.getElementById("country");
const weather = document.getElementById("weather");
const temperature = document.getElementById("temperature");
const searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-button");

let url =
  "https://api.openweathermap.org/data/2.5/weather?q=antwerp&units=metric&APPID=6c679bb6ad2f56b93b4591bc560920e8";

async function getWeather() {
  try {
    const response = await fetch(url, { mode: "cors" });
    const weatherData = await response.json();

    country.textContent = weatherData.name;
    weather.textContent = weatherData.weather[0].main;
    temperature.textContent = `${weatherData.main.temp} Cº`;
    console.log(weatherData);
  } catch (error) {
    country.textContent = "Country not found";
    console.log(error);
  }
}

window.addEventListener("load", () => {
  getWeather();
});

searchButton.addEventListener("click", () => {
  url = `https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&units=metric&APPID=6c679bb6ad2f56b93b4591bc560920e8`;

  getWeather();
});
