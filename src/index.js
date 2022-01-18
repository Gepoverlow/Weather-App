import weather from "./modules/weather.js";
import displayWeatherBG from "./modules/dom.js";

async function displayWeather(input) {
  try {
    const cityData = await weather.getData(input);

    document.getElementById(
      "country"
    ).textContent = `${cityData.cityName}, ${cityData.country}`;
    document.getElementById("weather").textContent = cityData.weather;
    document.getElementById(
      "temperature"
    ).textContent = `${cityData.temperature} Cº`;

    displayWeatherBG(
      cityData.weather,
      document.getElementById("container-body")
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
