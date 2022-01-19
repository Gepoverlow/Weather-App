import weather from "./modules/weather.js";
import displayWeatherBG from "./modules/dom.js";

async function displayWeather(input) {
  try {
    const cityData = await weather.getData(input);

    document.getElementById(
      "country"
    ).textContent = `${cityData.cityName}, ${cityData.country}`;

    //

    document.getElementById("weather").textContent = cityData.weather;

    //

    document.getElementById(
      "temperature"
    ).textContent = `${cityData.temperature.temp} º`;

    //

    document.getElementById(
      "feels-like"
    ).textContent = `Feels like ${cityData.feelsLike}º`;

    //

    document.getElementById(
      "max-min"
    ).textContent = `Max: ${cityData.temperature.max}º - Min: ${cityData.temperature.min}ª`;

    //

    document.getElementById(
      "humidity"
    ).textContent = `Humidity ${cityData.humidity}%`;

    //

    displayWeatherBG(
      cityData.weather,
      document.getElementsByTagName("BODY")[0]
    );
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

    setTimeout(() => {
      loader.style.display = "none";

      weatherInfo.style.display = "block";
      setTimeout(() => (weatherInfo.style.opacity = 1), 50);

      //

      displayWeather(inputValue);

      //
    }, 3000);
  }
}

document.getElementById("search-button").addEventListener("click", () => {
  initSearch();
});
