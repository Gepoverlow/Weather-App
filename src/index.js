import weather from "./modules/weather.js";
import displayWeatherBG from "./modules/dom.js";
import "./css/style.css";
import "./css/loader.css";
import mainImage from "../src/assets/imgs/main.jpg";

const body = document.getElementsByTagName("BODY")[0];

// window.addEventListener("load", () => {
//   body.style.backgroundImage = `url(${mainImage})`;
// });

async function displayWeather(input) {
  try {
    const cityData = await weather.getData(input);

    const countryDOM = document.getElementById("country");
    const weatherDOM = document.getElementById("weather");
    const temperatureDOM = document.getElementById("temperature");
    const feelsLikeDOM = document.getElementById("feels-like");
    const maxMinDOM = document.getElementById("max-min");
    const humidityDOM = document.getElementById("humidity");

    countryDOM.textContent = `${cityData.cityName}, ${cityData.country}`;
    weatherDOM.textContent = cityData.weather;
    temperatureDOM.textContent = `${cityData.temperature.temp} º`;
    feelsLikeDOM.textContent = `Feels like ${cityData.feelsLike}º`;
    maxMinDOM.textContent = `Max: ${cityData.temperature.max}º - Min: ${cityData.temperature.min}ª`;
    humidityDOM.textContent = `Humidity ${cityData.humidity}%`;

    displayWeatherBG(cityData.weather, body);
  } catch (error) {
    console.log(error);
  }
}

function initSearch() {
  const loader = document.querySelector(".loader");
  const weatherInfo = document.getElementById("weather-info");
  const inputValue = document.getElementById("search-bar").value;

  if (inputValue.length !== 0) {
    loader.style.display = "inline-block";

    weatherInfo.style.opacity = 0;
    weatherInfo.style.display = "none";

    displayWeather(inputValue);

    setTimeout(() => {
      loader.style.display = "none";

      weatherInfo.style.display = "block";
      setTimeout(() => (weatherInfo.style.opacity = 1), 50);

      //

      //
    }, 3000);
  }
}

document.getElementById("search-button").addEventListener("click", () => {
  initSearch();
});
