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

document.getElementById("search-button").addEventListener("click", () => {
  const inputValue = document.getElementById("search-bar").value;

  if (inputValue.length !== 0) {
    displayWeather(inputValue);
  } else return;
});
